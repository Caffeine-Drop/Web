import React, { useRef, useState, useEffect } from "react";
import {
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
import BlurIcon from "../../components/eventPage/BlurIcon";
import BlurIcon2 from "../../components/eventPage/BlurIcon2";
import BlackTextCircle from "../../components/eventPage/BlackTextCircle";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Platform } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Dimensions } from "react-native";

// 화면 너비 가져오기
const { width } = Dimensions.get("window");

// 태블릿 판별 기준 (보통 width가 600px 이상이면 태블릿)
const isTablet = width >= 600;

const SelectOption = ({ text, score, isSelected, onPress }) => {
  const backgroundColor = useRef(new Animated.Value(0)).current;
  const scoreBackgroundColor = useRef(new Animated.Value(0)).current;
  const textColor = useRef(new Animated.Value(0)).current;
  const scoreTextColor = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (isSelected) {
      Animated.timing(backgroundColor, {
        toValue: 1,
        duration: 600,
        useNativeDriver: false,
      }).start();
      Animated.timing(scoreBackgroundColor, {
        toValue: 1,
        duration: 600,
        useNativeDriver: false,
      }).start();
      Animated.timing(textColor, {
        toValue: 1,
        duration: 600,
        useNativeDriver: false,
      }).start();
      Animated.timing(scoreTextColor, {
        toValue: 1,
        duration: 600,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(backgroundColor, {
        toValue: 0,
        duration: 600,
        useNativeDriver: false,
      }).start();
      Animated.timing(scoreBackgroundColor, {
        toValue: 0,
        duration: 600,
        useNativeDriver: false,
      }).start();
      Animated.timing(textColor, {
        toValue: 0,
        duration: 600,
        useNativeDriver: false,
      }).start();
      Animated.timing(scoreTextColor, {
        toValue: 0,
        duration: 600,
        useNativeDriver: false,
      }).start();
    }
  }, [isSelected]);

  const backgroundColorInterpolate = backgroundColor.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgba(250, 250, 250, 0.65)", "rgba(200, 200, 200, 0.65)"],
  });

  const scoreBackgroundColorInterpolate = scoreBackgroundColor.interpolate({
    inputRange: [0, 1],
    outputRange: ["#ebebeb", "#321900"],
  });

  const textColorInterpolate = textColor.interpolate({
    inputRange: [0, 1],
    outputRange: ["#666666", "#000000"],
  });

  const scoreTextColorInterpolate = scoreTextColor.interpolate({
    inputRange: [0, 1],
    outputRange: ["#666666", "#FAFAFA"],
  });

  return (
    <TouchableOpacity onPress={onPress}>
      <AnimatedSelectOption
        style={{
          backgroundColor: isSelected
            ? "transparent"
            : backgroundColorInterpolate,
          borderRadius: 8,
          shadowColor: "rgba(0, 0, 0, 0.04)",
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.8,
          shadowRadius: 8,
          elevation: 5,
          backdropFilter: "blur(6px)",
        }}
      >
        {isSelected && (
          <LinearGradient
            colors={[
              "rgba(0,0,0, 0.08)",
              "rgba(50, 25, 0, 0.08)",
              "rgba(255, 255, 255, 0.08)",
            ]}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
            style={{ ...StyleSheet.absoluteFillObject, borderRadius: 8 }}
          />
        )}
        <AnimatedSelectText style={{ color: textColorInterpolate }}>
          {text}
        </AnimatedSelectText>
        <AnimatedSelectScore
          style={{
            backgroundColor: scoreBackgroundColorInterpolate,
            color: scoreTextColorInterpolate,
          }}
        >
          {score}
        </AnimatedSelectScore>
      </AnimatedSelectOption>
    </TouchableOpacity>
  );
};

export default function EventPage05({ navigation }) {
  const route = useRoute();
  const selectedOption1 = route.params?.selectedOption1;
  const selectedOption2 = route.params?.selectedOption2;
  const selectedOption3 = route.params?.selectedOption3;

  useEffect(() => {
    if (selectedOption1 !== undefined) {
      console.log(
        "가져온 값 =",
        selectedOption1,
        selectedOption2,
        selectedOption3
      );
    }
  }, [selectedOption1, selectedOption2, selectedOption3]);

  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // 페이지가 로드될 때 애니메이션 시작
    Animated.timing(progress, {
      toValue: 1, // 최종 값 (1 = 100%)
      duration: 1000, // 애니메이션 지속 시간 (밀리초)
      useNativeDriver: false, // width 애니메이션을 위해 false로 설정
    }).start();
  }, []);

  const progressWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ["75%", "100%"], // 너비를 0%에서 100%로 애니메이션
  });

  const [selectedOption4, setSelectedOption] = useState(null);
  const buttonBackgroundColor = useRef(new Animated.Value(0)).current;
  const buttonTextColor = useRef(new Animated.Value(0)).current;

  const handleSelectOption = (index) => {
    setSelectedOption(index);

    Animated.timing(buttonBackgroundColor, {
      toValue: 1,
      duration: 600,
      useNativeDriver: false,
    }).start();

    Animated.timing(buttonTextColor, {
      toValue: 1,
      duration: 600,
      useNativeDriver: false,
    }).start();
  };

  const buttonBackgroundColorInterpolate = buttonBackgroundColor.interpolate({
    inputRange: [0, 1],
    outputRange: ["#F1F1F1", "#E5E3E1"],
  });

  const buttonTextColorInterpolate = buttonTextColor.interpolate({
    inputRange: [0, 1],
    outputRange: ["#999999", "#756555"],
  });

  return (
    <Container>
      <InnerContainer>
        <Navbar>
          <IconWrapper>
            <BackIcon />
          </IconWrapper>
          <Title>원두 진단하기</Title>
        </Navbar>

        <ProgressBarContainer>
          <AnimatedProgressBar style={{ width: progressWidth }} />
        </ProgressBarContainer>

        <Content>
          <BlurWrapper>
            <BlurIcon />
          </BlurWrapper>

          <TextContainer>
            <HeaderContainer>
              <CircleWrapper>
                <BlackTextCircle />
              </CircleWrapper>
              <CircleWrapper2>
                <BlackTextCircle />
              </CircleWrapper2>
              <CircleWrapper3>
                <BlackTextCircle />
              </CircleWrapper3>
              <HeaderText>나는 바디감이 강한{"\n"}원두가 좋다</HeaderText>
            </HeaderContainer>

            <ContentContainer>
              <ContentText>
                바디감은 질감과 무게감의 정도를 말해요. 정확히 말하면,{" "}
                <HighlightText2>액체의 밀도와 중량</HighlightText2>
                으로 구분한다고 볼 수 있어요. 쉽게 예를 들어 보면{" "}
                <HighlightText2>
                  물은 바디감이 약한 편이고, 우유는 바디감이 강한 편이에요.
                </HighlightText2>
              </ContentText>
            </ContentContainer>
          </TextContainer>

          <BlurWrapper2>
            <BlurIcon2 />
          </BlurWrapper2>

          <SelectContainer>
            <SelectOption
              text="매우 그렇다"
              score="5점"
              isSelected={selectedOption4 === 0}
              onPress={() => handleSelectOption(0)}
            />
            <SelectOption
              text="보통이다"
              score="4점"
              isSelected={selectedOption4 === 1}
              onPress={() => handleSelectOption(1)}
            />
            <SelectOption
              text="그렇지 않다"
              score="3점"
              isSelected={selectedOption4 === 2}
              onPress={() => handleSelectOption(2)}
            />
          </SelectContainer>
        </Content>

        <Footer>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("EventPage11", {
                selectedOption1,
                selectedOption2,
                selectedOption3,
                selectedOption4,
              })
            }
          >
            <AnimatedButtonWrapper
              style={{ backgroundColor: buttonBackgroundColorInterpolate }}
            >
              <AnimatedButtonText style={{ color: buttonTextColorInterpolate }}>
                다음으로
              </AnimatedButtonText>
            </AnimatedButtonWrapper>
          </TouchableOpacity>
        </Footer>
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
`;

const Navbar = styled.View`
  display: flex;
  flex-direction: row;
  height: ${responsiveHeight(56)}px;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  margin-top: ${responsiveHeight(38)}px;
  z-index: 5;
`;
const IconWrapper = styled.View`
  position: absolute;
  left: ${responsiveWidth(24)}px;
  z-index: 5;
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
  z-index: 5;
`;
const ProgressBarContainer = styled.View`
  width: 100%;
  height: ${responsiveHeight(4)}px;
  background-color: #e0e0e0;
  border-radius: ${responsiveHeight(4)}px;
  overflow: hidden;
`;

const AnimatedProgressBar = styled(Animated.View)`
  height: ${responsiveHeight(4)}px;
  background-color: #756555;
`;
//////////////////////////////////////////////
const Content = styled.View`
  flex: 1;
  width: 100%;
`;
const BlurWrapper = styled.View`
  position: absolute;
  height: ${responsiveHeight(420)}px;
  width: ${responsiveWidth(420)}px;
  right: ${responsiveWidth(-50)}px;
  top: ${responsiveHeight(-85)}px;
`;
const BlurWrapper2 = styled.View`
  position: absolute;
  height: ${responsiveHeight(420)}px;
  width: ${responsiveWidth(420)}px;
  left: ${responsiveWidth(120)}px;
  top: ${responsiveHeight(180)}px;
`;

//////////////////////////////////////////////
const TextContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: ${responsiveHeight(32)}px;
  margin-top: ${responsiveWidth(39)}px;
  margin-left: ${responsiveWidth(24)}px;
  margin-right: ${responsiveWidth(24)}px;
  margin-bottom: ${responsiveWidth(63)}px;
`;
const HeaderContainer = styled.View``;

const CircleWrapper = styled.View`
  position: absolute;
  width: ${responsiveWidth(4)}px;
  height: ${responsiveWidth(4)}px;

  ${Platform.select({
    ios: `
        left: ${isTablet ? responsiveWidth(100) : responsiveWidth(70)}px;
        top: ${isTablet ? responsiveHeight(-4) : responsiveWidth(-4)}px;
    `,
    android: `
        left: ${isTablet ? responsiveWidth(86) : responsiveWidth(86)}px;
        top: ${isTablet ? responsiveHeight(-7) : responsiveWidth(-4)}px;
    `,
    web: `
        left: ${isTablet ? responsiveWidth(100) : responsiveWidth(87)}px;
        top: ${isTablet ? responsiveHeight(-4) : responsiveWidth(-4)}px;
    `,
  })}
`;
const CircleWrapper2 = styled.View`
  position: absolute;
  width: ${responsiveWidth(4)}px;
  height: ${responsiveWidth(4)}px;

  ${Platform.select({
    ios: `
        left: ${isTablet ? responsiveWidth(100) : responsiveWidth(97)}px;
        top: ${isTablet ? responsiveHeight(-4) : responsiveWidth(-4)}px;
    `,
    android: `
        left: ${isTablet ? responsiveWidth(64) : responsiveWidth(86)}px;
        top: ${isTablet ? responsiveHeight(-7) : responsiveWidth(-4)}px;
    `,
    web: `
        left: ${isTablet ? responsiveWidth(100) : responsiveWidth(116)}px;
        top: ${isTablet ? responsiveHeight(-4) : responsiveWidth(-4)}px;
    `,
  })}
`;
const CircleWrapper3 = styled.View`
  position: absolute;
  width: ${responsiveWidth(4)}px;
  height: ${responsiveWidth(4)}px;

  ${Platform.select({
    ios: `
        left: ${isTablet ? responsiveWidth(100) : responsiveWidth(125)}px;
        top: ${isTablet ? responsiveHeight(-4) : responsiveWidth(-4)}px;
    `,
    android: `
        left: ${isTablet ? responsiveWidth(108) : responsiveWidth(86)}px;
        top: ${isTablet ? responsiveHeight(-7) : responsiveWidth(-4)}px;
    `,
    web: `
        left: ${isTablet ? responsiveWidth(100) : responsiveWidth(146)}px;
        top: ${isTablet ? responsiveHeight(-4) : responsiveWidth(-4)}px;
    `,
  })}
`;
const HeaderText = styled.Text`
  color: #000;
  text-align: center;
  font-family: PretendardSemiBold;
  font-size: ${responsiveFontSize(32)}px;
  font-style: normal;
  font-weight: 600;
  line-height: ${responsiveHeight(44.16)}px;
  letter-spacing: -0.8px;
`;
const ContentContainer = styled.View``;
const ContentText = styled.Text`
  color: #000;
  font-family: PretendardRegular;
  font-style: normal;
  font-weight: 400;
  line-height: ${responsiveHeight(21)}px;
  letter-spacing: -0.35px;
  font-size: ${responsiveFontSize(14)}px;
`;
const HighlightText2 = styled.Text`
  color: #000;
  font-family: PretendardBold;
  font-size: ${responsiveFontSize(14)}px;
  font-style: normal;
  font-weight: 700;
  line-height: ${responsiveHeight(21)}px;
  letter-spacing: -0.35px;
`;
//////////////////////////////////////////////
const SelectContainer = styled.View`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-top: ${responsiveHeight(10)}px;
  margin-left: ${responsiveWidth(24)}px;
  margin-right: ${responsiveWidth(24)}px;
  margin-bottom: ${responsiveHeight(40)}px;
`;
const AnimatedSelectOption = styled(Animated.View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;

  gap: 16px;
  padding-top: ${isTablet ? responsiveHeight(15) : responsiveHeight(12)}px;
  padding-bottom: ${isTablet ? responsiveHeight(15) : responsiveHeight(12)}px;

  align-self: stretch;
  border-radius: 8px;
  shadow-color: rgba(0, 0, 0, 0.04);
  shadow-offset: 0px 8px;
  shadow-opacity: 0.8;
  shadow-radius: 8px;
  elevation: 5; /* 안드로이드에서 그림자 적용 */
  backdrop-filter: blur(6px);
`;
const AnimatedSelectText = styled(Animated.Text)`
  font-family: PretendardBold;
  font-size: ${responsiveFontSize(16)}px;
  font-style: normal;
  font-weight: 700;
  line-height: ${responsiveHeight(22.08)}px;
  letter-spacing: -0.4px;
  display: flex;
  align-items: center;
`;
const AnimatedSelectScore = styled(Animated.Text)`
  color: #666;
  font-family: PretendardMedium;
  font-size: ${responsiveFontSize(12)}px;
  font-style: normal;
  font-weight: 500;
  line-height: ${responsiveHeight(16.56)}px;
  letter-spacing: -0.3px;
  border-radius: 35px;
  padding: 10px;
`;
//////////////////////////////////////////////
const Footer = styled.View`
  position: absolute;
  top: ${responsiveHeight(666)}px;

  display: inline-flex;
  width: 100%;
  padding: 0px 24px 16px 24px;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background: #fafafa;
`;

const AnimatedButtonText = styled(Animated.Text)`
  color: #999;
  font-family: PretendardBold;
  font-size: ${responsiveFontSize(16)}px;
  font-style: normal;
  font-weight: 700;
  line-height: ${responsiveHeight(22.08)}px;
  letter-spacing: -0.4px;
`;

const AnimatedButtonWrapper = styled(Animated.View)`
  display: flex;
  width: ${responsiveWidth(312)}px;
  padding-top: ${isTablet ? responsiveHeight(17) : responsiveHeight(16)}px;
  padding-bottom: ${isTablet ? responsiveHeight(17) : responsiveHeight(16)}px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: #f1f1f1;
`;
