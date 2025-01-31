import React from "react";
import styled from "styled-components/native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../utils/responsive";
import { useFonts } from ".././styles";

import { Dimensions, TouchableOpacity } from "react-native";

// 화면 크기 가져오기
const { width, height } = Dimensions.get("window");

// 태블릿 판별 기준 (보통 width가 600px 이상이면 태블릿)
const isTablet = width >= 600;

const NicknameInput = ({ value, onChangeText }) => {
  const fontsLoaded = useFonts();

  if (!fontsLoaded) {
    return null;
  }

  const handleToggle = () => {
    setIsEnabled(!isEnabled);
  };

  return (
    <Container>
      <TextWrapper>
        <Text>닉네임</Text>
        <Score>0/20</Score>
      </TextWrapper>

      <InputWrapper>
        <ContentInput
          placeholder="닉네임을 입력해주세요"
          multiline
          value={value}
          onChangeText={onChangeText}
        />
      </InputWrapper>

      <CheckButton>
        <ButtonText>중복확인</ButtonText>
      </CheckButton>
    </Container>
  );
};

export default NicknameInput;

const Container = styled.View`
  display: flex;
  margin-top: ${responsiveHeight(200)}px;
  margin-left: ${responsiveWidth(24)}px;
  margin-right: ${responsiveWidth(24)}px;
  gap: ${responsiveHeight(18)}px;
  background: #fafafa;
`;
const TextWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #fafafa;
`;
const Text = styled.Text`
  color: #000;
  font-family: PretendardBold;
  font-size: ${responsiveFontSize(16)}px;
  font-style: normal;
  font-weight: 700;
  line-height: ${responsiveHeight(22.08)}px;
  letter-spacing: -0.4px;
`;
const Score = styled.Text`
  color: #666;
  text-align: right;
  font-family: PretendardRegular;
  font-size: ${responsiveFontSize(14)}px;
  font-style: normal;
  font-weight: 400;
  line-height: ${responsiveHeight(19.32)}px;
  letter-spacing: -0.35px;
`;
const InputWrapper = styled.View`
  display: flex;
  padding-left: ${responsiveWidth(8)}px;
  padding-right: ${responsiveWidth(8)}px;
  padding-top: ${responsiveWidth(12)}px;
  padding-bottom: ${responsiveWidth(12)}px;
  background: #fafafa;

  border-bottom-width: 2px;
  border-bottom-color: #321900;
`;
const ContentInput = styled.TextInput`
  width: ${responsiveWidth(296)}px;
  height: ${responsiveHeight(22)}px;
  flex-shrink: 0;
  background: #fafafa;

  color: #666;
  font-family: PretendardRegular;
  font-size: ${responsiveFontSize(16)}px;
  font-style: normal;
  font-weight: 400;
  line-height: ${responsiveHeight(22.08)}px;
  letter-spacing: -0.4px;
`;
const CheckButton = styled(TouchableOpacity)`
  display: flex;
  padding-top: ${responsiveHeight(16)}px;
  padding-bottom: ${responsiveHeight(16)}px;
  justify-content: center;
  background: #ffffff;
`;
const ButtonText = styled.Text`
  color: #000;
  text-align: center;
  font-family: PretendardSemiBold;
  font-size: ${responsiveFontSize(16)}px;
  font-style: normal;
  font-weight: 600;
  line-height: ${responsiveHeight(22.08)}px;
  letter-spacing: -0.4px;
`;
