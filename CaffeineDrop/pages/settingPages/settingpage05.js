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
import EditIcon from "../../components/EditIcon";
import NicknameInput from "../../components/NicknameInput";

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
          <IconContainer>
            <ImageBox>
              <DefaultSettingImage />
            </ImageBox>

            <EditIconWrapper>
              <EditIcon />
            </EditIconWrapper>
          </IconContainer>

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
  background: #fafafa;
`;
const FirstBox = styled.View`
  width: 100%;
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
  justify-content: center;
  background: #fafafa;
`;
const IconContainer = styled.View`
  position: relative;
`;

const ImageBox = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: ${responsiveHeight(54)}px;
`;

const EditIconWrapper = styled.View`
  position: relative;
  right: ${responsiveWidth(-197)}px;
  bottom: ${responsiveHeight(33)}px;
`;

////////////////////////////////////////////////////
const SaveButton = styled(TouchableOpacity)`
  background: #f1f1f1;
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
