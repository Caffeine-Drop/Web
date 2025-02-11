import React, { useRef } from "react";
import { View, ScrollView, Text, Image } from "react-native";
import styled from "styled-components/native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../utils/responsive";

// 이미지 파일 경로
import DetailPageMainImg from "../assets/DetailPage/DetailPageMainImg.png";
import Profile from "../assets/DetailPage/Profile.svg";
import ReviewStarIcon from "../assets/DetailPage/ReviewStarIcon.svg";

// 컴포넌트
import BackButton from "../components/BackButton";

export default function DetailPageImageDetail({ navigation }) {
  const scrollViewRef = useRef(null);

  const images = [
    <Image
      key="image1"
      style={{ width: responsiveWidth(300), height: responsiveHeight(400) }}
      source={DetailPageMainImg}
    />,
    <Image
      key="image2"
      style={{ width: responsiveWidth(300), height: responsiveHeight(400) }}
      source={DetailPageMainImg}
    />,
    <Image
      key="image3"
      style={{ width: responsiveWidth(300), height: responsiveHeight(400) }}
      source={DetailPageMainImg}
    />,
    <Image
      key="image4"
      style={{ width: responsiveWidth(300), height: responsiveHeight(400) }}
      source={DetailPageMainImg}
    />,
  ];

  const handleScrollEnd = (event) => {
    const scrollX = event.nativeEvent.contentOffset.x;
    const imageWidth = responsiveWidth(300) + 12; // 이미지 너비 + 간격
    const index = Math.round(scrollX / imageWidth);
    const offsetX = index * imageWidth;

    if (scrollViewRef.current) {
      if (index === images.length - 1) {
        // 마지막 이미지일 때 처음으로 돌아가기
        scrollViewRef.current.scrollTo({ x: 0, animated: false });
      } else if (index === 0 && scrollX < imageWidth / 2) {
        // 첫 번째 이미지일 때 마지막으로 이동
        scrollViewRef.current.scrollTo({
          x: (images.length - 1) * imageWidth,
          animated: false,
        });
      } else {
        scrollViewRef.current.scrollTo({ x: offsetX, animated: true });
      }
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
      <Container>
        <Header>
          <BackButton style={{ position: "absolute", width: responsiveWidth(24), height: responsiveWidth(24) }} onPress={() => navigation.goBack()} />
          <ViewDetailText>카페 상세보기</ViewDetailText>
        </Header>
        <ImageContainer>
          <ScrollView
            style={{
              paddingLeft: responsiveWidth(30),
              paddingRight: responsiveWidth(30),
            }}
            ref={scrollViewRef}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            onScrollEndDrag={handleScrollEnd}
            contentOffset={{ x: responsiveWidth(312), y: 0 }}
            contentContainerStyle={{ paddingRight: responsiveWidth(30) }}
          >
            <View style={{ flexDirection: "row", gap: responsiveWidth(12) }}>
              {images}
            </View>
          </ScrollView>
        </ImageContainer>
        <Review>
          <ReviewUserInfo>
            <Profile
              width={responsiveWidth(34)}
              height={responsiveHeight(34)}
            />
            <ReviewUser>
              <ReviewUserNickName>닉네임</ReviewUserNickName>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <ReviewCreatedAt>2025.01.12</ReviewCreatedAt>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <ReviewStarIcon
                    width={responsiveWidth(12)}
                    height={responsiveHeight(12)}
                  />
                  <ReviewRating>4.0</ReviewRating>
                </View>
              </View>
            </ReviewUser>
          </ReviewUserInfo>
          <ReviewContent>
            <Text
              style={{
                color: "#000",
                color: "#FAFAFA",
                overflow: "hidden",
                textOverflow: "ellipsis",
                fontSize: responsiveFontSize(12),
                fontWeight: "400",
                lineHeight: responsiveFontSize(16.56),
                letterSpacing: "-0.3",
                flexWrap: "wrap",
                width: "100%",
              }}
            >
              도시 위에 소음 넘쳐나는 트러블 여유 없는 걸음 이건 마치 정글
              멍하니 또 한숨이 도시 위에 소음 넘쳐나는 트러블 여유 없는 걸음
              이건 마치 정글 도시 위에 소음 넘쳐나는 트러블 여유 없는 걸음 이건
              마치 정글
            </Text>
          </ReviewContent>
        </Review>
      </Container>
    </View>
  );
}

const Container = styled.View`
  width: 100%;
  position: relative;
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
  font-style: normal;
  font-weight: 600;
  color: #fafafa;
`;

const ImageContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin: ${responsiveHeight(150)}px 0 ${responsiveHeight(47)}px;
`;

const Review = styled.View`
  display: flex;
  flex-direction: column;
  padding: ${responsiveHeight(16)}px 0;
  gap: ${responsiveHeight(12)}px;
`;

const ReviewUserInfo = styled.View`
  display: flex;
  flex-direction: row;
  gap: ${responsiveWidth(12)}px;
  align-items: center;
  padding: 0 ${responsiveWidth(24)}px 0 ${responsiveWidth(24)}px;
`;

const ReviewUser = styled.View`
  display: flex;
  flex-direction: column;
`;

const ReviewUserNickName = styled.Text`
  color: #fafafa;
  font-size: ${responsiveFontSize(16)}px;
  font-weight: 600;
  line-height: ${responsiveFontSize(22.08)}px;
  letter-spacing: -0.4px;
  text-transform: uppercase;
`;

const ReviewCreatedAt = styled.Text`
  color: #f1f1f1;
  font-size: ${responsiveFontSize(14)}px;
  font-weight: 500;
  line-height: ${responsiveFontSize(19.32)}px;
  letter-spacing: -0.35px;
  margin-right: ${responsiveWidth(4)}px;
`;

const ReviewRating = styled.Text`
  color: #f1f1f1;
  font-size: ${responsiveFontSize(12)}px;
  font-weight: 400;
  line-height: ${responsiveFontSize(16.56)}px;
  letter-spacing: -0.3px;
`;

const ReviewContent = styled.View`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  padding: 0 ${responsiveWidth(24)}px 0 ${responsiveWidth(24)}px;
`;
