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

const SettingPageBlur1 = (props) => {
  if (isTablet) {
    return (
      <Image
        source={require("../assets/EventPage/SettingPageBlur1.png")}
        style={{
          width: responsiveWidth(268),
          height: responsiveHeight(418),
        }}
        {...props}
      />
    );
  }

  return (
    <Svg
      width={`${responsiveWidth(268)}px`}
      height={`${responsiveHeight(418)}px`}
      viewBox="0 0 268 418"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_f_340_8448)">
        <Circle cx="59" cy="209" r="159" fill="#825A32" fillOpacity="0.08" />
      </G>
      <Defs>
        <Filter
          id="filter0_f_340_8448"
          x="-150"
          y="0"
          width={`${responsiveWidth(418)}px`}
          height={`${responsiveHeight(418)}px`}
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
            stdDeviation="25"
            result="effect1_foregroundBlur_340_8448"
          />
        </Filter>
      </Defs>
    </Svg>
  );
};

export default SettingPageBlur1;
