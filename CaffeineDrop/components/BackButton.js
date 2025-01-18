import React from "react";
import { TouchableOpacity, Image } from "react-native";

import BackButtonIcon from "../assets/DetailPage/BackButton.svg";

const BackButton = ({ onPress, style }) => {
  return (
    <TouchableOpacity style={[{ marginLeft: 24, zIndex: 1000 }, style]} onPress={onPress}>
      <BackButtonIcon />
    </TouchableOpacity>
  );
};

export default BackButton;

