import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

const RecommendedCafes = ({ cafes }) => {
  return (
    <Container>
      <Title>추천 핫한 카페 모음</Title>
      <AdText>광고 ⓘ</AdText>
      <FlatList
        horizontal
        data={cafes}
        renderItem={({ item }) => (
          <CafeCard>
            <CafeText>{item.name}</CafeText>
            <CafeDetails>{`거리 ${item.distance}`}</CafeDetails>
            <CafeDetails>{`★ ${item.rating}`}</CafeDetails>
          </CafeCard>
        )}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
};

export default RecommendedCafes;

const Container = styled.View`
  padding: 16px;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const AdText = styled.Text`
  font-size: 12px;
  color: #888;
  margin-bottom: 8px;
`;

const CafeCard = styled.View`
  width: 120px;
  height: 160px;
  background-color: #ddd;
  margin-right: 16px;
  border-radius: 8px;
  padding: 8px;
  justify-content: flex-end;
`;

const CafeText = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

const CafeDetails = styled.Text`
  font-size: 12px;
`;
