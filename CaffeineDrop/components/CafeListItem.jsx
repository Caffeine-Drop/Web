import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import StarIcon from '../assets/home/StarIcon.svg';

const CafeListItem = ({ cafe }) => {
  return (
    <Container>
      <ListContainer> {/* 새로운 컨테이너 추가 */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <ImagePlaceholder1 />
          <ImagePlaceholder2 />
          <ImagePlaceholder3 />
        </ScrollView>
        <TouchableOpacity>
          <Info>
            <Title>{cafe.name}</Title>
            <Location>{cafe.location}</Location>
            <Details>
              <Distance>{cafe.distance}</Distance>
              <RatingContainer>
                <StarIcon width={12} height={12} style={{ marginRight: 5 }} />
                <RatingText>{cafe.rating} | {cafe.reviews}</RatingText>
              </RatingContainer>
            </Details>
          </Info>
        </TouchableOpacity>
      </ListContainer>
    </Container>
  );
};

export default CafeListItem;

// 스타일 정의
const Container = styled.View`
  margin: 0 24px;
  background-color: #fafafa;
  border-radius: 10px;
  overflow: hidden;
`;

const ListContainer = styled.View`
  width: 312px;
  height: 274px;
  padding: 16px 0; /* 위아래 패딩 16px */
`;

const ImagePlaceholder1 = styled.View`
  width: 150px;
  height: 150px;
  background-color: #d9d9d9;
  margin-right: 4px;
  border-radius: 12px;
`;

const ImagePlaceholder2 = styled.View`
  width: 112.5px;
  height: 150px;
  background-color: #d9d9d9;
  margin-right: 4px;
  border-radius: 12px;
`;

const ImagePlaceholder3 = styled.View`
  width: 113.5px;
  height: 150px;
  background-color: #d9d9d9;
  margin-right: 4px;
  border-radius: 12px;
`;

const Info = styled.View`
  padding: 10px;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const Location = styled.Text`
  font-size: 14px;
  color: gray;
`;

const Details = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
`;

const Distance = styled.Text`
  font-size: 12px;
  color: gray;
`;

const RatingContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const RatingText = styled.Text`
  font-size: 12px;
  color: gray;
`;