import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import CoffeePng2 from "../../event02png/coffee2.png";

const Coffee2Image = () => {
    return <StyledImage source={CoffeePng2} />;
};

const StyledImage = styled.Image`
    width: 7.75rem;
    height: 11rem;
`;

export default Coffee2Image;
