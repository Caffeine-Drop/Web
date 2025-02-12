import React, { useState, useEffect } from "react";
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
} from "../../utils/responsive";

import { useFonts } from "../../styles";

// 목업 이미지
import DetailMainImg from "../../assets/DetailPage/DetailPageMainImg.png";
import mockupImg2 from "../../assets/DetailPage/mockupImg2.png";
import mockupImg3 from "../../assets/DetailPage/mockupImg3.png";
import DetailPageLoadingImg from "../../assets/DetailPage/DetailPageLoadingImg.png";
import ViewMoreButtonIcon from "../../assets/DetailPage/ViewMoreButton.svg";

export default function DetailPageImg({ navigation, onViewMoreImgPress }) {
  const fontsLoaded = useFonts();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // 2초 후 로딩 상태를 false로 변경
    }, 1000);

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

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
            <ViewMoreButtonIcon
              width={responsiveWidth(16)}
              height={responsiveHeight(16)}
            />
          </ViewMoreButton>
        </TitleContainer>
        <SubText>이용자 후기와 업체 등록 사진을 같이 보여줍니다</SubText>
      </View>
      <ImgContainer>
        {isLoading ? (
          <LoadingView
            style={{
              width: responsiveWidth(156),
              height: responsiveHeight(156),
              marginRight: responsiveWidth(1),
            }}
          />
        ) : (
          <TouchableOpacity
            onPress={() => navigation.navigate("DetailPageImageDetail")}
          >
            <Image
              source={DetailMainImg}
              style={{
                width: responsiveWidth(156),
                height: responsiveHeight(156),
                marginRight: responsiveWidth(1),
              }}
            />
          </TouchableOpacity>
        )}
        <SmallImgContainer>
          {[
            mockupImg2,
            mockupImg3,
            DetailPageLoadingImg,
            DetailPageLoadingImg,
          ].map((img, index) =>
            isLoading ? (
              <LoadingView
                key={index}
                style={{
                  width: responsiveWidth(78),
                  height: responsiveHeight(78),
                }}
              />
            ) : (
              <Image
                key={index}
                source={img}
                style={{
                  width: responsiveWidth(78),
                  height: responsiveHeight(78),
                }}
              />
            )
          )}
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
  border-radius: ${responsiveWidth(15)}px;
  overflow: hidden;
`;

const SmallImgContainer = styled.View`
  width: ${responsiveWidth(158)}px;
  height: ${responsiveHeight(158)}px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: ${responsiveWidth(1)}px;
`;

// Add pulse animation
const pulseAnimation = `
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;

// Apply pulse animation to loading images
const LoadingView = styled.View`
  background-color: #d9d9d9;
  animation: pulse 1.5s infinite;
`;
