import React from "react";
import styled from "styled-components/native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../../utils/responsive";
import { useFonts } from "../../styles";

const Container = styled.View`
  height: ${responsiveHeight(200)}px;
  width: ${responsiveWidth(312)}px;

  margin-left: ${responsiveWidth(24)}px;
  margin-right: ${responsiveWidth(24)}px;
  margin-top: ${responsiveHeight(12)}px;

  padding-top: ${responsiveHeight(16)}px;
  padding-bottom: ${responsiveHeight(16)}px;

  border-top-width: 1px;
  border-top-color: #d9d9d9;
  border-bottom-width: 1px;
  border-bottom-color: #d9d9d9;

  display: flex;
  justify-content: center;
`;

const ContentInput = styled.TextInput`
  height: ${responsiveHeight(200)}px;
  width: ${responsiveWidth(310)}px;

  justify-content: center;
  padding-left: ${responsiveWidth(12)}px;
  padding-right: ${responsiveWidth(12)}px;

  color: #666;
  font-family: PretendardMedium;
  font-size: ${responsiveFontSize(12)}px;
  font-style: normal;
  font-weight: 500;
  line-height: ${responsiveHeight(16.56)}px;
  letter-spacing: -0.3px;
`;

const InputText = ({ value, onChangeText }) => {
  const fontsLoaded = useFonts();

  if (!fontsLoaded) {
    return null;
  }

  const handleToggle = () => {
    setIsEnabled(!isEnabled);
  };

  return (
    <Container>
      <ContentInput
        placeholder="내용을 입력해주세요."
        multiline
        value={value}
        onChangeText={onChangeText}
        textAlignVertical="top"
      />
    </Container>
  );
};

export default InputText;
