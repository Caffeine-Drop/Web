import React, { useState, useRef } from "react";
import { Keyboard } from "react-native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../utils/responsive";
import styled from "styled-components/native";
import BackIcon from "./BackIcon";
import SearchIcon from "../assets/search/SearchIcon.svg";
import SearchDeleteIcon from "../assets/search/SearchDeleteIcon.svg";
import { useFonts } from "../styles";

const HeaderBar = ({
  onSearchPress,
  onSettingsPress,
  setIsKeyboardVisible,
  searchText,
  setSearchText,
}) => {
  const fontsLoaded = useFonts();

  // const [searchText, setSearchText] = useState("");
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

  if (!fontsLoaded) {
    return null; // 폰트 로드될 때까지 렌더링 안 함
  }

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
                  width={`${responsiveWidth(24)}px`}
                  height={`${responsiveHeight(24)}px`}
                />
              </DeleteIconWrapper>
            )}
            <SearchIconWrapper onPress={onSearchPress}>
              <SearchIcon
                width={`${responsiveWidth(24)}px`}
                height={`${responsiveHeight(24)}px`}
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
  margin-top: ${responsiveHeight(38)}px;
`;

const HeadContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: ${responsiveWidth(360)}px;
  height: ${responsiveHeight(56)}px;
  padding: ${responsiveHeight(15)}px ${responsiveWidth(24)}px
    ${responsiveHeight(16)}px;
`;

const Title = styled.Text`
  font-family: PretendardSemiBold;
  font-size: ${responsiveFontSize(18)}px;
  font-weight: 600;
  line-height: ${responsiveHeight(19.32)}px;
  letter-spacing: -0.45;
  padding-left: ${responsiveWidth(117)}px;
`;

const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: ${responsiveWidth(360)}px;
  height: ${responsiveHeight(68)}px;
  padding-bottom: ${responsiveHeight(12)}px;
`;

const InputContainer = styled.View`
  flex: 1;
  border: 1px solid #e5e3e1;
  border-radius: 12px;
  background: #fff;
  margin-left: ${responsiveWidth(16)}px;
  margin-right: ${responsiveWidth(8)}px;
  overflow: hidden;
  width: ${responsiveWidth(279)}px;
  height: ${responsiveHeight(56)}px;
  padding: 0 ${responsiveWidth(16)}px;
  position: relative;
`;

const SearchInput = styled.TextInput`
  flex: 1;
  width: 100%;
  height: 100%;
  font-family: PretendardRegular;
  font-size: ${responsiveFontSize(16)}px;
  font-weight: 400;
  line-height: ${responsiveHeight(19.32)}px;
  letter-spacing: -0.4;
  color: #999;
  padding-right: ${responsiveWidth(40)}px;
`;

const IconsWrapper = styled.View`
  position: absolute;
  top: 50%;
  right: ${responsiveWidth(12)}px;
  flex-direction: row;
  align-items: center;
  transform: translateY(-12px);
`;

const DeleteIconWrapper = styled.TouchableOpacity`
  margin-right: ${responsiveWidth(4)}px;
`;

const SearchIconWrapper = styled.TouchableOpacity``;

const SettingsButton = styled.TouchableOpacity`
  height: ${responsiveHeight(56)}px;
  padding: ${responsiveHeight(4)}px ${responsiveWidth(10)}px;
  justify-content: center;
  align-items: center;
  display: flex;
  background: ${(props) => (props.isComplete ? "#756555" : "#e5e3e1")};
  border-radius: 12px;
`;

const SettingsText = styled.Text`
  font-family: PretendardMedium;
  font-size: ${responsiveFontSize(12)}px;
  color: ${(props) => (props.isComplete ? "#fafafa" : "#756555")};
  font-weight: 500;
  line-height: ${responsiveHeight(19.32)}px;
  letter-spacing: -0.3;
`;
