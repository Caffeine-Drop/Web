import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { responsiveFontSize, responsiveWidth, responsiveHeight } from "../../utils/responsive";
import BackIcon from "../../components/BackIcon";
import DefaultSettingImage from "../../components/DefaultSettingImage";
import KaKaoIcon from "../../components/KaKaoIcon";
import NextButton from "../../components/NextButton";

export default function SettingPage01({ navigation }) {
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
                        <NextButton />
                    </ListInnerBox>
                </List>

                <List>
                    <ListInnerBox>
                        <ListText>탈퇴하기</ListText>
                        <NextButton />
                    </ListInnerBox>
                </List>

                <List>
                    <ListInnerBox>
                        <ListText>설정</ListText>
                        <NextButton />
                    </ListInnerBox>
                </List>

                <List>
                    <ListInnerBoxNoBorder>
                        <ListText>문의하기</ListText>
                        <NextButton />
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
    width: 360px;
    height: 340px;
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
    font-family: Pretendard;
    font-size: ${responsiveFontSize(18)}px;
    font-style: normal;
    font-weight: 600;
    line-height: ${responsiveFontSize(24)}px;
    letter-spacing: ${responsiveFontSize(-0.5)};
`;
////////////////////////////////////////////////////
const Box1 = styled.View`
    display: flex;
    justify-content: center;
`;

const ImageBox = styled.View`
    position: absolute;
    left: ${responsiveWidth(130)}px;
    top: ${responsiveWidth(16)}px;
`;
const NameBox = styled.View`
    display: flex;
    justify-content: center;
    position: absolute;
    top: ${responsiveWidth(140)}px;
    width: 100%;
`;
const NameText = styled.Text`
    overflow: hidden;
    color: #000;
    text-align: center;
    text-overflow: ellipsis;
    font-family: Pretendard;
    font-size: ${responsiveFontSize(24)}px;
    font-style: normal;
    font-weight: 600;
    line-height: ${responsiveFontSize(33.12)}px;
    letter-spacing: -0.6px;
`;
const LoginBox = styled(TouchableOpacity)`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: ${responsiveWidth(122)}px;
    height: ${responsiveHeight(25)}px;
    top: ${responsiveWidth(185)}px;
    left: ${responsiveWidth(119)}px;
    padding: 4px 9px 4px 6px;
    border-radius: 24px;
    background: #e5e3e1;
`;
const LoginButton = styled(TouchableOpacity)`
    display: inline-flex;
    padding: 4px 9px 4px 6px;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: ${responsiveWidth(122)}px;
    height: ${responsiveHeight(25)}px;
    border-radius: 24px;
    background: #e5e3e1;
`;
const LoginInnerBox = styled.View`
    display: flex;
    flex-direction: row;
    gap: 4px;
`;
const IconSpace = styled.View`
    justify-content: center;
    align-text: center;
    border-radius: 16px;
    background: #fee500;
    width: 16px;
    height: 16px;
`;
const IconBox = styled.View`
    position: absolute;
    left: 3px;
    top: 3.9px;
`;
const TextSpace = styled.View``;
const LoginText = styled.Text`
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 11px;
    font-style: normal;
    font-weight: 500;
    line-height: 138%; /* 16.56px */
    letter-spacing: -0.3px;
`;
////////////////////////////////////////////////////
const GreyGap = styled.View`
    background: rgba(105, 105, 105, 0.02);
    width: 100%;
    height: 16px;
    position: absolute;
    top: 340px;
    z-index: 3;
`;
const Box2 = styled.View`
    background: #fafafa;
    display: flex;
    flex-direction: column;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 16px;
    padding-top: 16px;
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
    padding-top: 16px;
    padding-bottom: 16px;
    border-bottom-width: 1px;
    border-bottom-color: #ebebeb;
`;
const ListInnerBoxNoBorder = styled(ListInnerBox)`
    border-bottom-width: 0;
`;
const ListText = styled.Text`
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 138%;
    letter-spacing: -0.4px;
`;
////////////////////////////////////////////////////
const Box3 = styled.View`
    background: #f1f1f1;
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 172px;
    top: 587.5px;
`;
const TextBox = styled.View`
    display: flex;
    justify-content: center;
    width: 100%;
    position: absolute;
    top: 20px;
`;
const LogoutText = styled.Text`
    text-align: center;
    color: #666;
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 138%; /* 22.08px */
    letter-spacing: -0.4px;
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-decoration-skip-ink: none;
    text-decoration-thickness: auto;
    text-underline-offset: auto;
    text-underline-position: from-font;
`;
