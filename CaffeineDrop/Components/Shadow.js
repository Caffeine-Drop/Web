import React from "react";
import Svg, { G, Ellipse, Defs, Filter, FeFlood, FeBlend, FeGaussianBlur } from "react-native-svg";

export default function Shadow(props) {
    return (
        <Svg width="237" height="121" viewBox="0 0 237 121" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <G id="Ellipse 204" filter="url(#filter0_f_440_23665)">
                <Ellipse cx="33.4463" cy="95.4793" rx="33.4463" ry="95.4793" transform="matrix(0.154285 -0.988026 0.988095 0.153847 18.9941 78.6216)" fill="black" fillOpacity="0.08" />
            </G>
            <Defs>
                <Filter id="filter0_f_440_23665" x="0.0107422" y="0.0922852" width="236.973" height="120.345" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <FeFlood floodOpacity="0" result="BackgroundImageFix" />
                    <FeBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <FeGaussianBlur stdDeviation="12" result="effect1_foregroundBlur_440_23665" />
                </Filter>
            </Defs>
        </Svg>
    );
}
