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

export default function DetailPageReviewOverView() {
  return (
    <ReviewOverViewContainer>
      <ReviewOverViewTitle>항목별 세부 평점</ReviewOverViewTitle>
      <ReviewOverViewRate>
        <ReviewOverViewRateText>1.0</ReviewOverViewRateText>
        <Text style={{ position: "absolute", top: 64, left: 15 }}>종합평점</Text>
        <View style={{ gap: responsiveHeight(5) }}>
          <View style={{ display: "flex", flexDirection: "row" }}>
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
                <Text>맛</Text>
              </ReviewOverViewDetailRateTheme>
              <ReviewOverViewDetailRateStars>
                <Star
                  width={responsiveWidth(20)}
                  height={responsiveHeight(20)}
                />
                <Star
                  width={responsiveWidth(20)}
                  height={responsiveHeight(20)}
                />
                <Star
                  width={responsiveWidth(20)}
                  height={responsiveHeight(20)}
                />
                <BlankStar
                  width={responsiveWidth(20)}
                  height={responsiveHeight(20)}
                />
                <BlankStar
                  width={responsiveWidth(20)}
                  height={responsiveHeight(20)}
                />
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
                <Text>인테리어</Text>
              </ReviewOverViewDetailRateTheme>
              <ReviewOverViewDetailRateStars>
                <Star
                  width={responsiveWidth(20)}
                  height={responsiveHeight(20)}
                />
                <Star
                  width={responsiveWidth(20)}
                  height={responsiveHeight(20)}
                />
                <Star
                  width={responsiveWidth(20)}
                  height={responsiveHeight(20)}
                />
                <Star
                  width={responsiveWidth(20)}
                  height={responsiveHeight(20)}
                />
                <BlankStar
                  width={responsiveWidth(20)}
                  height={responsiveHeight(20)}
                />
              </ReviewOverViewDetailRateStars>
            </View>
            <ReviewOverViewDetailRateScore>4.0</ReviewOverViewDetailRateScore>
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
  margin-bottom: ${responsiveHeight(100)}px;
`;

const ReviewOverViewTitle = styled.Text`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: ${responsiveFontSize(24)}px;
  font-style: normal;
  font-weight: 600;
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
  font-family: Pretendard;
  font-size: ${responsiveFontSize(50)}px;
  font-style: normal;
  font-weight: 600;
  line-height: ${responsiveHeight(69)}px;
  letter-spacing: -1.25px;
  text-transform: uppercase;
`;

const ReviewCountText = styled.Text`
  color: #666666;
  font-family: Pretendard;
  font-size: ${responsiveFontSize(12)}px;
  font-style: normal;
  font-weight: 500;
  line-height: ${responsiveHeight(16.56)}px;
  letter-spacing: -0.3px;
  text-transform: uppercase;
`;

const ReviewCount = styled.Text`
  color: #000000;
  font-family: Pretendard;
  font-size: ${responsiveFontSize(12)}px;
  font-style: normal;
  font-weight: 500;
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
  padding: ${responsiveWidth(5)}px 0;
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
  border-color: #000;
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
  font-family: Pretendard;
  font-size: ${responsiveFontSize(14)}px;
  font-style: normal;
  font-weight: 600;
  line-height: ${responsiveHeight(19.32)}px;
  letter-spacing: -0.35px;
  padding-left: ${responsiveWidth(8)}px;
  text-transform: uppercase;
`;
