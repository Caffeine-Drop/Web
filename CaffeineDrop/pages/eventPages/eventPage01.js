import React from "react";
import { View, Text, Button } from "react-native";
import styled from "styled-components/native";
import BackIcon from "../../assets/Components/BackIcon";

export default function EventPage01({ navigation }) {
    return (
        <Container>
            <Navbar>
                <BackIcon />
                <Title>원두 진단하기</Title>
            </Navbar>
        </Container>
    );
}

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background: #fafafa;
`;

const Navbar = styled.View`
    background: rgb(186, 167, 167);
    width: 360px;
    height: 56px;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
`;

const Title = styled.Text`
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24.84px; /* 138% of 18px */
    letter-spacing: -0.45px;
`;
