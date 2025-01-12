import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import blurpng from "../../EventImg/Blur.png";
import { responsiveFontSize, responsiveWidth, responsiveHeight } from "../utils/responsive";

const BlurImage = () => {
    return <StyledImage source={blurpng} />;
};

const StyledImage = styled.Image`
    width: ${responsiveHeight(180)}px;
    height: ${responsiveWidth(180)}px;
`;

export default BlurImage;
