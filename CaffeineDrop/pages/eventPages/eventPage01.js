import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../../utils/responsive";
import BackIcon from "../../components/BackIcon";
import Drip from "../../components/eventPage/Drip";

import { Dimensions } from "react-native";

// 화면 크기 가져오기
const { width, height } = Dimensions.get("window");

// 태블릿 판별 기준 (보통 width가 600px 이상이면 태블릿)
const isTablet = width >= 600;

export default function EventPage01({ navigation }) {
  return (
    <Container>
      <InnerContainer>
        <Navbar>
          <IconWrapper>
            <BackIcon />
          </IconWrapper>
          <Title>원두 진단하기</Title>
        </Navbar>

        <Content>
          <DripWrapper>
            <Drip />
          </DripWrapper>

          <TextContainer>
            <HeaderWrapper>
              <HeaderText>나만의 원두 찾기</HeaderText>
            </HeaderWrapper>
            <ContentWrapper>
              <ContentText>
                쉽게 풀어쓴 테이스팅 노트로
                {"\n"}
                나만의 원두를 찾아보세요
              </ContentText>
            </ContentWrapper>
          </TextContainer>
        </Content>

        <Footer>
          <ButtonWrapper onPress={() => navigation.navigate("EventPage02")}>
            <ButtonText>시작하기</ButtonText>
          </ButtonWrapper>
        </Footer>
      </InnerContainer>
    </Container>
  );
}

/*
top: ${responsiveHeight(109.56)}px;
right: ${responsiveWidth(26.04)}px;
font-size: ${responsiveFontSize(18)}px;
*/

const Container = styled.View`
  width: 100%;
  height: 100%;
  background: #fafafa;
`;
const InnerContainer = styled.View`
  flex: 1;
  margin-bottom: ${responsiveHeight(24)}px;
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
  line-height: ${responsiveFontSize(24)}px;
  letter-spacing: -0.5px;
`;
////////////////////////////////////////////////////
const Content = styled.View`
  flex: 1;
  width: 100%;
`;
const DripWrapper = styled.View`
  position: absolute;
  top: ${isTablet
    ? height / 2 - responsiveHeight(300)
    : responsiveHeight(115)}px;
  right: ${responsiveWidth(50)}px;
`;
//////////////////////////////////////////
const TextContainer = styled.View`
  width: 100%;
  height: ${responsiveHeight(98)}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${responsiveHeight(16)}px;
  margin-top: ${isTablet ? responsiveHeight(404) : responsiveHeight(384)}px;
`;

const HeaderWrapper = styled.View`
  width: auto;
  height: auto;
  justify-content: center;
  align-items: center;
  overflow: visible;
`;
const HeaderText = styled.Text`
  color: #000;
  text-align: center;
  font-family: PretendardSemiBold;
  font-size: ${responsiveFontSize(32)}px;
  font-style: normal;
  font-weight: 600;
  line-height: ${responsiveHeight(44.16)}px;
  letter-spacing: -0.8px;
`;
const ContentWrapper = styled.View``;
const ContentText = styled.Text`
  color: #000;
  text-align: center;
  font-family: PretendardRegular;
  font-size: ${responsiveFontSize(14)}px;
  font-style: normal;
  font-weight: 400;
  line-height: ${responsiveHeight(19.32)}px;
  letter-spacing: -0.35px;
  align-self: stretch;
`;
////////////////////////////////////////////////////
const Footer = styled.View`
  height: ${responsiveHeight(70)}px;
  display: flex;
  padding: 0 ${responsiveWidth(24)}px ${responsiveHeight(16)}px
    ${responsiveWidth(24)}px;
  flex-direction: column;
  gap: ${responsiveHeight(8)}px;
`;

const ButtonWrapper = styled(TouchableOpacity)`
  display: flex;
  padding: ${responsiveHeight(16)}px 0;
  justify-content: center;
  align-items: center;
  gap: ${responsiveHeight(10)}px;
  border-radius: ${responsiveWidth(12)}px;
  background: #756555;
  text-align: center;
`;

const ButtonText = styled.Text`
  color: #fafafa;
  font-family: PretendardBold;
  font-size: ${responsiveFontSize(16)}px;
  font-style: normal;
  font-weight: 700;
  line-height: ${responsiveFontSize(22)}px;
  letter-spacing: -0.4px;
`;
