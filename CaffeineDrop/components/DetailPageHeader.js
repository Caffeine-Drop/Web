import React, { useState } from "react";
import { View, Text, Image, Button, ScrollView } from "react-native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../utils/responsive";
import styled from "styled-components/native";

// 이미지 assets
import DetailPageMainImg from "../assets/DetailPage/DetailPageMainImg.svg";
import SpecialtyCoffeeLogo from "../assets/DetailPage/SpecialtyCoffeeLogo.svg";
import DistanceLogo from "../assets/DetailPage/DistanceLogo.svg";
import CaffeeLikeDefault from "../assets/DetailPage/CaffeeLikeDefault.svg";
import CaffeeLike from "../assets/DetailPage/CaffeeLike.svg";
import HeaderStarIcon from "../assets/DetailPage/HeaderStarIcon.svg";
import HeaderStarBlankIcon from "../assets/DetailPage/HeaderStarBlankIcon.svg";

// 컴포넌트
import BackButton from "../components/BackButton";

export default function DetailPageHeader({ navigation, isScrolled }) {
  return (
    <View style={{ flex: 1 }}>
      <Container>
        <DetailPageMainImg
          width={responsiveWidth(360)}
          height={responsiveHeight(400)}
          preserveAspectRatio="none"
        />
        <Header>
          <BackButton onPress={() => navigation.goBack()} />
          <ViewDetailText>카페 상세보기</ViewDetailText>
        </Header>
        <>
          <SpecialtyCoffeeLogo
            style={{
              position: "absolute",
              left: responsiveWidth(24),
              top: responsiveHeight(226),
              width: responsiveWidth(88),
              height: responsiveHeight(20),
              preserveAspectRatio: "none",
            }}
          />
          <TitleText>언힙커피로스터스</TitleText>
          <AddressText>인천 미추홀구 인하로67번길 6 2층</AddressText>
          <DistanceLogo
            style={{
              position: "absolute",
              left: responsiveWidth(24),
              top: responsiveHeight(326),
            }}
          />
          <DistanceText>1.2km</DistanceText>
          <ReviewRateContainer>
            <ReviewRateText>4.0</ReviewRateText>
            <HeaderStarIcon
              style={{
                position: "absolute",
                width: responsiveWidth(20),
                height: responsiveHeight(20),
                left: responsiveWidth(24),
              }}
            />
          </ReviewRateContainer>
          <CaffeeLikeDefault
            style={{
              position: "absolute",
              width: 40,
              height: 40,
              right: responsiveWidth(24),
              top: responsiveHeight(336),
            }}
          />
        </>
      </Container>
    </View>
  );
}

const Container = styled.View`
  width: 100%;
  position: relative;
`;

const DetailImage = styled.Image`
  width: 100%;
  top: 0;
  left: 0;
`;

const Header = styled.View`
  position: absolute;
  top: 50px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 0;
`;

const ViewDetailText = styled.Text`
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: ${responsiveFontSize(18)};
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  color: #fafafa;
`;

const TitleText = styled.Text`
  position: absolute;
  font-family: "Pretendard";
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: ${responsiveHeight(38.64)};
  letter-spacing: -0.7px;
  color: #fafafa;
  left: ${responsiveWidth(24)};
  top: ${responsiveHeight(248)};
`;

const AddressText = styled.Text`
  position: absolute;
  font-family: "Pretendard";
  font-size: ${responsiveFontSize(14)};
  font-style: normal;
  font-weight: 400;
  line-height: ${responsiveHeight(19.32)};
  color: #fafafa;
  left: ${responsiveWidth(24)};
  top: ${responsiveHeight(299)};
`;

const DistanceText = styled.Text`
  position: absolute;
  font-size: ${responsiveFontSize(12)};
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  line-height: ${responsiveHeight(16.56)};
  color: #fafafa;
  left: ${responsiveWidth(54)};
  top: ${responsiveHeight(326)};
`;

const ReviewRateContainer = styled.View`
  position: absolute;
  flex-direction: row;
  align-items: center;
  gap: ${responsiveWidth(4)};
  left: ${responsiveWidth(24)};
  top: ${responsiveHeight(356.5)};
`;

const ReviewRateText = styled.Text`
  font-size: ${responsiveFontSize(14)};
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  line-height: ${responsiveHeight(19.32)};
  color: #fafafa;
`;
