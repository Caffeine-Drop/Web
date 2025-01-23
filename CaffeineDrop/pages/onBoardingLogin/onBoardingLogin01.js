import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../../utils/responsive";
import { useFonts } from "../../styles";

//이미지 임포트
import CoffeeCupIcon from "../../assets/OnBoardingLogin/CoffeeCupIcon.svg";

export default function OnboardingLogin01() {
  const fontsLoaded = useFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Container>
      <LogoContainer>
        <CoffeeCupIcon />
      </LogoContainer>
      <View style={{ gap: responsiveHeight(4) }}>
        <Title>Caffeine Drop</Title>
        <SubTitle>카페인 드롭</SubTitle>
      </View>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
`;

const LogoContainer = styled.View`
  display: flex;
  padding-top: ${responsiveHeight(310)}px;
  padding-bottom: ${responsiveHeight(215)}px;
  justify-content: center;
`;

const Title = styled.Text`
  font-family: "PretendardSemiBold";
  text-align: center;
  font-size: ${responsiveFontSize(18)};
  line-height: ${responsiveHeight(24.84)};
  letter-spacing: -0.45;
  color: #000;
`;

const SubTitle = styled.Text`
  font-family: "PretendardMedium";
  text-align: center;
  font-size: ${responsiveFontSize(12)};
  line-height: ${responsiveHeight(16.56)};
  letter-spacing: -0.3;
  color: #000;
`;
