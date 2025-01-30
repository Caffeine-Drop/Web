import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { responsiveFontSize, responsiveWidth, responsiveHeight } from "../../utils/responsive";
import BackIcon from "../../components/BackIcon";
import DefaultSettingImage from "../../components/DefaultSettingImage";
import KaKaoIcon from "../../components/KaKaoIcon";
import NextButton from "../../components/NextButton";
import { useFonts } from "../../styles";
import { useNavigation } from "@react-navigation/native";

import { Dimensions } from "react-native";

// 화면 너비 가져오기
const { width } = Dimensions.get("window");

// 태블릿 판별 기준 (보통 width가 600px 이상이면 태블릿)
const isTablet = width >= 600;

export default function SettingPage01({ navigation }) {
    const fontsLoaded = useFonts();

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
                        <DefaultSettingImage />
                    </ImageBox>
                    <NameBox>
                        <NameText>다니엘</NameText>
                    </NameBox>
                    <LoginBox>
                        <LoginButton>
                            <LoginInnerBox>
                                <IconSpace>
                                    <IconBox>
                                        <KaKaoIcon />
                                    </IconBox>
                                </IconSpace>
                                <TextSpace>
                                    <LoginText>카카오 소셜 로그인</LoginText>
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
                    <ListInnerBox>
                        <ListText>프로필 관리</ListText>
                        <TouchableOpacity onPress={() => navigation.navigate("")}>
                            <NextButton />
                        </TouchableOpacity>
                    </ListInnerBox>
                </List>

                <List>
                    <ListInnerBox>
                        <ListText>탈퇴하기</ListText>
                        <TouchableOpacity onPress={() => navigation.navigate("SettingPage04")}>
                            <NextButton />
                        </TouchableOpacity>
                    </ListInnerBox>
                </List>

                <List>
                    <ListInnerBox>
                        <ListText>설정</ListText>
                        <TouchableOpacity onPress={() => navigation.navigate("SettingPage02")}>
                            <NextButton />
                        </TouchableOpacity>
                    </ListInnerBox>
                </List>

                <List>
                    <ListInnerBoxNoBorder>
                        <ListText>문의하기</ListText>
                        <TouchableOpacity onPress={() => navigation.navigate("SettingAskPage")}>
                            <NextButton />
                        </TouchableOpacity>
                    </ListInnerBoxNoBorder>
                </List>
            </Box2>

            {/* 로그아웃 부분 /////////////////// */}
            <Box3>
                <TextBox>
                    <LogoutText>로그아웃</LogoutText>
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
    height: 100%;
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
    display: flex;
    justify-content: center;
`;

const ImageBox = styled.View`
    position: absolute;
    left: ${isTablet ? width / 2 - responsiveWidth(50) : responsiveWidth(130)}px;
    top: ${responsiveHeight(16)}px;
`;
const NameBox = styled.View`
    display: flex;
    justify-content: center;
    position: absolute;
    top: ${responsiveHeight(140)}px;
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
const LoginBox = styled(TouchableOpacity)`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: ${responsiveWidth(122)}px;
    height: ${responsiveHeight(25)}px;
    padding: 4px 9px 4px 6px;
    border-radius: 24px;
    background: #e5e3e1;

    left: ${isTablet ? width / 2 - responsiveWidth(61) : responsiveWidth(119)}px;
    top: ${responsiveHeight(185)}px;
`;
const LoginButton = styled(TouchableOpacity)`
    display: inline-flex;
    padding: 4px 9px 4px 6px;
    align-items: center;
    justify-content: center;
    gap: ${responsiveWidth(4)}px;
    width: ${isTablet ? responsiveWidth(90) : responsiveWidth(122)}px;
    height: ${responsiveHeight(25)}px;
    border-radius: 24px;
    background: #e5e3e1;
`;
const LoginInnerBox = styled.View`
    display: flex;
    flex-direction: row;
    gap: ${responsiveWidth(4)}px;
`;
const IconSpace = styled.View`
    justify-content: center;
    align-text: center;
    border-radius: ${isTablet ? "18px" : "16px"};
    background: #fee500;
    width: ${responsiveWidth(16)}px;
    height: ${responsiveHeight(16)}px;
`;
const IconBox = styled.View`
    position: absolute;
    left: ${responsiveWidth(3)}px;
    top: ${isTablet ? responsiveHeight(2.8) : responsiveHeight(3)}px;
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
    position: absolute;
    top: ${responsiveHeight(340)}px;
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
    position: absolute;
    top: ${responsiveHeight(340)}px;
    width: 100%;
`;
const List = styled.View`
    background: #fafafa;
`;
const ListInnerBox = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-top: ${responsiveHeight(16)}px;
    padding-bottom: ${responsiveHeight(16)}px;
    border-bottom-width: ${responsiveWidth(1)}px;
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
    letter-spacing: ${responsiveWidth(-0.4)};
`;
////////////////////////////////////////////////////
const Box3 = styled.View`
    background: #f1f1f1;
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: ${responsiveWidth(172)}px;
    top: ${responsiveHeight(587.5)}px;
`;
const TextBox = styled.View`
    display: flex;
    justify-content: center;
    width: 100%;
    position: absolute;
    top: ${responsiveHeight(20)}px;
`;
const LogoutText = styled.Text`
    text-align: center;
    color: #666;
    font-family: PretendardRegular;
    font-size: ${responsiveFontSize(16)}px;
    font-style: normal;
    font-weight: 400;
    line-height: ${responsiveHeight(22.08)}px;
    letter-spacing: ${responsiveHeight(-0.4)};
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-decoration-skip-ink: none;
    text-decoration-thickness: auto;
    text-underline-offset: auto;
    text-underline-position: from-font;
`;
