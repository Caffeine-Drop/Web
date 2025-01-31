import React from "react";
import Svg, { Path } from "react-native-svg";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
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

const DropdownIconWrapper = styled(TouchableOpacity)`
  width: ${responsiveWidth(18)}px;
  height: ${responsiveHeight(18)}px;
  flex-shrink: 0;
  transform: ${({ isModalVisible }) =>
    isModalVisible ? "rotate(180deg)" : "rotate(0deg)"};
`;

const DropdownIcon = ({ onPress, isModalVisible }) => (
  <DropdownIconWrapper onPress={onPress} isModalVisible={isModalVisible}>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${responsiveWidth(18)}px`}
      height={`${responsiveHeight(18)}px`}
      viewBox="0 0 18 18"
      fill="none"
    >
      <Path d="M3.75 6L9.375 11.625L15 6" stroke="#666666" strokeWidth="0.75" />
    </Svg>
  </DropdownIconWrapper>
);

export default DropdownIcon;
