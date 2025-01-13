import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import CoffeePng from "../assets/EventPage/Coffee.png";
import { responsiveFontSize, responsiveWidth, responsiveHeight } from "../utils/responsive";

const CoffeeImage = () => {
    return <StyledImage source={CoffeePng} />;
};

const StyledImage = styled.Image`
    width: ${responsiveWidth(456)}px;
    height: ${responsiveHeight(169)}px;
`;

export default CoffeeImage;
