import React from "react";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../utils/responsive";
import styled from "styled-components/native";
import { useFonts } from "../styles";

const PopularSearchList = ({ popularSearches }) => {
  const fontsLoaded = useFonts();

  // 열 기준으로 데이터 재구성
  const rowCount = Math.ceil(popularSearches.length / 2); // 한 열의 데이터 개수
  const columnData = Array.from({ length: 2 }, (_, colIndex) =>
    popularSearches.slice(colIndex * rowCount, (colIndex + 1) * rowCount)
  );

  if (!fontsLoaded) {
    return null; // 폰트 로드될 때까지 렌더링 안 함
  }

  return (
    <Container>
      <Header>
        <Title>인기 검색어</Title>
        <CurrentTime>2024.12.03 21:00 기준</CurrentTime>
      </Header>
      <Grid>
        {Array.from({ length: rowCount }).map((_, rowIndex) => (
          <Row key={rowIndex}>
            {columnData.map(
              (col, colIndex) =>
                col[rowIndex] && ( // 데이터가 있을 때만 렌더링
                  <GridItem key={colIndex}>
                    <Index>{`${(rowIndex + 1 + colIndex * rowCount)
                      .toString()
                      .padStart(2, "0")}`}</Index>
                    <SearchText>{col[rowIndex]}</SearchText>
                  </GridItem>
                )
            )}
          </Row>
        ))}
      </Grid>
    </Container>
  );
};

export default PopularSearchList;

const Container = styled.View`
  margin-top: ${responsiveHeight(16)}px;
  border-bottom-width: 1px; /* 테두리 두께 */
  border-bottom-color: #f1f1f1; /* 테두리 색상 */
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 ${responsiveWidth(24)}px;
  margin-bottom: ${responsiveHeight(16)}px;
  width: ${responsiveWidth(312)}px;
  height: ${responsiveHeight(25)}px;
`;

const Title = styled.Text`
  font-family: PretendardSemiBold;
  font-size: ${responsiveFontSize(18)}px;
  font-weight: 600;
  line-height: ${responsiveHeight(24.84)}px;
  letter-spacing: -0.45;
  margin-right: ${responsiveWidth(12)}px;
`;

const CurrentTime = styled.Text`
  font-family: PretendardMedium;
  font-size: ${responsiveFontSize(12)}px;
  font-weight: 500;
  line-height: ${responsiveHeight(16.56)}px;
  letter-spacing: -0.3;
  color: #999;
`;

const Grid = styled.View`
  flex-direction: column;
  padding: 0 ${responsiveWidth(24)}px;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${responsiveHeight(16)}px;
`;

const GridItem = styled.View`
  flex-direction: row;
  align-items: center;
  width: 48%;
`;

const Index = styled.Text`
  font-family: PretendardMedium;
  font-size: ${responsiveFontSize(14)}px;
  font-weight: 500;
  line-height: ${responsiveHeight(19.32)}px;
  letter-spacing: -0.35;
  color: #666;
  margin-right: ${responsiveWidth(14)}px;
`;

const SearchText = styled.Text`
  font-family: PretendardMedium;
  font-size: ${responsiveFontSize(14)}px;
  font-weight: 500;
  line-height: ${responsiveHeight(19.32)}px;
  letter-spacing: -0.35;
`;
