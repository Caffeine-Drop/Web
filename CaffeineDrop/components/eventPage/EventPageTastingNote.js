import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../../utils/responsive";

export default function EventPageTastingNote({ aroma, acidity, body }) {
  return (
    <Container>
      <TastingNoteContainer>
        {/* 여기부터 향(Aroma, AfterTaste) */}
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            gap: responsiveHeight(8),
          }}
        >
          <TastingNoteTextContainer>
            <TastingNoteText>향(Aroma, AfterTaste)</TastingNoteText>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TastingNoteRate>{aroma.toFixed(1)}</TastingNoteRate>
              <TastingNoteRateTotal>/5</TastingNoteRateTotal>
            </View>
          </TastingNoteTextContainer>
          <TastingNoteBar score={aroma} maxScore={5} />
        </View>
        {/* 여기까지 향(Aroma, AfterTaste) */}
        {/* 여기부터 산미(Acidity) */}
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            gap: responsiveHeight(8),
          }}
        >
          <TastingNoteTextContainer>
            <TastingNoteText>산미(Acidity)</TastingNoteText>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TastingNoteRate>{acidity.toFixed(1)}</TastingNoteRate>
              <TastingNoteRateTotal>/5</TastingNoteRateTotal>
            </View>
          </TastingNoteTextContainer>
          <TastingNoteBar score={acidity} maxScore={5} />
        </View>
        {/* 산미(Acidity) */}

        {/* 여기부터 바디감(Body) */}
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            gap: responsiveHeight(8),
          }}
        >
          <TastingNoteTextContainer>
            <TastingNoteText>바디감(Body)</TastingNoteText>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TastingNoteRate>{body.toFixed(1)}</TastingNoteRate>
              <TastingNoteRateTotal>/5</TastingNoteRateTotal>
            </View>
          </TastingNoteTextContainer>
          <TastingNoteBar score={body} maxScore={5} />
        </View>
        {/* 여기까지 바디감(Body) */}
      </TastingNoteContainer>
    </Container>
  );
}
// 테이스팅 노트 바 컴포넌트
const TastingNoteBar = ({ score, maxScore }) => {
  const fillPercentage = (score / maxScore) * 100;

  return (
    <TastingNoteBarContainer>
      <Stroke />
      <Bar>
        <Fill width={`${fillPercentage}%`} />
      </Bar>
      <Stroke />
    </TastingNoteBarContainer>
  );
};

const TastingNoteBarContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${responsiveHeight(24)}px;
`;

const Bar = styled.View`
  width: ${responsiveWidth(224)}px;
  height: ${responsiveHeight(4)}px;
  background-color: #ebebeb;
  position: relative;
  border-radius: 2px;
`;

const Fill = styled.View`
  position: absolute;
  height: 4px;
  background-color: black;
  width: ${(props) => props.width};
`;

const Stroke = styled.View`
  width: ${responsiveWidth(2)}px;
  height: ${responsiveHeight(8)}px;
  background-color: #d9d9d9;
`;
// 여기까지 테이스팅 노트 바 컴포넌트

const Container = styled.View`
  display: flex;
  flex-direction: column;
  gap: ${responsiveWidth(12)}px;
  padding: ${responsiveHeight(12)}px 0 ${responsiveHeight(20)}px;
  padding-left: ${responsiveWidth(24)}px;
  padding-right: ${responsiveWidth(24)}px;
`;

const TastingNoteContainer = styled.View`
  display: flex;
  flex-direction: column;
  gap: ${responsiveHeight(20)}px;
  padding-bottom: ${responsiveHeight(12)}px;
`;

const TastingNoteTextContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TastingNoteText = styled.Text`
  color: #666;
  font-family: "PretendardMedium";
  font-size: ${responsiveFontSize(12)}px;
  line-height: ${responsiveHeight(16.56)}px;
  letter-spacing: -0.3px;
`;

const TastingNoteRate = styled.Text`
  color: #321900;
  text-align: right;
  font-family: "PretendardMedium";
  font-size: ${responsiveFontSize(12)}px;
  line-height: ${responsiveHeight(16.56)}px;
  letter-spacing: -0.3px;
`;

const TastingNoteRateTotal = styled.Text`
  color: #666;
  font-family: "PretendardMedium";
  font-size: ${responsiveFontSize(12)}px;
  line-height: ${responsiveHeight(16.56)}px;
  letter-spacing: -0.3px;
`;
