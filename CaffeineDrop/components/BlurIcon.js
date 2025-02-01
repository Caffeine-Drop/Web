import React from "react";
import { Image, Platform } from "react-native";
import Svg, {
  G,
  Circle,
  Defs,
  Filter,
  FeFlood,
  FeBlend,
  FeGaussianBlur,
} from "react-native-svg";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../utils/responsive";

export default function BlurIcon(props) {
  return (
    <Image
      source={require("../assets/EventPage/Ellipse01.png")}
      style={{
        width: responsiveWidth(268),
        height: responsiveHeight(380),
      }}
      {...props}
    />
  );
}
