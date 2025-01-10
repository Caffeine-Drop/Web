import React from "react";
import { View, Text, Button } from "react-native";
import styled from "styled-components/native";

export default function EventPage01({ navigation }) {
    return (
        <Container>
            <Text>EventPage01 Screen</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </Container>
    );
}

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
