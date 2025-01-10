import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import BackIcon from "../../assets/Components/BackIcon";

export default function EventPage02({ navigation }) {
    return (
        <Container>
            <InnerContainer>
                <Navbar>
                    <IconWrapper>
                        <BackIcon />
                    </IconWrapper>
                    <Title>원두 진단하기</Title>
                </Navbar>
                <StatusContainer></StatusContainer>

                <Content></Content>

                <Footer>
                    <ButtonWrapper>
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
    height: 0.1875rem;
    flex-shrink: 0;
    background: #f1f1f1;
`;
const Content = styled.View`
    flex: 1;
    width: 100%;
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
