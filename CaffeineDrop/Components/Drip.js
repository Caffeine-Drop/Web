import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import DripPng from "../assets/EventPage/Drip.png";
import { responsiveFontSize, responsiveWidth, responsiveHeight } from "../utils/responsive";

const DripImage = () => {
    return <StyledImage source={DripPng} />;
};

const StyledImage = styled.Image`
    width: ${responsiveWidth(342.938)}px;
    height: ${responsiveHeight(342.438)}px;
`;

export default DripImage;
