import React from "react";
import { View } from "react-native";
import {
  Svg,
  Circle,
  Defs,
  Filter,
  FeFlood,
  FeBlend,
  FeGaussianBlur,
} from "react-native-svg";

const BlurCircle = ({ marginLeft = 0, marginTop = 0 }) => {
  return (
    <View style={{ marginLeft, marginTop }}>
      <Svg width="360" height="380" viewBox="0 0 294 380" fill="none">
        <Defs>
          <Filter
            id="filter0_f_545_10804"
            x="-86"
            y="0"
            width="380"
            height="380"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <FeFlood floodOpacity="0" result="BackgroundImageFix" />
            <FeBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <FeGaussianBlur
              stdDeviation="50"
              result="effect1_foregroundBlur_545_10804"
            />
          </Filter>
        </Defs>
        <Circle
          cx="104"
          cy="190"
          r="90"
          fill="#A57F59"
          fillOpacity="0.24"
          filter="url(#filter0_f_545_10804)"
        />
      </Svg>
    </View>
  );
};

export default BlurCircle;
