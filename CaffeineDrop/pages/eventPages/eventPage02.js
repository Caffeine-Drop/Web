import React, { useRef, useState } from "react";
import { Animated, PanResponder, StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import { responsiveFontSize, responsiveWidth, responsiveHeight } from "../../utils/responsive";
import styled from "styled-components/native";
import BackIcon from "../../Components/BackIcon";
import BlackTextCircle from "../../Components/BlackTextCircle";
import BlurIcon from "../../Components/BlurIcon";
import CoffeeImage from "../../Components/Coffee";
import { ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

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
                {isSelected && <LinearGradient colors={["rgba(233, 230, 227, 0.08)", "rgba(50, 25, 0, 0.08)", "rgba(255, 255, 255, 0.08)"]} start={{ x: 1, y: 1 }} end={{ x: 0, y: 0 }} style={{ ...StyleSheet.absoluteFillObject, borderRadius: 8 }} />}
                <AnimatedSelectText style={{ color: textColorInterpolate }}>{text}</AnimatedSelectText>
                <AnimatedSelectScore style={{ backgroundColor: scoreBackgroundColorInterpolate, color: scoreTextColorInterpolate }}>{score}</AnimatedSelectScore>
            </AnimatedSelectOption>
        </TouchableOpacity>
    );
};

export default function EventPage02({ navigation }) {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelectOption = (index) => {
        setSelectedOption(index);
    };
    return (
        <Container>
            <ScrollView
                horizontal={false} // 좌우 스크롤 비활성화
                showsHorizontalScrollIndicator={false} // 좌우 스크롤바 숨김
            >
                <InnerContainer>
                    <Navbar>
                        <IconWrapper>
                            <BackIcon />
                        </IconWrapper>
                        <Title>원두 진단하기</Title>
                    </Navbar>
                    <StatusContainer>
                        <CurrentState />
                    </StatusContainer>

                    <Content>
                        <BlurWrapper>
                            <BlurIcon />
                        </BlurWrapper>

                        <TextContainer>
                            <HeaderContainer>
                                <CircleWrapper>
                                    <BlackTextCircle />
                                </CircleWrapper>
                                <HeaderText>나는 향이 강한{"\n"}원두가 좋다</HeaderText>
                            </HeaderContainer>

                            <ContentContainer>
                                <ContentText>
                                    원두의 향은 네 가지로 구성돼요.
                                    <HighlightText1> 프레그런스, 아로마, 노즈, 애프터 테이스트</HighlightText1>가 있어요. 카페인 드롭은 이 중 <HighlightText2>애프터 테이스트 혹은 아로마를 테이스팅 노트에 반영했어요.</HighlightText2>
                                </ContentText>
                            </ContentContainer>
                        </TextContainer>

                        <CoffeeContainer>
                            <CoffeeImage />
                        </CoffeeContainer>

                        <BlurWrapper2>
                            <BlurIcon />
                        </BlurWrapper2>

                        <SelectContainer>
                            <SelectOption text="매우 그렇다" score="5점" isSelected={selectedOption === 0} onPress={() => handleSelectOption(0)} />
                            <SelectOption text="보통이다" score="4점" isSelected={selectedOption === 1} onPress={() => handleSelectOption(1)} />
                            <SelectOption text="그렇지 않다" score="3점" isSelected={selectedOption === 2} onPress={() => handleSelectOption(2)} />
                        </SelectContainer>
                    </Content>

                    <Footer>
                        <ButtonWrapper onPress={() => navigation.navigate("EventPage03")}>
                            <ButtonText>다음으로</ButtonText>
                        </ButtonWrapper>
                    </Footer>
                </InnerContainer>
            </ScrollView>
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
const StatusContainer = styled.View`
    display: flex;
    height: ${responsiveHeight(3)}px;
    flex-direction: row;
    background: #f1f1f1;
`;
const CurrentState = styled.View`
    height: ${responsiveHeight(3)}px;
    width: ${responsiveWidth(90)}px;
    flex-shrink: 0;
    background: #756555;
`;
//////////////////////////////////////////////
const Content = styled.View`
    flex: 1;
    width: 100%;
    /*
    margin-left: ${responsiveWidth(24)}px;
    margin-right: ${responsiveWidth(24)}px;
    */
`;
const BlurWrapper = styled.View`
    position: absolute;
    height: ${responsiveHeight(420)}px;
    width: ${responsiveWidth(420)}px;
    right: ${responsiveWidth(-62)}px;
    top: ${responsiveWidth(-52)}px;
`;
const BlurWrapper2 = styled.View`
    position: absolute;
    height: ${responsiveHeight(234)}px;
    width: ${responsiveWidth(420)}px;
    right: ${responsiveWidth(-314)}px;
    top: ${responsiveWidth(248)}px;
`;

//////////////////////////////////////////////
const TextContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: ${responsiveHeight(24)}px;
    margin-top: ${responsiveWidth(39)}px;
    margin-left: ${responsiveWidth(24)}px;
    margin-right: ${responsiveWidth(24)}px;
    margin-bottom: ${responsiveWidth(24)}px;
`;
const HeaderContainer = styled.View``;

const CircleWrapper = styled.View`
    position: absolute;
    width: ${responsiveWidth(4)}px;
    height: ${responsiveWidth(4)}px;

    left: ${responsiveWidth(86)}px;
    right: ${responsiveWidth(193)}px;
    top: ${responsiveWidth(-4)}px;
`;
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
    letter-spacing: -2.1px;
    font-size: ${responsiveFontSize(14)}px;
`;
const HighlightText1 = styled.Text`
    color: #000;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 500;
    /*line-height: 150%;*/

    line-height: ${responsiveHeight(21)}px;
    letter-spacing: -2.1px;
    font-size: ${responsiveFontSize(14)}px;
`;

const HighlightText2 = styled.Text`
    color: #000;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 700;
    /*line-height: 150%;*/

    letter-spacing: -2.1px;
    font-size: ${responsiveFontSize(14)}px;
`;
//////////////////////////////////////////////
const CoffeeContainer = styled.View`
    /*margin-left: ${responsiveWidth(24)}px;*/
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
    font-family: Pretendard;
    font-size: ${responsiveFontSize(16)}px;
    font-style: normal;
    font-weight: 700;
    line-height: ${responsiveHeight(22.08)}px;
    letter-spacing: ${responsiveWidth(-0.4)}px;
    display: flex;
    align-items: center;
`;
const AnimatedSelectScore = styled(Animated.Text)`
    color: #666;
    font-family: Pretendard;
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
    top: ${responsiveHeight(760)}px;

    display: inline-flex;
    padding: 0px 24px 16px 24px;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    background: #fafafa;
`;

const ButtonWrapper = styled(TouchableOpacity)`
    display: flex;
    width: ${responsiveWidth(312)}px;
    padding: 16px 0px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 12px;
    background: #f1f1f1;
`;

const ButtonText = styled.Text`
    color: #999;
    font-family: Pretendard;
    font-size: ${responsiveFontSize(16)}px;
    font-style: normal;
    font-weight: 700;
    line-height: ${responsiveHeight(22.08)}px;
    letter-spacing: ${responsiveWidth(-0.4)}px;
`;
