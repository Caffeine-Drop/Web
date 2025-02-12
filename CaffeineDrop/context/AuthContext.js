import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Context 생성
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  // 앱 시작 시 AsyncStorage에서 토큰 가져오기
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem("userAccessToken");
        if (storedToken) {
          setToken(storedToken);
        }
      } catch (error) {
        console.error("Error fetching token from AsyncStorage:", error);
      }
    };
    
    fetchToken();
  }, []);

  // 토큰 저장 함수
  const storeToken = async (newToken) => {
    try {
      await AsyncStorage.setItem('userAccessToken', newToken);
      setToken(newToken);
    } catch (error) {
      console.error("Error saving token to AsyncStorage:", error);
    }
  };

  // AuthContext로 값 제공
  return (
    <AuthContext.Provider value={{ token, storeToken }}>
      {children}
    </AuthContext.Provider>
  );
};
