import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../../utils/responsive";

import EmptyIcon from "../../assets/DetailPage/EmptyIcon.svg";

export default function DetailPageEmpty({
  mainText1,
  mainText2,
  subText1,
  subText2,
  selectedTab,
}) {
  return (
    <Container>
      {selectedTab === "review" && (
        <Header>
          <ReviewTitle>
            <Title>이용자 리뷰</Title>
            <ReviewCount>0건</ReviewCount>
          </ReviewTitle>
        </Header>
      )}
      <ContentContainer>
        <EmptyIcon />
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            gap: responsiveHeight(16),
          }}
        >
          <View>
            <MainText1>{mainText1}</MainText1>
            <MainText1>{mainText2}</MainText1>
          </View>
          <View>
            <SubText>{subText1}</SubText>
            <SubText>{subText2}</SubText>
          </View>
        </View>
      </ContentContainer>
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  padding: ${responsiveHeight(28.5)}px 0 0;
  background-color: #fafafa;
`;

const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${responsiveWidth(24)}px 0 ${responsiveWidth(24)}px;
`;

const ReviewTitle = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: ${responsiveHeight(12)}px;
  gap: ${responsiveWidth(8)}px;
`;

const Title = styled.Text`
  color: #000;
  font-family: "PretendardSemiBold";
  font-size: ${responsiveFontSize(16)}px;
  line-height: ${responsiveFontSize(22.08)}px;
  letter-spacing: -0.4px;
  text-transform: uppercase;
`;

const ReviewCount = styled.Text`
  color: #666;
  text-align: center;
  font-family: "PretendardMedium";
  font-size: ${responsiveFontSize(14)}px;
  line-height: ${responsiveFontSize(19.32)}px;
  letter-spacing: -0.35px;
  text-transform: uppercase;
`;

const ContentContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${responsiveHeight(64)}px ${responsiveHeight(104.5)}px
    ${responsiveHeight(167)}px;
  gap: ${responsiveHeight(36)}px;
`;

const MainText1 = styled.Text`
  color: #000;
  text-align: center;
  font-family: "PretendardSemiBold";
  font-size: ${responsiveFontSize(20)}px;
  line-height: ${responsiveFontSize(27.6)}px;
  letter-spacing: -0.5px;
  text-transform: uppercase;
`;

const SubText = styled.Text`
  color: #666;
  text-align: center;
  font-family: "PretendardMedium";
  font-size: ${responsiveFontSize(14)}px;
  line-height: ${responsiveFontSize(19.32)}px;
  letter-spacing: -0.35px;
  text-transform: uppercase;
`;
