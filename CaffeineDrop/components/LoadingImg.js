import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import Loadingpng from "../assets/EventPage/Loading_Img.png";
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

const LoadingImg = () => {
  return <StyledImage source={Loadingpng} />;
};

const StyledImage = styled.Image`
  width: ${responsiveWidth(360)}px;
  height: ${responsiveHeight(311)}px;
`;

export default LoadingImg;
