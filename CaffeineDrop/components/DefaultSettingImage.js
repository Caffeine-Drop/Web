import React from "react";
import Svg, { Circle, Path } from "react-native-svg";
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

export default function CustomIcon(props) {
  return (
    <Svg
      width={`${responsiveWidth(100)}px`}
      height={`${responsiveHeight(100)}px`}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx="50" cy="50" r="49.5" fill="#E5E3E1" stroke="#F1F1F1" />
      <Path
        d="M67.3427 38.252H69.8042C72.4156 38.252 74.92 39.2539 76.7665 41.0375C78.613 42.8211 79.6503 45.2401 79.6503 47.7624C79.6503 50.2848 78.613 52.7038 76.7665 54.4874C74.92 56.2709 72.4156 57.2729 69.8042 57.2729H67.3427"
        stroke="#FAFAFA"
        strokeWidth="4.47553"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M29.3007 34.8955H67.3426V56.5846C67.3426 59.1412 66.3407 61.593 64.5571 63.4008C62.7735 65.2086 60.3545 66.2242 57.8322 66.2242H38.8112C36.2888 66.2242 33.8698 65.2086 32.0862 63.4008C30.3027 61.593 29.3007 59.1412 29.3007 56.5846V34.8955Z"
        fill="#FAFAFA"
        stroke="#FAFAFA"
        strokeWidth="2.23776"
        strokeLinecap="round"
      />
    </Svg>
  );
}
