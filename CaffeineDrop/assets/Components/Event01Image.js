import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import Event01Png from "../event01.png";

const Event01Image = () => {
    return <StyledImage source={Event01Png} />;
};

const StyledImage = styled.Image`
    width: 24.68519rem;
    height: 26.28906rem;
`;

export default Event01Image;
