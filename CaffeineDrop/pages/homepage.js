import React from 'react';
import { View,  Button } from 'react-native';
import styled from 'styled-components/native';


export default function HomePage({ navigation }) {
  return (
    <Container>
      <Title>Home Page</Title>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('DetailPage')}
        />
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


