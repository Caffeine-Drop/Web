import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../utils/responsive";

// 이미지 임포트
import RLogo from "../assets/DetailPage/RLogo.svg";

export default function DetailPageWriteReviewButton({ navigation }) {
  return (
    <BlurWrapper>
      <GradientOverlay
        colors={[
          "rgba(233, 230, 227, 0.08)",
          "rgba(50, 25, 0, 0.08)",
          "rgba(255, 255, 255, 0.08)",
        ]}
        start={{ x: 0.85, y: 0 }}
        end={{ x: 0.27, y: 1 }}
      >
        <TouchableOpacityWrapper onPress={() => navigation.navigate("ReviewPage")}>
          <RLogo width={responsiveWidth(19)} height={responsiveHeight(19)} />
          <WriteReviewText>리뷰 작성하기</WriteReviewText>
        </TouchableOpacityWrapper>
      </GradientOverlay>
    </BlurWrapper>
  );
}

const BlurWrapper = styled(BlurView).attrs({
  intensity: 50, // 블러 강도
  tint: "light", // 배경 색조 (light, dark, default)
})`
  position: absolute;
  left: ${responsiveWidth(211)}px;
  bottom: ${responsiveHeight(24)}px;
  width: ${responsiveWidth(125)}px;
  height: ${responsiveHeight(43)}px;
  border-radius: ${responsiveWidth(33)}px;
  overflow: hidden; /* 자식 요소가 블러 영역을 벗어나지 않도록 */
`;

const GradientOverlay = styled(LinearGradient)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TouchableOpacityWrapper = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${responsiveWidth(8)}px;
  width: 100%;
  height: 100%;
  border-width: 1px;
  border-color: rgba(233, 230, 227, 0.12);
`;

const WriteReviewText = styled(Text)`
  color: #000;
  font-family: "PretendardMedium";
  font-size: ${responsiveFontSize(14)}px;
  line-height: ${responsiveHeight(19.32)}px;
  letter-spacing: -0.35px;
`;
