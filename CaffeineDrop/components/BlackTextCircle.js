import React from "react";
import Svg, { Circle } from "react-native-svg";
import { responsiveFontSize, responsiveWidth, responsiveHeight } from "../utils/responsive";

import { Dimensions } from "react-native";

// 화면 크기 가져오기
const { width, height } = Dimensions.get("window");

// 태블릿 판별 기준 (보통 width가 600px 이상이면 태블릿)
const isTablet = width >= 600;

export default function BlackTextCircle(props) {
    return (
        <Svg width={`${responsiveWidth(4)}px`} height={`${responsiveHeight(4)}px`} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Circle cx="2" cy="2" r="2" fill="black" />
        </Svg>
    );
}
