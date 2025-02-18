import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../../utils/responsive";

const RoastingLevel = ({ score, maxScore }) => {
  const levels = Array.from({ length: maxScore }, (_, i) => i < score);

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Container>
        <Separator />
        {levels.map((isFilled, index) => (
          <BoxWrapper key={index}>
            <Box filled={isFilled} />
            {index < maxScore - 1 && <Separator />}
          </BoxWrapper>
        ))}
        <Separator />
      </Container>
    </View>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const BoxWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Box = styled.View`
  width: ${responsiveWidth(24.5)}px;
  height: ${responsiveHeight(4)}px;
  background-color: ${(props) => (props.filled ? "black" : "#EBEBEB")};
`;

const Separator = styled.View`
  width: ${responsiveWidth(2)}px;
  height: ${responsiveHeight(8)}px;
  background-color: #d9d9d9;
  margin-horizontal: ${responsiveWidth(1)}px;
`;

export default RoastingLevel;
