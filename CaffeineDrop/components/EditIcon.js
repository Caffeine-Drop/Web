import React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../utils/responsive";

export default function EditIcon() {
  const handlePress = () => {};

  return (
    <TouchableOpacity onPress={handlePress}>
      <Svg
        width={`${responsiveWidth(35)}px`}
        height={`${responsiveHeight(35)}px`}
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Circle cx="17.5" cy="17.5" r="17.5" fill="#321900" />
        <Path
          d="M9.625 25.375L12.6874 18.7031L21.7655 9.625L25.3749 13.2344L16.6249 21.9844L9.625 25.375Z"
          stroke="white"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </Svg>
    </TouchableOpacity>
  );
}
