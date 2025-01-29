import React from "react";
import Svg, { Circle } from "react-native-svg";
import { responsiveFontSize, responsiveWidth, responsiveHeight } from "../utils/responsive";

export default function BlackTextCircle(props) {
    return (
        <Svg width={`${responsiveWidth(4)}px`} height={`${responsiveHeight(4)}px`} viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Circle cx="2" cy="2" r="2" fill="black" />
        </Svg>
    );
}
