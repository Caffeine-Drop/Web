import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import GuatemalaPng from "../assets/EventPage/CentralAmerica1.png";
import { responsiveFontSize, responsiveWidth, responsiveHeight } from "../utils/responsive";

const GuatemalaImage = () => {
    return <StyledImage source={GuatemalaPng} />;
};

const StyledImage = styled.Image`
    width: ${responsiveWidth(185)}px;
    height: ${responsiveHeight(283)}px;
`;

export default GuatemalaImage;
