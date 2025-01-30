import React from "react";

import { View, Text, Image } from "react-native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../utils/responsive";
import styled from "styled-components/native";

export default function DetailPageCategory() {
  return (
    <Container>
      <CategoryContainer>
          <CategoryTitle>카페 분류</CategoryTitle>
        <CategoryList>
          <Category>
            {/* 여기 부분에 카테고리 가져오면 텍스트 길이에 따라 자동으로 감싸짐*/}
            <CategoryText>무인</CategoryText>
          </Category>
          <Category>
            {/* 여기 부분에 카테고리 가져오면 텍스트 길이에 따라 자동으로 감싸짐*/}
            <CategoryText>프랜차이즈123123123</CategoryText>
          </Category>
        </CategoryList>
      </CategoryContainer>
      <TelContainer>
        <Tel>
          <TelText>
            <Text>전화번호</Text>
          </TelText>
          <TelNumber>
            <Text>010-1234-5678</Text>
          </TelNumber>
        </Tel>
      </TelContainer>
      <BusinessHourContainer>
        <BusinessHourText>
          <Text>영업시간</Text>
        </BusinessHourText>
        <BusinessHourList>
          <BusinessHour>
            <BusinessHourDay>월</BusinessHourDay>
            <Separator>|</Separator>
            <BusinessHourTime>09:00 ~ 22:00</BusinessHourTime>
          </BusinessHour>
          <BusinessHour>
            <BusinessHourDay>화</BusinessHourDay>
            <Separator>|</Separator>
            <BusinessHourTime>09:00 ~ 22:00</BusinessHourTime>
          </BusinessHour>
          <BusinessHour>
            <BusinessHourDay>수</BusinessHourDay>
            <Separator>|</Separator>
            <BusinessHourTime>09:00 ~ 22:00</BusinessHourTime>
          </BusinessHour>
        </BusinessHourList>
      </BusinessHourContainer>
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  background-color: #fafafa;
  padding-bottom: ${responsiveHeight(20)}px;
`;

const CategoryContainer = styled.View`
  width: 100%;
  padding-top: ${responsiveHeight(20)}px;
  padding-left: ${responsiveWidth(24)}px;
  padding-right: ${responsiveWidth(24)}px;
`;

const CategoryTitle = styled.Text`
  font-size: ${responsiveFontSize(12)}px;
  font-weight: 500;
  line-height: ${responsiveFontSize(16.56)}px;
  letter-spacing: -0.3px;
  color: #000000;
  padding: 5px 0;
  border-bottom-width: 1px;
  border-bottom-color: #000000;
  align-self: flex-start;
`;

const CategoryList = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${responsiveWidth(6)}px;
  padding-top: ${responsiveHeight(12)}px;
  width: 100%;
`;

const Category = styled.View`
  padding: 4px 14px;
  height: ${responsiveHeight(27)}px;
  border-radius: ${responsiveWidth(41)}px;
  border: 0.5px solid #d9d9d9;
`;

const CategoryText = styled.Text`
  color: #333;
  font-family: "PretendardMedium";
  font-size: ${responsiveFontSize(14)}px;
  line-height: ${responsiveFontSize(19.32)}px;
  letter-spacing: -0.35px;
`;

const TelContainer = styled.View`
  width: 100%;
  height: ${responsiveHeight(46)}px;
  padding-top: ${responsiveHeight(16)}px;
  padding-left: ${responsiveWidth(24)}px;
  padding-right: ${responsiveWidth(24)}px;
`;

const Tel = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${responsiveWidth(20)}px;
`;

const TelText = styled.Text`
  font-size: ${responsiveFontSize(12)}px;
  font-family: "PretendardMedium";
  line-height: ${responsiveFontSize(16.56)}px;
  letter-spacing: -0.3px;
  color: #000000;
  padding: 5px 0;
  border-bottom-width: 1px;
  border-bottom-color: #000000;
  align-self: flex-start;
`;

const TelNumber = styled.Text`
  color: #000;
  font-size: ${responsiveFontSize(14)}px;
  font-family: "PretendardMedium";
  line-height: ${responsiveFontSize(19.32)}px;
  letter-spacing: -0.35px;
  text-transform: uppercase;
`;

const BusinessHourContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding-top: ${responsiveHeight(16)}px;
  padding-left: ${responsiveWidth(24)}px;
  padding-right: ${responsiveWidth(24)}px;
  gap: ${responsiveWidth(20)}px;
`;

const BusinessHourText = styled.Text`
  font-size: ${responsiveFontSize(12)}px;
  font-family: "PretendardMedium";
  line-height: ${responsiveFontSize(16.56)}px;
  letter-spacing: -0.3px;
  color: #000000;
  padding: 5px 0;
  border-bottom-width: 1px;
  border-bottom-color: #000000;
  align-self: flex-start;
`;

const BusinessHourList = styled.View`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  gap: ${responsiveWidth(20)}px;
`;

const BusinessHour = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${responsiveWidth(8)}px;
`;

const BusinessHourDay = styled.Text`
  color: #333;
  font-size: ${responsiveFontSize(14)}px;
  font-family: "PretendardRegular";
  line-height: ${responsiveFontSize(19.32)}px;
  letter-spacing: -0.35px;
`;

const Separator = styled.Text`
  color: #d9d9d9;
  font-size: ${responsiveHeight(15)}px;
`;

const BusinessHourTime = styled.Text`
  color: #000;
  font-size: ${responsiveFontSize(14)}px;
  font-family: "PretendardMedium";
  line-height: ${responsiveFontSize(21)}px;
  letter-spacing: -0.35px;
`;

