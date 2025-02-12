import React, { useRef, useState, useEffect } from "react";
import {
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
import LoadingImg from "../../components/eventPage/LoadingImg";
import Loading1 from "../../components/eventPage/Loading1";
import Loading2 from "../../components/eventPage/Loading2";
import Loading3 from "../../components/eventPage/Loading3";
import { useRoute } from "@react-navigation/native";

export default function EventPage11({ navigation }) {
  const route = useRoute();
  let selectedOption1 = route.params?.selectedOption1;
  let selectedOption2 = route.params?.selectedOption2;
  let selectedOption3 = route.params?.selectedOption3;
  let selectedOption4 = route.params?.selectedOption4;

  useEffect(() => {
    if (selectedOption1 !== undefined) {
      console.log(
        "가져온 값 =",
        selectedOption1,
        selectedOption2,
        selectedOption3,
        selectedOption4
      );
    }
  }, [selectedOption1, selectedOption2, selectedOption3, selectedOption4]);

  let recommendedCountry = null;
  useEffect(() => {
    // 인덱스 점수로 변환
    switch (selectedOption1) {
      case 0:
        selectedOption1 = 5;
        break;
      case 1:
        selectedOption1 = 4;
        break;
      case 2:
        selectedOption1 = 3;
        break;
    }
    switch (selectedOption2) {
      case 0:
        selectedOption2 = 5;
        break;
      case 1:
        selectedOption2 = 4;
        break;
      case 2:
        selectedOption2 = 3;
        break;
    }
    switch (selectedOption3) {
      case 0:
        selectedOption3 = 3;
        break;
      case 1:
        selectedOption3 = 4;
        break;
      case 2:
        selectedOption3 = 5;
        break;
    }
    switch (selectedOption4) {
      case 0:
        selectedOption4 = 5;
        break;
      case 1:
        selectedOption4 = 4;
        break;
      case 2:
        selectedOption4 = 3;
        break;
    }

    console.log(
      "점수 반환 값 =",
      selectedOption1,
      selectedOption2,
      selectedOption3,
      selectedOption4
    );

    // 커피 국가별 데이터 (향미, 산미, 바디감)
    const coffeeCountries = {
      Ethiopia: [4.75, 4.5, 3.75],
      Kenya: [4, 4.5, 3.75],
      Brazil: [4, 2.5, 3.75],
      Colombia: [4.25, 2.5, 3.75],
      Guatemala: [4.25, 4, 3.75],
      CostaRica: [4.5, 4.5, 4.5],
      Indonesia: [3.75, 2, 4.25],
      Vietnam: [3.5, 2, 3],
    };

    let minDistance = Infinity;

    // 최적의 커피 국가 찾기
    for (const country in coffeeCountries) {
      const [aroma, acidity, body] = coffeeCountries[country];

      // 유클리드 거리 계산
      let distance = Math.sqrt(
        Math.pow(aroma - selectedOption1, 2) +
          Math.pow(acidity - selectedOption2, 2) +
          Math.pow(body - selectedOption4, 2)
      );

      console.log(`${country} 거리값: ${distance.toFixed(3)}`);

      // 최소 거리인 국가 저장
      if (distance < minDistance) {
        minDistance = distance;
        recommendedCountry = country;
      }
    }

    console.log("유클리드 거리가 가장 가까운 국가 = " + recommendedCountry);
  }, []);

  const [loadingStep, setLoadingStep] = useState(0);

  // 3초 후에 EventPage06으로 전환
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("EventPage06", {
        selectedOption1,
        selectedOption2,
        selectedOption3,
        selectedOption4,
        recommendedCountry,
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  // 3초마다 로딩 컴포넌트 변경
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingStep((prevStep) => (prevStep + 1) % 3);
    }, 150);

    return () => clearInterval(interval);
  }, []);

  //그리기
  const renderLoadingComponent = () => {
    switch (loadingStep) {
      case 0:
        return <Loading1 />;
      case 1:
        return <Loading2 />;
      case 2:
        return <Loading3 />;
      default:
        return <Loading1 />;
    }
  };

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
          <LoadingBox>{renderLoadingComponent()}</LoadingBox>

          <TextContainer>
            <HeaderContainer>
              <HeaderText>원두를 진단하는{"\n"}중이에요</HeaderText>
            </HeaderContainer>

            <ContentContainer>
              <ContentText>
                내 취향에 딱 맞는 원두를 찾았다면, 카페 테이스팅 노트를{"\n"}
                참고해 보세요. 당신의 완벽한 한 잔을 만날 수 있어요!
              </ContentText>
            </ContentContainer>
          </TextContainer>

          <ImgWrapper>
            <LoadingImg />
          </ImgWrapper>
        </Content>
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
  letter-spacing: ${responsiveFontSize(-0.45)}px;
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 600;
`;

//////////////////////////////////////////////
const Content = styled.View`
  flex: 1;
  width: 100%;
`;
const LoadingBox = styled.View`
  width: ${responsiveWidth(44)}px;
  height: ${responsiveHeight(10)}px;
  position: absolute;
  left: ${responsiveWidth(32)}px;
  top: ${responsiveHeight(80)}px;
`;

//////////////////////////////////////////////

const TextContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;

  gap: ${responsiveHeight(20)}px;
  margin-top: ${responsiveWidth(130)}px;
  margin-left: ${responsiveWidth(24)}px;
  margin-right: ${responsiveWidth(24)}px;
  margin-bottom: ${responsiveWidth(32)}px;
`;
const ImgWrapper = styled.View`
  position: absolute;
  top: ${responsiveHeight(313)}px;
`;

const HeaderContainer = styled.View``;

const HeaderText = styled.Text`
  color: #000;
  font-family: PretendardSemiBold;
  font-size: ${responsiveFontSize(24)}px;
  font-style: normal;
  font-weight: 600;
  line-height: ${responsiveHeight(33.12)}px;
  letter-spacing: -0.6px;
`;
const ContentContainer = styled.View``;
const ContentText = styled.Text`
  color: #000;
  font-family: PretendardRegular;
  font-size: ${responsiveFontSize(12)}px;
  font-style: normal;
  font-weight: 400;
  line-height: ${responsiveHeight(18)}px;
  letter-spacing: -0.3px;
  text-align: left;
`;
