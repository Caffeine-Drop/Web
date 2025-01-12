import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { responsiveFontSize, responsiveWidth, responsiveHeight } from "../../utils/responsive";
import BackIcon from "../../assets/Components/BackIcon";
import Drip from "../../assets/Components/EventComponents/Drip";
import Circle from "../../assets/Components/EventComponents/Circle";
import Blur from "../../assets/Components/EventComponents/Blur";
import Shadow from "../../assets/Components/EventComponents/Shadow";

export default function EventPage01({ navigation }) {
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
                    <DripWrapper>
                        <Drip />
                    </DripWrapper>
                    <CircleWrapper>
                        <Circle />
                    </CircleWrapper>
                    <BlurWrapper>
                        <Blur />
                    </BlurWrapper>
                    <ShadowWrapper>
                        <Shadow />
                    </ShadowWrapper>

                    <TextContainer>
                        <HeaderWrapper>
                            <HeaderText>나만의 원두 찾기</HeaderText>
                        </HeaderWrapper>
                        <ContentWrapper>
                            <ContentText>쉽게 풀어쓴 테이스팅 노트로 나만의 원두를 찾아보세요</ContentText>
                        </ContentWrapper>
                    </TextContainer>
                </Content>

                <Footer>
                    <ButtonWrapper onPress={() => navigation.navigate("EventPage02")}>
                        <ButtonText>시작하기</ButtonText>
                    </ButtonWrapper>
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
    /*margin-top: ${responsiveHeight(20)}px;*/
    margin-bottom: ${responsiveHeight(24)}px;
`;

const Navbar = styled.View`
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
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: ${responsiveFontSize(18)}px;
    font-style: normal;
    font-weight: 600;
    line-height: ${responsiveFontSize(24)}px;
    letter-spacing: ${responsiveFontSize(-0.5)}px;
`;

const Content = styled.View`
    flex: 1;
    width: 100%;
`;
const DripWrapper = styled.View`
    position: absolute;
    top: ${responsiveHeight(109.56)}px;
    right: ${responsiveWidth(26.04)}px;
`;
const CircleWrapper = styled.View`
    position: absolute;
    top: ${responsiveHeight(146.5)}px;
    right: ${responsiveWidth(67.94)}px;
    z-index: -1;
`;
const BlurWrapper = styled.View`
    position: absolute;
    width: ${responsiveHeight(180)}px;
    height: ${responsiveWidth(180)}px;
    top: ${responsiveHeight(248.5)}px;
    right: ${responsiveWidth(146)}px;
`;
const ShadowWrapper = styled.View`
    position: absolute;
    top: ${responsiveHeight(311.03)}px;
    right: ${responsiveWidth(40)}px;
`;
const TextContainer = styled.View`
    display: flex;
    flex-direction: column;
    gap: ${responsiveFontSize(16)}px;

    position: absolute;
    top: ${responsiveHeight(478)}px;
`;
const HeaderWrapper = styled.View``;
const HeaderText = styled.Text`
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: ${responsiveFontSize(32)}px;
    font-style: normal;
    font-weight: 600;
    line-height: 138%; /* 44.16px */
    letter-spacing: ${responsiveFontSize(-0.8)}px;
`;
const ContentWrapper = styled.View``;
const ContentText = styled.Text`
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 138%; /* 19.32px */
    letter-spacing: -0.35px;
`;
const Footer = styled.View`
    height: ${responsiveHeight(70)}px;
    display: flex;
    padding: 0 ${responsiveWidth(24)}px ${responsiveHeight(16)}px ${responsiveWidth(24)}px;
    flex-direction: column;
    gap: ${responsiveHeight(8)}px;
`;

const ButtonWrapper = styled(TouchableOpacity)`
    display: flex;
    padding: ${responsiveHeight(16)}px 0;
    justify-content: center;
    align-items: center;
    gap: ${responsiveHeight(10)}px;
    border-radius: ${responsiveWidth(12)}px;
    background: #756555;
`;

const ButtonText = styled.Text`
    color: #fafafa;
    font-family: Pretendard;
    font-size: ${responsiveFontSize(16)}px;
    font-style: normal;
    font-weight: 700;
    line-height: ${responsiveFontSize(22)}px;
    letter-spacing: ${responsiveFontSize(-0.4)}px;
`;
