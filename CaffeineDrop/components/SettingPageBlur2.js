import React from "react";
import Svg, { G, Circle, Defs, Filter, FeFlood, FeBlend, FeGaussianBlur } from "react-native-svg";

const SettingPageBlur2 = (props) => (
    <Svg width="269" height="418" viewBox="0 0 269 418" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <G filter="url(#filter0_f_340_8445)">
            <Circle cx="209" cy="209" r="159" fill="#756555" fillOpacity="0.08" />
        </G>
        <Defs>
            <Filter id="filter0_f_340_8445" x="0" y="0" width="418" height="418" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <FeFlood floodOpacity="0" result="BackgroundImageFix" />
                <FeBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <FeGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_340_8445" />
            </Filter>
        </Defs>
    </Svg>
);

export default SettingPageBlur2;
