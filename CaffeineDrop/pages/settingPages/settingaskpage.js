import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Pressable,
  TextInput,
  Animated,
} from "react-native";
import styled from "styled-components/native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../../utils/responsive";
import BackIcon from "../../components/BackIcon";
import DropdownIcon from "../../components/settingPage/DropDownIcon";
import { useFonts } from "../../styles";
import InputText from "../../components/settingPage/InputText";
import { ScrollView } from "react-native";
import CheckIcon from "../../components/settingPage/CheckIcon";
import CheckedIcon from "../../components/settingPage/CheckedIcon";
import Modal from "react-native-modal";
import CloseIcon from "../../components/settingPage/CloseIcon";

import { Dimensions } from "react-native";

// 화면 크기 가져오기
const { width, height } = Dimensions.get("window");

// 태블릿 판별 기준 (보통 width가 600px 이상이면 태블릿)
const isTablet = width >= 600;

export default function SettingAskPage({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const buttonBackgroundColor = useRef(new Animated.Value(0)).current;
  const buttonTextColor = useRef(new Animated.Value(0)).current;
  const fontsLoaded = useFonts();

  useEffect(() => {
    if (
      selectedOption &&
      email.trim() !== "" &&
      content.trim() !== "" &&
      isChecked
    ) {
      console.log("버튼 스타일 변경 여부 = " + true);
      Animated.timing(buttonBackgroundColor, {
        toValue: 1,
        duration: 900,
        useNativeDriver: false,
      }).start();
      Animated.timing(buttonTextColor, {
        toValue: 1,
        duration: 900,
        useNativeDriver: false,
      }).start();
    } else {
      console.log("버튼 스타일 변경 여부 = " + false);
      Animated.timing(buttonBackgroundColor, {
        toValue: 0,
        duration: 900,
        useNativeDriver: false,
      }).start();
      Animated.timing(buttonTextColor, {
        toValue: 0,
        duration: 900,
        useNativeDriver: false,
      }).start();
      console.log(selectedOption);
      console.log(email);
      console.log(content);
      console.log(isChecked);
    }
  }, [selectedOption, email, content, isChecked]);

  if (!fontsLoaded) {
    return null;
  }

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleOptionPress = (option) => {
    setSelectedOption(option);
  };

  const toggleCheck = () => {
    setIsChecked((prev) => !prev);
  };

  const backgroundColor = buttonBackgroundColor.interpolate({
    inputRange: [0, 1],
    outputRange: ["#f1f1f1", "#E5E3E1"],
  });

  const textColor = buttonTextColor.interpolate({
    inputRange: [0, 1],
    outputRange: ["#999999", "#756555"],
  });

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
          <ContentText>
            문의 내용과 답변 받을 이메일을 작성해주세요.
          </ContentText>
        </ContentContainer>

        {/* 본문 내용 */}
        <SelectBoxContainer>
          <SelectBoxTitle>
            <SelectBoxTitleText>문의 유형</SelectBoxTitleText>
          </SelectBoxTitle>
          <SelectBox onPress={toggleModal} isModalVisible={isModalVisible}>
            <SelectBoxText>
              {selectedOption || "문의 유형을 선택해주세요"}
            </SelectBoxText>
            <DropdownIcon
              onPress={toggleModal}
              isModalVisible={isModalVisible}
            />
          </SelectBox>
        </SelectBoxContainer>

        {/* 모달 창 부분 */}
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={toggleModal}
          style={{ justifyContent: "flex-end", margin: 0 }}
          backdropOpacity={0}
        >
          <ModalContent>
            <ModalTitleBox>
              <ModalTitleText>문의 유형</ModalTitleText>
              <CloseIcon onPress={toggleModal} />
            </ModalTitleBox>
            {["이용 문의", "오류 문의", "서비스 제한", "기타 문의"].map(
              (option) => (
                <PressableBox
                  key={option}
                  onPress={() => handleOptionPress(option)}
                >
                  <ListText>
                    <InnerText selected={selectedOption === option}>
                      {option}
                    </InnerText>
                    {selectedOption === option && (
                      <CheckIconText>✓</CheckIconText>
                    )}
                  </ListText>
                </PressableBox>
              )
            )}
          </ModalContent>
        </Modal>

        {/* 이메일 부분 */}
        <SelectBoxContainer2>
          <SelectBoxTitle>
            <SelectBoxTitleText>이메일</SelectBoxTitleText>
          </SelectBoxTitle>
          <SelectBox>
            <EmailInput
              placeholder="caffeinedrop@email.com"
              value={email}
              onChangeText={setEmail}
            />
          </SelectBox>
        </SelectBoxContainer2>

        {/* 문의 내용 */}
        <ContentTitle>
          <ContentTitleText>문의 내용</ContentTitleText>
        </ContentTitle>
        <InputText value={content} onChangeText={setContent} />

        {/* 이메일 체크박스 부분 */}
        <EmailContainer>
          <CheckBoxWrapper onPress={toggleCheck}>
            {isChecked ? <CheckedIcon /> : <CheckIcon />}
          </CheckBoxWrapper>
          <EmailText>이메일 정보 제공 동의</EmailText>
        </EmailContainer>
        <EmailContent>
          문의 답변 제공을 위해 이메일 주소 정보 제공에 동의해 주시기 바랍니다.
        </EmailContent>

        {/* 등록하기 버튼 부분 */}
        <AnimatedSubmitButton style={{ backgroundColor }}>
          <AnimatedButtonText style={{ color: textColor }}>
            등록하기
          </AnimatedButtonText>
        </AnimatedSubmitButton>
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
const SelectBox = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px;
  border-bottom-width: ${responsiveWidth(1)}px;
  border-bottom-color: #d9d9d9;
`;
const EmailInput = styled(TextInput)`
  color: #666;
  font-family: PretendardRegular;
  font-size: ${responsiveFontSize(14)}px;
  font-style: normal;
  font-weight: 400;
  line-height: ${responsiveHeight(19.32)}px;
  letter-spacing: -0.35px;
`;
const SelectBoxText = styled.Text`
  color: #666;
  font-family: PretendardRegular;
  font-size: ${responsiveFontSize(14)}px;
  font-style: normal;
  font-weight: 400;
  line-height: ${responsiveHeight(19.32)}px;
  letter-spacing: -0.35px;
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
  letter-spacing: -0.35px;
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
  letter-spacing: -0.35px;
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
const AnimatedSubmitButton = styled(
  Animated.createAnimatedComponent(TouchableOpacity)
)`
  margin-top: ${responsiveHeight(42)}px;
  margin-bottom: ${responsiveHeight(16)}px;
  margin-right: ${responsiveWidth(24)}px;
  margin-left: ${responsiveWidth(24)}px;
  width: ${responsiveWidth(312)}px;

  padding-top: ${responsiveWidth(16)}px;
  padding-bottom: ${responsiveWidth(16)}px;

  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
`;

const AnimatedButtonText = styled(Animated.createAnimatedComponent(Text))`
  justify-content: center;
  text-align: center;

  font-family: PretendardBold;
  font-size: ${responsiveFontSize(16)}px;
  font-style: normal;
  font-weight: 700;
  line-height: ${responsiveHeight(22.08)}px;
  letter-spacing: -0.4px;
`;
const Footer = styled.View`
  width: ${responsiveWidth(360)}px;
  height: ${responsiveHeight(37.5)}px;
  flex-shrink: 0;
`;
//모달창 부분/////////////////////////////////////////////
const ModalContent = styled.View`
  background-color: white;

  padding-left: ${responsiveWidth(24)}px;
  padding-right: ${responsiveWidth(24)}px;
  padding-bottom: ${responsiveHeight(61.5)}px;
  padding-top: ${responsiveHeight(8)}px;

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
  padding-top: ${responsiveHeight(12)}px;
  padding-bottom: ${responsiveHeight(16)}px;
`;
const ModalTitleText = styled.Text`
  color: #000;
  font-family: PretendardSemiBold;
  font-size: ${responsiveFontSize(16)}px;
  font-style: normal;
  font-weight: 600;
  line-height: ${responsiveHeight(24)}px;
  letter-spacing: -0.4px;
`;
const ListText = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-top: ${responsiveHeight(8)}px;
  padding-bottom: ${responsiveHeight(8)}px;
`;
const InnerText = styled.Text`
  color: #666;
  font-family: PretendardMedium;
  font-size: ${responsiveFontSize(14)}px;
  font-style: normal;
  font-weight: 500;
  line-height: ${responsiveHeight(19.32)}px;
  letter-spacing: -0.35px;
  height: ${responsiveHeight(24)}px;
  color: ${({ selected }) => (selected ? "#000" : "#666")};
`;
const CheckIconText = styled.Text`
  color: #000;
  font-family: PretendardSemiBold;
  font-size: ${responsiveFontSize(16)}px;
  font-style: normal;
  font-weight: 600;
  line-height: ${responsiveHeight(24)}px;
  letter-spacing: -0.4;
`;
const PressableBox = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
