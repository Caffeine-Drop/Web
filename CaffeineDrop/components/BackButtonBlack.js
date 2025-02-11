import React from "react";
import { TouchableOpacity, Image } from "react-native";

import { responsiveWidth } from "../utils/responsive";
import BackButtonIconBlack from "../assets/TermsPage/BackButtonBlack.svg";

const BackButtonBlack = ({ onPress, style }) => {
  return (
    <TouchableOpacity style={[{ marginLeft: 24, zIndex: 1001, width: responsiveWidth(24), height: responsiveWidth(24) }, style]} onPress={onPress}>
      <BackButtonIconBlack />
    </TouchableOpacity>
  );
};

export default BackButtonBlack;
