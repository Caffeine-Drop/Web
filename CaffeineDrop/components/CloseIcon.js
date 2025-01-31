import React from "react";
import Svg, { Rect } from "react-native-svg";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../utils/responsive";

import { Dimensions } from "react-native";

// 화면 크기 가져오기
const { width, height } = Dimensions.get("window");

// 태블릿 판별 기준 (보통 width가 600px 이상이면 태블릿)
const isTablet = width >= 600;

const CloseIconWrapper = styled(TouchableOpacity)`
  width: ${responsiveWidth(24)}px;
  height: ${responsiveHeight(24)}px;
  flex-shrink: 0;
`;

const CloseIcon = ({ onPress }) => (
  <CloseIconWrapper onPress={onPress}>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${responsiveWidth(24)}px`}
      height={`${responsiveHeight(24)}px`}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Rect
        x="6.16626"
        y="7.22656"
        width="1.5"
        height="15"
        rx="0.75"
        transform="rotate(-45 6.16626 7.22656)"
        fill="#666666"
      />
      <Rect
        x="7.22729"
        y="17.834"
        width="1.5"
        height="15"
        rx="0.75"
        transform="rotate(-135 7.22729 17.834)"
        fill="#666666"
      />
    </Svg>
  </CloseIconWrapper>
);

export default CloseIcon;
