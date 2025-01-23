import React from 'react';
import styled from 'styled-components/native';

const RecentSearchTags = ({ recentSearches, onClearAll }) => {
  return (
    <Container>
      <Title>
        최근 검색어
        <ClearText onPress={onClearAll}>모두 삭제</ClearText>
      </Title>
      <TagList>
        {recentSearches.map((search, index) => (
          <Tag key={index}>{search}</Tag>
        ))}
      </TagList>
    </Container>
  );
};

export default RecentSearchTags;

const Container = styled.View`
  padding: 16px;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const ClearText = styled.Text`
  font-size: 14px;
  color: #007aff;
  text-align: right;
`;

const TagList = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.Text`
  font-size: 14px;
  padding: 4px 8px;
  background-color: #f0f0f0;
  border-radius: 16px;
  margin-right: 8px;
`;
