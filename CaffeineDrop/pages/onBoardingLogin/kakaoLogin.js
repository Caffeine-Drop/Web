import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

const REST_API_KEY = "3ea09531351683eee9c653d0f2a6511f";
const REDIRECT_URI = "http://192.168.45.214:8081/Home";
const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;

const KaKaoLogin = () => {
  console.log("카카오 로그인 실행")
  const navigation = useNavigation();
  const { storeAccessToken, storeUserId, storeRefreshToken } =
    useContext(AuthContext);

  function KakaoLoginWebView(data) {
    const exp = "code=";
    var condition = data.indexOf(exp);
    if (condition != -1) {
      var authorize_code = data.substring(condition + exp.length);
      // console.log(authorize_code);
      console.log("requestToken 직전");
      requestToken(authorize_code);
    }
  }

  const requestToken = async (authorize_code) => {
    var AccessToken = "none";
    var userId = "none";
    var RefreshToken = "none";
    await axios({
      method: "get",
      //서버 URL
      url: "http://13.124.11.195:3000/oauth2/login/kakao",

      //테스트 URL
      // url: "https://kauth.kakao.com/oauth/token",
      params: {
        grant_type: "authorization_code",
        client_id: REST_API_KEY,
        redirect_uri: REDIRECT_URI,
        code: authorize_code,
      },
    })
      .then((response) => {
        console.log(response.data);
        // userId = response.data.success.id;
        // AccessToken = response.data.success.accessToken;
        // RefreshToken = response.data.success.refreshToken;

        //테스트 코드
        AccessToken = response.data.access_token;
        // console.log(AccessToken, userId, RefreshToken);
        // storeAccessToken(AccessToken);
        // storeUserId(userId);
        // storeRefreshToken(RefreshToken);
        console.log("Navigation 직전");
        console.log("Current Routes:", navigation.getState());

        navigation.navigate("OnboardingLogin04");

        console.log("Navigation 호출됨");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return (
    <View style={Styles.container}>
      <WebView
        style={{ flex: 1 }}
        originWhitelist={["*"]}
        scalesPageToFit={false}
        source={{
          uri: `http://13.124.11.195:3000/oauth2/login/kakao?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`,
        }}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        javaScriptEnabled
        onMessage={event => { KakaoLoginWebView(event.nativeEvent["url"]);
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
