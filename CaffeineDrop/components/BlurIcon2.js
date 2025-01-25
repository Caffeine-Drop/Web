import React from "react";
import Svg, { G, Circle, Defs, Filter, FeFlood, FeBlend, FeGaussianBlur } from "react-native-svg";
import { View, StyleSheet } from "react-native";

export default function BlurIcon2(props) {
    return (
        <View>
            <Svg width="268" height="380" viewBox="0 0 230 380" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <G filter="url(#filter0_f_440_23679)">
                    <Circle cx="190" cy="190" r="90" fill="#A57F59" fillOpacity="0.24" />
                </G>
                <Defs>
                    <Filter id="filter0_f_440_23679" x="0" y="0" width="380" height="380" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <FeFlood floodOpacity="0" result="BackgroundImageFix" />
                        <FeBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <FeGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_440_23679" />
                    </Filter>
                </Defs>
            </Svg>
        </View>
    );
}
