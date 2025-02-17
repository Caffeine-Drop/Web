import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Context 생성
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [nickname, setNickname] = useState(null);
  const [LoggedPlatform, setLoggedPlatform] = useState(null);

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

    const fetchLoggedPlatform = async () => {
      try {
        const storedLoggedPlatform = await AsyncStorage.getItem("LoggedPlatform");
        if (storedLoggedPlatform) {
          setLoggedPlatform(storedLoggedPlatform);
        }
      } catch (error) {
        console.error("Error fetching logged platform from AsyncStorage:", error);
      }
    };

    fetchAccessToken();
    fetchUserId();
    fetchRefreshToken();
    fetchLoggedPlatform();
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

  const storeNickname = async (nickname) => {
    try {
      await AsyncStorage.setItem("nickname", nickname);
    } catch (error) {
      console.error("Error saving nickname to AsyncStorage:", error);
    }
  };

  const storeLoggedPlatform = async (LoggedPlatform) => {
    try {
      await AsyncStorage.setItem("LoggedPlatform", LoggedPlatform);
    } catch (error) {
      console.error("Error saving logged platform to AsyncStorage:", error);
    }
  };
  // AuthContext로 값 제공
  return (
    <AuthContext.Provider
      value={{
        accessToken,
        userId,
        refreshToken,
        nickname,
        LoggedPlatform,
        storeAccessToken,
        storeUserId,
        storeRefreshToken,
        storeNickname,
        storeLoggedPlatform,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
