import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

const REST_API_KEY = "3ea09531351683eee9c653d0f2a6511f";
const REDIRECT_URI = "http://172.20.10.11:8081/Home";
const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;

const KaKaoLogin = () => {
  console.log("카카오 로그인 실행");
  const navigation = useNavigation();
  const { storeAccessToken, storeUserId, storeRefreshToken } =
    useContext(AuthContext);

  function KakaoLoginWebView(data) {
    const exp = "code=";
    var condition = data.indexOf(exp);
    if (condition != -1) {
      var code = data.substring(condition + exp.length);
      console.log("requestToken 직전");
      console.log("code: ", code);
      requestToken(code);
    } else {
      console.log("Authorization code not found in the URL");
    }
  }

  const requestToken = async (code) => {
    console.log("requestToken 직후");
    var AccessToken = "none";
    var userId = "none";
    var RefreshToken = "none";
    await axios({
      method: "post",
      //서버 URL
      url: "http://13.124.11.195:3000/oauth2/login/kakao",
      headers: {
        "Content-Type": "application/json",
      },
      data: { code },

      //테스트 URL
      // url: "https://kauth.kakao.com/oauth/token",
      // params: {
      //   grant_type: "authorization_code",
      //   client_id: REST_API_KEY,
      //   redirect_uri: REDIRECT_URI,
      //   code: authorize_code,
      // },
    })
      .then((response) => {
        console.log(response.data);
        // userId = response.data.id_token;
        // AccessToken = response.data.access_token;
        // RefreshToken = response.data.refresh_token;
        userId = response.data.success.id;
        AccessToken = response.data.success.accessToken;
        RefreshToken = response.data.success.refreshToken;
        console.log("userId: ", userId);
        console.log("AccessToken: ", AccessToken);
        console.log("RefreshToken: ", RefreshToken);
        //테스트 코드
        // AccessToken = response.data.access_token;

        storeAccessToken(AccessToken);
        storeUserId(userId);
        storeRefreshToken(RefreshToken);
        console.log("Navigation 직전");
        console.log("Current Routes:", navigation.getState());

        navigation.navigate("OnboardingLogin04");

        console.log("Navigation 호출됨");
      })
      .catch((error) => {
        if (error.response) {
          console.log("Error Response Data:", error.response.data);
          console.log("Error Response Status:", error.response.status);
          console.log("Error Response Headers:", error.response.headers);
        } else if (error.request) {
          console.log("Error Request:", error.request);
        } else {
          console.log("Error Message:", error.message);
        }
      });
  };

  return (
    <View style={Styles.container}>
      <WebView
        style={{ flex: 1 }}
        originWhitelist={["*"]}
        scalesPageToFit={false}
        source={{
          // uri: `http://13.124.11.195:3000/oauth2/login/kakao?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`,
          uri: `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`,
        }}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        javaScriptEnabled
        // 1안 이거 안될 경우 2안 주석 해제
        // onMessage={(event) => {
        //   KakaoLoginWebView(event.nativeEvent["url"]);
        // }}
        // 2안
        onNavigationStateChange={(event) => {
          KakaoLoginWebView(event.url);
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
