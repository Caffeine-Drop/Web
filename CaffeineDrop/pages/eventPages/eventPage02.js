import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import BackIcon from "../../assets/Components/BackIcon";
import Coffee1Image from "../../assets/Components/event02Image/Coffee1Image";
import Coffee2Image from "../../assets/Components/event02Image/Coffee2Image";
import Coffee3Image from "../../assets/Components/event02Image/Coffee3Image";
import Coffee4Image from "../../assets/Components/event02Image/Coffee4Image";

export default function EventPage02({ navigation }) {
    return (
        <Container>
            <InnerContainer>
                <Navbar>
                    <IconWrapper>
                        <BackIcon />
                    </IconWrapper>
                    <Title>원두 진단하기</Title>
                </Navbar>
                <StatusContainer>
                    <CurrentState></CurrentState>
                </StatusContainer>

                <Content>
                    <TextContainer>
                        <HeaderContainer>
                            <HeaderText>
                                나는 향이 강한
                                <br />
                                원두가 좋다
                            </HeaderText>
                        </HeaderContainer>

                        <ContentContainer>
                            <ContentText>
                                원두의 향은 네 가지로 구성돼요.
                                <HighlightText1> 프레그런스, 아로마, 노즈, 애프터 테이스트</HighlightText1>가 있어요. 카페인 드롭은 이 중<HighlightText2>애프터 테이스트 혹은 아로마를 테이스팅 노트에 반영했어요.</HighlightText2>
                            </ContentText>
                        </ContentContainer>
                    </TextContainer>

                    <CoffeeContainer>
                        <CoffeeType1>
                            <Coffee1Image />
                        </CoffeeType1>
                        <CoffeeType2>
                            <Coffee2Image />
                        </CoffeeType2>
                        <CoffeeType3>
                            <Coffee3Image />
                        </CoffeeType3>
                        <CoffeeType4>
                            <Coffee4Image />
                        </CoffeeType4>
                    </CoffeeContainer>

                    <SelectContainer>
                        <SelectOption>
                            <SelectText>매우 그렇다</SelectText>
                        </SelectOption>
                        <SelectOption>
                            <SelectText>보통이다</SelectText>
                        </SelectOption>
                        <SelectOption>
                            <SelectText>그렇지 않다</SelectText>
                        </SelectOption>
                    </SelectContainer>
                </Content>

                <Footer>
                    <ButtonWrapper>
                        <ButtonText>다음으로</ButtonText>
                    </ButtonWrapper>
                </Footer>
            </InnerContainer>
        </Container>
    );
}

const Container = styled.View`
    width: 100%;
    height: 100%;
    background: #fafafa;
`;
const InnerContainer = styled.View`
    flex: 1;
    margin-top: 2.38rem;
    margin-bottom: 2.63rem;
`;

const Navbar = styled.View`
    height: 3.5rem;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
`;
const IconWrapper = styled.View`
    position: absolute;
    left: 1.5rem;
`;
const Title = styled.Text`
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 600;
    line-height: 138%;
    letter-spacing: -0.02813rem;
`;
const StatusContainer = styled.View`
    display: flex;
    height: 0.1875rem;
    flex-direction: row;
    background: #f1f1f1;
`;
const CurrentState = styled.View`
    width: 5.625rem;
    height: 0.1875rem;
    flex-shrink: 0;
    background: #756555;
`;

const Content = styled.View`
    flex: 1;
    width: 100%;
`;

const TextContainer = styled.View`
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    display: flex;

    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
`;
const HeaderContainer = styled.View`
    margin-top: 2.62rem;
`;
const HeaderText = styled.Text`
    color: #000;
    text-align: center;
    font-family: "Pretendard-SemiBold";
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    line-height: 138%; /* 2.76rem */
    letter-spacing: -0.05rem;
`;
const ContentContainer = styled.View``;
const ContentText = styled.Text`
    width: 19.5rem;
    height: 3.9375rem;
    color: #000;
    font-family: Pretendard;
    /*font-size: 0.875rem;*/
    font-size: 0.785rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 1.3125rem */
    letter-spacing: -0.02188rem;
    text-align: left;
`;
const HighlightText1 = styled.Text`
    color: #000;
    font-family: Pretendard;
    font-size: 0.785rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.02188rem;
`;
const HighlightText2 = styled.Text`
    color: #000;
    font-family: Pretendard;
    font-size: 0.785rem;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.02188rem;
`;
const CoffeeContainer = styled.View`
    margin-left: 1.5rem;
    width: 28.5rem;
    height: 9rem;
    display: flex;
    flex-direction: row;
    margin-top: 1.5rem;

    display: flex;
    align-items: center;
    gap: 0.5rem;
`;
const CoffeeType1 = styled.View`
    width: 7.75rem;
    height: 11rem;
`;
const CoffeeType2 = styled.View`
    width: 7.75rem;
    height: 11rem;
`;
const CoffeeType3 = styled.View`
    width: 7.75rem;
    height: 11rem;
`;
const CoffeeType4 = styled.View`
    width: 7.75rem;
    height: 11rem;
`;
const SelectContainer = styled.View`
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    margin-top: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
    background: #fafafaa6;
`;
const SelectOption = styled.View`
    display: flex;
    padding: 0.75rem 1rem;
    align-items: center;
    gap: 1rem;
    align-self: stretch;

    border-radius: 0.5rem;
    background: rgba(250, 250, 250, 0.65);
    shadow-color: rgba(0, 0, 0, 0.04);
    shadow-offset: 0px 8px;
    shadow-opacity: 1;
    shadow-radius: 8px;
    backdrop-filter: blur(6px);
`;
const SelectText = styled.Text``;

const Footer = styled.View`
    height: 4.375rem;
    display: inline-flex;
    padding: 0rem 1.5rem 1rem 1.5rem;
    flex-direction: column;
    gap: 0.5rem;
`;

const ButtonWrapper = styled(TouchableOpacity)`
    display: flex;
    padding: 1rem 0rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    padding-top: 1rem;
    padding-bottom: 1rem;

    border-radius: 0.75rem;
    background: #756555;
`;

const ButtonText = styled.Text`
    color: #fafafa;
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 138%;
    letter-spacing: -0.025rem;
`;
