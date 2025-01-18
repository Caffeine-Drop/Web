import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import SearchIcon from '../assets/home/SearchIcon.svg';
import MypageIcon from '../assets/home/MypageIcon.svg';

const GNB = () => {
  return (
    <Container>
      <Title>Caffeine Drop</Title>
      <Icons>
        <TouchableOpacity>
          <SearchIcon width={24} height={24} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MypageIcon width={24} height={24} />
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
