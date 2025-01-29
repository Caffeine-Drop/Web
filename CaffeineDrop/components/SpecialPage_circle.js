import React from "react";
import Svg, { Circle } from "react-native-svg";
import { responsiveFontSize, responsiveWidth, responsiveHeight } from "../utils/responsive";

const SpecialPageCircle = ({ fill = "#825A32" }) => {
    return (
        <Svg width={`${responsiveWidth(8)}px`} height={`${responsiveHeight(8)}px`} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle id="Ellipse 214" cx="4" cy="4" r="4" fill={fill} />
        </Svg>
    );
};

export default SpecialPageCircle;
