import React from "react";
import Svg, { Ellipse, Defs, LinearGradient, Stop } from "react-native-svg";

export default function Circle(props) {
    return (
        <Svg width="181" height="180" viewBox="0 0 181 180" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Ellipse id="Ellipse 202" cx="90.0796" cy="89.8526" rx="89.9836" ry="89.8526" fill="url(#paint0_linear_440_23667)" fillOpacity="0.45" />
            <Defs>
                <LinearGradient id="paint0_linear_440_23667" x1="174.951" y1="176.131" x2="43.7665" y2="29.4205" gradientUnits="userSpaceOnUse">
                    <Stop stopColor="#825A32" />
                    <Stop offset="0.948197" stopColor="#756555" />
                </LinearGradient>
            </Defs>
        </Svg>
    );
}
