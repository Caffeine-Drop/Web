import React from 'react';
import styled from 'styled-components/native';

const PopularSearchList = ({ popularSearches }) => {
  // 열 기준으로 데이터 재구성
  const rowCount = Math.ceil(popularSearches.length / 2); // 한 열의 데이터 개수
  const columnData = Array.from({ length: 2 }, (_, colIndex) =>
    popularSearches.slice(colIndex * rowCount, (colIndex + 1) * rowCount)
  );

  return (
    <Container>
      <Header>
        <Title>인기 검색어</Title>
        <SubTitle>2024.12.03 21:00 기준</SubTitle>
      </Header>
      <Grid>
        {Array.from({ length: rowCount }).map((_, rowIndex) => (
          <Row key={rowIndex}>
            {columnData.map((col, colIndex) => (
              col[rowIndex] && ( // 데이터가 있을 때만 렌더링
                <GridItem key={colIndex}>
                  <Index>{`${(rowIndex + 1 + colIndex * rowCount).toString().padStart(2, '0')}`}</Index>
                  <SearchText>{col[rowIndex]}</SearchText>
                </GridItem>
              )
            ))}
          </Row>
        ))}
      </Grid>
    </Container>
  );
};

export default PopularSearchList;

const Container = styled.View`
  margin-top: 16px;
  border-bottom-width: 1px; /* 테두리 두께 */
  border-bottom-color: #f1f1f1; /* 테두리 색상 */
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  margin-bottom: 16px;
  width: 312px;
  height: 25px;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: 600;
  margin-right: 12px;
`;

const SubTitle = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: #999;
`;

const Grid = styled.View`
  flex-direction: column;
  padding: 0 24px;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px; /* 행 간 간격 */
`;

const GridItem = styled.View`
  flex-direction: row;
  align-items: center;
  width: 48%; /* 두 열로 배치 */
`;

const Index = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: #666;
  margin-right: 14px; /* 번호와 텍스트 간격 */
`;

const SearchText = styled.Text`
  font-size: 14px;
  font-weight: 500;
`;
