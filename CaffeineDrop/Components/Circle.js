import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import circlepng from "../assets/EventPage/Circle.png";
import { responsiveFontSize, responsiveWidth, responsiveHeight } from "../utils/responsive";

const CircleImage = () => {
    return <StyledImage source={circlepng} />;
};

const StyledImage = styled.Image``;

export default CircleImage;
