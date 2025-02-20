import React from "react";
import styled from "styled-components/native";
import { Image } from "react-native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../utils/responsive";
import { useFonts } from "../styles";

const NoResults = () => {
  const fontsLoaded = useFonts();

  if (!fontsLoaded) {
    return null; // 폰트 로드될 때까지 렌더링 안 함
  }

  return (
    <Container>
      <StyledImage source={require("../assets/home/FilterIcon.png")} />
      <Title>조건에 맞는 카페를</Title>
      <Title>찾지 못했어요</Title>
      <Subtitle>다른 조건으로 검색해 보세요</Subtitle>
    </Container>
  );
};

export default NoResults;

const Container = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: ${responsiveHeight(64)}px;
  background-color: #fafafa;
`;

const StyledImage = styled(Image)`
  width: ${responsiveWidth(120)}px;
  height: ${responsiveHeight(120)}px;
  margin-bottom: ${responsiveHeight(36)}px;
`;

const Title = styled.Text`
  font-family: PretendardSemiBold;
  font-size: ${responsiveFontSize(20)}px;
  font-weight: 600;
  line-height: ${responsiveHeight(27.6)}px;
  letter-spacing: -0.5px;
  color: #000;
`;

const Subtitle = styled.Text`
  font-family: PretendardMedium;
  font-size: ${responsiveFontSize(14)}px;
  font-weight: 500;
  line-height: ${responsiveHeight(19.32)}px;
  letter-spacing: -0.35px;
  color: #666;
  margin-top: ${responsiveHeight(16)}px;
`;
