import React from "react";
import { View, Text, Image, Button, Dimensions, TouchableOpacity } from "react-native";

import styled from "styled-components/native";

// 목업 이미지
import mockupImg1 from "../assets/DetailPage/mockupImg1.png";
import mockupImg2 from "../assets/DetailPage/mockupImg2.png";
import mockupImg3 from "../assets/DetailPage/mockupImg3.png";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const guidelineBaseWidth = 360; // Figma 디자인 기준 해상도
const guidelineBaseHeight = 760; // Figma 디자인 기준 해상도

const scaleWidth = (size) => (size / guidelineBaseWidth) * SCREEN_WIDTH;
const scaleHeight = (size) => (size / guidelineBaseHeight) * SCREEN_HEIGHT;

export default function DetailPageImg() {
  return (
    <Container>
      <View style={{ gap: scaleHeight(8) }}>
        <TitleContainer>
          <MainText>등록된 이미지</MainText>
          <ViewMoreButton>
            <ViewMoreButtonText>더보기 &gt;</ViewMoreButtonText>
          </ViewMoreButton>
        </TitleContainer>
        <SubText>이용자 후기와 업체 등록 사진을 같이 보여줍니다</SubText>
      </View>
      <ImgContainer>
        <LargeImage source={mockupImg1} />
        <SmallImgContainer>
          <SmallImage source={mockupImg2} />
          <SmallImage source={mockupImg3} />
          <SmallImage source={mockupImg3} />
          <SmallImage source={mockupImg2} />
        </SmallImgContainer>
      </ImgContainer>
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  height: ${scaleHeight(271)}px;
  padding: ${scaleHeight(36)}px 24px 0 24px;
`;

const TitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: ${scaleWidth(10)}px;
`;

const MainText = styled.Text`
  width: ${scaleWidth(150)}px;
  font-size: ${scaleWidth(20)}px;
  font-weight: 600;
  line-height: ${scaleHeight(27.6)}px;
  color: #000000;
`;

const ViewMoreButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${scaleWidth(8)}px;
`;

const ViewMoreButtonText = styled.Text`
  color: #666;
  font-size: ${scaleWidth(14)}px;
  font-weight: 500;
  line-height: ${scaleHeight(19.32)}px;
  letter-spacing: -0.35px;
`;

const SubText = styled.Text`
  font-size: ${scaleWidth(14)}px;
  font-weight: 500;
  line-height: ${scaleHeight(19.32)}px;
  color: #666666;
`;

const ImgContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  margin-top: ${scaleHeight(24)}px;
  border-radius: ${scaleWidth(15)}px;
`;

const LargeImage = styled.Image`
  width: ${scaleWidth(156)}px;
  height: ${scaleHeight(156)}px;
`;

const SmallImgContainer = styled.View`
  width: ${scaleWidth(158)}px;
  height: ${scaleHeight(158)}px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const SmallImage = styled.Image`
  width: ${scaleWidth(77)}px;
  height: ${scaleHeight(77)}px;
  margin: 0.5px 1px;
`;
