import React from "react";
import { TouchableOpacity, Image } from "react-native";

const BackButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={{ marginRight: 10, position: "absolute", left: 10 }} onPress={onPress}>
      <Image source={require("../assets/DetailPage/backButton.png")} />
    </TouchableOpacity>
  );
};

export default BackButton;

