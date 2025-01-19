import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../utils/responsive";
import styled from 'styled-components/native';
import SearchIcon from '../assets/home/SearchIcon.svg';
import MypageIcon from '../assets/home/MypageIcon.svg';

const GNB = () => {
  return (
    <Container>
      <Title>Caffeine Drop</Title>
      <Icons>
        <TouchableOpacity>
          <SearchIcon width={responsiveWidth(24)} height={responsiveHeight(24)} />
        </TouchableOpacity>
        <TouchableOpacity>
          <MypageIcon width={responsiveWidth(24)} height={responsiveHeight(24)} />
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
  margin-top: ${responsiveHeight(38)}px;
  background-color: #fafafa;
  height: ${responsiveHeight(56)}px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: 600;
  line-height: 24.84px;
  padding-left: ${responsiveWidth(24)}px;
`;

const Icons = styled.View`
  flex-direction: row;
  gap: ${responsiveWidth(16)}px;
  padding-right: ${responsiveWidth(16)}px;
`;
