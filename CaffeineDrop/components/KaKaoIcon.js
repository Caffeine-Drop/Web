import React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
import { responsiveFontSize, responsiveWidth, responsiveHeight } from "../utils/responsive";

import { Dimensions } from "react-native";

// 화면 크기 가져오기
const { width, height } = Dimensions.get("window");

// 태블릿 판별 기준 (보통 width가 600px 이상이면 태블릿)
const isTablet = width >= 600;

export default function KaKaoIcon(props) {
    return (
        <Svg width={`${responsiveWidth(10)}px`} height={`${responsiveHeight(11)}px`} viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <G clipPath="url(#clip0_340_8390)">
                <Path fillRule="evenodd" clipRule="evenodd" d="M5.00004 1.14453C2.42255 1.14453 0.333344 2.75866 0.333344 4.74943C0.333344 5.98753 1.14141 7.07898 2.37192 7.72816L1.85418 9.61949C1.80844 9.78661 1.99956 9.91981 2.14633 9.82297L4.41583 8.32511C4.60736 8.34359 4.80199 8.35438 5.00004 8.35438C7.57732 8.35438 9.66668 6.74031 9.66668 4.74943C9.66668 2.75866 7.57732 1.14453 5.00004 1.14453Z" fill="black" />
            </G>
            <Defs>
                <ClipPath id="clip0_340_8390">
                    <Rect width="9.33333" height="9.33337" fill="white" transform="translate(0.333344 0.833008)" />
                </ClipPath>
            </Defs>
        </Svg>
    );
}
