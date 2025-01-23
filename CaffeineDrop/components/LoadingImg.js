import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import Loadingpng from "../assets/EventPage/Loading_Img.png";
import { responsiveFontSize, responsiveWidth, responsiveHeight } from "../utils/responsive";

const LoadingImg = () => {
    return <StyledImage source={Loadingpng} />;
};

const StyledImage = styled.Image`
    width: ${responsiveWidth(360)}px;
    height: ${responsiveHeight(311)}px;
`;

export default LoadingImg;
