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
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../../utils/responsive";

// 목업 이미지
import menuImg from "../../assets/DetailPage/menuImg.png";
import blankMenuImg from "../../assets/DetailPage/blankMenuImg.png";
import signatureMenuImg1 from "../../assets/DetailPage/signatureMenuImg1.png";
import signatureMenuImg2 from "../../assets/DetailPage/signatureMenuImg2.png";
import signatureMenuImg3 from "../../assets/DetailPage/signatureMenuImg3.png";
import signatureMenuImg4 from "../../assets/DetailPage/signatureMenuImg4.png";

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
  height: ${responsiveHeight(421)}px;
  padding: ${responsiveHeight(40)}px 0 0 0;
  background-color: #fafafa;
`;

const MenuImgContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: ${responsiveHeight(20)}px;
  padding-left: ${responsiveWidth(24)}px;
  gap: 4px;
`;

const Title = styled.Text`
  font-size: ${responsiveFontSize(20)}px;
  font-family: "PretendardSemiBold";
  line-height: ${responsiveHeight(27.6)}px;
  padding-left: ${responsiveWidth(24)}px;
  color: #000000;
`;

const MenuImg = styled.Image`
  width: ${responsiveWidth(112)}px;
  height: ${responsiveHeight(150)}px;
  border-radius: ${responsiveWidth(12)}px;
`;

const SignatureMenuContainer = styled.View`
  padding-top: ${responsiveHeight(20)}px;
`;

const SignatureMenuTitle = styled.Text`
  font-size: ${responsiveFontSize(16)}px;
  font-family: "PretendardBold";
  line-height: ${responsiveHeight(22.08)}px;
  padding-left: ${responsiveWidth(24)}px;
`;

const SignatureMenuImgContainer = styled.View`
  padding-top: ${responsiveHeight(12)}px;
  padding-left: ${responsiveWidth(24)}px;
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
  width: ${responsiveWidth(80)}px;
  height: ${responsiveHeight(80)}px;
  border-radius: ${responsiveWidth(12)}px;
`;

const MenuName = styled.Text`
  font-size: ${responsiveFontSize(14)}px;
  font-family: "PretendardSemiBold";
  line-height: ${responsiveHeight(19.32)}px;
`;

const MenuPrice = styled.Text`
  font-size: ${responsiveFontSize(12)}px;
  font-family: "PretendardMedium";
  line-height: ${responsiveHeight(19.32)}px;
`;
