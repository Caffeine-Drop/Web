import React, { useRef, useState } from "react";
import {
  Platform,
  ScrollView,
  Animated,
  PanResponder,
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../../utils/responsive";
import styled from "styled-components/native";
import BackIcon from "../../components/BackIcon";
import BlackTextCircle from "../../components/BlackTextCircle";
import BlurIcon from "../../components/BlurIcon";
import { LinearGradient } from "expo-linear-gradient";
import RoastingLevel from "../../components/EventPageRoastingLevel";
import EventPageTastingNote from "../../components/EventPageTastingNote";

import BrazilImage from "../../components/Card_Brazil";
import ColombiaImage from "../../components/Card_Colombia";
import CostaRicaImage from "../../components/Card_CostaRica";
import EthiopiaImage from "../../components/Card_Ethiopia";
import GuatemalaImage from "../../components/Card_Guatemala";
import IndonesiaImage from "../../components/Card_Indonesia";
import KenyaImage from "../../components/Card_Kenya";
import VietnamImage from "../../components/Card_Vietnam";

import { Dimensions } from "react-native";

// 화면 너비 가져오기
const { width } = Dimensions.get("window");

// 태블릿 판별 기준 (보통 width가 600px 이상이면 태블릿)
const isTablet = width >= 600;

export default function EventPage06({ navigation }) {
  return (
    <Container>
      <InnerContainer>
        <Navbar>
          <IconWrapper>
            <BackIcon />
          </IconWrapper>
          <Title>원두 진단하기</Title>
        </Navbar>

        {/* Scrollable Content */}
        <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
          <Content>
            <GreyColorBox>
              <TextContainer>
                <HeaderContainer>
                  <HeaderText>나만의{"\n"}테이스팅 노트</HeaderText>
                </HeaderContainer>

                <ContentContainer>
                  <ContentText>
                    로스팅 정도에 따라 향, 산미, 바디감, 쓴맛 등이{"\n"}
                    강하게 나타날 수 있어요
                  </ContentText>
                </ContentContainer>
              </TextContainer>
              {/* //////////////////////////////// */}
              <View>
                <EventPageTastingNote />
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: responsiveWidth(12),
                  paddingBottom: responsiveHeight(36),
                  paddingLeft: responsiveWidth(24),
                  paddingRight: responsiveWidth(24),
                }}
              >
                <LoastingDegree>
                  <LoastingDegreeContent>
                    <LoastingDegreeText>
                      로스팅 정도(SCAA 기준)
                    </LoastingDegreeText>
                    <LoastingDegreeText>|</LoastingDegreeText>
                    <LoastingDegreeLateText>시나몬</LoastingDegreeLateText>
                  </LoastingDegreeContent>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <LoastingDegreeLate>2</LoastingDegreeLate>
                    <LoastingDegreeText>/8</LoastingDegreeText>
                  </View>
                </LoastingDegree>
                <RoastingLevel score={2} maxScore={8} />
              </View>
              {/* //////////////////////////////// */}
            </GreyColorBox>

            <ResultCardWrapper>
              <ResultHeaderBox>
                <InnerText>당신에게 가장{"\n"}잘 어울리는 원두는?</InnerText>
              </ResultHeaderBox>

              <ResultContentBox>
                <BrazilImage />
              </ResultContentBox>
            </ResultCardWrapper>
          </Content>

          <Footer>
            <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
              <ButtonWrapper>
                <ButtonText>완료하기</ButtonText>
              </ButtonWrapper>
            </TouchableOpacity>
          </Footer>
        </ScrollView>
      </InnerContainer>
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  height: 100%;
  background: #fafafa;

  overflow: hidden;
`;
const InnerContainer = styled.View`
  flex: 1;
`;

const Navbar = styled.View`
  display: flex;
  flex-direction: row;
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
  font-size: ${responsiveFontSize(18)}px;
  line-height: ${responsiveHeight(24.84)}px;
  letter-spacing: -0.45px;
  color: #000;
  text-align: center;
  font-family: PretendardSemiBold;
  font-style: normal;
  font-weight: 600;
`;

//////////////////////////////////////////////
const Content = styled.View`
  flex: 1;
  width: 100%;
`;

//////////////////////////////////////////////
const GreyColorBox = styled.View`
  background-color: #f1f1f1;
`;
const TextContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: ${responsiveHeight(12)}px;
  margin-top: ${responsiveWidth(39)}px;
  margin-left: ${responsiveWidth(24)}px;
  margin-right: ${responsiveWidth(24)}px;
  margin-bottom: ${responsiveWidth(32)}px;
`;
const HeaderContainer = styled.View``;

const HeaderText = styled.Text`
  color: #000;
  text-align: center;
  font-family: PretendardSemiBold;
  font-size: ${responsiveFontSize(28)}px;
  font-style: normal;
  font-weight: 600;
  line-height: ${responsiveHeight(38.64)}px;
  letter-spacing: -0.7px;
`;
const ContentContainer = styled.View``;
const ContentText = styled.Text`
  color: #000;
  font-family: PretendardRegular;
  font-style: normal;
  font-weight: 400;
  line-height: ${responsiveHeight(19.32)}px;
  font-size: ${responsiveFontSize(14)}px;
  text-align: center;
  letter-spacing: -0.35px;
`;
////////////////////////////////////////////
const ResultCardWrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${responsiveHeight(32)}px;
  margin-top: ${responsiveHeight(50)}px;
  margin-left: ${responsiveWidth(24)}px;
  margin-right: ${responsiveWidth(24)}px;
`;
const ResultHeaderBox = styled.View``;
const InnerText = styled.Text`
  text-align: center;
  color: #000;
  text-align: center;
  font-family: PretendardSemiBold;
  font-size: ${responsiveFontSize(28)}px;
  font-style: normal;
  font-weight: 600;
  line-height: ${responsiveHeight(42)}px;
  letter-spacing: -0.7px;
`;
const ResultContentBox = styled.View`
  justify-content: center;
`;
//////////////////////////////////////////////
const LoastingDegree = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LoastingDegreeContent = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${responsiveWidth(6)}px;
`;

const LoastingDegreeText = styled.Text`
  color: #666;
  font-family: "PretendardMedium";
  font-size: ${responsiveFontSize(12)}px;
  line-height: ${responsiveHeight(16.56)}px;
  letter-spacing: -0.3px;
`;

const LoastingDegreeLate = styled.Text`
  color: #321900;
  font-family: "PretendardMedium";
  font-size: ${responsiveFontSize(12)}px;
  line-height: ${responsiveHeight(16.56)}px;
  letter-spacing: -0.3px;
`;

const LoastingDegreeLateText = styled.Text`
  color: #000;
  font-family: "PretendardMedium";
  font-size: ${responsiveFontSize(12)}px;
  line-height: ${responsiveHeight(16.56)}px;
  letter-spacing: -0.3px;
`;
//////////////////////////////////////////////
const Footer = styled.View`
  position: absolute;
  top: ${isTablet ? responsiveHeight(1040) : responsiveHeight(965)}px;
  width: 100%;
  display: inline-flex;
  padding: 0px 24px 58px 24px;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background: #fafafa;
  z-index: 20;
`;

const ButtonText = styled.Text`
  color: #fafafa;
  font-family: PretendardBold;
  font-size: ${responsiveFontSize(16)}px;
  font-style: normal;
  font-weight: 700;
  line-height: ${responsiveHeight(22.08)}px;
  letter-spacing: -0.4px;
`;

const ButtonWrapper = styled.View`
  display: flex;
  width: ${responsiveWidth(312)}px;
  padding-top: ${isTablet ? responsiveHeight(17) : responsiveHeight(16)}px;
  padding-bottom: ${isTablet ? responsiveHeight(17) : responsiveHeight(16)}px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background-color: #756555;
`;
