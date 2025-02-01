import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import CoffeePng from "../assets/EventPage/Coffee.png";
import { responsiveWidth, responsiveHeight } from "../utils/responsive";

import { Dimensions } from "react-native";

// 화면 크기 가져오기
const { width, height } = Dimensions.get("window");

// 태블릿 판별 기준 (보통 width가 600px 이상이면 태블릿)
const isTablet = width >= 600;

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
  height: ${isTablet ? responsiveHeight(205) : responsiveHeight(153)}px;
`;

export default CoffeeImage;
