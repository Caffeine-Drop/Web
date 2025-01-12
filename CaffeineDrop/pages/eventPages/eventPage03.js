import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import BackIcon from "../../Components/BackIcon";

export default function EventPage03({ navigation }) {
    return (
        <Container>
            <InnerContainer>
                <Navbar>
                    <IconWrapper>
                        <BackIcon />
                    </IconWrapper>
                    <Title>원두 진단하기</Title>
                </Navbar>
                <StatusContainer>
                    <CurrentState></CurrentState>
                </StatusContainer>

                <Content>
                    <TextContainer>
                        <HeaderContainer>
                            <HeaderText>
                                나는 산미가 강한
                                <br /> 원두가 좋다
                            </HeaderText>
                        </HeaderContainer>

                        <ContentContainer>
                            <ContentText>산(acid)에서 나는 산미는 보편적으로 생각하는 신맛과는 살짝 달라요. 산미란 식초와 같이 기분 나쁜 신맛이 아닌 과 일을 먹을 때 느껴지던 것과 같은 긍정적인 신맛으로, 산미를 즐기는 매니아 층도 두터워요.</ContentText>
                        </ContentContainer>
                    </TextContainer>

                    <SelectContainer>
                        <SelectOption>
                            <SelectText>매우 그렇다</SelectText>
                        </SelectOption>
                        <SelectOption>
                            <SelectText>보통이다</SelectText>
                        </SelectOption>
                        <SelectOption>
                            <SelectText>그렇지 않다</SelectText>
                        </SelectOption>
                    </SelectContainer>
                </Content>

                <Footer>
                    <ButtonWrapper onPress={() => navigation.navigate("EventPage04")}>
                        <ButtonText>다음으로</ButtonText>
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
    margin-top: 2.38rem;
    margin-bottom: 2.63rem;
`;

const Navbar = styled.View`
    height: 3.5rem;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
`;
const IconWrapper = styled.View`
    position: absolute;
    left: 1.5rem;
`;
const Title = styled.Text`
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 600;
    line-height: 138%;
    letter-spacing: -0.02813rem;
`;
const StatusContainer = styled.View`
    display: flex;
    height: 0.1875rem;
    flex-direction: row;
    background: #f1f1f1;
`;
const CurrentState = styled.View`
    width: 11.25rem;
    height: 0.1875rem;
    flex-shrink: 0;
    background: #756555;
`;

const Content = styled.View`
    flex: 1;
    width: 100%;
`;
const TextContainer = styled.View`
    margin-top: 2.44rem;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    display: flex;

    flex-direction: column;
    align-items: center;
    gap: 2rem;
`;
const HeaderContainer = styled.View``;
const HeaderText = styled.Text`
    color: #000;
    text-align: center;
    font-family: "Pretendard-SemiBold";
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    line-height: 138%; /* 2.76rem */
    letter-spacing: -0.05rem;
`;
const ContentContainer = styled.View``;
const ContentText = styled.Text`
    color: #000;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 1.3125rem */
    letter-spacing: -0.02188rem;
`;
const HighlightText1 = styled.Text`
    color: #000;
    font-family: Pretendard;
    font-size: 0.785rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.02188rem;
`;
const HighlightText2 = styled.Text`
    color: #000;
    font-family: Pretendard;
    font-size: 0.785rem;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.02188rem;
`;

const SelectContainer = styled.View`
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    margin-top: 4.19rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
    background: #fafafaa6;
    align-items: center;

    display: flex;
`;
const SelectOption = styled.View`
    display: flex;
    padding: 0.75rem 1rem;

    gap: 1rem;
    align-self: stretch;
    width: 100%;
    height: 3.6875rem;
    justify-content: center;

    border-radius: 0.5rem;
    background: rgba(250, 250, 250, 0.65);
    shadow-color: rgba(0, 0, 0, 0.04);
    shadow-offset: 0px 8px;
    shadow-opacity: 1;
    shadow-radius: 8px;
    backdrop-filter: blur(6px);
`;
const SelectText = styled.Text`
    text-align: left;
    color: #666;

    /* 16-TI-B */
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 138%; /* 1.38rem */
    letter-spacing: -0.025rem;
`;

const Footer = styled.View`
    height: 4.375rem;
    display: inline-flex;
    padding: 0rem 1.5rem 1rem 1.5rem;
    flex-direction: column;
    gap: 0.5rem;
`;

const ButtonWrapper = styled(TouchableOpacity)`
    display: flex;
    padding: 1rem 0rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    padding-top: 1rem;
    padding-bottom: 1rem;

    border-radius: 0.75rem;
    background: #756555;
`;

const ButtonText = styled.Text`
    color: #fafafa;
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 138%;
    letter-spacing: -0.025rem;
`;
