import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import { responsiveWidth, responsiveHeight } from "../utils/responsive";

const StyledImageWrapper = styled.View`
  width: ${responsiveWidth(318)}px;
  height: ${responsiveHeight(318)}px;
  flex-shrink: 0;
  border-radius: 318px;
  overflow: hidden;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 318px;
`;

const SettingPageBlur2 = () => (
  <StyledImageWrapper>
    <StyledImage source={require("../assets/EventPage/SettingPageBlur2.png")} />
  </StyledImageWrapper>
);

export default SettingPageBlur2;
