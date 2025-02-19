import React, { useState, useContext } from "react";
import { View, Platform } from "react-native";
import { WebView } from "react-native-webview";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { NAVER_CLIENT_ID, NAVER_CLIENT_SECRET, NAVER_REDIRECT_URI } from "@env";

const CLIENT_ID = NAVER_CLIENT_ID;
const CLIENT_SECRET = NAVER_CLIENT_SECRET;
const REDIRECT_URI = NAVER_REDIRECT_URI;
const STATE = "RANDOM_STATE";

export default function NaverLogin() {
  const navigation = useNavigation();
  const {
    storeAccessToken,
    storeUserId,
    storeRefreshToken,
    storeLoggedPlatform,
  } = useContext(AuthContext);

  const authUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&state=${STATE}`;

  const requestToken = async (code) => {
    var AccessToken = "none";
    var userId = "none";
    var RefreshToken = "none";
    console.log("Authorization code: ", code);
    try {
      const response = await axios.post(
        "http://13.124.11.195:3000/oauth2/login/naver",
        {
          grant_type: "authorization_code",
          code: code,
          state: STATE,
          redirect_uri: REDIRECT_URI,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log(response.data);
      userId = response.data.success.id;
      AccessToken = response.data.success.accessToken;
      RefreshToken = response.data.success.refreshToken;
      console.log("userId: ", userId);
      console.log("AccessToken: ", AccessToken);
      console.log("RefreshToken: ", RefreshToken);
      console.log("Logged Platform: ", "naver");
      storeAccessToken(AccessToken);
      storeUserId(userId);
      storeRefreshToken(RefreshToken);
      storeLoggedPlatform("naver");
      navigation.reset({
        index: 0,
        routes: [{ name: "OnboardingLogin04" }],
      });
    } catch (error) {
      if (error.response) {
        console.log("Error Response Data:", error.response.data);
        console.log("Error Response Status:", error.response.status);
        console.log("Error Response Headers:", error.response.headers);
      } else if (error.request) {
        console.log("Error Request:", error.request);
      } else {
        console.log("Error Message:", error.message);
      }
    }
  };

  const extractAuthorizationCode = (url) => {
    const codeMatch = url.match(/code=([^&]*)/);
    return codeMatch ? codeMatch[1] : null;
  };

  return (
    <View style={{ flex: 1, paddingTop: 30 }}>
      {Platform.OS === "ios" ? (
        <WebView
          source={{
            uri: authUrl,
          }}
          onNavigationStateChange={(event) => {
            const code = extractAuthorizationCode(event.url);
            if (code) {
              requestToken(code);
            }
          }}
        />
      ) : (
        <View>{/* 다른 플랫폼에서는 빈 View를 렌더링 */}</View>
      )}
    </View>
  );
}
