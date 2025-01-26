import React, { useState, useRef } from 'react';
import {
  Keyboard,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../utils/responsive";
import styled from 'styled-components/native';
import BackIcon from './BackIcon';
import SearchIcon from '../assets/search/SearchIcon.svg';
import SearchDeleteIcon from '../assets/search/SearchDeleteIcon.svg';

const HeaderBar = ({ onSearchPress, onSettingsPress, setIsKeyboardVisible }) => {
  const [searchText, setSearchText] = useState("");
  const [isSettingComplete, setIsSettingComplete] = useState(false);
  const inputRef = useRef(null); // TextInput의 ref 생성

  const handleInputChange = (text) => {
    setSearchText(text);
  };

  const clearSearchInput = () => {
    setSearchText("");
  };

  const handleSettingsPress = () => {
    const newSettingState = !isSettingComplete; // 현재 상태 반전
    setIsSettingComplete(newSettingState); // 상태 업데이트
    onSettingsPress(newSettingState); // 부모 컴포넌트에 새로운 상태 전달
  };

  return (
    <Container>
      <HeadContainer>
        <BackIcon />
        <Title>검색</Title>
      </HeadContainer>
      <SearchContainer>
        <InputContainer>
          <SearchInput
            ref={inputRef} // TextInput에 ref 연결
            placeholder="검색어를 입력해주세요"
            value={searchText}
            onChangeText={handleInputChange}
            onFocus={() => setIsKeyboardVisible(true)} // 키보드 상태 관리
            onBlur={() => setIsKeyboardVisible(false)} // 키보드 상태 관리
          />
          <IconsWrapper>
            {searchText.length > 0 && (
              <DeleteIconWrapper onPress={clearSearchInput}>
                <SearchDeleteIcon
                  width={responsiveWidth(24)}
                  height={responsiveHeight(24)}
                />
              </DeleteIconWrapper>
            )}
            <SearchIconWrapper onPress={onSearchPress}>
              <SearchIcon
                width={responsiveWidth(24)}
                height={responsiveHeight(24)}
              />
            </SearchIconWrapper>
          </IconsWrapper>
        </InputContainer>
        <SettingsButton
          onPress={handleSettingsPress}
          isComplete={isSettingComplete}
        >
          {/* isComplete 상태를 SettingsText에 명시적으로 전달 */}
          <SettingsText isComplete={isSettingComplete}>
            {isSettingComplete ? "설정" : "검색"}
          </SettingsText>
          <SettingsText isComplete={isSettingComplete}>
            {isSettingComplete ? "완료" : "설정"}
          </SettingsText>
        </SettingsButton>
      </SearchContainer>
    </Container>
  );
};

export default HeaderBar;

// 스타일은 동일하게 유지
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
  border: 1px solid #e5e3e1;
  border-radius: 12px;
  background: #fff;
  margin-left: 16px;
  margin-right: 8px;
  overflow: hidden;
  width: 279px;
  height: 56px;
  padding: 0 16px;
  position: relative;
`;

const SearchInput = styled.TextInput`
  flex: 1;
  width: 100%;
  height: 100%;
  font-size: 16px;
  color: #999;
  font-weight: 400;
  padding-right: 40px; /* 아이콘과 텍스트 간격 확보 */
`;

const IconsWrapper = styled.View`
  position: absolute;
  top: 50%;
  right: 12px; /* 오른쪽에서 시작 */
  flex-direction: row; /* 아이콘들을 가로로 배치 */
  align-items: center;
  transform: translateY(-12px); /* 세로 중앙 정렬 */
`;

const DeleteIconWrapper = styled.TouchableOpacity`
  margin-right: 4px; /* 검색 아이콘과 간격 추가 */
`;

const SearchIconWrapper = styled.TouchableOpacity``;

const SettingsButton = styled.TouchableOpacity`
  height: 56px;
  padding: 4px 10px;
  justify-content: center;
  align-items: center;
  display: flex;
  background: ${(props) => (props.isComplete ? "#756555" : "#e5e3e1")};
  border-radius: 12px;
`;

const SettingsText = styled.Text`
  font-size: 12px;
  color: ${(props) => (props.isComplete ? "#fafafa" : "#756555")};
  font-weight: 500;
`;
