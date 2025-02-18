import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../../utils/responsive";
import BackIcon from "../../components/BackIcon";
import BlurIcon from "../../components/eventPage/BlurIcon";
import BlurIcon2 from "../../components/eventPage/BlurIcon2";
import { useFonts } from "../../styles";

export default function SettingPage03({ navigation }) {
  const fontsLoaded = useFonts();

  if (!fontsLoaded) {
    return null;
  }

  const handleToggle = () => {
    setIsEnabled(!isEnabled);
  };

  return (
    <Container>
      <Navbar>
        <IconWrapper>
          <BackIcon />
        </IconWrapper>
        <Title>탈퇴하기</Title>
      </Navbar>

      {/* 제목 큰 글자 텍스트 */}
      <HeaderContainer>
        <HeaderText>회원 탈퇴를{"\n"}진행하시겠습니까?</HeaderText>
      </HeaderContainer>

      {/* 본문 텍스트 */}
      <ContentContainer>
        <ContentText>
          탈퇴 시엔 저장하신 데이터 복구가 어렵습니다.{"\n"}
          {"\n"}• 최근 검색어, ‘좋아요’ 표시 등의 데이터는 복구가{"\n"}
          {"   "}어렵습니다.{"\n"}• 작성하신 리뷰는 회원 탈퇴 후에도 삭제되지
          {"\n"}
          {"   "}않습니다.
        </ContentText>
      </ContentContainer>

      {/* 탈퇴하기 버튼 */}
      <DeleteButton>
        <ButtonText>탈퇴하기</ButtonText>
      </DeleteButton>

      {/* 블러 장식 */}
      <BlurBox1>
        <BlurIcon />
      </BlurBox1>

      <BlurBox2>
        <BlurIcon2 />
      </BlurBox2>
    </Container>
  );
}
const Container = styled.View`
  background: #fafafa;
  flex: 1;
`;
const Navbar = styled.View`
  height: ${responsiveHeight(56)}px;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  margin-top: ${responsiveHeight(38)}px;
  z-index: 5;
`;
const IconWrapper = styled.View`
  position: absolute;
  left: ${responsiveWidth(24)}px;
`;
const Title = styled.Text`
  color: #000;
  text-align: center;
  font-family: PretendardSemiBold;
  font-size: ${responsiveFontSize(18)}px;
  font-style: normal;
  font-weight: 600;
  line-height: ${responsiveHeight(24)}px;
  letter-spacing: -0.5px;
`;
////////////////////////////////////////////////////
const HeaderContainer = styled.View`
  display: flex;
  width: 100%;
  margin-top: ${responsiveHeight(56)}px;
  margin-left: ${responsiveWidth(24)}px;
`;

const ContentContainer = styled.View`
  margin-top: ${responsiveHeight(34)}px;
  padding-left: ${responsiveWidth(24)}px;
  padding-right: ${responsiveWidth(24)}px;
`;
const HeaderText = styled.Text`
  color: #000;
  font-family: PretendardSemiBold;
  font-size: ${responsiveFontSize(30)}px;
  font-style: normal;
  font-weight: 600;

  line-height: ${responsiveHeight(41.4)}px;
  letter-spacing: -0.75px;
`;
const ContentText = styled.Text`
  color: #000;
  font-family: PretendardRegular;
  font-size: ${responsiveFontSize(16)}px;
  font-style: normal;
  font-weight: 400;
  line-height: ${responsiveHeight(25.6)}px;
  letter-spacing: -0.4px;
`;
////////////////////////////////////////////////////
const DeleteButton = styled(TouchableOpacity)`
  margin-top: ${responsiveHeight(226)}px;

  display: flex;
  width: ${responsiveWidth(312)}px;
  padding-top: ${responsiveHeight(16)}px;
  padding-bottom: ${responsiveHeight(16)}px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: #756555;

  margin-left: ${responsiveWidth(24)}px;
  margin-right: ${responsiveWidth(24)}px;
`;

const ButtonText = styled.Text`
  color: #fafafa;
  font-family: PretendardBold;
  font-size: ${responsiveFontSize(16)}px;
  font-style: normal;
  font-weight: 700;
  line-height: ${responsiveHeight(22.08)}px;
  letter-spacing: -0.4px;
`;
////////////////////////////////////////////////////
const BlurBox1 = styled.View`
  position: absolute;
  height: ${responsiveHeight(420)}px;
  width: ${responsiveWidth(420)}px;
  right: ${responsiveWidth(-50)}px;
  top: ${responsiveHeight(14)}px;
`;

const BlurBox2 = styled.View`
  position: absolute;
  height: ${responsiveHeight(420)}px;
  width: ${responsiveWidth(420)}px;
  left: ${responsiveWidth(175)}px;
  top: ${responsiveHeight(294)}px;
`;
