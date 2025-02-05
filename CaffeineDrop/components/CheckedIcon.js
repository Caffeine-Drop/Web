import React from "react";
import Svg, { Rect, Path } from "react-native-svg";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../utils/responsive";

const CheckedIconWrapper = styled.View`
  width: ${responsiveWidth(20)}px;
  height: ${responsiveHeight(20)}px;
  flex-shrink: 0;
`;

const CheckedIcon = () => (
  <CheckedIconWrapper>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${responsiveWidth(20)}px`}
      height={`${responsiveHeight(20)}px`}
      viewBox="0 0 20 20"
      fill="none"
    >
      <Rect
        width={`${responsiveWidth(20)}px`}
        height={`${responsiveHeight(20)}px`}
        rx="4"
        fill="#756555"
      />
      <Path d="M5.5 10L8.40559 13L14 6" fill="#756555" />
      <Path
        d="M5.5 10L8.40559 13L14 6"
        stroke="#FAFAFA"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  </CheckedIconWrapper>
);

export default CheckedIcon;
