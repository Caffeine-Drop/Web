import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import ExclamationIcon from '../assets/search/ExclamationIcon.svg';
import StarIcon from '../assets/search/StarIcon.svg';

const RecommendedCafes = ({ cafes }) => {
  return (
    <Container>
      <Header>
        <Title>추천 핫한 카페 모음</Title>
        <AdText>광고</AdText>
        <ExclamationIconWrapper>
          <ExclamationIcon width={14} height={14} />
        </ExclamationIconWrapper>
      </Header>
      <FlatList
        horizontal
        data={cafes}
        renderItem={({ item, index }) => (
          <CafeCard style={{ marginLeft: index === 0 ? 24 : 6 }}>
            <CafeText numberOfLines={1} ellipsizeMode="tail">{item.name}</CafeText>
            <DistanceWrapper>
              <DistanceLabel>거리</DistanceLabel>
              <DistanceValue>{item.distance}</DistanceValue>
            </DistanceWrapper>
            <Rating>
              <StarIcon width={18} height={18} />
              <RatingText>{parseFloat(item.rating).toFixed(1)}</RatingText>
            </Rating>
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
  margin-top: 24px;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: 24px;
  margin-bottom: 20px;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  margin-right: 12px;
`;

const AdText = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: #999;
`;

const ExclamationIconWrapper = styled.View`
  margin-left: 0;
`;

const CafeCard = styled.View`
  width: 120px;
  height: 160px;
  background-color: #888;
  border-radius: 12px;
  border: 1px solid #F1F1F1;
  padding-horizontal: 12px;
  padding-bottom: 16px;
  justify-content: flex-end;
  overflow: hidden;
`;

const CafeText = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #fafafa;
  width: 100%;
`;

const DistanceWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

const DistanceLabel = styled.Text`
  font-size: 10px;
  font-weight: 400;
  background-color: #f1f1f1;
  border-radius: 8px;
  display: flex;
  padding: 2px 4px;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
`;

const DistanceValue = styled.Text`
  font-size: 12px;
  font-weight: 400;
  color: #fafafa;
`;

const Rating = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
`;

const RatingText = styled.Text`
  font-size: 12px;
  font-weight: 400;
  color: #fafafa;
  margin-left: 4px;
`;