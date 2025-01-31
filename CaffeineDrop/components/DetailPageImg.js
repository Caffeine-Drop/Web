import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import styled from "styled-components/native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../utils/responsive";

import { useFonts } from "../styles";

// 목업 이미지
import DetailPageMainImg from "../assets/DetailPage/DetailPageMainImg.svg";
import DetailSubImg1 from "../assets/DetailPage/DetailSubImg1.svg";
import DetailSubImg2 from "../assets/DetailPage/DetailSubImg2.svg";
import ViewMoreButtonIcon from "../assets/DetailPage/ViewMoreButton.svg";

export default function DetailPageImg({ navigation, onViewMoreImgPress }) {
  const fontsLoaded = useFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Container>
      <View style={{ gap: responsiveHeight(8) }}>
        <TitleContainer>
          <MainText>등록된 이미지</MainText>
          <ViewMoreButton onPress={onViewMoreImgPress}>
            <ViewMoreButtonText>더보기</ViewMoreButtonText>
            <ViewMoreButtonIcon width={responsiveWidth(16)} height={responsiveHeight(16)}/>
          </ViewMoreButton>
        </TitleContainer>
        <SubText>이용자 후기와 업체 등록 사진을 같이 보여줍니다</SubText>
      </View>
      <ImgContainer>
        <DetailPageMainImg
          width={responsiveWidth(156)}
          height={responsiveHeight(156)}
          preserveAspectRatio="none"
        />
        <SmallImgContainer>
          <DetailSubImg1
            width={responsiveWidth(78)}
            height={responsiveHeight(78)}
            preserveAspectRatio="none"
          />
          <DetailSubImg2
            width={responsiveWidth(78)}
            height={responsiveHeight(78)}
            preserveAspectRatio="none"
          />
          <DetailSubImg1
            width={responsiveWidth(78)}
            height={responsiveHeight(78)}
            preserveAspectRatio="none"
          />
          <DetailSubImg2
            width={responsiveWidth(78)}
            height={responsiveHeight(78)}
            preserveAspectRatio="none"
          />
        </SmallImgContainer>
      </ImgContainer>
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  height: ${responsiveHeight(271)}px;
  padding: ${responsiveHeight(36)}px ${responsiveWidth(24)}px 0
    ${responsiveWidth(24)}px;
  gap: ${responsiveHeight(24)}px;
  background-color: #fafafa;
`;

const TitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: ${responsiveWidth(10)}px;
`;

const MainText = styled.Text`
  width: ${responsiveWidth(150)}px;
  font-family: "PretendardSemiBold";
  font-size: ${responsiveFontSize(20)}px;
  line-height: ${responsiveHeight(27.6)}px;
  letter-spacing: -0.5px;
  color: #000000;
`;

const ViewMoreButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ViewMoreButtonText = styled.Text`
  color: #666;
  font-size: ${responsiveFontSize(14)}px;
  font-family: "PretendardMedium";
  line-height: ${responsiveHeight(19.32)}px;
  letter-spacing: -0.35px;
`;

const SubText = styled.Text`
  font-size: ${responsiveFontSize(14)}px;
  font-family: "PretendardRegular";
  line-height: ${responsiveHeight(19.32)}px;
  letter-spacing: -0.35px;
  color: #666666;
`;

const ImgContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  gap: ${responsiveWidth(1)}px;
  border-radius: ${responsiveWidth(15)}px;
  overflow: hidden;
`;

const SmallImgContainer = styled.View`
  width: ${responsiveWidth(157)}px;
  height: ${responsiveHeight(157)}px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: ${responsiveWidth(1)}px;
`;
