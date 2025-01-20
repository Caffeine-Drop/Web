import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import IndonesiaPng from "../assets/EventPage/Asia2.png";
import { responsiveFontSize, responsiveWidth, responsiveHeight } from "../utils/responsive";

const IndonesiaImage = () => {
    return <StyledImage source={IndonesiaPng} />;
};

const StyledImage = styled.Image`
    width: ${responsiveWidth(185)}px;
    height: ${responsiveHeight(283)}px;
`;

export default IndonesiaImage;
