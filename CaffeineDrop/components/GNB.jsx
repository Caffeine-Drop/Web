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
  padding: 53px 20px 15px 20px;
  background-color: #fafafa;
  height: 94px;
  shadow-color: rgba(0, 0, 0, 0.12);
  shadow-offset: 0px 4px;
  shadow-opacity: 1;
  shadow-radius: 8px;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: 600;
  line-height: 24.84px;
`;

const Icons = styled.View`
  flex-direction: row;
  gap: 15px;
`;
