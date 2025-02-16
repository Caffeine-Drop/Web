import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Context 생성
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);

  // 앱 시작 시 각 토큰을 AsyncStorage에서 개별적으로 가져오기
  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        const storedAccessToken = await AsyncStorage.getItem("userAccessToken");
        if (storedAccessToken) {
          setAccessToken(storedAccessToken);
        }
      } catch (error) {
        console.error("Error fetching access token from AsyncStorage:", error);
      }
    };

    const fetchUserId = async () => {
      try {
        const storedId = await AsyncStorage.getItem("userId");
        if (storedId) {
          setUserId(storedId);
        }
      } catch (error) {
        console.error("Error fetching user ID from AsyncStorage:", error);
      }
    };

    const fetchRefreshToken = async () => {
      try {
        const storedRefreshToken = await AsyncStorage.getItem("RefreshToken");
        if (storedRefreshToken) {
          setRefreshToken(storedRefreshToken);
        }
      } catch (error) {
        console.error("Error fetching refresh token from AsyncStorage:", error);
      }
    };

    fetchAccessToken();
    fetchUserId();
    fetchRefreshToken();
  }, []);

  // 각 토큰을 저장하는 함수
  const storeAccessToken = async (AccessToken) => {
    try {
      await AsyncStorage.setItem("userAccessToken", AccessToken);
      setAccessToken(AccessToken);
    } catch (error) {
      console.error("Error saving access token to AsyncStorage:", error);
    }
  };

  const storeUserId = async (userId) => {
    try {
      await AsyncStorage.setItem("userId", userId);
      setUserId(userId);
    } catch (error) {
      console.error("Error saving user ID to AsyncStorage:", error);
    }
  };

  const storeRefreshToken = async (RefreshToken) => {
    try {
      await AsyncStorage.setItem("RefreshToken", RefreshToken);
      setRefreshToken(RefreshToken);
    } catch (error) {
      console.error("Error saving refresh token to AsyncStorage:", error);
    }
  };

  // AuthContext로 값 제공
  return (
    <AuthContext.Provider
      value={{
        accessToken,
        userId,
        refreshToken,
        storeAccessToken,
        storeUserId,
        storeRefreshToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
