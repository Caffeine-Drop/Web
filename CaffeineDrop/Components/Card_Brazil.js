import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import BrazilPng from "../assets/EventPage/SouthAmerica1.png";
import { responsiveFontSize, responsiveWidth, responsiveHeight } from "../utils/responsive";

const BrazilImage = () => {
    return <StyledImage source={BrazilPng} />;
};

const StyledImage = styled.Image`
    width: ${responsiveWidth(185)}px;
    height: ${responsiveHeight(283)}px;
`;

export default BrazilImage;
