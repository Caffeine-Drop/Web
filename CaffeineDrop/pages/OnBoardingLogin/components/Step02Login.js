import React from "react";
import { Logo, Title, Button, Icon } from "../OnboardingLogin.style";
import { Text } from "react-native";

const Step02Login = ({ setStep }) => (
  <>
    <Logo source={require("../../../assets/OnBoardingLogin/ic_onboardinglogin_logo.png")} />
    <Title>커피를 더 쉽고 빠르게</Title>
    <Button kakao onPress={() => setStep(2)}>
      <Icon source={require("../../../assets/OnBoardingLogin/ic_home_directions_kakao.png")} />
      <Text>카카오 로그인</Text>
    </Button>
    <Button naver onPress={() => setStep(2)}>
      <Icon source={require("../../../assets/OnBoardingLogin/ic_home_directions_naver.png")} />
      <Text>네이버 로그인</Text>
    </Button>
  </>
);

export default Step02Login;
