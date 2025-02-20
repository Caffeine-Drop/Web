import React from "react";
import Svg, { Path } from "react-native-svg";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../../utils/responsive";

const NextButton = (props) => (
  <Svg
    width={`${responsiveWidth(19)}px`}
    height={`${responsiveHeight(20)}px`}
    viewBox="0 0 19 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M7 5L12 9.9999L7 15" stroke="black" strokeLinecap="round" />
  </Svg>
);

export default NextButton;
