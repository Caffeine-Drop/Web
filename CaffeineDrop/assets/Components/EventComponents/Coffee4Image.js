import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import CoffeePng4 from "../../EventImg/coffee4.png";

const Coffee4Image = () => {
    return <StyledImage source={CoffeePng4} />;
};

const StyledImage = styled.Image`
    width: 7.75rem;
    height: 11rem;
`;

export default Coffee4Image;
