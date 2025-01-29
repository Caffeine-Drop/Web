import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import VietnamPng from "../assets/EventPage/Asia1.png";
import { responsiveFontSize, responsiveWidth, responsiveHeight } from "../utils/responsive";

const VietnamImage = () => {
    return <StyledImage source={VietnamPng} />;
};

const StyledImage = styled.Image`
    width: ${responsiveWidth(185)}px;
    height: ${responsiveHeight(283)}px;
`;

export default VietnamImage;
