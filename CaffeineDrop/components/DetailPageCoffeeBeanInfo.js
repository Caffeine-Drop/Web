import React from "react";
import { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../utils/responsive";

// 이미지 임포트
import PlusIcon from "../assets/DetailPage/PlusIcon.svg";
import MinusIcon from "../assets/DetailPage/MinusIcon.svg";

// 컴포넌트 임포트
import RoastingLevel from "./DetailPageRoastingLevel";
import DetailPageTastingNote from "./DetailPageTastingNote";

// 원두 정보
// 추후 API 연동 시 원두 정보 어떻게 가져올 지 로직
// 원두 정보를 info 배열에 넣어서 가져오기
// 원두 분류에 블랜딩인지, 싱글인지에 따라 보여지는 정보가 달라짐
// 그 조건은 삼항 연산자로 처리
const coffeeBeans = [
  {
    id: 1,
    name: "C 타입 블랜딩",
    classification: ["블랜딩", "스페셜티 미인증"],
  },
  { id: 2, name: "D 타입 블랜딩", classification: ["싱글", "스페셜티 인증"] },
  // 다른 원두 정보를 추가하세요
];

export default function DetailPageCoffeeInfo() {
  const [visibleInfoIds, setVisibleInfoIds] = useState([]);

  const toggleInfoVisibility = (id) => {
    setVisibleInfoIds((prev) =>
      prev.includes(id) ? prev.filter((infoId) => infoId !== id) : [...prev, id]
    );
  };

  return (
    <Container>
      {coffeeBeans.map((bean) => (
        <CoffeeBeanInfo key={bean.id}>
          <TouchableOpacity onPress={() => toggleInfoVisibility(bean.id)}>
            <Number>{bean.id.toString().padStart(2, "0")}</Number>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <CoffeeBeanName>{bean.name}</CoffeeBeanName>
              {visibleInfoIds.includes(bean.id) ? (
                <MinusIcon
                  width={responsiveWidth(24)}
                  height={responsiveHeight(24)}
                />
              ) : (
                <PlusIcon
                  width={responsiveWidth(24)}
                  height={responsiveHeight(24)}
                />
              )}
            </View>
          </TouchableOpacity>
          {visibleInfoIds.includes(bean.id) && (
            // 여기부터 원두 분류
            <InfoContainer>
              <View style={{ gap: responsiveHeight(12) }}>
                <CoffeeBeanClassificationTitle>
                  원두 분류
                </CoffeeBeanClassificationTitle>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: responsiveWidth(8),
                  }}
                >
                  {bean.classification.map((classification, index) => (
                    <CoffeeBeanClassification
                      key={index}
                      classification={classification}
                    >
                      <CoffeeBeanClassificationText
                        classification={classification}
                      >
                        {classification}
                      </CoffeeBeanClassificationText>
                    </CoffeeBeanClassification>
                  ))}
                </View>
              </View>
              {/* 여기까지 원두 정보 */}
              {/* 여기부터 Cupping Note */}
              <View style={{ gap: responsiveHeight(12) }}>
                <CuppingNoteTitle>Cupping Note</CuppingNoteTitle>
                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: responsiveWidth(6),
                  }}
                >
                  <CuppingNote>
                    <Text style={{ fontSize: responsiveFontSize(14) }}>#호두</Text>
                  </CuppingNote>
                  <CuppingNote>
                    <Text style={{ fontSize: responsiveFontSize(14) }}>#코코아</Text>
                  </CuppingNote>
                </View>
              </View>
              {/* 여기까지 Cupping Note */}
              {/* 여기부터 비고 */}
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: responsiveWidth(12),
                }}
              >
                <NoteTitle>비고</NoteTitle>
                <Note>아메리카노, 라떼, 콜드브루 주문 시 선택 가능</Note>
              </View>
              {/* 여기까지 비고 */}
              {/* 원두 분류에 "싱글"이 포함되어 있으면 추가 정보 출력 */}
              {/* 여기부터 로스팅 정도 */}
              {bean.classification.includes("싱글") && (
                <>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: responsiveWidth(12),
                      paddingBottom: responsiveHeight(12),
                    }}
                  >
                    <LoastingDegreeTitle>로스팅 정도</LoastingDegreeTitle>
                    <LoastingDegree>
                      <LoastingDegreeContent>
                        <LoastingDegreeText>
                          로스팅 정도(SCAA 기준)
                        </LoastingDegreeText>
                        <LoastingDegreeText>|</LoastingDegreeText>
                        <LoastingDegreeLateText>Light</LoastingDegreeLateText>
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
                  {/* 여기까지 로스팅 정도 */}
                  {/* 여기부터 Tasting Note */}
                  <View>
                    <LoastingDegreeTitle>Tasting Note</LoastingDegreeTitle>
                    <DetailPageTastingNote />
                  </View>
                </>
              )}
            </InfoContainer>
          )}
        </CoffeeBeanInfo>
      ))}
    </Container>
  );
}

const Container = styled.View`
  display: flex;
  flex-direction: column;
  gap: ${responsiveHeight(20)}px;
  padding: ${responsiveHeight(24)}px;
  margin-bottom: ${responsiveHeight(83)}px;
  background-color: #fafafa;
`;

const CoffeeBeanInfo = styled.View`
  gap: ${responsiveHeight(4)}px;
`;

const Number = styled.Text`
  color: #666;
  font-family: "PretendardMedium";
  font-size: ${responsiveFontSize(12)}px;
  line-height: ${responsiveHeight(16.56)}px;
  letter-spacing: -0.3px;
  text-transform: uppercase;
`;

const CoffeeBeanName = styled.Text`
  overflow: hidden;
  color: #000;
  text-overflow: ellipsis;
  font-family: "PretendardSemiBold";
  font-size: ${responsiveFontSize(20)}px;
  line-height: ${responsiveHeight(27.6)}px;
  letter-spacing: -0.5px;
  text-transform: uppercase;
`;

const InfoContainer = styled.View`
  display: flex;
  flex-direction: column;
  padding: ${responsiveHeight(20)}px 0;
  gap: ${responsiveHeight(20)}px;
`;

const CoffeeBeanClassificationTitle = styled.Text`
  color: #000;
  font-family: "PretendardMedium";
  font-size: ${responsiveFontSize(14)}px;
  line-height: ${responsiveHeight(19.32)}px;
  letter-spacing: -0.35px;
`;

const CoffeeBeanClassification = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: ${responsiveHeight(4)}px ${responsiveWidth(16)}px;
  border-width: 0.5px;
  border-color: #d9d9d9;
  border-radius: ${responsiveHeight(41)}px;
  background-color: ${({ classification }) =>
    classification === "스페셜티 인증"
      ? "rgba(117, 101, 85, 0.65)"
      : "#F5F5F5"};
  gap: ${responsiveWidth(8)}px;
`;

const CoffeeBeanClassificationText = styled.Text`
  color: ${({ classification }) =>
    classification === "스페셜티 인증"
      ? "#fff"
      : classification === "스페셜티 미인증"
      ? "#666"
      : "#333"};
  font-family: "PretendardMedium";
  font-size: ${responsiveFontSize(14)}px;
  font-weight: ${({ classification }) =>
    classification === "스페셜티 인증" ? 600 : 500};
  line-height: ${responsiveHeight(19.32)}px;
  letter-spacing: -0.35px;
`;

const CuppingNoteTitle = styled.Text`
  color: #000;
  font-family: "PretendardMedium";
  font-size: ${responsiveFontSize(14)}px;
  line-height: ${responsiveHeight(19.32)}px;
  letter-spacing: -0.35px;
`;

const CuppingNote = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: ${responsiveWidth(6)}px;
  border-width: 0.5px;
  border-color: #d9d9d9;
  border-radius: ${responsiveHeight(41)}px;
  padding: ${responsiveHeight(4)}px ${responsiveWidth(14)}px;
  Text {
    color: #666;
    font-family: "PretendardMedium";
    font-size: ${responsiveFontSize(14)}px;
    line-height: ${responsiveHeight(19.32)}px;
    letter-spacing: -0.35px;
  }
`;

const NoteTitle = styled.Text`
  color: #000;
  font-family: "PretendardMedium";
  font-size: ${responsiveFontSize(14)}px;
  line-height: ${responsiveHeight(19.32)}px;
  letter-spacing: -0.35px;
`;

const Note = styled.Text`
  color: #666;
  font-family: "PretendardMedium";
  font-size: ${responsiveFontSize(14)}px;
  line-height: ${responsiveHeight(19.32)}px;
  letter-spacing: -0.35px;
`;

const LoastingDegreeTitle = styled.Text`
  color: #000;
  font-family: "PretendardMedium";
  font-size: ${responsiveFontSize(14)}px;
  line-height: ${responsiveHeight(19.32)}px;
  letter-spacing: -0.35px;
`;

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
