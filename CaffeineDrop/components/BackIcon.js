import React from "react";
import Svg, { Path } from "react-native-svg";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
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

export default function BackIcon() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Svg
        width={`${responsiveWidth(24)}px`}
        height={`${responsiveHeight(24)}px`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M15 19L8 12L15 5"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </Svg>
    </TouchableOpacity>
  );
}
