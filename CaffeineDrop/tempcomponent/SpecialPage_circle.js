import React from "react";
import Svg, { Circle } from "react-native-svg";

const SpecialPageCircle = ({ fill = "#825A32" }) => {
    return (
        <Svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle id="Ellipse 214" cx="4" cy="4" r="4" fill={fill} />
        </Svg>
    );
};

export default SpecialPageCircle;
