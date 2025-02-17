import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import styled from "styled-components/native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "../../utils/responsive";
import { useFonts } from "../../styles";

// 이미지 임포트
import KakaoLoginBtn from "../../assets/OnBoardingLogin/KakaoLoginBtn.svg";
import NaverLoginBtn from "../../assets/OnBoardingLogin/NaverLoginBtn.svg";
import OnBoardingLoginPageImg from "../../assets/OnBoardingLogin/onBoardingLoginPageImg.png";

export default function OnboardingLogin03({ navigation }) {
  const fontsLoaded = useFonts();

  if (!fontsLoaded) {
    return null; // 폰트 로딩이 안되면 아무것도 렌더링하지 않음
  }

  return (
    <Container>
      <View
        style={{
          paddingTop: responsiveHeight(17),
          paddingBottom: responsiveHeight(14),
        }}
      >
        <Login>로그인</Login>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center", marginRight: responsiveWidth(50), marginTop: responsiveHeight(30) }}>
        <ImageBackground
          source={OnBoardingLoginPageImg}
          style={{
            width: responsiveWidth(240),
            height: responsiveWidth(240),
            overflow: "hidden",
          }}
        />
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
          marginBottom: responsiveHeight(40),
        }}
      >
        <Text
          style={{
            display: "flex",
            fontFamily: "PretendardRegular",
            fontSize: responsiveFontSize(16),
            lineHeight: responsiveHeight(22.08),
            color: "#000",
            letterSpacing: responsiveFontSize(-0.4),
            alignSelf: "center",
          }}
        >
          카페인 드롭
        </Text>
        <Text
          style={{
            width: responsiveWidth(182),
            fontFamily: "PretendardSemiBold",
            fontSize: responsiveFontSize(32),
            lineHeight: responsiveHeight(44.16),
            color: "#000",
            letterSpacing: responsiveWidth(-0.8),
            alignSelf: "center",
            textAlign: "center",
          }}
        >
          커피를 더 쉽고{"\n"}빠르게
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: responsiveHeight(36),
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("KakaoLogin")}
          style={{
            width: responsiveWidth(312),
            height: responsiveHeight(48),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <KakaoLoginBtn style={{ width: "100%", height: "100%" }} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("OnboardingLogin04")}
          style={{
            width: responsiveWidth(312),
            height: responsiveHeight(48),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <NaverLoginBtn style={{ width: "100%", height: "100%" }} />
        </TouchableOpacity>
      </View>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #fafafa;
  justify-content: flex-start;
  padding-top: ${responsiveHeight(38)}px;
`;

const Login = styled.Text`
  font-family: "PretendardSemiBold";
  font-size: ${responsiveFontSize(18)}px;
  line-height: ${responsiveHeight(24.84)}px;
  text-align: center;
  color: #000;
  letter-spacing: -0.45px;
`;
