import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { responsiveFontSize, responsiveWidth, responsiveHeight } from "../../utils/responsive";
import BackIcon from "../../components/BackIcon";
import NextButton from "../../components/NextButton";
import { useFonts } from "../../styles";

import { Dimensions } from "react-native";

// 화면 크기 가져오기
const { width, height } = Dimensions.get("window");

// 태블릿 판별 기준 (보통 width가 600px 이상이면 태블릿)
const isTablet = width >= 600;

export default function SettingPage02({ navigation }) {
    const [isEnabled, setIsEnabled] = useState(false);
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
                <Title>설정</Title>
            </Navbar>

            {/* 첫번째 줄 박스 하나 */}
            <Box1>
                <InnerBox1>
                    <InnerText>앱 실행 시 현 위치 탐색</InnerText>
                    <ToggleButton onPress={handleToggle} isEnabled={isEnabled}>
                        <ToggleCircle isEnabled={isEnabled} />
                    </ToggleButton>
                </InnerBox1>
            </Box1>

            {/* 회색 박스 틈 */}
            <GapBox></GapBox>

            {/* 두번째 줄 박스 두개 */}
            <Box2>
                <InnerBox2>
                    <InnerText>서비스 이용 약관</InnerText>
                    <TouchableOpacity onPress={() => navigation.navigate("")}>
                        <NextButton />
                    </TouchableOpacity>
                </InnerBox2>

                <InnerBox2>
                    <InnerText>개인 정보 처리 방침</InnerText>
                    <TouchableOpacity onPress={() => navigation.navigate("SettingPage03")}>
                        <NextButton />
                    </TouchableOpacity>
                </InnerBox2>
            </Box2>
        </Container>
    );
}

/*
top: ${responsiveHeight(109.56)}px;
right: ${responsiveWidth(26.04)}px;
font-size: ${responsiveFontSize(18)}px;
*/

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
const Box1 = styled.View`
    display: flex;
    padding-top: ${responsiveHeight(20)}px;
    padding-bottom: ${responsiveHeight(20)}px;
    padding-left: ${responsiveWidth(24)}px;
    padding-right: ${responsiveWidth(24)}px;
`;
const Box2 = styled.View`
    display: flex;
    padding-left: ${responsiveWidth(24)}px;
    padding-right: ${responsiveWidth(24)}px;
`;
const GapBox = styled.View`
    background: #f1f1f1;
    width: 100%;
    height: ${responsiveHeight(8)}px;
`;

const InnerBox1 = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

const InnerBox2 = styled.View`
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
    letter-spacing: ${responsiveWidth(-0.4)};
`;

const ToggleButton = styled(TouchableOpacity)`
    width: ${responsiveWidth(50)}px;
    height: ${responsiveHeight(30)}px;

    border-radius: 15px;
    background-color: ${(props) => (props.isEnabled ? "#ffffff" : "#ccc")};
    justify-content: center;

    border-width: ${responsiveWidth(2)}px;
    border-color: rgba(133, 133, 133, 0.31);
    border-radius: 15px;
`;

const ToggleCircle = styled.View`
    width: ${responsiveWidth(20)}px;
    height: ${responsiveHeight(20)}px;

    border-radius: 10px;
    background-color: ${(props) => (props.isEnabled ? "#756555" : "#ffffff")};
    align-self: ${(props) => (props.isEnabled ? "flex-end" : "flex-start")};
`;
