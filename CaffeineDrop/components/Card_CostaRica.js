import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import CostaRicaPng from "../assets/EventPage/CentralAmerica2.png";
import { responsiveFontSize, responsiveWidth, responsiveHeight } from "../utils/responsive";

const CostaRicaImage = () => {
    return <StyledImage source={CostaRicaPng} />;
};

const StyledImage = styled.Image`
    width: ${responsiveWidth(185)}px;
    height: ${responsiveHeight(283)}px;
`;

export default CostaRicaImage;
