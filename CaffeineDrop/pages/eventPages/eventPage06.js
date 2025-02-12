import React, { useRef, useState, useEffect } from "react";
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
import { LinearGradient } from "expo-linear-gradient";
import RoastingLevel from "../../components/eventPage/EventPageRoastingLevel";
import EventPageTastingNote from "../../components/eventPage/EventPageTastingNote";

import BrazilImage from "../../components/eventPage/Card_Brazil";
import ColombiaImage from "../../components/eventPage/Card_Colombia";
import CostaRicaImage from "../../components/eventPage/Card_CostaRica";
import EthiopiaImage from "../../components/eventPage/Card_Ethiopia";
import GuatemalaImage from "../../components/eventPage/Card_Guatemala";
import IndonesiaImage from "../../components/eventPage/Card_Indonesia";
import KenyaImage from "../../components/eventPage/Card_Kenya";
import VietnamImage from "../../components/eventPage/Card_Vietnam";

import { useRoute } from "@react-navigation/native";
import { Dimensions } from "react-native";

// 화면 너비 가져오기
const { width } = Dimensions.get("window");

// 태블릿 판별 기준 (보통 width가 600px 이상이면 태블릿)
const isTablet = width >= 600;

export default function EventPage06({ navigation }) {
  const route = useRoute();
  const recommendedCountry = route.params?.recommendedCountry;
  let selectedOption1 = route.params?.selectedOption1; //향
  let selectedOption2 = route.params?.selectedOption2; //산미
  let selectedOption3 = route.params?.selectedOption3; //쓴맛
  let selectedOption4 = route.params?.selectedOption4; //바디감

  useEffect(() => {
    console.log("가져온 추천 국가 = " + recommendedCountry);
    console.log("향 = " + selectedOption1);
    console.log("산미 = " + selectedOption2);
    console.log("바디감 = " + selectedOption4);
  }, [recommendedCountry]);

  // 국가별 이미지 매핑
  const countryImages = {
    Brazil: <BrazilImage />,
    Colombia: <ColombiaImage />,
    CostaRica: <CostaRicaImage />,
    Ethiopia: <EthiopiaImage />,
    Guatemala: <GuatemalaImage />,
    Indonesia: <IndonesiaImage />,
    Kenya: <KenyaImage />,
    Vietnam: <VietnamImage />,
  };

  let roastingLevel = 0;
  let roastingName = "";

  //로스팅 정도
  if (selectedOption3 == 5) {
    //쓴맛이 5점인가
    roastingName = "이탈리안";
    roastingLevel = 8;
  } else if (selectedOption4 == 5) {
    //바디감이 5점인가
    roastingName = "프랜치";
    roastingLevel = 7;
  } else if (selectedOption2 == 5) {
    //산도는 5점인가
    roastingName = "시나몬";
    roastingLevel = 2;
  } else {
    //다 아니면
    roastingName = "풀시티";
    roastingLevel = 6;
  }

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
        <ScrollView>
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
                <EventPageTastingNote
                  aroma={selectedOption1}
                  acidity={selectedOption2}
                  body={selectedOption4}
                />
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
                    <LoastingDegreeLateText>
                      {roastingName}
                    </LoastingDegreeLateText>
                  </LoastingDegreeContent>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <LoastingDegreeLate>
                      {roastingLevel.toFixed(1)}
                    </LoastingDegreeLate>
                    <LoastingDegreeText>/8</LoastingDegreeText>
                  </View>
                </LoastingDegree>
                <RoastingLevel score={roastingLevel} maxScore={8} />
              </View>
              {/* //////////////////////////////// */}
            </GreyColorBox>

            <ResultCardWrapper>
              <ResultHeaderBox>
                <InnerText>당신에게 가장{"\n"}잘 어울리는 원두는?</InnerText>
              </ResultHeaderBox>

              <ResultContentBox>
                {/* recommendedCountry가 존재하면 해당 이미지 표시 */}
                {recommendedCountry && countryImages[recommendedCountry] ? (
                  countryImages[recommendedCountry]
                ) : (
                  <Text>추천 원두가 없습니다.</Text>
                )}
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
  width: 100%;
  ${Platform.select({
    ios: `
        margin-top: ${responsiveHeight(10)}px;
    `,
    android: `
        margin-top: ${responsiveHeight(40)}px;
    `,
    web: `
        margin-top: ${responsiveHeight(965)}px;
    `,
  })}
  display: inline-flex;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 58px;

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
