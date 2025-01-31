import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../../utils/responsive";
import BackIcon from "../../components/BackIcon";
import DefaultSettingImage from "../../components/DefaultSettingImage";
import { useFonts } from "../../styles";
import { useNavigation } from "@react-navigation/native";

import { Dimensions } from "react-native";
import EditIcon from "../../components/EditIcon";
import NicknameInput from "../../components/NicknameInput";

// 화면 너비 가져오기
const { width } = Dimensions.get("window");

// 태블릿 판별 기준 (보통 width가 600px 이상이면 태블릿)
const isTablet = width >= 600;

export default function SettingPage05({ navigation }) {
  const fontsLoaded = useFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Container>
      <FirstBox>
        <Navbar>
          <IconWrapper>
            <BackIcon />
          </IconWrapper>
          <Title>프로필 관리</Title>
        </Navbar>

        <Box1>
          <ImageBox>
            <DefaultSettingImage />
          </ImageBox>
          <EditIconWrapper>
            <EditIcon />
          </EditIconWrapper>

          <NicknameInput />

          <SaveButton>
            <ButtonText>저장하기</ButtonText>
          </SaveButton>
        </Box1>
      </FirstBox>
    </Container>
  );
}

/*
top: ${responsiveHeight(109.56)}px;
right: ${responsiveWidth(26.04)}px;
font-size: ${responsiveFontSize(18)}px;
*/

const Container = styled.View`
  flex: 1;
  width: ${responsiveWidth(360)}px;
  height: ${responsiveHeight(340)}px;
  background: #fafafa;
`;
const FirstBox = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
`;
const Navbar = styled.View`
  height: ${responsiveHeight(56)}px;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  margin-top: ${responsiveHeight(38)}px;
`;
const IconWrapper = styled.View`
  position: absolute;
  left: ${responsiveWidth(24)}px;
`;
const Title = styled.Text`
  color: #000;
  text-align: center;
  font-family: PretendardSemiBold;
  font-size: ${responsiveFontSize(18)}px;
  font-style: normal;
  font-weight: 600;
  line-height: ${responsiveHeight(24)}px;
  letter-spacing: -0.5px;
`;
////////////////////////////////////////////////////
const Box1 = styled.View`
  flex: 1;
  justify-content: center;
  background: #fafafa;
`;
const ImageBox = styled.View`
  position: absolute;
  left: ${isTablet ? width / 2 - responsiveWidth(50) : responsiveWidth(130)}px;
  top: ${responsiveHeight(54)}px;
`;
const EditIconWrapper = styled.View`
  position: absolute;
  left: ${responsiveHeight(200)}px;
  top: ${responsiveHeight(129)}px;
`;
////////////////////////////////////////////////////
const SaveButton = styled(TouchableOpacity)`
  background: #f1f1f1;
  display: flex;
  margin-left: ${responsiveWidth(24)}px;
  margin-right: ${responsiveWidth(24)}px;
  padding-top: ${responsiveHeight(16)}px;
  padding-bottom: ${responsiveHeight(16)}px;
  border-radius: 12px;

  margin-top: ${responsiveHeight(218)}px;
`;
const ButtonText = styled.Text`
  text-align: center;

  color: #999;
  font-family: PretendardSemiBold;
  font-size: ${responsiveFontSize(16)}px;
  font-style: normal;
  font-weight: 600;
  line-height: ${responsiveHeight(22.08)}px;
  letter-spacing: -0.4px;
`;
