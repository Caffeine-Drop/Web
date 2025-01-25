import React, { useRef, useState, useEffect } from "react";
import { ScrollView, Animated, PanResponder, StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import { responsiveFontSize, responsiveWidth, responsiveHeight } from "../../utils/responsive";
import styled from "styled-components/native";
import BackIcon from "../../components/BackIcon";
import BlackTextCircle from "../../components/BlackTextCircle";
import BlurIcon from "../../components/BlurIcon";
import BlurIcon2 from "../../components/BlurIcon2";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Platform } from "react-native";

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
                    backgroundColor: isSelected ? "transparent" : backgroundColorInterpolate,
                    borderRadius: 8,
                    shadowColor: "rgba(0, 0, 0, 0.04)",
                    shadowOffset: { width: 0, height: 8 },
                    shadowOpacity: 0.8,
                    shadowRadius: 8,
                    elevation: 5,
                    backdropFilter: "blur(6px)",
                }}
            >
                {isSelected && <LinearGradient colors={["rgba(0,0,0, 0.08)", "rgba(50, 25, 0, 0.08)", "rgba(255, 255, 255, 0.08)"]} start={{ x: 1, y: 1 }} end={{ x: 0, y: 0 }} style={{ ...StyleSheet.absoluteFillObject, borderRadius: 8 }} />}
                <AnimatedSelectText style={{ color: textColorInterpolate }}>{text}</AnimatedSelectText>
                <AnimatedSelectScore style={{ backgroundColor: scoreBackgroundColorInterpolate, color: scoreTextColorInterpolate }}>{score}</AnimatedSelectScore>
            </AnimatedSelectOption>
        </TouchableOpacity>
    );
};

export default function EventPage03({ navigation }) {
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
        outputRange: ["25%", "50%"], // 너비를 0%에서 100%로 애니메이션
    });

    const [selectedOption, setSelectedOption] = useState(null);
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
        outputRange: ["#666666", "#756555"],
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
                            <HeaderText>나는 산미가 강한{"\n"}원두가 좋다</HeaderText>
                        </HeaderContainer>

                        <ContentContainer>
                            <ContentText>
                                산(acid)에서 나는 산미는 보편적으로 생각하는 신맛과는 살짝 달라요. 산미란 식초와 같이 <HighlightText2>기분 나쁜 신맛이 아닌 과일을 먹을 때 느껴지던 것과 같은 긍정적인 신맛으로, </HighlightText2>
                                산미를 즐기는 매니아 층도 두터워요.
                            </ContentText>
                        </ContentContainer>
                    </TextContainer>

                    <BlurWrapper2>
                        <BlurIcon2 />
                    </BlurWrapper2>

                    <SelectContainer>
                        <SelectOption text="매우 그렇다" score="5점" isSelected={selectedOption === 0} onPress={() => handleSelectOption(0)} />
                        <SelectOption text="보통이다" score="4점" isSelected={selectedOption === 1} onPress={() => handleSelectOption(1)} />
                        <SelectOption text="그렇지 않다" score="3점" isSelected={selectedOption === 2} onPress={() => handleSelectOption(2)} />
                    </SelectContainer>
                </Content>

                <Footer>
                    <AnimatedButtonWrapper style={{ backgroundColor: buttonBackgroundColorInterpolate }}>
                        <TouchableOpacity onPress={() => navigation.navigate("EventPage04")}>
                            <AnimatedButtonText style={{ color: buttonTextColorInterpolate }}>다음으로</AnimatedButtonText>
                        </TouchableOpacity>
                    </AnimatedButtonWrapper>
                    <FooterGap></FooterGap>
                </Footer>
            </InnerContainer>
        </Container>
    );
}

const Container = styled.View`
    width: 100%;
    height: 100%;
    background: #fafafa;

    overflow: hidden; /* 내용이 넘칠 경우 숨김 처리 */
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
    border-radius: 4px;
    overflow: hidden;
`;

const AnimatedProgressBar = styled(Animated.View)`
    height: ${responsiveHeight(4)}px;
    background-color: #756555;
`;

//////////////////////////////////////////////
const Content = styled.View`
    width: 100%;
    margin-bottom: ${responsiveHeight(60)}px;
`;
const BlurWrapper = styled.View`
    position: absolute;
    height: ${responsiveHeight(420)}px;
    width: ${responsiveWidth(420)}px;
    right: ${responsiveWidth(-50)}px;
    top: ${responsiveWidth(-85)}px;
`;
const BlurWrapper2 = styled.View`
    position: absolute;
    height: ${responsiveHeight(420)}px;
    width: ${responsiveWidth(420)}px;
    left: ${responsiveWidth(120)}px;
    top: ${responsiveWidth(180)}px;
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
    margin-bottom: ${responsiveWidth(67)}px;
`;
const HeaderContainer = styled.View``;

const CircleWrapper = styled.View`
    position: relative;
    width: ${responsiveWidth(4)}px;
    height: ${responsiveWidth(4)}px;

    ${Platform.select({
        ios: `
            left: ${responsiveWidth(70)}px;
            top: ${responsiveWidth(0)}px;
        `,
        android: `
            left: ${responsiveWidth(86)}px;
            top: ${responsiveWidth(-4)}px;
        `,
        web: `
            left: ${responsiveWidth(87)}px;
            top: ${responsiveWidth(0)}px;
        `,
    })}
`;
const CircleWrapper2 = styled.View`
    position: relative;
    width: ${responsiveWidth(4)}px;
    height: ${responsiveWidth(4)}px;

    ${Platform.select({
        ios: `
            left: ${responsiveWidth(96)}px;
            top: ${responsiveWidth(-4)}px;
        `,
        android: `
            left: ${responsiveWidth(86)}px;
            top: ${responsiveWidth(-4)}px;
        `,
        web: `
            left: ${responsiveWidth(114)}px;
            top: ${responsiveWidth(-4)}px;
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

    ${Platform.select({
        ios: `
            font-size: ${responsiveFontSize(14)}px;
        `,
        android: `
            font-size: ${responsiveFontSize(14)}px;
        `,
        web: `
            font-size: ${responsiveFontSize(13)}px;
        `,
    })}
`;

const HighlightText2 = styled.Text`
    color: #000;
    font-family: PretendardBold;
    font-style: normal;
    font-weight: 600;
    letter-spacing: -0.35px;
    line-height: ${responsiveHeight(21)}px;
    font-size: ${responsiveFontSize(14)}px;

    ${Platform.select({
        ios: `
         font-size: ${responsiveFontSize(14)}px;
        `,
        android: `
          font-size: ${responsiveFontSize(14)}px;
        `,
        web: `
          font-size: ${responsiveFontSize(13)}px;
        `,
    })}
`;
//////////////////////////////////////////////

const SelectContainer = styled.View`
    display: flex;
    flex-direction: column;
    gap: 12px;

    margin-left: ${responsiveWidth(24)}px;
    margin-right: ${responsiveWidth(24)}px;
    margin-bottom: ${responsiveHeight(80)}px;
`;
const AnimatedSelectOption = styled(Animated.View)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    gap: 16px;
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
    letter-spacing: ${responsiveWidth(-0.3)}px;
    border-radius: 35px;
    padding: 10px;
`;
//////////////////////////////////////////////
const Footer = styled.View`
    position: absolute;
    top: ${responsiveHeight(666)}px;

    display: inline-flex;
    padding: 0px 24px 16px 0px;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    background: #fafafa;
`;

const AnimatedButtonText = styled(Animated.Text)`
    color: #999;
    font-family: Pretendard;
    font-size: ${responsiveFontSize(16)}px;
    font-style: normal;
    font-weight: 700;
    line-height: ${responsiveHeight(22.08)}px;
    letter-spacing: ${responsiveWidth(-0.4)}px;

    font-family: Pretendard;
    font-size: ${responsiveFontSize(16)}px;
    font-style: normal;
    font-weight: 700;
    line-height: ${responsiveHeight(22.08)}px;
    letter-spacing: ${responsiveHeight(-0.4)}px;
`;

const AnimatedButtonWrapper = styled(Animated.View)`
    display: flex;
    width: ${responsiveWidth(312)}px;
    padding: 16px 0px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 12px;
    background: #f1f1f1;
`;
const FooterGap = styled.View`
    width: ${responsiveWidth(360)}px;
    height: ${responsiveHeight(37.5)}px;
    flex-shrink: 0;
`;
