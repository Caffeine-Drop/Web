import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import CoffeePng from "../assets/EventPage/Coffee.png";
import { responsiveWidth, responsiveHeight } from "../utils/responsive";

const CoffeeImage = () => {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Container>
                <StyledImage source={CoffeePng} />
            </Container>
        </ScrollView>
    );
};

const Container = styled.View`
    width: ${responsiveWidth(456)}px;
    justify-content: center;
    display: flex;
    margin-left: ${responsiveWidth(18)}px;
`;

const StyledImage = styled.Image`
    width: ${responsiveWidth(456)}px;
    height: ${responsiveHeight(144)}px;
`;

export default CoffeeImage;
