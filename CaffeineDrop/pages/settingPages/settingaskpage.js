import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { responsiveFontSize, responsiveWidth, responsiveHeight } from "../../utils/responsive";
import BackIcon from "../../components/BackIcon";
import DropdownIcon from "../../components/DropDownIcon";
import { useFonts } from "../../styles";

export default function SettingAskPage({ navigation }) {
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
                <Title>문의하기</Title>
            </Navbar>

            {/* 제목 큰 글자 텍스트 */}
            <HeaderContainer>
                <HeaderText>무엇을{"\n"}도와드릴까요?</HeaderText>
            </HeaderContainer>

            {/* 본문 텍스트 */}
            <ContentContainer>
                <ContentText>문의 내용과 답변 받을 이메일을 작성해주세요.</ContentText>
            </ContentContainer>

            {/* 본문 내용 */}
            <SelectBoxContainer>
                <SelectBoxTitle>
                    <SelectBoxTitleText>문의 유형</SelectBoxTitleText>
                </SelectBoxTitle>
                <SelectBox>
                    <SelectBoxText>문의 유형을 선택해주세요</SelectBoxText>
                    <DropdownIcon />
                </SelectBox>
            </SelectBoxContainer>

            <SelectBoxContainer2>
                <SelectBoxTitle>
                    <SelectBoxTitleText>이메일</SelectBoxTitleText>
                </SelectBoxTitle>
                <SelectBox>
                    <SelectBoxText>caffeinedrop@email.com</SelectBoxText>
                </SelectBox>
            </SelectBoxContainer2>

            {/* 문의 내용 */}
            <ContentTitle>
                <ContentTitleText>문의 내용</ContentTitleText>
            </ContentTitle>
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
const HeaderContainer = styled.View`
    display: flex;
    position: absolute;
    top: ${responsiveHeight(114.5)}px;
    left: ${responsiveWidth(24)}px;
`;
const ContentContainer = styled.View`
    position: absolute;
    top: ${responsiveHeight(196.5)}px;

    padding-left: ${responsiveWidth(24)}px;
    padding-right: ${responsiveWidth(24)}px;
`;
const HeaderText = styled.Text`
    color: #000;
    font-family: PretendardSemiBold;
    font-size: ${responsiveFontSize(24)}px;
    font-style: normal;
    font-weight: 600;

    line-height: ${responsiveHeight(33.12)}px;
    letter-spacing: ${responsiveWidth(-0.6)};
    text-transform: uppercase;
`;
const ContentText = styled.Text`
    color: #000;
    font-family: PretendardRegular;
    font-size: ${responsiveFontSize(14)}px;
    font-style: normal;
    font-weight: 400;
    line-height: ${responsiveHeight(19.32)}px;
    letter-spacing: ${responsiveWidth(-0.35)};
`;
//본문 내용/////////////////////////////////////////////
const SelectBoxContainer = styled.View`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 263.5px;
    gap: 8px;

    width: 340px;
    padding-left: 24px;
    padding-right: 24px;
`;
const SelectBoxContainer2 = styled.View`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 357.5px;
    gap: 8px;

    width: 340px;
    padding-left: 24px;
    padding-right: 24px;
`;
const SelectBoxTitle = styled.View``;
const SelectBoxTitleText = styled.Text`
    color: #000;
    font-family: PretendardMedium;
    font-size: ${responsiveFontSize(14)}px;
    font-style: normal;
    font-weight: 500;
    line-height: ${responsiveHeight(19.32)}px;
    letter-spacing: ${responsiveWidth(-0.35)};
`;
const SelectBox = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 8px;
    border-bottom-width: ${responsiveWidth(1)}px;
    border-bottom-color: #d9d9d9;
`;
const SelectBoxText = styled.Text`
    color: #666;
    font-family: PretendardRegular;
    font-size: ${responsiveFontSize(14)}px;
    font-style: normal;
    font-weight: 400;
    line-height: ${responsiveHeight(19.32)}px;
    letter-spacing: ${responsiveWidth(-0.35)};
`;
//문의 내용/////////////////////////////////////////////
const ContentTitle = styled.View`
    position: absolute;
    top: 463.5px;
    left: 24px;
`;
const ContentTitleText = styled.Text`
    color: #000;
    font-family: PretendardMedium;
    font-size: ${responsiveFontSize(14)}px;
    font-style: normal;
    font-weight: 500;
    line-height: ${responsiveHeight(19.32)}px;
    letter-spacing: ${responsiveWidth(-0.35)};
`;
