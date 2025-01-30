import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "../../utils/responsive";
import { BlurView } from "expo-blur";
import { Svg, Image } from "react-native-svg";
import { useFonts } from "../../styles";

// 이미지 임포트
import BlurCircle from "../../assets/OnBoardingLogin/BlurCircle";
import SocialLoginCoffee from "../../assets/OnBoardingLogin/SocialLoginCoffee.svg";
import SocialLoginBackgroundImg from "../../assets/OnBoardingLogin/SocialLoginBackgroundImg.svg";
import KakaoLoginBtn from "../../assets/OnBoardingLogin/KakaoLoginBtn.svg";
import NaverLoginBtn from "../../assets/OnBoardingLogin/NaverLoginBtn.svg";

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
      <View style={{ position: "relative", height: 300, width: 300 }}>
        <BlurCircle
          style={{
            position: "absolute",
            paddingLeft: 14,
            paddingTop: 122,
            zIndex: 1,
          }}
        />
        <SocialLoginCoffee
          style={{ position: "absolute", left: 101, top: 60, zIndex: 100 }}
        />
        <SocialLoginBackgroundImg
          style={{ position: "absolute", left: 122, top: 32, zIndex: 10 }}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
          marginTop: responsiveHeight(12),
          marginBottom: responsiveHeight(40),
        }}
      >
        <Text
          style={{
            display: "flex",
            fontFamily: "PretendardRegular",
            fontSize: responsiveFontSize(16),
            lineHeight: 22.08,
            color: "#000",
            letterSpacing: -0.4,
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
            lineHeight: 44.16,
            color: "#000",
            letterSpacing: -0.8,
            alignSelf: "center",
            textAlign: "center",
          }}
        >
          커피를 더 쉽고 빠르게
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
          onPress={() => navigation.navigate("OnboardingLogin04")}
        >
          <KakaoLoginBtn />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("OnboardingLogin04")}
        >
          <NaverLoginBtn />
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
