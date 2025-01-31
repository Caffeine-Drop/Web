import React from "react";
import Svg, { Circle } from "react-native-svg";
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

const Loading2 = () => {
  return (
    <Svg
      width={`${responsiveWidth(46)}px`}
      height={`${responsiveHeight(10)}px`}
      viewBox="0 0 46 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle cx="4" cy="5" r="3.5" fill="#756555" />
      <Circle cx="22.5" cy="5" r="5" fill="#756555" />
      <Circle cx="41.5" cy="5" r="4" fill="#756555" />
    </Svg>
  );
};

export default Loading2;
