import React from "react";

import { View, Text, Image } from "react-native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../../utils/responsive";
import styled from "styled-components/native";

export default function DetailPageCategory({ apiData }) {
  console.log(apiData.address ? apiData.address : "주소 없음");
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
            <CategoryText>주차장</CategoryText>
          </Category>
        </CategoryList>
      </CategoryContainer>
      <TelContainer>
        <Tel>
          <TelText>
            <Text>전화번호</Text>
          </TelText>
          <TelNumber>
            <Text>
              {apiData.phone_number ? apiData.phone_number : "전화번호 없음"}
            </Text>
          </TelNumber>
        </Tel>
      </TelContainer>
      <BusinessHourContainer>
        <BusinessHourText>
          <Text>영업시간</Text>
        </BusinessHourText>
        <BusinessHourList>
          {apiData.operating_hours.map((hour, index) => (
            <BusinessHour key={index}>
              <BusinessHourDay>{hour.day_of_week}</BusinessHourDay>
              <Separator>|</Separator>
              <BusinessHourTime>
                {hour.open_time && hour.close_time
                  ? `${new Date(hour.open_time).toLocaleTimeString("ko-KR", {
                      timeZone: "UTC",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: false,
                    })} ~ ${new Date(hour.close_time).toLocaleTimeString(
                      "ko-KR",
                      {
                        timeZone: "UTC",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: false,
                      }
                    )}`
                  : "휴무"}
              </BusinessHourTime>
            </BusinessHour>
          ))}
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
  justify-content: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
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
  text-align: left;
  font-size: ${responsiveFontSize(14)}px;
  font-family: "PretendardMedium";
  line-height: ${responsiveFontSize(21)}px;
  letter-spacing: -0.35px;
`;
