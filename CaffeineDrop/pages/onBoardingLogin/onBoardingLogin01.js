import React, { useEffect, useContext } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import styled from "styled-components/native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../../utils/responsive";
import { useFonts } from "../../styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";  // Context 가져오기

//이미지 임포트
import CoffeeCupIcon from "../../assets/OnBoardingLogin/CoffeeCupIcon.svg";

export default function OnboardingLogin01() {
  const fontsLoaded = useFonts();
  const navigation = useNavigation();
  const { accessToken, refreshToken } = useContext(AuthContext);  // Context에서 token과 storeToken 가져오기

  // 로그인 여부에 따라 화면 전환 다르게 하기 위한 코드
  useEffect(() => {
    const navigateAfterDelay = async () => {
      try {
        // Retrieve the token from AsyncStorage
        const storedToken = await AsyncStorage.getItem("RefreshToken");
        setTimeout(() => {
          if (!storedToken) {
            console.log("refreshToken: ", storedToken);
            navigation.replace("HomeScreen");
          } else {
            navigation.replace("OnboardingLogin03");
          }
        }, 1500); // Navigate after 1500ms
      } catch (e) {
        console.error(e);
        // Navigate to OnboardingLogin03 after 1500ms in case of error
        setTimeout(() => {
          navigation.replace("OnboardingLogin03");
        }, 1500);
      }
    };

    // 초기 전환 속도 300ms를 위해 약간의 딜레이 추가 (선택 사항)
    setTimeout(() => {
      navigateAfterDelay();
    }, 300); // 300ms 후 navigateAfterDelay 호출
  }, [navigation, refreshToken]);

  if (!fontsLoaded) {
    return (
      <LoadingContainer>
        <ActivityIndicator size="large" color="#0000ff" />
      </LoadingContainer>
    );
  }

  return (
    <Container>
      <LogoContainer>
        <CoffeeCupIcon
          width={responsiveWidth(100)}
          height={responsiveHeight(100)}
        />
      </LogoContainer>
      <View style={styles.textContainer}>
        <Title>Caffeine Drop</Title>
        <SubTitle>카페인 드롭</SubTitle>
      </View>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const LogoContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${responsiveHeight(20)}px;
`;

const Title = styled.Text`
  font-family: "PretendardSemiBold";
  text-align: center;
  font-size: ${responsiveFontSize(18)}px;
  line-height: ${responsiveHeight(24.84)}px;
  letter-spacing: -0.45px;
  color: #000;
`;

const SubTitle = styled.Text`
  font-family: "PretendardMedium";
  text-align: center;
  font-size: ${responsiveFontSize(12)}px;
  line-height: ${responsiveHeight(16.56)}px;
  letter-spacing: -0.3px;
  color: #000;
`;

const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const styles = StyleSheet.create({
  textContainer: {
    gap: responsiveHeight(4),
  },
});
