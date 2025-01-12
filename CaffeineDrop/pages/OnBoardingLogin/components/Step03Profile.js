import React, { useState } from "react";
import { Alert } from "react-native";
import { Container, Logo, Title, Subtitle, NicknameInput,SaveButtonContainer,SaveButtonText } from "../OnboardingLogin.style";

const Step03Profile = ({ navigation }) => {
  const [nickname, setNickname] = useState(""); // 닉네임 상태
  const [isValid, setIsValid] = useState(false); // 닉네임 유효성 상태
  const [errorMessage, setErrorMessage] = useState("");

  const handleNicknameCheck = () => {
    if (nickname.trim().length < 2) {
      setErrorMessage("닉네임은 2자 이상이어야 합니다.");
      setIsValid(false);
    } else {
      setErrorMessage("사용 가능한 닉네임이에요!");
      setIsValid(true);
    }
  };

  const handleSave = () => {
    if (!isValid) {
      Alert.alert("오류", "닉네임 확인을 완료해주세요.");
    } else {
      Alert.alert("저장 완료", "프로필이 저장되었습니다.");
      navigation.navigate("HomePage");
    }
  };

  return (
    <Container>
      <Logo source={require("../../../assets/OnBoardingLogin/ic_onboardinglogin_logo.png")} />
      <Title>프로필 생성하기</Title>
      <Subtitle>닉네임을 입력해주세요</Subtitle>
      <NicknameInput
        value={nickname}
        onChangeText={setNickname}
        placeholder="닉네임 입력"
      />
      <SaveButtonContainer onPress={handleSave} isValid={isValid}>
        <SaveButtonText>저장하기</SaveButtonText>
      </SaveButtonContainer>
    </Container>
  );
};

export default Step03Profile;
