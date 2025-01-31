import React from "react";
import { Image, Platform } from "react-native";
import Svg, {
  G,
  Circle,
  Defs,
  Filter,
  FeFlood,
  FeBlend,
  FeGaussianBlur,
} from "react-native-svg";
import { View, StyleSheet } from "react-native";
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

export default function BlurIcon2(props) {
  if (isTablet) {
    return (
      <Image
        source={require("../assets/EventPage/Ellipse02.png")}
        style={{
          width: responsiveWidth(268),
          height: responsiveHeight(380),
        }}
        {...props}
      />
    );
  }

  return (
    <Svg
      width={`${responsiveWidth(268)}px`}
      height={`${responsiveHeight(380)}px`}
      viewBox="0 0 268 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: [{ scaleX: -1 }] }}
      {...props}
    >
      <G filter="url(#filter0_f_440_23678)">
        <Circle cx="78" cy="190" r="90" fill="#A57F59" fillOpacity="0.24" />
      </G>
      <Defs>
        <Filter
          id="filter0_f_440_23678"
          x="-112"
          y="0"
          width={`${responsiveWidth(380)}px`}
          height={`${responsiveHeight(380)}px`}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <FeFlood floodOpacity="0" result="BackgroundImageFix" />
          <FeBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <FeGaussianBlur
            stdDeviation="50"
            result="effect1_foregroundBlur_440_23678"
          />
        </Filter>
      </Defs>
    </Svg>
  );
}
