import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const CafeListItem = ({ cafe }) => {
  return (
    <Container>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <ImagePlaceholder />
        <ImagePlaceholder />
        <ImagePlaceholder />
      </ScrollView>
      <TouchableOpacity>
        <Info>
          <Title>{cafe.name}</Title>
          <Location>{cafe.location}</Location>
          <Details>
            <Distance>{cafe.distance}</Distance>
            <Rating>⭐ {cafe.rating} | {cafe.reviews}</Rating>
          </Details>
        </Info>
      </TouchableOpacity>
    </Container>
  );
};

export default CafeListItem;

const Container = styled.View`
  margin: 16px 16px;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
`;

const ImagePlaceholder = styled.View`
  width: 150px;
  height: 150px;
  background-color: #ccc;
  margin-right: 10px;
  border-radius: 10px;
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

const Rating = styled.Text`
  font-size: 12px;
  color: gray;
`;
