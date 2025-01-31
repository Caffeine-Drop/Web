import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import DripPng from "../assets/EventPage/Drip.png";
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

const DripImage = () => {
  return <StyledImage source={DripPng} />;
};

const StyledImage = styled.Image`
  width: ${responsiveWidth(342.938)}px;
  height: ${isTablet ? responsiveHeight(432.438) : responsiveHeight(342.438)}px;
`;

export default DripImage;
