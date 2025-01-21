import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import ColombiaPng from "../assets/EventPage/SouthAmerica2.png";
import { responsiveFontSize, responsiveWidth, responsiveHeight } from "../utils/responsive";

const ColombiaImage = () => {
    return <StyledImage source={ColombiaPng} />;
};

const StyledImage = styled.Image`
    width: ${responsiveWidth(185)}px;
    height: ${responsiveHeight(283)}px;
`;

export default ColombiaImage;
