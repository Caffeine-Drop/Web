import React from "react";
import Svg, { G, Circle, Defs, Filter, FeFlood, FeBlend, FeGaussianBlur } from "react-native-svg";
import { responsiveFontSize, responsiveWidth, responsiveHeight } from "../utils/responsive";

export default function BlurIcon(props) {
    return (
        <Svg width={`${responsiveWidth(268)}px`} height={`${responsiveHeight(380)}px`} viewBox="0 0 268 380" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <G filter="url(#filter0_f_440_23678)">
                <Circle cx="78" cy="190" r="90" fill="#A57F59" fillOpacity="0.30" />
            </G>
            <Defs>
                <Filter id="filter0_f_440_23678" x="-112" y="0" width="380" height="380" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <FeFlood floodOpacity="0" result="BackgroundImageFix" />
                    <FeBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <FeGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_440_23678" />
                </Filter>
            </Defs>
        </Svg>
    );
}

// fillOpacity="0.24"로 하면 피그마랑 좀 달라서 조정함
