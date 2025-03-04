import React, { useState, useContext, useEffect, useRef } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { Linking } from "react-native";
import { WebView } from "react-native-webview";
import styled from "styled-components/native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../../utils/responsive";
import BackIcon from "../../components/BackIcon";
import DefaultSettingImage from "../../components/settingPage/DefaultSettingImage";
import KaKaoIcon from "../../components/settingPage/KaKaoIcon";
import NaverIcon from "../../components/settingPage/NaverIcon";
import NextButton from "../../components/settingPage/NextButton";
import { useFonts } from "../../styles";
import { useNavigation } from "@react-navigation/native";
import {
  REST_API_KEY,
  REDIRECT_URI,
  NAVER_CLIENT_SECRET,
  NAVER_CLIENT_ID,
} from "@env";

import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export default function SettingPage01({ navigation }) {
  const fontsLoaded = useFonts();
  const { accessToken, userId, LoggedPlatform, clearRefreshToken } =
    useContext(AuthContext);

  const [nickname, setNickname] = useState("");
  const [profileImageUrl, setProfileImageUrl] = useState("");
  const [showWebView, setShowWebView] = useState(false);
  const [webViewUrl, setWebViewUrl] = useState("");

  const getUserInfo = async () => {
    try {
      const response = await axios.get(`http://13.124.11.195:3000/users`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          Provider: LoggedPlatform,
        },
      });
      console.log("Response(사용자 정보 가져오기):", response.data);
      const { nickname, profileImageUrl } = response.data.success;
      setNickname(nickname);
      setProfileImageUrl(profileImageUrl);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  // 로그아웃
  const handleLogout = () => {
    if (LoggedPlatform === "kakao") {
      const kakaoLogout = () => {
        const logoutUrl = `https://kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${REDIRECT_URI}`;
        setWebViewUrl(logoutUrl);
        setShowWebView(true);
        clearRefreshToken();
      };
      kakaoLogout();
    } else if (LoggedPlatform === "naver") {
      const naverLogout = async () => {
        try {
          const logoutUrl = `https://nid.naver.com/oauth2.0/token?grant_type=delete&client_id=${NAVER_CLIENT_ID}&client_secret=${NAVER_CLIENT_SECRET}&access_token=${accessToken}`;
          await axios.get(logoutUrl);
          navigation.reset({
            index: 0,
            routes: [{ name: "OnboardingLogin01" }],
          });
          clearRefreshToken();
        } catch (error) {
          console.error("Error during Naver logout:", error);
        }
      };
      naverLogout();
    }
  };

  if (showWebView) {
    return (
      <WebView
        source={{ uri: webViewUrl }}
        onNavigationStateChange={(navState) => {
          if (navState.url === REDIRECT_URI) {
            setShowWebView(false);
            navigation.reset({
              index: 0,
              routes: [{ name: "OnboardingLogin01" }],
            });
          }
        }}
      />
    );
  }

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Container>
      <FirstBox>
        <Navbar>
          <IconWrapper>
            <BackIcon />
          </IconWrapper>
          <Title>마이페이지</Title>
        </Navbar>

        {/* 프사 부분 /////////////////// */}
        <Box1>
          <ImageBox>
            {profileImageUrl ? (
              <ProfileImage source={{ uri: profileImageUrl }} />
            ) : (
              <DefaultSettingImage />
            )}
          </ImageBox>
          <NameBox>
            <NameText>{nickname}</NameText>
          </NameBox>
          <LoginBox>
            <LoginButton>
              <LoginInnerBox>
                {/* 아이콘 공간 */}
                <IconSpace>
                  <IconBox>
                    {LoggedPlatform === "kakao" ? (
                      <KaKaoIcon />
                    ) : LoggedPlatform === "naver" ? (
                      <NaverIcon />
                    ) : null}
                  </IconBox>
                </IconSpace>

                <TextSpace>
                  <Text>
                    {LoggedPlatform === "kakao"
                      ? "카카오 소셜 로그인"
                      : LoggedPlatform === "naver"
                      ? "네이버 소셜 로그인"
                      : "로그인"}
                  </Text>
                </TextSpace>
              </LoginInnerBox>
            </LoginButton>
          </LoginBox>
        </Box1>
      </FirstBox>

      <GreyGap></GreyGap>
      {/* 목록 부분 /////////////////// */}
      <Box2>
        <List>
          <ListInnerBox onPress={() => navigation.navigate("SettingPage05")}>
            <ListText>프로필 관리</ListText>
            <NextButton />
          </ListInnerBox>
        </List>

        <List>
          <ListInnerBox onPress={() => navigation.navigate("SettingPage04")}>
            <ListText>탈퇴하기</ListText>
            <NextButton />
          </ListInnerBox>
        </List>

        <List>
          <ListInnerBox onPress={() => navigation.navigate("SettingPage02")}>
            <ListText>설정</ListText>
            <NextButton />
          </ListInnerBox>
        </List>

        <List>
          <ListInnerBoxNoBorder
            onPress={() => navigation.navigate("SettingAskPage")}
          >
            <ListText>문의하기</ListText>
            <NextButton />
          </ListInnerBoxNoBorder>
        </List>
      </Box2>

      {/* 로그아웃 부분 /////////////////// */}
      <Box3>
        <TextBox>
          <TextBoxWrapper>
            <TouchableOpacity
              onPress={() => {
                handleLogout();
              }}
            >
              <LogoutText>로그아웃</LogoutText>
            </TouchableOpacity>
          </TextBoxWrapper>
        </TextBox>
      </Box3>
    </Container>
  );
}

/*
top: ${responsiveHeight(109.56)}px;
right: ${responsiveWidth(26.04)}px;
font-size: ${responsiveFontSize(18)}px;
*/

const Container = styled.View`
  width: ${responsiveWidth(360)}px;
  height: ${responsiveHeight(340)}px;
  background: #fafafa;
`;
const FirstBox = styled.View`
  width: 100%;
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
  letter-spacing: -0.5px;
`;
////////////////////////////////////////////////////
const Box1 = styled.View`
  justify-content: center;
`;

const ImageBox = styled.View`
  margin-top: ${responsiveHeight(16)}px;
  margin-left: ${responsiveWidth(130)}px;
`;
const ProfileImage = styled.Image`
  width: ${responsiveWidth(100)}px;
  height: ${responsiveHeight(100)}px;
  border-radius: 55px;
`;
const NameBox = styled.View`
  justify-content: center;
  margin-top: ${responsiveHeight(24)}px;
  width: 100%;
`;
const NameText = styled.Text`
  overflow: hidden;
  color: #000;
  text-align: center;
  text-overflow: ellipsis;
  font-family: PretendardSemiBold;
  font-size: ${responsiveFontSize(24)}px;
  font-style: normal;
  font-weight: 600;
  line-height: ${responsiveHeight(33.12)}px;
  letter-spacing: ${responsiveWidth(-0.6)};
`;
const LoginBox = styled.View`
  justify-content: center;
  align-items: center;
  width: ${responsiveWidth(122)}px;
  height: ${responsiveHeight(25)}px;
  padding: 4px 9px 4px 6px;
  border-radius: 24px;
  background: #e5e3e1;

  margin-left: ${responsiveWidth(119)}px;
  margin-top: ${responsiveHeight(12)}px;
`;
const LoginButton = styled.View`
  display: inline-flex;
  padding: 4px 9px 4px 6px;
  align-items: center;
  justify-content: center;
  gap: ${responsiveWidth(4)}px;
  width: ${responsiveWidth(135)}px;
  height: ${responsiveHeight(25)}px;
  border-radius: 24px;
  background: #e5e3e1;
`;
const LoginInnerBox = styled.View`
  flex-direction: row;
  gap: ${responsiveWidth(10)}px;
`;
const IconSpace = styled.View`
  justify-content: center;
  align-text: center;
  border-radius: 16px;
  width: ${responsiveWidth(16)}px;
  height: ${responsiveHeight(16)}px;
`;
const IconBox = styled.View`
  margin-left: ${responsiveWidth(3)}px;
  margin-top: ${responsiveHeight(1)}px;
`;
const TextSpace = styled.View``;
const LoginText = styled.Text`
  color: #000;
  text-align: center;
  font-family: PretendardMedium;
  font-size: ${responsiveFontSize(12)}px;
  font-style: normal;
  font-weight: 500;
  line-height: ${responsiveHeight(16.56)}px;
  letter-spacing: ${responsiveWidth(-0.3)};
`;
////////////////////////////////////////////////////
const GreyGap = styled.View`
  background: rgba(105, 105, 105, 0.02);
  width: 100%;
  height: ${responsiveHeight(16)}px;
  margin-top: ${responsiveHeight(36)}px;
  z-index: 3;
`;
const Box2 = styled.View`
  background: #fafafa;
  display: flex;
  flex-direction: column;
  padding-left: ${responsiveWidth(24)}px;
  padding-right: ${responsiveWidth(24)}px;
  padding-bottom: ${responsiveHeight(16)}px;
  padding-top: ${responsiveHeight(16)}px;
  width: 100%;
`;
const List = styled.View`
  background: #fafafa;
`;
const ListInnerBox = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${responsiveHeight(16)}px;
  padding-bottom: ${responsiveHeight(16)}px;
  border-bottom-width: 1px;
  border-bottom-color: #ebebeb;
`;
const ListInnerBoxNoBorder = styled(ListInnerBox)`
  border-bottom-width: 0;
`;
const ListText = styled.Text`
  color: #000;
  font-family: PretendardRegular;
  font-size: ${responsiveFontSize(16)}px;
  font-style: normal;
  font-weight: 400;
  line-height: ${responsiveHeight(22.08)}px;
  letter-spacing: -0.4px;
`;
////////////////////////////////////////////////////
const Box3 = styled.View`
  background: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const TextBox = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: ${responsiveHeight(20)}px;
`;
const TextBoxWrapper = styled.View`
  width: ${responsiveWidth(65)}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LogoutText = styled.Text`
  text-align: center;
  color: #666;
  font-family: PretendardRegular;
  font-size: ${responsiveFontSize(16)}px;
  font-style: normal;
  font-weight: 400;
  line-height: ${responsiveHeight(22.08)}px;
  letter-spacing: -0.4px;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
`;
