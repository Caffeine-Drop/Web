import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

const GNB = () => {
  return (
    <Container>
      <Title>Caffeine Drop</Title>
      <Icons>
        <TouchableOpacity>
          <Ionicons name="search-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="person-outline" size={24} color="black" />
        </TouchableOpacity>
      </Icons>
    </Container>
  );
};

export default GNB;

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: white;
  height: 56px;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const Icons = styled.View`
  flex-direction: row;
  gap: 15px;
`;
