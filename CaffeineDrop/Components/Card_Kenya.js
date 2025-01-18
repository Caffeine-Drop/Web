import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import KenyaPng from "../assets/EventPage/Africa2.png";
import { responsiveFontSize, responsiveWidth, responsiveHeight } from "../utils/responsive";

const KenyaImage = () => {
    return <StyledImage source={KenyaPng} />;
};

const StyledImage = styled.Image`
    width: ${responsiveWidth(185)}px;
    height: ${responsiveHeight(283)}px;
`;

export default KenyaImage;
