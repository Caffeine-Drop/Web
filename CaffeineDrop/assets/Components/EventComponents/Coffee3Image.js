import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import CoffeePng3 from "../../EventImg/coffee3.png";

const Coffee3Image = () => {
    return <StyledImage source={CoffeePng3} />;
};

const StyledImage = styled.Image`
    width: 7.75rem;
    height: 11rem;
`;

export default Coffee3Image;
