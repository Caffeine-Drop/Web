import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  Dimensions,
  ScrollView,
} from "react-native";

import styled from "styled-components/native";

// 목업 이미지
import menuImg from "../assets/DetailPage/menuImg.png";
import blankMenuImg from "../assets/DetailPage/blankMenuImg.png";
import signatureMenuImg1 from "../assets/DetailPage/signatureMenuImg1.png";
import signatureMenuImg2 from "../assets/DetailPage/signatureMenuImg2.png";
import signatureMenuImg3 from "../assets/DetailPage/signatureMenuImg3.png";
import signatureMenuImg4 from "../assets/DetailPage/signatureMenuImg4.png";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const guidelineBaseWidth = 360; // Figma 디자인 기준 해상도
const guidelineBaseHeight = 760; // Figma 디자인 기준 해상도

const scaleWidth = (size) => (size / guidelineBaseWidth) * SCREEN_WIDTH;
const scaleHeight = (size) => (size / guidelineBaseHeight) * SCREEN_HEIGHT;

export default function DetailpageMenu() {
  return (
    <Container>
      <Title>메뉴</Title>
      <MenuImgContainer>
        <MenuImg source={menuImg} />
        <MenuImg source={blankMenuImg} />
      </MenuImgContainer>
      <SignatureMenuContainer>
        <SignatureMenuTitle>시그니처 메뉴</SignatureMenuTitle>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <SignatureMenuImgContainer>
            <SignatureMenu>
              <SignatureMenuImg source={signatureMenuImg1} />
              <MenuName>토피넛 라떼</MenuName>
              <MenuPrice>5,000원</MenuPrice>
            </SignatureMenu>
            <SignatureMenu>
              <SignatureMenuImg source={signatureMenuImg2} />
              <MenuName>민트 커피</MenuName>
              <MenuPrice>5,000원</MenuPrice>
            </SignatureMenu>
            <SignatureMenu>
              <SignatureMenuImg source={signatureMenuImg3} />
              <MenuName>허니 블랙티</MenuName>
              <MenuPrice>5,000원</MenuPrice>
            </SignatureMenu>
            <SignatureMenu>
              <SignatureMenuImg source={signatureMenuImg4} />
              <MenuName>얼 그레이 티</MenuName>
              <MenuPrice>5,000원</MenuPrice>
            </SignatureMenu>
          </SignatureMenuImgContainer>
        </ScrollView>
      </SignatureMenuContainer>
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  height: ${scaleHeight(421)}px;
  padding: ${scaleHeight(40)}px 24px 0 24px;
`;

const MenuImgContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: ${scaleHeight(20)}px;
  gap: 4px;
`;

const Title = styled.Text`
  font-size: ${scaleWidth(20)}px;
  font-weight: 600;
  line-height: ${scaleHeight(27.6)}px;
  color: #000000;
`;

const MenuImg = styled.Image`
  width: ${scaleWidth(112)}px;
  height: ${scaleHeight(150)}px;
  border-radius: ${scaleWidth(12)}px;
`;

const SignatureMenuContainer = styled.View`
  padding-top: ${scaleHeight(20)}px;
`;

const SignatureMenuTitle = styled.Text`
  font-size: ${scaleWidth(16)}px;
  font-weight: 700;
  font-style: normal;
  line-height: ${scaleHeight(22.08)}px;
`;

const SignatureMenuImgContainer = styled.View`
  padding-top: ${scaleHeight(12)}px;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

const SignatureMenu = styled.View`
  flex-direction: column;
  align-items: left;
  gap: 4px;
`;

const SignatureMenuImg = styled.Image`
  width: ${scaleWidth(80)}px;
  height: ${scaleHeight(80)}px;
  border-radius: ${scaleWidth(12)}px;
`;

const MenuName = styled.Text`
  font-size: ${scaleWidth(14)}px;
  font-weight: 600;
  line-height: ${scaleHeight(19.32)}px;
`;

const MenuPrice = styled.Text`
  font-size: ${scaleWidth(12)}px;
  font-weight: 500;
  line-height: ${scaleHeight(19.32)}px;
`;

