import React from "react";
import { Text, View } from "react-native";

import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../utils/responsive";
import styled from "styled-components/native";

// 이미지 임포트
import Star from "../assets/DetailPage/DetailPageStarImg.svg";
import BlankStar from "../assets/DetailPage/DetailPageBlankStarImg.svg";

const StarIcon = ({ filled }) => {
  const Icon = filled ? Star : BlankStar;
  return <Icon width={responsiveWidth(20)} height={responsiveHeight(20)} />;
};

export default function DetailPageReviewOverView() {
  return (
    <ReviewOverViewContainer>
      <ReviewOverViewTitle>항목별 세부 평점</ReviewOverViewTitle>
      <ReviewOverViewRate>
        <View style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <ReviewOverViewRateText>1.0</ReviewOverViewRateText>
          <Text style={{ fontSize: responsiveFontSize(12), fontFamily: "PretendardMedium", lineHeight: responsiveHeight(16.56), letterSpacing: -0.3 }}>종합평점</Text>
        </View>
        <View style={{ gap: responsiveHeight(5) }}>
          <View style={{ display: "flex", flexDirection: "row", gap: responsiveWidth(3), paddingBottom: responsiveHeight(5) }}>
            <Star width={responsiveWidth(20)} height={responsiveHeight(20)} />
            <BlankStar width={responsiveWidth(20)} height={responsiveHeight(20)} />
            <BlankStar width={responsiveWidth(20)} height={responsiveHeight(20)} />
            <BlankStar width={responsiveWidth(20)} height={responsiveHeight(20)} />
            <BlankStar width={responsiveWidth(20)} height={responsiveHeight(20)} />
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <ReviewCountText>후기 | </ReviewCountText>
            <ReviewCount>100건</ReviewCount>
          </View>
        </View>
      </ReviewOverViewRate>
      <ReviewOverViewDetailRate>
        {/* 항목별 세부 평점 */}
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
          }}
        >
          {/* 여기서부터 하나 시작 */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{ display: "flex", flexDirection: "row", gap: 24 }}>
              <ReviewOverViewDetailRateTheme>
                <Theme>맛</Theme>
              </ReviewOverViewDetailRateTheme>
              <ReviewOverViewDetailRateStars>
                <StarIcon filled={true} />
                <StarIcon filled={true} />
                <StarIcon filled={true} />
                <StarIcon filled={false} />
                <StarIcon filled={false} />
              </ReviewOverViewDetailRateStars>
            </View>
            <ReviewOverViewDetailRateScore>3.0</ReviewOverViewDetailRateScore>
          </View>
          {/* 여기까지가 하나 */}
          {/* 여기서부터 두 번째 시작 */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{ display: "flex", flexDirection: "row", gap: 24 }}>
              <ReviewOverViewDetailRateTheme>
                <Theme>인테리어</Theme>
              </ReviewOverViewDetailRateTheme>
              <ReviewOverViewDetailRateStars>
                <StarIcon filled={true} />
                <StarIcon filled={true} />
                <StarIcon filled={true} />
                <StarIcon filled={true} />
                <StarIcon filled={false} />
              </ReviewOverViewDetailRateStars>
            </View>
            <ReviewOverViewDetailRateScore>4.0</ReviewOverViewDetailRateScore>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{ display: "flex", flexDirection: "row", gap: 24 }}>
              <ReviewOverViewDetailRateTheme>
                <Theme>청결도</Theme>
              </ReviewOverViewDetailRateTheme>
              <ReviewOverViewDetailRateStars>
                <StarIcon filled={true} />
                <StarIcon filled={true} />
                <StarIcon filled={true} />
                <StarIcon filled={false} />
                <StarIcon filled={false} />
              </ReviewOverViewDetailRateStars>
            </View>
            <ReviewOverViewDetailRateScore>3.0</ReviewOverViewDetailRateScore>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{ display: "flex", flexDirection: "row", gap: 24 }}>
              <ReviewOverViewDetailRateTheme>
                <Theme>가심비</Theme>
              </ReviewOverViewDetailRateTheme>
              <ReviewOverViewDetailRateStars>
                <StarIcon filled={true} />
                <StarIcon filled={true} />
                <StarIcon filled={true} />
                <StarIcon filled={false} />
                <StarIcon filled={false} />
              </ReviewOverViewDetailRateStars>
            </View>
            <ReviewOverViewDetailRateScore>3.0</ReviewOverViewDetailRateScore>
          </View>
        </View>
      </ReviewOverViewDetailRate>
    </ReviewOverViewContainer>
  );
}

const ReviewOverViewContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: ${responsiveWidth(360)}px;
  padding: ${responsiveWidth(40)}px 0;
  gap: ${responsiveHeight(24)}px;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
`;

const ReviewOverViewTitle = styled.Text`
  color: #000;
  text-align: center;
  font-family: "PretendardSemiBold";
  font-size: ${responsiveFontSize(24)}px;
  line-height: ${responsiveHeight(33.12)}px;
  letter-spacing: -0.6px;
  text-transform: uppercase;
`;

const ReviewOverViewRate = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${responsiveWidth(24)}px;
`;

const ReviewOverViewRateText = styled.Text`
  color: #000;
  font-family: "PretendardSemiBold";
  font-size: ${responsiveFontSize(50)}px;
  line-height: ${responsiveHeight(69)}px;
  letter-spacing: -1.25px;
  text-transform: uppercase;
`;

const ReviewCountText = styled.Text`
  color: #666666;
  font-family: "PretendardMedium";
  font-size: ${responsiveFontSize(12)}px;
  line-height: ${responsiveHeight(16.56)}px;
  letter-spacing: -0.3px;
  text-transform: uppercase;
`;

const ReviewCount = styled.Text`
  color: #000000;
  font-family: "PretendardMedium";
  font-size: ${responsiveFontSize(12)}px;
  line-height: ${responsiveHeight(16.56)}px;
  letter-spacing: -0.3px;
  text-transform: uppercase;
`;

const ReviewOverViewDetailRate = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${responsiveWidth(24)}px;
`;

const ReviewOverViewDetailRateTheme = styled.View`
  display: flex;
  flex-direction: row;
  width: ${responsiveWidth(60)}px;
  height: ${responsiveHeight(27)}px;
  padding: ${responsiveHeight(5)}px 0;
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
  border-color: #000;
`;

const Theme = styled.Text`
  color: #000;
  font-family: "PretendardMedium";
  font-size: ${responsiveFontSize(12)}px;
  line-height: ${responsiveHeight(16.56)}px;
  letter-spacing: -0.3px;
`;

const ReviewOverViewDetailRateStars = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${responsiveWidth(3)}px;
`;

const ReviewOverViewDetailRateScore = styled.Text`
  color: #000;
  font-family: "PretendardSemiBold";
  font-size: ${responsiveFontSize(14)}px;
  line-height: ${responsiveHeight(19.32)}px;
  letter-spacing: -0.35px;
  padding-left: ${responsiveWidth(8)}px;
  text-transform: uppercase;
`;
