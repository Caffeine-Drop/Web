import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import BackIcon from "../../assets/Components/BackIcon";

export default function EventPage05({ navigation }) {
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
                                나는 바디감이 강한
                                <br />
                                원두가 좋다
                            </HeaderText>
                        </HeaderContainer>

                        <ContentContainer>
                            <ContentText>바디감은 질감과 무게감의 정도를 말해요. 정확히 말하면, 액체의 밀도와 중량으로 구분한다고 볼 수 있어요. 쉽게 예를 들어 보면 물은 바디감이 약한 편이고, 우유는 바디감이 강한 편이에요.</ContentText>
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
                    <ButtonWrapper onPress={() => navigation.navigate("EventPage06")}>
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
    background: #756555;
`;
const CurrentState = styled.View``;

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
