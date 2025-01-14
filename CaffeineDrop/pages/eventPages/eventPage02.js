import React from "react";
import { Animated, PanResponder, StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import { responsiveFontSize, responsiveWidth, responsiveHeight } from "../../utils/responsive";
import styled from "styled-components/native";
import BackIcon from "../../Components/BackIcon";
import BlackTextCircle from "../../Components/BlackTextCircle";
import BlurIcon from "../../Components/BlurIcon";
import CoffeeImage from "../../Components/Coffee";
import { ScrollView } from "react-native";

export default function EventPage02({ navigation }) {
    return (
        <Container>
            <ScrollView
                horizontal={false} // 좌우 스크롤 비활성화
                showsHorizontalScrollIndicator={false} // 좌우 스크롤바 숨김
            >
                <InnerContainer>
                    <Navbar>
                        <IconWrapper>
                            <BackIcon />
                        </IconWrapper>
                        <Title>원두 진단하기</Title>
                    </Navbar>
                    <StatusContainer>
                        <CurrentState />
                    </StatusContainer>

                    <Content>
                        <BlurWrapper>
                            <BlurIcon />
                        </BlurWrapper>

                        <TextContainer>
                            <HeaderContainer>
                                <CircleWrapper>
                                    <BlackTextCircle />
                                </CircleWrapper>
                                <HeaderText>나는 향이 강한{"\n"}원두가 좋다</HeaderText>
                            </HeaderContainer>

                            <ContentContainer>
                                <ContentText>
                                    원두의 향은 네 가지로 구성돼요.
                                    <HighlightText1> 프레그런스, 아로마, 노즈, 애프터 테이스트</HighlightText1>가 있어요. 카페인 드롭은 이 중 <HighlightText2>애프터 테이스트 혹은 아로마를 테이스팅 노트에 반영했어요.</HighlightText2>
                                </ContentText>
                            </ContentContainer>
                        </TextContainer>

                        <CoffeeContainer>
                            <CoffeeImage />
                        </CoffeeContainer>

                        <BlurWrapper2>
                            <BlurIcon />
                        </BlurWrapper2>

                        <SelectContainer>
                            <SelectOption>
                                <SelectText>매우 그렇다</SelectText>
                                <SelectScore>5점</SelectScore>
                            </SelectOption>
                            <SelectOption>
                                <SelectText>보통이다</SelectText>
                                <SelectScore>4점</SelectScore>
                            </SelectOption>
                            <SelectOption>
                                <SelectText>그렇지 않다</SelectText>
                                <SelectScore>3점</SelectScore>
                            </SelectOption>
                        </SelectContainer>
                    </Content>

                    <Footer>
                        <ButtonWrapper onPress={() => navigation.navigate("EventPage03")}>
                            <ButtonText>다음으로</ButtonText>
                        </ButtonWrapper>
                    </Footer>
                </InnerContainer>
            </ScrollView>
        </Container>
    );
}

const Container = styled.View`
    width: 100%;
    height: 100%;
    background: #fafafa;

    overflow: hidden; /* 내용이 넘칠 경우 숨김 처리 */
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
const StatusContainer = styled.View`
    display: flex;
    height: ${responsiveHeight(3)}px;
    flex-direction: row;
    background: #f1f1f1;
`;
const CurrentState = styled.View`
    height: ${responsiveHeight(3)}px;
    width: ${responsiveWidth(90)}px;
    flex-shrink: 0;
    background: #756555;
`;
//////////////////////////////////////////////
const Content = styled.View`
    flex: 1;
    width: 100%;
    /*
    margin-left: ${responsiveWidth(24)}px;
    margin-right: ${responsiveWidth(24)}px;
    */
`;
const BlurWrapper = styled.View`
    position: absolute;
    height: ${responsiveHeight(420)}px;
    width: ${responsiveWidth(420)}px;
    right: ${responsiveWidth(-62)}px;
    top: ${responsiveWidth(-52)}px;
`;
const BlurWrapper2 = styled.View`
    position: absolute;
    height: ${responsiveHeight(234)}px;
    width: ${responsiveWidth(420)}px;
    right: ${responsiveWidth(-314)}px;
    top: ${responsiveWidth(248)}px;
`;

//////////////////////////////////////////////
const TextContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: ${responsiveHeight(24)}px;
    margin-top: ${responsiveWidth(39)}px;
    margin-left: ${responsiveWidth(24)}px;
    margin-right: ${responsiveWidth(24)}px;
    margin-bottom: ${responsiveWidth(24)}px;
`;
const HeaderContainer = styled.View``;

const CircleWrapper = styled.View`
    position: absolute;
    width: ${responsiveWidth(4)}px;
    height: ${responsiveWidth(4)}px;

    left: ${responsiveWidth(86)}px;
    right: ${responsiveWidth(193)}px;
    top: ${responsiveWidth(-4)}px;
`;
const HeaderText = styled.Text`
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: ${responsiveFontSize(32)}px;
    font-style: normal;
    font-weight: 600;
    line-height: ${responsiveHeight(44.16)}px;
    letter-spacing: ${responsiveWidth(-0.8)}px;
`;
const ContentContainer = styled.View``;
const ContentText = styled.Text`
    color: #000;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 400;
    line-height: ${responsiveHeight(21)}px;
    letter-spacing: -2.1px;
    font-size: ${responsiveFontSize(14)}px;
`;
const HighlightText1 = styled.Text`
    color: #000;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 500;
    /*line-height: 150%;*/

    line-height: ${responsiveHeight(21)}px;
    letter-spacing: -2.1px;
    font-size: ${responsiveFontSize(14)}px;
`;

const HighlightText2 = styled.Text`
    color: #000;
    font-family: Pretendard;
    font-style: normal;
    font-weight: 700;
    /*line-height: 150%;*/

    letter-spacing: -2.1px;
    font-size: ${responsiveFontSize(14)}px;
`;
//////////////////////////////////////////////
const CoffeeContainer = styled.View`
    /*margin-left: ${responsiveWidth(24)}px;*/
`;

//////////////////////////////////////////////
const SelectContainer = styled.View`
    display: flex;
    flex-direction: column;
    gap: 12px;

    margin-top: ${responsiveHeight(10)}px;
    margin-left: ${responsiveWidth(24)}px;
    margin-right: ${responsiveWidth(24)}px;
    margin-bottom: ${responsiveHeight(40)}px;
`;
const SelectOption = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 12px 16px;
    gap: 16px;
    align-self: stretch;

    border-radius: 8px;
    background: rgba(250, 250, 250, 0.65);
    /* box-shadow 대신 shadow 관련 속성 사용 */
    shadow-color: rgba(0, 0, 0, 0.04);
    shadow-offset: 0px 8px;
    shadow-opacity: 0.8;
    shadow-radius: 8px;
    elevation: 5; /* 안드로이드에서 그림자 적용 */
    backdrop-filter: blur(6px);
`;
const SelectText = styled.Text`
    color: #666;
    display: flex;
    align-items: center;

    /* 16-TI-B */
    text-align: left;
    font-family: Pretendard;
    font-size: ${responsiveFontSize(16)}px;
    font-style: normal;
    font-weight: 700;
    line-height: ${responsiveHeight(22.08)}px;
    letter-spacing: ${responsiveWidth(-0.4)}px;
`;
const SelectScore = styled.Text`
    color: #666;
    font-family: Pretendard;
    font-size: ${responsiveFontSize(12)}px;
    font-style: normal;
    font-weight: 500;
    line-height: ${responsiveHeight(16.56)}px;
    letter-spacing: ${responsiveWidth(-0.3)}px;

    border-radius: 35px;
    background: #ebebeb;
    padding: 10px;
`;
//////////////////////////////////////////////
const Footer = styled.View`
    position: absolute;
    top: ${responsiveHeight(760)}px;

    display: inline-flex;
    padding: 0px 24px 16px 24px;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    background: #fafafa;
`;

const ButtonWrapper = styled(TouchableOpacity)`
    display: flex;
    width: ${responsiveWidth(312)}px;
    padding: 16px 0px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 12px;
    background: #f1f1f1;
`;

const ButtonText = styled.Text`
    color: #999;
    font-family: Pretendard;
    font-size: ${responsiveFontSize(16)}px;
    font-style: normal;
    font-weight: 700;
    line-height: ${responsiveHeight(22.08)}px;
    letter-spacing: ${responsiveWidth(-0.4)}px;
`;
