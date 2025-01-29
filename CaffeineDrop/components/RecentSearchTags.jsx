import React from 'react';
import styled from 'styled-components/native';
import DeleteIcon from '../assets/search/DeleteIcon.svg';

const RecentSearchTags = ({ recentSearches, onClearAll }) => {
  return (
    <Container>
      <Header>
        <Title>최근 검색어</Title>
        <ClearText onPress={onClearAll}>모두 삭제</ClearText>
      </Header>
      <TagList horizontal showsHorizontalScrollIndicator={false}>
        {recentSearches.map((search, index) => (
          <Tag key={index}>
            <TagText>{search}</TagText>
            <DeleteIconWrapper>
              <DeleteIcon width={19} height={19} />
            </DeleteIconWrapper>
          </Tag>
        ))}
      </TagList>
    </Container>
  );
};

export default RecentSearchTags;

const Container = styled.View`
  margin-top: 24px;
  border-bottom-width: 1px; /* 테두리 두께 */
  border-bottom-color: #f1f1f1; /* 테두리 색상 */
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between; /* Title과 ClearText를 양쪽에 배치 */
  align-items: center; /* 세로 가운데 정렬 */
  padding: 0 24px;
  margin-bottom: 16px;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: 600;
`;

const ClearText = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: #999;
`;

const TagList = styled.ScrollView`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  padding-left: 24px;
  margin-bottom: 24px;
`;

const Tag = styled.View`
  flex-direction: row; /* 태그 텍스트와 아이콘을 가로로 배치 */
  height: 36px;
  align-items: center;
  justify-content: center;
  padding: 6px 10px 6px 14px;
  border-radius: 41px;
  margin-right: 8px;
  border: 1px solid #EBEBEB;
`;

const TagText = styled.Text`
  font-size: 14px;
  margin-right: 2px; /* 텍스트와 아이콘 사이 간격 */
`;

const DeleteIconWrapper = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;