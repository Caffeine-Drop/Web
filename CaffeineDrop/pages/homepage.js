import React from "react";
import { View, Button } from "react-native";
import styled from "styled-components/native";

export default function HomePage({ navigation }) {
    return (
        <Container>
            <Title>Home Page</Title>
            <Button title="Go to Events 1" onPress={() => navigation.navigate("EventPage01")} />
            <Button title="Go to Events 2" onPress={() => navigation.navigate("EventPage02")} />
            <Button title="Go to Events 3" onPress={() => navigation.navigate("EventPage03")} />
            <Button title="Go to Events 4" onPress={() => navigation.navigate("EventPage04")} />
            <Button title="Go to Events 5" onPress={() => navigation.navigate("EventPage05")} />
            <Button title="Go to Events 6" onPress={() => navigation.navigate("EventPage06")} />

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
