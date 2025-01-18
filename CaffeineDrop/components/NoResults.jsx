import React from "react";
import styled from "styled-components/native";
import { Image } from "react-native";
import {
    responsiveFontSize,
    responsiveWidth,
    responsiveHeight,
  } from "../utils/responsive";

const NoResults = () => {
  return (
    <Container>
      <StyledImage
        source={require("../assets/home/FilterIcon.png")}
      />
      <Title>조건에 맞는 카페를</Title>
      <Title>찾지 못했어요</Title>
      <Subtitle>다른 조건으로 검색해 보세요</Subtitle>
    </Container>
  );
};

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
  font-size: 20px;
  font-weight: 600;
  color: #000;
`;

const Subtitle = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: #666;
  margin-top: ${responsiveHeight(16)}px;
`;

export default NoResults;
