import React, { useState, useEffect, useContext } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../../utils/responsive";
import BackIcon from "../../components/BackIcon";
import NextButton from "../../components/settingPage/NextButton";
import { useFonts } from "../../styles";
import { AuthContext } from "../../context/AuthContext";

export default function SettingPage03({ navigation }) {
  const fontsLoaded = useFonts();
  const { accessToken } = useContext(AuthContext);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    console.log("Effect 1");
  }, []);

  const handleToggle = () => {
    setIsEnabled(!isEnabled);
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Container>
      <Navbar>
        <IconWrapper>
          <BackIcon />
        </IconWrapper>
        <Title>개인 정보 처리 방침</Title>

        {/* 제목 큰 글자 텍스트 */}
        <HeaderContainer>
          <HeaderText>개인 정보 처리 방침</HeaderText>
        </HeaderContainer>

        {/* 본문 텍스트 */}
        <ContentContainer>
          <ContentText>
            개인정보 처리 방침은 추후에 내용이 나오는 대로 추가하도록 함.
            개인정보 처리 방침은 추후에 내용이 나오는 대로 추가하도록 함.
            개인정보 처리 방침은 추후에 내용이 나오는 대로 추가하도록 함.
            개인정보 처리 방침은 추후에 내용이 나오는 대로 추가하도록 함.
            개인정보 처리 방침은 추후에 내용이 나오는 대로 추가하도록 함.
            개인정보 처리 방침은 추후에 내용이 나오는 대로 추가하도록 함.
            개인정보 처리 방침은 추후에 내용이 나오는 대로 추가하도록 함.
          </ContentText>
        </ContentContainer>

        {/* 목록 3개 포함하는 큰 박스 */}
        <ListWrapper>
          <List>
            <ListInnerBox onPress={() => {}}>
              <InnerText>
                개인정보 수입 이용 동의 <DateText>2024.06.25</DateText>
              </InnerText>
              <NextButton />
            </ListInnerBox>
          </List>
          <List>
            <ListInnerBox onPress={() => {}}>
              <InnerText>
                개인정보 제3자 이용 동의 <DateText>2024.06.25</DateText>
              </InnerText>
              <NextButton />
            </ListInnerBox>
          </List>
          <List>
            <ListInnerBox onPress={() => {}}>
              <InnerText>
                서비스 이용 약관 <DateText>2024.06.25</DateText>
              </InnerText>
              <NextButton />
            </ListInnerBox>
          </List>
        </ListWrapper>
      </Navbar>
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
  letter-spacing: ${responsiveWidth(-0.5)};
`;
////////////////////////////////////////////////////
const HeaderText = styled.Text`
  color: #000;
  font-family: PretendardSemiBold;
  font-size: ${responsiveFontSize(24)}px;
  font-style: normal;
  font-weight: 600;
  line-height: ${responsiveHeight(34)}px;
  letter-spacing: -0.6px;
`;
const ContentText = styled.Text`
  color: #000;
  font-family: PretendardRegular;
  font-size: ${responsiveFontSize(14)}px;
  font-style: normal;
  font-weight: 400;
  line-height: ${responsiveHeight(19.32)}px;
  letter-spacing: -0.35px;
`;
const ContentContainer = styled.View`
  display: flex;
  position: absolute;
  top: ${responsiveHeight(138.5)}px;
  padding-left: ${responsiveWidth(24)}px;
  padding-right: ${responsiveWidth(24)}px;
`;
const HeaderContainer = styled.View`
  display: flex;
  position: absolute;
  top: ${responsiveHeight(72.5)}px;
  left: ${responsiveWidth(24)}px;
`;
////////////////////////////////////////////////////
const ListWrapper = styled.View`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: ${responsiveHeight(314.5)}px;
  width: 100%;
  padding-left: ${responsiveWidth(24)}px;
  padding-right: ${responsiveWidth(24)}px;
`;
const List = styled.View``;
const ListInnerBox = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${responsiveHeight(20)}px;
  padding-bottom: ${responsiveHeight(20)}px;
  border-bottom-width: ${responsiveWidth(1)}px;
  border-bottom-color: #ebebeb;
`;
const InnerText = styled.Text`
  color: #000;
  font-family: PretendardRegular;
  font-size: ${responsiveFontSize(16)}px;
  font-style: normal;
  font-weight: 400;
  line-height: ${responsiveHeight(22.08)}px;
  letter-spacing: -0.4px;
`;
const DateText = styled.Text`
  color: #666;
  font-family: PretendardRegular;
  font-size: ${responsiveFontSize(16)}px;
  font-style: normal;
  font-weight: 400;
  line-height: ${responsiveHeight(22.08)}px;
  letter-spacing: -0.4px;
`;
