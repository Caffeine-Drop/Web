import React from "react";
import { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../../utils/responsive";

// 이미지 임포트
import PlusIcon from "../../assets/DetailPage/PlusIcon.svg";
import MinusIcon from "../../assets/DetailPage/MinusIcon.svg";

// 컴포넌트 임포트
import RoastingLevel from "./DetailPageRoastingLevel";
import DetailPageTastingNote from "./DetailPageTastingNote";

export default function DetailPageCoffeeInfo({ beansInfo }) {
  const [visibleInfoIds, setVisibleInfoIds] = useState([]);
  console.log(beansInfo.bean[0].is_specialty);
  console.log(beansInfo.bean[0].description);

  const toggleInfoVisibility = (bean_id) => {
    setVisibleInfoIds((prev) =>
      prev.includes(bean_id)
        ? prev.filter((infoId) => infoId !== bean_id)
        : [...prev, bean_id]
    );
  };

  return (
    <Container>
      {beansInfo.bean.map((bean) => (
        <CoffeeBeanInfo key={bean.bean_id}>
          <TouchableOpacity onPress={() => toggleInfoVisibility(bean.bean_id)}>
            <Number>{bean.bean_id.toString().padStart(2, "0")}</Number>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <CoffeeBeanName>{bean.name}</CoffeeBeanName>
              {visibleInfoIds.includes(bean.bean_id) ? (
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
          {visibleInfoIds.includes(bean.bean_id) && (
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
                  {bean.description === "블랜딩 원두" ? (
                    <CoffeeBeanDescription>
                      <CoffeeBeanDescriptionText>
                        {bean.description.substring(0, 3)}
                      </CoffeeBeanDescriptionText>
                    </CoffeeBeanDescription>
                  ) : (
                    <CoffeeBeanDescription>
                      <CoffeeBeanDescriptionText>
                        {bean.description.substring(0, 2)}
                      </CoffeeBeanDescriptionText>
                    </CoffeeBeanDescription>
                  )}
                  {bean.is_specialty ? (
                    <CoffeeBeanClassification classification="스페셜티 인증">
                      <CoffeeBeanClassificationText classification="스페셜티 인증">
                        스페셜티 인증
                      </CoffeeBeanClassificationText>
                    </CoffeeBeanClassification>
                  ) : (
                    <CoffeeBeanClassification classification="스페셜티 미인증">
                      <CoffeeBeanClassificationText classification="스페셜티 미인증">
                        스페셜티 미인증
                      </CoffeeBeanClassificationText>
                    </CoffeeBeanClassification>
                  )}
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
                  {beansInfo.bean_tag
                    .filter((tag) => tag.bean_id === bean.bean_id)
                    .map((tag) => {
                      const tagName = beansInfo.cuffingTag.find(
                        (cuffingTag) =>
                          cuffingTag.cuffing_tag_id === tag.cuffing_tag_id
                      )?.name;
                      return (
                        <CuppingNote key={tag.cuffing_tag_id}>
                          <Text style={{ fontSize: responsiveFontSize(14) }}>
                            #{tagName}
                          </Text>
                        </CuppingNote>
                      );
                    })}
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
              {bean.is_single_origin && (
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
  color: #333;
  font-family: "PretendardMedium";
  font-size: ${responsiveFontSize(14)}px;
  line-height: ${responsiveHeight(19.32)}px;
  letter-spacing: -0.35px;
`;

const CoffeeBeanDescription = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: ${responsiveHeight(4)}px ${responsiveWidth(16)}px;
  border-width: 0.5px;
  border-color: #d9d9d9;
  border-radius: ${responsiveHeight(41)}px;
  background-color: #f5f5f5;
  gap: ${responsiveWidth(8)}px;
`;

const CoffeeBeanDescriptionText = styled.Text`
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
