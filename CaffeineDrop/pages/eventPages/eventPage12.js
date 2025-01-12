// 스페셜티 커피란?
import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import BackIcon from "../../Components/BackIcon";

export default function EventPage12({ navigation }) {
    return (
        <Container>
            <InnerContainer>
                <Navbar>
                    <IconWrapper>
                        <BackIcon />
                    </IconWrapper>
                    <Title>스페셜티 커피란?</Title>
                </Navbar>

                <Content>
                    <CoffeeDef>
                        <TtileText>스페셜티 커피의 정의</TtileText>
                    </CoffeeDef>
                    <Description>
                        <ContentText>스페셜티 커피는 스페셜티 커피 협회 (Specialty Coffee Association)에서 정한 스페셜티 기준에 따라 커피를 평가하여 100점 중 80점 이상의 커피에 대하여 스페셜티 커피라고 등급이 정해지며, 비로소 스페셜티 커피로 인정 받을 수 있다.</ContentText>
                    </Description>
                    <RankTitle>
                        <TtileText>
                            스페셜티 협회의
                            <br />
                            원두 등급
                        </TtileText>
                    </RankTitle>

                    <RankingTable>
                        <Rank>
                            <Score>
                                <ScoreText>100점</ScoreText>
                            </Score>
                            <ScoreTitle>
                                <TopScoreText>최고점</TopScoreText>
                            </ScoreTitle>
                        </Rank>

                        <Rank>
                            <Score>
                                <ScoreText>90점~</ScoreText>
                            </Score>
                            <ScoreTitle>
                                <ScoreTitleText>나인티플러스(Ninety Plus)</ScoreTitleText>
                                <ScoreInfoText>스페셜티 커피 중 최고급, COE대회서 1~2위 급</ScoreInfoText>
                            </ScoreTitle>
                        </Rank>

                        <Rank>
                            <Score>
                                <ScoreText>80점~</ScoreText>
                            </Score>
                            <ScoreTitle>
                                <ScoreTitleText>스페셜티 커피(Specialty Coffee)</ScoreTitleText>
                                <ScoreInfoText>특별한 지리조건과 기상조건 하에서 생산된 독특한 향의 원두</ScoreInfoText>
                            </ScoreTitle>
                        </Rank>

                        <Rank>
                            <Score>
                                <ScoreText>75점~</ScoreText>
                            </Score>
                            <ScoreTitle>
                                <ScoreTitleText>프리미엄(Premium)</ScoreTitleText>
                                <ScoreInfoText>스페셜티보다 한 단계 낮은 커피</ScoreInfoText>
                            </ScoreTitle>
                        </Rank>

                        <Rank>
                            <Score>
                                <ScoreText>70점~</ScoreText>
                            </Score>
                            <ScoreTitle>
                                <ScoreTitleText>하이 커머셜(High Commercial)</ScoreTitleText>
                                <ScoreInfoText>스페셜티보단 비싸진 않으면서 커머셜 원두보다{"    "}높은 품질의 원두</ScoreInfoText>
                            </ScoreTitle>
                        </Rank>

                        <Rank>
                            <Score>
                                <ScoreText>~70점</ScoreText>
                            </Score>
                            <ScoreTitle>
                                <ScoreTitleText>커머셜(Commercial)</ScoreTitleText>
                                <ScoreInfoText>가격이 저렴하여 인스턴트 커피 등 대량 생산에{"     "}사용되는 원두</ScoreInfoText>
                            </ScoreTitle>
                        </Rank>
                    </RankingTable>
                </Content>

                <Footer>
                    <ButtonWrapper onPress={() => {}}>
                        <ButtonText>완료하기</ButtonText>
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

const Content = styled.View`
    flex: 1;
    width: 100%;
`;

const CoffeeDef = styled.View`
    /*스페셜티 커피의 정의*/
    margin-left: 1.5rem;
    margin-top: 1.5rem;
`;
const TtileText = styled.Text`
    /*스페셜티 커피의 정의*/
    color: #000;
    font-family: Pretendard;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: 138%; /* 2.07rem */
    letter-spacing: -0.0375rem;
`;
const Description = styled.View`
    /*설명*/
`;
const ContentText = styled.Text`
    /*설명*/
    margin-top: 1rem;
    color: #000;
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 1.125rem */
    letter-spacing: -0.01875rem;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
`;
const RankTitle = styled.View`
    /*원두 등급*/
    margin-left: 1.5rem;
    margin-top: 2rem;
`;
const RankingTable = styled.View`
    margin-left: 2rem;
    margin-top: 1.5rem;
    margin-right: 1.5rem;
    gap: 0.25rem;

    border-left-width: 2px;
    border-left-color: #e5e3e1;
    border-left-style: solid;
`;
const Rank = styled.View`
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
    margin-left: 1rem;
    margin-bottom: 1rem;
    flex-wrap: wrap;
`;
const TopScoreText = styled.Text`
    color: #999;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 138%; /* 1.2075rem */
    letter-spacing: -0.02188rem;
`;
const Score = styled.View``;
const ScoreText = styled.Text`
    color: #333;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 138%; /* 1.2075rem */
    letter-spacing: -0.02188rem;
`;
const ScoreTitle = styled.View`
    gap: 0.25rem;
    flex: 1;
    width: 100%;
`;
const ScoreTitleText = styled.Text`
    color: #000;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 600;
    line-height: 138%; /* 1.2075rem */
    letter-spacing: -0.02188rem;
`;
const ScoreInfoText = styled.Text`
    color: #666;
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: 138%; /* 1.035rem */
    letter-spacing: -0.01875rem;
    flex-wrap: wrap;
`;
const Footer = styled.View`
    padding: 0rem 1.5rem 1rem 1.5rem;
    margin-top: 41.56rem;
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
