import React, { useRef, useState } from "react";
import { Animated, PanResponder, StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import { responsiveFontSize, responsiveWidth, responsiveHeight } from "../../utils/responsive";
import styled from "styled-components/native";
import BackIcon from "../../Components/BackIcon";
import BlackTextCircle from "../../Components/BlackTextCircle";
import BlurIcon from "../../Components/BlurIcon";
import { LinearGradient } from "expo-linear-gradient";

export default function EventPage06({ navigation }) {
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

                <Content>
                    <TextContainer>
                        <HeaderContainer>
                            <HeaderText>나만의{"\n"}테이스팅 노트</HeaderText>
                        </HeaderContainer>

                        <ContentContainer>
                            <ContentText>
                                로스팅 정도에 따라 향, 산미, 바디감, 쓴맛 등이{"\n"}
                                강하게 나타날 수 있어요
                            </ContentText>
                        </ContentContainer>
                    </TextContainer>

                    <ResultChartWrapper>
                        <ResultInnerBox>
                            <ResultName>
                                <ResultText>향(Aroma, AfterTaste)</ResultText>
                                <ResultScore>4.0/5</ResultScore>
                            </ResultName>
                            <ResultChartSpace>
                                <ResultGrey></ResultGrey>
                                <ResultBrown></ResultBrown>
                            </ResultChartSpace>
                        </ResultInnerBox>

                        <ResultInnerBox>
                            <ResultName>
                                <ResultText>산미(Acidity)</ResultText>
                                <ResultScore>4.0/5</ResultScore>
                            </ResultName>
                            <ResultChartSpace>
                                <ResultGrey></ResultGrey>
                                <ResultBrown></ResultBrown>
                            </ResultChartSpace>
                        </ResultInnerBox>

                        <ResultInnerBox>
                            <ResultName>
                                <ResultText>바디감(Body)</ResultText>
                                <ResultScore>4.0/5</ResultScore>
                            </ResultName>
                            <ResultChartSpace>
                                <ResultGrey></ResultGrey>
                                <ResultBrown></ResultBrown>
                            </ResultChartSpace>
                        </ResultInnerBox>

                        <ResultInnerBox>
                            <ResultName>
                                <ResultText>로스팅 정도(SCAA 기준) | 시나몬</ResultText>
                                <ResultScore>4.0/5</ResultScore>
                            </ResultName>
                            <ResultChartSpace>
                                <ResultGrey></ResultGrey>
                                <ResultBrown></ResultBrown>
                            </ResultChartSpace>
                        </ResultInnerBox>
                    </ResultChartWrapper>
                </Content>

                <Footer>
                    <AnimatedButtonWrapper style={{ backgroundColor: buttonBackgroundColorInterpolate }}>
                        <TouchableOpacity onPress={() => {}}>
                            <AnimatedButtonText style={{ color: buttonTextColorInterpolate }}>완료하기</AnimatedButtonText>
                        </TouchableOpacity>
                    </AnimatedButtonWrapper>
                </Footer>
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
    background: #f1f1f1;
`;

//////////////////////////////////////////////
const TextContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: ${responsiveHeight(12)}px;
    margin-top: ${responsiveWidth(39)}px;
    margin-left: ${responsiveWidth(24)}px;
    margin-right: ${responsiveWidth(24)}px;
    margin-bottom: ${responsiveWidth(67)}px;
`;
const HeaderContainer = styled.View``;

const HeaderText = styled.Text`
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: ${responsiveFontSize(32)}px;
    font-style: normal;
    font-weight: 600;
    line-height: ${responsiveHeight(44.16)}px;
    letter-spacing: ${responsiveWidth(-0.8)}px;
`;
const ContentContainer = styled.View``;
const ContentText = styled.Text`
    color: #000;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 400;
    line-height: ${responsiveHeight(21)}px;
    letter-spacing: -2px;
    font-size: ${responsiveFontSize(14)}px;
    text-align: center;
`;

const ResultChartWrapper = styled.View`
    margin-left: ${responsiveWidth(24)}px;
    margin-right: ${responsiveWidth(24)}px;
    margin-bottom: ${responsiveWidth(24)}px;
`;

const ResultInnerBox = styled.View``;

const ResultName = styled.View``;

const ResultText = styled.Text``;

const ResultScore = styled.Text``;

const ResultChartSpace = styled.View``;

const ResultGrey = styled.View``;

const ResultBrown = styled.View``;

//////////////////////////////////////////////
const Footer = styled.View`
    position: absolute;
    top: ${responsiveHeight(666)}px;

    display: inline-flex;
    padding: 0px 24px 16px 24px;
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
