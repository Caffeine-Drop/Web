import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import EthiopiaPng from "../assets/EventPage/Africa1.png";
import { responsiveFontSize, responsiveWidth, responsiveHeight } from "../utils/responsive";

const EthiopiaImage = () => {
    return <StyledImage source={EthiopiaPng} />;
};

const StyledImage = styled.Image`
    width: ${responsiveWidth(185)}px;
    height: ${responsiveHeight(283)}px;
`;

export default EthiopiaImage;
