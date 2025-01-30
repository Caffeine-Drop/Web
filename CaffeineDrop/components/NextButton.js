import React from "react";
import Svg, { Path } from "react-native-svg";
import { responsiveFontSize, responsiveWidth, responsiveHeight } from "../utils/responsive";

import { Dimensions } from "react-native";

// 화면 크기 가져오기
const { width, height } = Dimensions.get("window");

// 태블릿 판별 기준 (보통 width가 600px 이상이면 태블릿)
const isTablet = width >= 600;

const NextButton = (props) => (
    <Svg width={`${responsiveWidth(19)}px`} height={`${responsiveHeight(20)}px`} viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <Path d="M7 5L12 9.9999L7 15" stroke="black" strokeLinecap="round" />
    </Svg>
);

export default NextButton;
