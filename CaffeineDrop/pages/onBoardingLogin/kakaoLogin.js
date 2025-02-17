import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { REST_API_KEY, REDIRECT_URI } from "@env";

const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;

const KaKaoLogin = () => {
  console.log("카카오 로그인 실행");
  const navigation = useNavigation();
  const { storeAccessToken, storeUserId, storeRefreshToken, storeLoggedPlatform } =
    useContext(AuthContext);

  function KakaoLoginWebView(data) {
    const exp = "code=";
    var condition = data.indexOf(exp);
    if (condition != -1) {
      var code = data.substring(condition + exp.length);
      console.log("code: ", code);
      requestToken(code);
    } else {
      console.log("Authorization code not found in the URL");
    }
  }

  const requestToken = async (code) => {
    var AccessToken = "none";
    var userId = "none";
    var RefreshToken = "none";
    try {
      const response = await axios.post(
        "http://13.124.11.195:3000/oauth2/login/kakao",
        {
          code: code,
          redirect_uri: REDIRECT_URI,
        },
        {
          headers: {
            "Content-Type": "application/json",
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

      storeAccessToken(AccessToken);
      storeUserId(userId);
      storeRefreshToken(RefreshToken);
      storeLoggedPlatform("kakao");
      navigation.reset({
        index: 0,
        routes: [{ name: 'OnboardingLogin04' }],
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

  return (
    <View style={Styles.container}>
      <WebView
        style={{ flex: 1 }}
        originWhitelist={["*"]}
        scalesPageToFit={false}
        source={{
          uri: `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`,
        }}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        javaScriptEnabled
        // 1안 이거 안될 경우 2안 주석 해제
        onMessage={(event) => {
          KakaoLoginWebView(event.nativeEvent["url"]);
        // }}
        // 2안
        // onNavigationStateChange={(event) => {
        //   KakaoLoginWebView(event.url);
        }}
      />
    </View>
  );
};

export default KaKaoLogin;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    backgroundColor: "#fff",
  },
});
