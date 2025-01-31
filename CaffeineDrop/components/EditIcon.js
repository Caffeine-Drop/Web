import React from "react";
import Svg, { Circle, Path } from "react-native-svg";
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

export default function EditIcon() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Svg
        width={`${responsiveWidth(35)}px`}
        height={`${responsiveHeight(35)}px`}
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Circle cx="17.5" cy="17.5" r="17.5" fill="#321900" />
        <Path
          d="M9.625 25.375L12.6874 18.7031L21.7655 9.625L25.3749 13.2344L16.6249 21.9844L9.625 25.375Z"
          stroke="white"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </Svg>
    </TouchableOpacity>
  );
}
