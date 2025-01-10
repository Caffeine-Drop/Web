import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import CoffeePng1 from "../../event02png/coffee1.png";

const Coffee1Image = () => {
    return <StyledImage source={CoffeePng1} />;
};

const StyledImage = styled.Image`
    width: 7.75rem;
    height: 11rem;
`;

export default Coffee1Image;
