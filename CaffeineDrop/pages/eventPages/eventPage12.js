// 스페셜티 커피란?
import React from "react";
import { ScrollView, View, Text, Button, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import BackIcon from "../../components/BackIcon";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../../utils/responsive";
import SpecialPageCircle from "../../components/SpecialPage_circle";

import { Dimensions } from "react-native";

// 화면 너비 가져오기
const { width } = Dimensions.get("window");

// 태블릿 판별 기준 (보통 width가 600px 이상이면 태블릿)
const isTablet = width >= 600;

export default function EventPage12({ navigation }) {
  return (
    <Container>
      <InnerContainer>
        <Navbar>
          <IconWrapper>
            <BackIcon />
          </IconWrapper>
          <Title>스페셜티 커피란?</Title>
        </Navbar>

        {/* Scrollable Content */}
        <ScrollView>
          <Content>
            <TextBox>
              <CoffeeDef>
                <TtileText>스페셜티 커피의 정의</TtileText>
              </CoffeeDef>
              <Description>
                <ContentText>
                  스페셜티 커피는 스페셜티 커피 협회 (Specialty Coffee
                  Association)에서 정한 스페셜티 기준에 따라 커피를 평가하여
                  100점 중 80점 이상의 커피에 대하여 스페셜티 커피라고 등급이
                  정해지며, 비로소 스페셜티 커피로 인정 받을 수 있다.
                </ContentText>
              </Description>
            </TextBox>

            <RankTitle>
              <TtileText>스페셜티 협회의{"\n"}원두 등급</TtileText>
            </RankTitle>

            <RankingTable>
              <Rank>
                <CircleWrapper>
                  <SpecialPageCircle fill="#825A32" />
                </CircleWrapper>
                <Score>
                  <ScoreText>100점</ScoreText>
                </Score>
                <ScoreTitle>
                  <TopScoreText>최고점</TopScoreText>
                </ScoreTitle>
              </Rank>

              <Rank>
                <CircleWrapper>
                  <SpecialPageCircle fill="#321900" />
                </CircleWrapper>
                <Score>
                  <ScoreText>90점~</ScoreText>
                </Score>
                <ScoreTitle>
                  <ScoreTitleText>나인티플러스(Ninety Plus)</ScoreTitleText>
                  <ScoreInfoText>
                    스페셜티 커피 중 최고급, COE대회서 1~2위 급
                  </ScoreInfoText>
                </ScoreTitle>
              </Rank>

              <Rank>
                <CircleWrapper>
                  <SpecialPageCircle fill="#321900" />
                </CircleWrapper>
                <Score>
                  <ScoreText>80점~</ScoreText>
                </Score>
                <ScoreTitle>
                  <ScoreTitleText>
                    스페셜티 커피(Specialty Coffee)
                  </ScoreTitleText>
                  <ScoreInfoText>
                    특별한 지리조건과 기상조건 하에서 생산된 독특한 향의 원두
                  </ScoreInfoText>
                </ScoreTitle>
              </Rank>

              <Rank>
                <CircleWrapper>
                  <SpecialPageCircle fill="#825A32" />
                </CircleWrapper>
                <Score>
                  <ScoreText>75점~</ScoreText>
                </Score>
                <ScoreTitle>
                  <ScoreTitleText>프리미엄(Premium)</ScoreTitleText>
                  <ScoreInfoText>스페셜티보다 한 단계 낮은 커피</ScoreInfoText>
                </ScoreTitle>
              </Rank>

              <Rank>
                <CircleWrapper>
                  <SpecialPageCircle fill="#825A32" />
                </CircleWrapper>
                <Score>
                  <ScoreText>70점~</ScoreText>
                </Score>
                <ScoreTitle>
                  <ScoreTitleText>하이 커머셜(High Commercial)</ScoreTitleText>
                  <ScoreInfoText>
                    스페셜티보단 비싸진 않으면서 커머셜 원두보다 높은 품질의
                    원두
                  </ScoreInfoText>
                </ScoreTitle>
              </Rank>

              <Rank>
                <CircleWrapper>
                  <SpecialPageCircle fill="#E5E3E1" />
                </CircleWrapper>
                <Score>
                  <ScoreText>~70점</ScoreText>
                </Score>
                <ScoreTitle>
                  <ScoreTitleText>커머셜(Commercial)</ScoreTitleText>
                  <ScoreInfoText>
                    가격이 저렴하여 인스턴트 커피 등 대량 생산에 사용되는 원두
                  </ScoreInfoText>
                </ScoreTitle>
              </Rank>
            </RankingTable>
          </Content>

          <Footer>
            <ButtonWrapper onPress={() => navigation.navigate("HomeScreen")}>
              <ButtonText>완료하기</ButtonText>
            </ButtonWrapper>
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
`;
const InnerContainer = styled.View`
  flex: 1;
  margin-top: ${responsiveHeight(38)}px;
  margin-bottom: ${responsiveHeight(42)}px;
`;

const Navbar = styled.View`
  height: ${responsiveHeight(56)}px;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
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
  line-height: ${responsiveHeight(22.08)}px;
  letter-spacing: -0.45px;
`;

/////////////////////////////////////////////////
const Content = styled.View`
  flex: 1;
  width: 100%;
`;
const TextBox = styled.View`
  display: flex;
  gap: ${responsiveHeight(16)}px;
  margin-left: ${responsiveWidth(24)}px;
  margin-right: ${responsiveWidth(24)}px;
  margin-top: ${responsiveHeight(24)}px;
`;
const CoffeeDef = styled.View`
  /*스페셜티 커피의 정의*/
`;
const TtileText = styled.Text`
  /*스페셜티 커피의 정의*/
  color: #000;
  font-family: PretendardSemiBold;
  font-size: ${responsiveFontSize(24)}px;
  font-style: normal;
  font-weight: 600;
  line-height: ${responsiveHeight(33)}px;
  letter-spacing: -0.6px;
`;
const Description = styled.View`
  /*설명*/
`;
const ContentText = styled.Text`
  /*설명*/
  color: #000;
  font-family: PretendardRegular;
  font-size: ${responsiveFontSize(12)}px;
  font-style: normal;
  font-weight: 400;
  line-height: ${responsiveHeight(18)}px;
  letter-spacing: -0.8px;
`;

/////////////////////////////////////////////////
const RankTitle = styled.View`
  /*원두 등급*/
  margin-left: ${responsiveWidth(24)}px;
  margin-top: ${responsiveHeight(32)}px;
`;
const RankingTable = styled.View`
  margin-left: ${responsiveWidth(32)}px;
  margin-top: ${responsiveHeight(24)}px;
  margin-right: ${responsiveWidth(24)}px;
  margin-bottom: ${responsiveWidth(12)}px;
  gap: ${responsiveHeight(4)}px;
`;
const Rank = styled.View`
  display: flex;
  flex-direction: row;
  gap: ${responsiveWidth(12)}px;
  padding-left: ${responsiveWidth(16)}px;
  padding-bottom: ${responsiveHeight(16)}px;
  margin-left: ${responsiveWidth(8)}px;
  flex-wrap: wrap;

  border-left-width: 2px;
  border-left-color: #e5e3e1;
  border-left-style: solid;
`;
const CircleWrapper = styled.View`
  position: absolute;
  top: 0px;
  left: ${isTablet ? responsiveWidth(-4.6) : responsiveWidth(-5)}px;
`;
const TopScoreText = styled.Text`
  color: #999;
  font-family: PretendardMedium;
  font-size: ${responsiveFontSize(14)}px;
  font-style: normal;
  font-weight: 500;
  line-height: ${responsiveHeight(19.32)}px;
  letter-spacing: -0.35px;
`;
const Score = styled.View``;
const ScoreText = styled.Text`
  color: #333;
  font-family: PretendardRegular;
  font-size: ${responsiveFontSize(14)}px;
  font-style: normal;
  font-weight: 400;
  line-height: ${responsiveHeight(19.32)}px;
  letter-spacing: -0.35px;
`;
const ScoreTitle = styled.View`
  gap: ${responsiveHeight(4)}px;
  flex: 1;
  width: 100%;
`;
const ScoreTitleText = styled.Text`
  color: #000;
  font-family: PretendardSemiBold;
  font-size: ${responsiveFontSize(14)}px;
  font-style: normal;
  font-weight: 600;
  line-height: ${responsiveHeight(19.32)}px;
  letter-spacing: -0.35px;
`;
const ScoreInfoText = styled.Text`
  color: #666;
  font-family: PretendardMedium;
  font-size: ${responsiveFontSize(12)}px;
  font-style: normal;
  font-weight: 500;
  line-height: ${responsiveHeight(14.49)}px;
  letter-spacing: -0.3px;
  flex-wrap: wrap;
`;
/////////////////////////////////////////////////
const Footer = styled.View`
  padding: 0 ${responsiveWidth(24)}px ${responsiveHeight(16)}px
    ${responsiveWidth(24)}px;
  margin-top: ${isTablet ? responsiveHeight(12) : responsiveHeight(12)}px;
`;

const ButtonWrapper = styled(TouchableOpacity)`
  display: flex;
  padding: ${responsiveHeight(16)}px 0;
  justify-content: center;
  align-items: center;
  gap: ${responsiveHeight(10)}px;
  padding-top: ${responsiveHeight(16)}px;
  padding-bottom: ${responsiveHeight(16)}px;

  border-radius: ${responsiveWidth(12)}px;
  background: #756555;
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
