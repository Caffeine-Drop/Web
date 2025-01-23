import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity, Pressable } from "react-native";
import styled from "styled-components/native";
import { responsiveFontSize, responsiveWidth, responsiveHeight } from "../../utils/responsive";
import BackIcon from "../../components/BackIcon";
import DropdownIcon from "../../components/DropDownIcon";
import { useFonts } from "../../styles";
import InputText from "../../components/InputText";
import { ScrollView } from "react-native";
import CheckIcon from "../../components/CheckIcon";
import Modal from "react-native-modal";
import CloseIcon from "../../components/CloseIcon";

export default function SettingAskPage({ navigation }) {
    const [isModalVisible, setModalVisible] = useState(false);
    const fontsLoaded = useFonts();

    if (!fontsLoaded) {
        return null;
    }

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <Container>
            <Navbar>
                <IconWrapper>
                    <BackIcon />
                </IconWrapper>
                <Title>문의하기</Title>
            </Navbar>

            <ScrollView>
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
                        <DropdownIcon onPress={toggleModal} />
                    </SelectBox>
                </SelectBoxContainer>

                {/* 모달 창 부분 */}
                <Modal isVisible={isModalVisible} onBackdropPress={toggleModal} style={{ justifyContent: "flex-end", margin: 0 }} backdropOpacity={0}>
                    <ModalContent>
                        <ModalTitleBox>
                            <ModalTitleText>문의 유형</ModalTitleText>
                            <CloseIcon onPress={toggleModal} />
                        </ModalTitleBox>
                        <ListText>
                            <InnerText>이용 문의</InnerText>
                            <CheckIconText>✓</CheckIconText>
                        </ListText>
                        <ListText>
                            <InnerText>오류 문의</InnerText>
                            <CheckIconText>✓</CheckIconText>
                        </ListText>
                        <ListText>
                            <InnerText>서비스 제한</InnerText>
                            <CheckIconText>✓</CheckIconText>
                        </ListText>
                        <ListText>
                            <InnerText>기타 문의</InnerText>
                            <CheckIconText>✓</CheckIconText>
                        </ListText>
                    </ModalContent>
                </Modal>

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
                <InputText />

                {/* 이메일 부분 */}
                <EmailContainer>
                    <CheckBoxWrapper>
                        <CheckIcon />
                    </CheckBoxWrapper>
                    <EmailText>이메일 정보 제공 동의</EmailText>
                </EmailContainer>
                <EmailContent>문의 답변 제공을 위해 이메일 주소 정보 제공에 동의해 주시기 바랍니다.</EmailContent>

                {/* 등록하기 버튼 부분 */}
                <SubmitButton>
                    <ButtonText>등록하기</ButtonText>
                </SubmitButton>
                <Footer></Footer>
            </ScrollView>
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
    margin-top: ${responsiveHeight(20)}px;
    margin-left: ${responsiveWidth(24)}px;
`;
const ContentContainer = styled.View`
    margin-top: ${responsiveHeight(16)}px;
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
    margin-top: ${responsiveHeight(48)}px;
    gap: 8px;
    width: 100%;
    padding-left: ${responsiveWidth(24)}px;
    padding-right: ${responsiveWidth(24)}px;
`;
const SelectBoxContainer2 = styled.View`
    display: flex;
    flex-direction: column;
    margin-top: ${responsiveHeight(32)}px;
    gap: 8px;
    width: 100%;
    padding-left: ${responsiveWidth(24)}px;
    padding-right: ${responsiveWidth(24)}px;
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
    margin-top: ${responsiveHeight(44)}px;
    padding-left: ${responsiveWidth(24)}px;
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
//이메일 부분/////////////////////////////////////////////
const EmailContainer = styled.View`
    display: flex;
    flex-direction: row;
    gap: 12px;
    margin-top: ${responsiveHeight(24)}px;
    padding-left: ${responsiveWidth(24)}px;
`;
const CheckBoxWrapper = styled(TouchableOpacity)``;
const EmailText = styled.Text`
    color: #000;
    font-family: PretendardMedium;
    font-size: ${responsiveFontSize(14)}px;
    font-style: normal;
    font-weight: 500;
    line-height: ${responsiveHeight(20)}px;
    letter-spacing: ${responsiveWidth(-0.35)};
`;
const EmailContent = styled.Text`
    margin-left: ${responsiveWidth(56)}px;
    margin-right: ${responsiveWidth(24)}px;
    margin-top: ${responsiveHeight(8)}px;

    color: #666;
    font-family: PretendardRegular;
    font-size: ${responsiveFontSize(12)}px;
    font-style: normal;
    font-weight: 400;
    line-height: ${responsiveHeight(16.56)}px;
    letter-spacing: -0.3px;
`;
//하단 버튼/////////////////////////////////////////////
const SubmitButton = styled(TouchableOpacity)`
    margin-top: ${responsiveHeight(42)}px;
    margin-bottom: ${responsiveHeight(16)}px;
    margin-right: ${responsiveWidth(24)}px;
    margin-left: ${responsiveWidth(24)}px;
    padding-top: ${responsiveHeight(16)}px;
    padding-bottom: ${responsiveHeight(16)}px;
    width: ${responsiveWidth(312)}px;

    padding: 16px 0px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 12px;
    background: #f1f1f1;
`;
const ButtonText = styled.Text`
    justify-content: center;
    text-align: center;
    border-radius: 12px;
    color: #999999;
`;
const Footer = styled.View`
    width: ${responsiveWidth(360)}px;
    height: ${responsiveHeight(37.5)}px;
    flex-shrink: 0;
`;
//모달창 부분/////////////////////////////////////////////
const ModalContent = styled.View`
    background-color: white;

    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 61.5px;
    padding-top: 8px;

    border-top-left-radius: 17px;
    border-top-right-radius: 17px;
    align-items: center;

    shadow-color: #000;
    shadow-offset: {
        width: 0;
        height: 2;
    }
    shadow-opacity: 0.25;
    shadow-radius: 12.84px;
    elevation: 5;
`;
const ModalTitleBox = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 12px;
    padding-bottom: 16px;
`;
const ModalTitleText = styled.Text`
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.4px;
`;
const ListText = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding-top: 8px;
    padding-bottom: 8px;
    display: flex;
    justify-content: space-between;
`;
const InnerText = styled.Text`
    color: #666;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 19.32px;
    letter-spacing: -0.35px;
`;
const CheckIconText = styled.Text`
    color: #000;
    /* 16제목 */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 150% */
    letter-spacing: -0.4px;
`;
