import React, { useEffect } from "react";
import { Text, View } from "react-native";

import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../../utils/responsive";
import styled from "styled-components/native";

// 이미지 임포트
import Star from "../../assets/DetailPage/DetailPageStarImg.svg";
import BlankStar from "../../assets/DetailPage/DetailPageBlankStarImg.svg";

const StarIcon = ({ filled }) => {
  const Icon = filled ? Star : BlankStar;
  return <Icon width={responsiveWidth(20)} height={responsiveHeight(20)} />;
};

const renderStars = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<StarIcon key={i} filled={i < rating} />);
  }
  return stars;
};

export default function DetailPageReviewOverView({
  reviews,
  averageRating,
  tastingRating,
  interiorRating,
  cleanlinessRating,
  costPerformanceRating,
}) {
  return (
    <ReviewOverViewContainer>
      <ReviewOverViewTitle>항목별 세부 평점</ReviewOverViewTitle>
      <ReviewOverViewRate>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ReviewOverViewRateText>
            {averageRating.toFixed(1)}
          </ReviewOverViewRateText>
          <Text
            style={{
              fontSize: responsiveFontSize(12),
              fontFamily: "PretendardMedium",
              lineHeight: responsiveHeight(16.56),
              letterSpacing: -0.3,
            }}
          >
            종합평점
          </Text>
        </View>
        <View style={{ gap: responsiveHeight(5) }}>
          <ReviewOverViewDetailRateStars>
            {renderStars(Math.round(averageRating))}
          </ReviewOverViewDetailRateStars>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <ReviewCountText>후기 | </ReviewCountText>
            <ReviewCount>{reviews.data.reviews.length}건</ReviewCount>
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
                {renderStars(Math.round(tastingRating))}
              </ReviewOverViewDetailRateStars>
            </View>
            <ReviewOverViewDetailRateScore>
              {tastingRating.toFixed(1)}
            </ReviewOverViewDetailRateScore>
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
                {renderStars(Math.round(interiorRating))}
              </ReviewOverViewDetailRateStars>
            </View>
            <ReviewOverViewDetailRateScore>
              {interiorRating.toFixed(1)}
            </ReviewOverViewDetailRateScore>
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
                {renderStars(Math.round(cleanlinessRating))}
              </ReviewOverViewDetailRateStars>
            </View>
            <ReviewOverViewDetailRateScore>
              {cleanlinessRating.toFixed(1)}
            </ReviewOverViewDetailRateScore>
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
                {renderStars(Math.round(costPerformanceRating))}
              </ReviewOverViewDetailRateStars>
            </View>
            <ReviewOverViewDetailRateScore>
              {costPerformanceRating.toFixed(1)}
            </ReviewOverViewDetailRateScore>
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
