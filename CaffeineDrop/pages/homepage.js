import React from "react";
import { View, Button } from "react-native";
import styled from "styled-components/native";

export default function HomePage({ navigation }) {
    return (
        <Container>
            <Title>Home Page</Title>
            <Button title="Go to Details" onPress={() => navigation.navigate("DetailPage")} />
            <Button title="Go to Events" onPress={() => navigation.navigate("EventPage01")} />
            <Button title="(임시)스폐셜티 커피란?" onPress={() => navigation.navigate("EventPage12")} />
        </Container>
    );
}

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
`;
