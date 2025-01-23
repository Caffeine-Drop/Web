import React, { useRef, useState } from "react";
import { ScrollView, Animated, PanResponder, StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import { responsiveFontSize, responsiveWidth, responsiveHeight } from "../../utils/responsive";
import styled from "styled-components/native";
import BackIcon from "../../components/BlackTextCircle";
import BlackTextCircle from "../../components/BlackTextCircle";
import BlurIcon from "../../components/BlurIcon";
import { LinearGradient } from "expo-linear-gradient";

import BrazilImage from "../../components/Card_Brazil";
import ColombiaImage from "../../components/Card_Colombia";
import CostaRicaImage from "../../components/Card_CostaRica";
import EthiopiaImage from "../../components/Card_Ethiopia";
import GuatemalaImage from "../../components/Card_Guatemala";
import IndonesiaImage from "../../components/Card_Indonesia";
import KenyaImage from "../../components/Card_Kenya";
import VietnamImage from "../../components/Card_Vietnam";

export default function EventPage06({ navigation }) {
    return (
        <Container>
            <InnerContainer>
                <Navbar>
                    <IconWrapper>
                        <BackIcon />
                    </IconWrapper>
                    <Title>원두 진단하기</Title>
                </Navbar>

                {/* Scrollable Content */}
                <ScrollView>
                    <Content>
                        <GreyColorBox>
                            <TextContainer>
                                <HeaderContainer>
                                    <HeaderText>나만의{"\n"}테이스팅 노트</HeaderText>
                                </HeaderContainer>

                                <ContentContainer>
                                    <ContentText>
                                        로스팅 정도에 따라 향, 산미, 바디감, 쓴맛 등이{"\n"}
                                        강하게 나타날 수 있어요
                                    </ContentText>
                                </ContentContainer>
                            </TextContainer>

                            <ResultChartWrapper>
                                <ResultInnerBox>
                                    <ResultName>
                                        <ResultText>향(Aroma, AfterTaste)</ResultText>
                                        <ResultScore>
                                            4.0
                                            <Text style={{ color: "#666666" }}>/5</Text>
                                        </ResultScore>
                                    </ResultName>
                                    <ResultChartSpace>
                                        <ResultChart>
                                            <LeftLine />
                                            <ResultBrown></ResultBrown>
                                            <ResultGrey></ResultGrey>
                                            <RightLine />
                                        </ResultChart>
                                    </ResultChartSpace>
                                </ResultInnerBox>

                                <ResultInnerBox>
                                    <ResultName>
                                        <ResultText>산미(Acidity)</ResultText>
                                        <ResultScore>
                                            4.0
                                            <Text style={{ color: "#666666" }}>/5</Text>
                                        </ResultScore>
                                    </ResultName>

                                    <ResultChartSpace>
                                        <ResultChart>
                                            <LeftLine />
                                            <ResultBrown></ResultBrown>
                                            <ResultGrey></ResultGrey>
                                            <RightLine />
                                        </ResultChart>
                                    </ResultChartSpace>
                                </ResultInnerBox>

                                <ResultInnerBox>
                                    <ResultName>
                                        <ResultText>바디감(Body)</ResultText>
                                        <ResultScore>
                                            4.0
                                            <Text style={{ color: "#666666" }}>/5</Text>
                                        </ResultScore>
                                    </ResultName>
                                    <ResultChartSpace>
                                        <ResultChart>
                                            <LeftLine />
                                            <ResultBrown></ResultBrown>
                                            <ResultGrey></ResultGrey>
                                            <RightLine />
                                        </ResultChart>
                                    </ResultChartSpace>
                                </ResultInnerBox>

                                <ResultInnerBox>
                                    <ResultName>
                                        <ResultText>
                                            로스팅 정도(SCAA 기준) |<Text style={{ color: "#000000" }}> 시나몬</Text>
                                        </ResultText>
                                        <ResultScore>
                                            2<Text style={{ color: "#666666" }}>/8</Text>
                                        </ResultScore>
                                    </ResultName>
                                    <ResultChartSpace>
                                        <ResultChart>
                                            <LeftLine />
                                            <ResultSmallBrownWrapper>
                                                <ResultSmallBrown />
                                                <SmallRightLine />
                                            </ResultSmallBrownWrapper>
                                            <ResultSmallBrownWrapper>
                                                <ResultSmallBrown />
                                                <SmallRightLine />
                                            </ResultSmallBrownWrapper>

                                            <ResultSmallGreyWrapper>
                                                <ResultSmallGrey />
                                                <SmallRightLine />
                                            </ResultSmallGreyWrapper>
                                            <ResultSmallGreyWrapper>
                                                <ResultSmallGrey />
                                                <SmallRightLine />
                                            </ResultSmallGreyWrapper>
                                            <ResultSmallGreyWrapper>
                                                <ResultSmallGrey />
                                                <SmallRightLine />
                                            </ResultSmallGreyWrapper>
                                            <ResultSmallGreyWrapper>
                                                <ResultSmallGrey />
                                                <SmallRightLine />
                                            </ResultSmallGreyWrapper>
                                            <ResultSmallGreyWrapper>
                                                <ResultSmallGrey />
                                                <SmallRightLine />
                                            </ResultSmallGreyWrapper>
                                            <ResultSmallGreyWrapper>
                                                <ResultSmallGrey />
                                                <SmallRightLine />
                                            </ResultSmallGreyWrapper>
                                        </ResultChart>
                                    </ResultChartSpace>
                                </ResultInnerBox>
                            </ResultChartWrapper>
                        </GreyColorBox>

                        <ResultCardWrapper>
                            <ResultHeaderBox>
                                <InnerText>당신에게 가장{"\n"}잘 어울리는 원두는?</InnerText>
                            </ResultHeaderBox>

                            <ResultContentBox>
                                <BrazilImage />
                            </ResultContentBox>
                        </ResultCardWrapper>
                    </Content>

                    <Footer>
                        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
                            <ButtonWrapper>
                                <ButtonText>완료하기</ButtonText>
                            </ButtonWrapper>
                        </TouchableOpacity>
                    </Footer>
                </ScrollView>
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

//////////////////////////////////////////////
const GreyColorBox = styled.View`
    background-color: #f1f1f1;
`;
const TextContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: ${responsiveHeight(12)}px;
    margin-top: ${responsiveWidth(39)}px;
    margin-left: ${responsiveWidth(24)}px;
    margin-right: ${responsiveWidth(24)}px;
    margin-bottom: ${responsiveWidth(32)}px;
`;
const HeaderContainer = styled.View``;

const HeaderText = styled.Text`
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: ${responsiveFontSize(28)}px;
    font-style: normal;
    font-weight: 600;
    line-height: ${responsiveHeight(38.64)}px;
    letter-spacing: ${responsiveWidth(-0.7)}px;
`;
const ContentContainer = styled.View``;
const ContentText = styled.Text`
    color: #000;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 400;
    line-height: ${responsiveHeight(19.32)}px;
    font-size: ${responsiveFontSize(14)}px;
    text-align: center;
    letter-spacing: ${responsiveWidth(-1)}px;
`;

const ResultChartWrapper = styled.View`
    margin-left: ${responsiveWidth(24)}px;
    margin-right: ${responsiveWidth(24)}px;
    margin-bottom: ${responsiveWidth(24)}px;
    display: flex;
    gap: ${responsiveHeight(12)}px;
`;

//목록 상자
const ResultInnerBox = styled.View`
    display: flex;
    gap: ${responsiveHeight(8)}px;
`;

//이름과 점수 공간 ///////////////////////
const ResultName = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const ResultText = styled.Text`
    color: #666;
    font-family: Pretendard;
    font-size: ${responsiveFontSize(12)}px;
    font-style: normal;
    font-weight: 500;
    line-height: ${responsiveHeight(16.56)}px;
    letter-spacing: ${responsiveWidth(-0.3)}px;
`;

const ResultScore = styled.Text`
    color: #321900;
    text-align: right;
    font-family: Pretendard;
    font-size: ${responsiveFontSize(12)}px;
    font-style: normal;
    font-weight: 500;
    line-height: ${responsiveHeight(16.56)}px;
    letter-spacing: ${responsiveWidth(-0.3)}px;
`;

//막대그래프 공간 ///////////////////////
const ResultChartSpace = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${responsiveHeight(12)}px;
`;

const ResultChart = styled.View`
    width: ${responsiveWidth(224)}px;
    height: ${responsiveHeight(24)}px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
const RightLine = styled.View`
    position: absolute;
    right: 0;
    top: ${responsiveHeight(6)}px;
    width: ${responsiveWidth(1)}px;
    height: ${responsiveHeight(10)}px;
    background-color: #d9d9d9;
    z-index: 2;
`;
const SmallRightLine = styled.View`
    position: absolute;
    right: 0;
    top: ${responsiveHeight(-2)}px;
    width: ${responsiveWidth(1)}px;
    height: ${responsiveHeight(10)}px;
    background-color: #d9d9d9;
    z-index: 5;
`;
const LeftLine = styled.View`
    position: absolute;
    left: -1.5px;
    top: ${responsiveHeight(6)}px;
    width: ${responsiveWidth(1)}px;
    height: ${responsiveHeight(10)}px;
    background-color: #d9d9d9;
    z-index: 2;
`;
const ResultBrown = styled.View`
    background-color: #000000;
    width: ${responsiveWidth(154)}px;
    height: ${responsiveHeight(5)}px;
    z-index: 1;
`;
const ResultGrey = styled.View`
    background-color: #ebebeb;
    width: ${responsiveWidth(70)}px;
    height: ${responsiveHeight(5)}px;
    z-index: 0;
`;
const ResultSmallBrownWrapper = styled.View`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
`;
const ResultSmallGreyWrapper = styled.View`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
`;
const ResultSmallBrown = styled.View`
    background-color: #000000;
    width: ${responsiveWidth(28)}px;
    height: ${responsiveHeight(5)}px;
    z-index: 4;
`;
const ResultSmallGrey = styled.View`
    background-color: #ebebeb;
    width: ${responsiveWidth(28)}px;
    height: ${responsiveHeight(5)}px;
    z-index: 3;
`;
////////////////////////////////////////////
const ResultCardWrapper = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${responsiveHeight(32)}px;
    margin-top: ${responsiveHeight(50)}px;
    margin-left: ${responsiveWidth(24)}px;
    margin-right: ${responsiveWidth(24)}px;
    margin-bottom: ${responsiveHeight(40)}px;
`;
const ResultHeaderBox = styled.View``;
const InnerText = styled.Text`
    text-align: center;
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: ${responsiveFontSize(28)}px;
    font-style: normal;
    font-weight: 600;
    line-height: ${responsiveHeight(42)}px;
    letter-spacing: ${responsiveHeight(-0.7)}px;
`;
const ResultContentBox = styled.View`
    justify-content: center;
`;

//////////////////////////////////////////////
const Footer = styled.View`
    position: absolute;
    top: ${responsiveHeight(965)}px;
    display: inline-flex;
    padding: 0px 24px 16px 24px;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    background: #fafafa;
`;

const ButtonText = styled.Text`
    color: #fafafa;
    font-family: Pretendard;
    font-size: ${responsiveFontSize(16)}px;
    font-style: normal;
    font-weight: 700;
    line-height: ${responsiveHeight(22.08)}px;
    letter-spacing: ${responsiveWidth(-0.4)}px;

    font-family: Pretendard;
    font-size: ${responsiveFontSize(16)}px;
    font-style: normal;
    font-weight: 700;
    line-height: ${responsiveHeight(22.08)}px;
    letter-spacing: ${responsiveHeight(-0.4)}px;
`;

const ButtonWrapper = styled.View`
    display: flex;
    width: ${responsiveWidth(312)}px;
    padding: 16px 0px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 12px;
    background-color: #756555;
`;
