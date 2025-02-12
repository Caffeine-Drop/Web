import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const REST_API_KEY = "3ea09531351683eee9c653d0f2a6511f";
const REDIRECT_URI = "http://13.124.11.195/oauth2/kakao";
const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;

const KaKaoLogin = ({ navigation }) => {
  const { storeToken } = useContext(AuthContext);

  function KakaoLoginWebView(data) {
    const exp = "code=";
    var condition = data.indexOf(exp);
    if (condition != -1) {
      var authorize_code = data.substring(condition + exp.length);
      // console.log(authorize_code);
      requestToken(authorize_code);
    }
  }

  const requestToken = async (authorize_code) => {
    var AccessToken = "none";
    axios({
      method: "get",
      url: "https://kauth.kakao.com/oauth/token",
      params: {
        grant_type: "authorization_code",
        client_id: REST_API_KEY,
        redirect_uri: REDIRECT_URI,
        code: authorize_code,
      },
    })
      .then((response) => {
        AccessToken = response.data.access_token;
        console.log(AccessToken);
        storeToken(AccessToken);
        navigation.navigate("OnboardingLogin04");
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  return (
    <View style={Styles.container}>
      <WebView
        style={{ flex: 1 }}
        originWhitelist={["*"]}
        scalesPageToFit={false}
        source={{
          uri: `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`,
        }}
        injectedJavaScript={INJECTED_JAVASCRIPT}
        javaScriptEnabled
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
