import React, { useRef, useState } from "react";
import { ScrollView, Animated, PanResponder, StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import { responsiveFontSize, responsiveWidth, responsiveHeight } from "../../utils/responsive";
import styled from "styled-components/native";
import BackIcon from "../../Components/BackIcon";
import BlackTextCircle from "../../Components/BlackTextCircle";
import BlurIcon from "../../Components/BlurIcon";
import { LinearGradient } from "expo-linear-gradient";
import LoadingImg from "../../Components/LoadingImg";
import Loading1 from "../../Components/Loading1";
import Loading2 from "../../Components/Loading2";
import Loading3 from "../../Components/Loading3";

export default function EventPage11({ navigation }) {
    return (
        <Container>
            <InnerContainer>
                <Navbar>
                    <IconWrapper>
                        <BackIcon />
                    </IconWrapper>
                    <Title>원두 진단하기</Title>
                </Navbar>

                <Content>
                    <LoadingBox>
                        <Loading1 />
                    </LoadingBox>

                    <TextContainer>
                        <HeaderContainer>
                            <HeaderText>원두를 진단하는{"\n"}중이에요</HeaderText>
                        </HeaderContainer>

                        <ContentContainer>
                            <ContentText>내 취향에 딱 맞는 원두를 찾았다면, 카페 테이스팅 노트를{"\n"}참고해 보세요. 당신의 완벽한 한 잔을 만날 수 있어요!</ContentText>
                        </ContentContainer>
                    </TextContainer>

                    <ImgWrapper>
                        <LoadingImg />
                    </ImgWrapper>
                </Content>
            </InnerContainer>
        </Container>
    );
}

const Container = styled.View`
    width: 100%;
    height: 100%;
    background: #fafafa;

    overflow: hidden;
`;
const InnerContainer = styled.View`
    flex: 1;
`;

const Navbar = styled.View`
    display: flex;
    flex-direction: row;
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
    font-size: ${responsiveFontSize(18)}px;
    line-height: ${responsiveHeight(24.84)}px;
    letter-spacing: ${responsiveFontSize(-0.45)}px;
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 600;
`;

//////////////////////////////////////////////
const Content = styled.View`
    flex: 1;
    width: 100%;
`;
const LoadingBox = styled.View`
    width: ${responsiveWidth(44)}px;
    height: ${responsiveHeight(10)}px;
    position: absolute;
    left: ${responsiveWidth(32)}px;
    top: ${responsiveHeight(80)}px;
`;

//////////////////////////////////////////////

const TextContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;

    gap: ${responsiveHeight(20)}px;
    margin-top: ${responsiveWidth(130)}px;
    margin-left: ${responsiveWidth(24)}px;
    margin-right: ${responsiveWidth(24)}px;
    margin-bottom: ${responsiveWidth(32)}px;
`;
const ImgWrapper = styled.View`
    position: absolute;
    top: ${responsiveHeight(313)}px;
`;

const HeaderContainer = styled.View``;

const HeaderText = styled.Text`
    color: #000;
    font-family: Pretendard;
    font-size: ${responsiveFontSize(24)}px;
    font-style: normal;
    font-weight: 600;
    line-height: ${responsiveHeight(33.12)}px;
    letter-spacing: ${responsiveWidth(-0.6)}px;
`;
const ContentContainer = styled.View``;
const ContentText = styled.Text`
    color: #000;
    font-family: Pretendard;
    font-size: ${responsiveFontSize(12)}px;
    font-style: normal;
    font-weight: 400;
    line-height: ${responsiveHeight(18)}px;
    letter-spacing: ${responsiveWidth(-1)}px;
    text-align: left;
`;
