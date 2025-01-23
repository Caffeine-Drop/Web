import React from 'react';
import styled from 'styled-components/native';

const PopularSearchList = ({ popularSearches }) => {
  return (
    <Container>
      <Title>인기 검색어</Title>
      <SubTitle>2024.12.03 21:00 기준</SubTitle>
      <Grid>
        {popularSearches.map((search, index) => (
          <GridItem key={index}>{`${index + 1} ${search}`}</GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export default PopularSearchList;

const Container = styled.View`
  padding: 16px;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const SubTitle = styled.Text`
  font-size: 12px;
  color: #888;
  margin-bottom: 8px;
`;

const Grid = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;

const GridItem = styled.Text`
  font-size: 14px;
  margin-bottom: 4px;
`;
