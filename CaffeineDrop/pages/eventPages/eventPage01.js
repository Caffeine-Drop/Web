import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import BackIcon from "../../assets/Components/BackIcon";
import Event01Image from "../../assets/Components/EventComponents/Event01Image";

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
                    <ImageWrapper>
                        <Event01Image />
                    </ImageWrapper>

                    <TextContainer>
                        <Header>
                            <HeaderText>나만의 원두 찾기</HeaderText>
                        </Header>
                        <InnerContent>
                            <InnerText>쉽게 풀어쓴 테이스팅 노트로</InnerText>
                            <InnerText>나만의 원두를 찾아보세요</InnerText>
                        </InnerContent>
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

const Content = styled.View`
    flex: 1;
    width: 100%;
`;

const ImageWrapper = styled.View`
    width: 20.68519rem;
    height: 22.28906rem;
    flex-shrink: 0;
    position: absolute;
    top: 7rem;
    left: -3.5rem;
`;

const TextContainer = styled.View`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding-left: 4.91rem;
    padding-right: 4.91rem;
    margin-top: 27.53rem;
`;

const Header = styled.View``;

const HeaderText = styled.Text`
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    line-height: 138%; /* 2.76rem */
    letter-spacing: -0.05rem;
    white-space: nowrap;
`;

const InnerContent = styled.View``;

const InnerText = styled.Text`
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 138%; /* 1.2075rem */
    letter-spacing: -0.02188rem;
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
