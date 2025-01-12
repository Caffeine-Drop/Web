import React from "react";
import { View, Text, Image, Button, ScrollView } from "react-native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../utils/responsive";
import styled from "styled-components/native";

// 이미지 파일 경로
import detailImage from "../assets/DetailPage/detailMainImg.png";
import specialtyCoffeeLogo from "../assets/DetailPage/specialtyCoffeeLogo.png";
import distanceLogo from "../assets/DetailPage/distanceLogo.png";
import caffeeLikeDefalut from "../assets/DetailPage/caffeeLikeDefalut.png";
import stars from "../assets/DetailPage/stars.png";

// 컴포넌트
import BackButton from "../components/BackButton";
import DetailPageImg from "../components/DetailPageImg";
import DetailpageMenu from "../components/DetailPageMenu";
import DetailPageMap from "../components/DetailPageMap";
import DetailPageCategory from "../components/DetailPageCategory";
import DetailPageReviews from "../components/DetailPageReviews";
import DetailPageWriteReviewButton from "../components/DetailPageWriteReviewButton";
import DetailPageReviewOverView from "../components/DetailPageReviewOverView";

export default function DetailPage({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Container>
          <DetailImage
          style={{
            height: responsiveHeight(400),
          }}
          source={detailImage}
        />
        <Header>
          <BackButton onPress={() => navigation.goBack()} />
          <Text
            style={{
              fontSize: responsiveFontSize(18),
              fontWeight: "bold",
              color: "white",
              justifyContent: "center",
            }}
          >
            카페 상세보기
          </Text>
        </Header>
        {/* 이 부분 추후 사용 또는 파일 확장자를 .svg로 변경하여 화질 깨지는 문제 해결 예정*/}
        {/* <View
        style={{
          position: "absolute",
          bottom: 0,
          backgroundColor: "#FAFAFA",
          width: scaleWidth(100), // 88이 원래 사이즌데, 88로 하니까 공백 생김. 일단 100으로 해놓은 상태.
          height: scaleHeight(22),
          borderRadius: 4,
          left: scaleWidth(24),
          top: scaleHeight(222),
        }}
      /> */}
        {/* <Text
        style={{
          position: "absolute",
          fontFamily: "Pretendard",
          fontSize: scaleWidth(10),
          fontWeight: "medium",
          justifyContent: "center",
          left: scaleWidth(32),
          top: scaleHeight(226),
        }}
      >
        Specialty Coffee
      </Text> */}
        <Image
          source={specialtyCoffeeLogo}
          style={{
            position: "absolute",
            width: responsiveWidth(88),
            height: responsiveHeight(20),
            left: responsiveWidth(24),
            top: responsiveHeight(226),
          }}
        />
        <TitleText>언힙커피로스터스</TitleText>
        <Text
          style={{
            position: "absolute",
            fontFamily: "Pretendard",
            fontSize: responsiveFontSize(14),
            fontWeight: "regular",
            lineHeight: responsiveHeight(19.32),
            color: "#fafafa",
            justifyContent: "center",
            left: responsiveWidth(24),
            top: responsiveHeight(299),
          }}
        >
          인천 미추홀구 인하로67번길 6 2층
        </Text>
        <Image
          source={distanceLogo}
          style={{
            position: "absolute",
            left: responsiveWidth(24),
            top: responsiveHeight(326),
          }}
        />
        {/* 이 부분 추후 사용 또는 파일 확장자를 .svg로 변경하여 화질 깨지는 문제 해결 예정*/}
        {/* <View style={{
        position: "absolute",
        width: scaleWidth(26),
        height: scaleHeight(18),
        backgroundColor: "#fafafa",
        borderRadius: 8,
        left: scaleWidth(24),
        top: scaleHeight(326),
        }} /> */}
        <Text
          style={{
            position: "absolute",
            fontFamily: "Pretendard",
            fontSize: responsiveFontSize(12),
            fontWeight: "regular",
            lineHeight: responsiveHeight(16.56),
            color: "#fafafa",
            left: responsiveWidth(54),
            top: responsiveHeight(326),
          }}
        >
          1.2km
        </Text>
        <View
          style={{
            position: "absolute",
            flexDirection: "row",
            alignItems: "center",
            gap: responsiveWidth(4),
            left: responsiveWidth(24),
            top: responsiveHeight(356.5),
          }}
        >
          <Text
            style={{
              fontFamily: "Pretendard",
              fontSize: responsiveFontSize(14),
              fontWeight: "normal",
              lineHeight: responsiveHeight(19.32),
              color: "#fafafa",
            }}
          >
            4.0
          </Text>
          <Image
            source={stars}
            style={{
              width: responsiveWidth(88),
              height: responsiveHeight(20),
            }}
          />
        </View>
        <Image
          source={caffeeLikeDefalut}
          style={{
            position: "absolute",
            width: 40,
            height: 40,
            right: responsiveWidth(24),
            top: responsiveHeight(336),
          }}
        />
        <NavBar>
          <NavTabSelected>홈</NavTabSelected>
          <NavTabNonSelected>리뷰</NavTabNonSelected>
          <NavTabNonSelected>이미지</NavTabNonSelected>
          <NavTabNonSelected>원두 정보</NavTabNonSelected>
        </NavBar>
      </Container>
      <DetailPageImg />
      <DetailpageMenu />
      <DetailPageMap />
      <DetailPageCategory />
      <DetailPageReviews />
      <DetailPageReviewOverView />
      </ScrollView>
      <DetailPageWriteReviewButton />
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
  justify-content: center;
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

const NavBar = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 24px;
  gap: 12px;
  bottom: 0;
  width: 100%;
  height: 46px;
  background-color: #756555;
`;

const NavTabSelected = styled.Text`
  font-size: 16px;
  font-family: "Pretendard";
  padding: 12px 12px;
  font-style: semibold;
  line-height: 22.08px;
  font-weight: 600;
  color: #ffffff;
`;

const NavTabNonSelected = styled.Text`
  font-size: ${responsiveFontSize(16)};
  font-family: "Pretendard";
  padding: 12px 12px;
  font-style: normal;
  line-height: 22.08px;
  font-weight: 400;
  color: #999999;
`;
