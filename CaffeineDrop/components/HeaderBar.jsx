import React from 'react';
import styled from 'styled-components/native';
import BackIcon from './BackIcon';

const HeaderBar = ({ onSettingsPress }) => {
  return (
    <Container>
      <HeadContainer>
        <BackIcon />
        <Title>검색</Title>
      </HeadContainer>
      <SearchContainer>
        <InputContainer>
          <SearchInput placeholder="검색어를 입력해주세요" />
        </InputContainer>
        <SettingsButton onPress={onSettingsPress}>
          <SettingsText>검색</SettingsText>
          <SettingsText>설정</SettingsText>
        </SettingsButton>
      </SearchContainer>
    </Container>
  );
};

export default HeaderBar;

const Container = styled.View`
  background-color: #fafafa;
  margin-top: 38px;
`;

const HeadContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 360px;
  height: 56px;
  padding: 15px 24px 16px;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: 600;
  padding-left: 117px;
`;

const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 360px;
  height: 68px;
  padding-bottom: 12px;
`;

const InputContainer = styled.View`
  flex: 1;
  border: 1px solid #E5E3E1;
  border-radius: 12px;
  background: #fff;
  margin-left: 16px;
  margin-right:8px;
  overflow: hidden;
  width: 279px;
  height: 56px;
  padding: 16px;
`;

const SearchInput = styled.TextInput`
  flex: 1;
  margin-right: 12px;
  width: 211px;
  height: 24px;
  font-size: 16px;
  color: #999;
  font-weight: 400;
`;

const SettingsButton = styled.TouchableOpacity`
  height: 56px;
  padding: 4px 10px;
  justify-content: center;
  align-items: center;
  display: flex;
  background: #E5E3E1;
  border-radius: 12px;
`;

const SettingsText = styled.Text`
  font-size: 12px;
  color: #756555;
  font-weight: 500;
`;
