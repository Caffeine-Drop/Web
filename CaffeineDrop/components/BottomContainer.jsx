import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Linking, Alert } from "react-native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../utils/responsive";
import styled from "styled-components/native";
import DirectionsBeforeClick from "../assets/home/DirectionsBeforeClick.svg";
import DirectionsAfterClick from "../assets/home/DirectionsAfterClick.svg";
import NaverIcon from "../assets/home/NaverIcon.svg";
import KakaoIcon from "../assets/home/KakaoIcon.svg";
import { useFonts } from "../styles";

const BottomContainer = ({
  isDirectionsPressed,
  setIsDirectionsPressed,
  cafe,
}) => {
  const fontsLoaded = useFonts();

  const navigation = useNavigation();

  // ✅ 카페 정보 페이지로 이동
  const handleCafeInfoPress = () => {
    if (!cafe) {
      Alert.alert("오류", "카페 정보를 찾을 수 없습니다.");
      return;
    }
    navigation.navigate("DetailPage", { cafeId: cafe.cafe_id });
  };

  // ✅ 네이버 지도 연결
  const openNaverMap = () => {
    if (!cafe) {
      Alert.alert("오류", "카페 정보를 찾을 수 없습니다.");
      return;
    }

    const { latitude, longitude, name } = cafe;
    const url = `nmap://route/public?dlat=${latitude}&dlng=${longitude}&dname=${encodeURIComponent(
      name
    )}`;

    Linking.openURL(url).catch(() => {
      Alert.alert("네이버 지도", "네이버 지도 앱이 설치되어 있지 않습니다.");
    });
  };

  // ✅ 카카오 지도 연결
  const openKakaoMap = () => {
    if (!cafe) {
      Alert.alert("오류", "카페 정보를 찾을 수 없습니다.");
      return;
    }

    const { latitude, longitude } = cafe;
    const url = `kakaomap://route?ep=${latitude},${longitude}&by=CAR`;

    Linking.openURL(url).catch(() => {
      Alert.alert("카카오 지도", "카카오 지도 앱이 설치되어 있지 않습니다.");
    });
  };

  if (!fontsLoaded) {
    return null; // 폰트 로드될 때까지 렌더링 안 함
  }

  return (
    <>
      {isDirectionsPressed && (
        <OptionsContainer>
          <OptionButton onPress={openNaverMap}>
            <NaverIcon
              width={`${responsiveWidth(24)}px`}
              height={`${responsiveHeight(24)}px`}
            />
            <OptionText>네이버 길찾기</OptionText>
          </OptionButton>
          <OptionButton onPress={openKakaoMap}>
            <KakaoIcon
              width={`${responsiveWidth(24)}px`}
              height={`${responsiveHeight(24)}px`}
            />
            <OptionText>카카오 길찾기</OptionText>
          </OptionButton>
        </OptionsContainer>
      )}
      <BottomContainerWrapper>
        <CafeInfoButton onPress={handleCafeInfoPress}>
          <CafeInfoText>카페 정보</CafeInfoText>
        </CafeInfoButton>
        <DirectionsButton
          pressed={isDirectionsPressed}
          onPress={() => setIsDirectionsPressed((prev) => !prev)} // 토글 처리
        >
          {isDirectionsPressed ? (
            <DirectionsAfterClick
              width={`${responsiveWidth(150)}px`}
              height={`${responsiveHeight(43)}px`}
            />
          ) : (
            <DirectionsBeforeClick
              width={`${responsiveWidth(150)}px`}
              height={`${responsiveHeight(43)}px`}
            />
          )}
        </DirectionsButton>
      </BottomContainerWrapper>
    </>
  );
};

export default BottomContainer;

const BottomContainerWrapper = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: ${responsiveHeight(109)}px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #fafafa;
  z-index: 1000;
  padding: ${responsiveHeight(12)}px ${responsiveWidth(24)}px;
`;

const CafeInfoButton = styled.TouchableOpacity`
  flex: 1;
  height: ${responsiveHeight(43)}px;
  margin-right: ${responsiveWidth(12)}px;
  justify-content: center;
  align-items: center;
  border-radius: 43px;
  border: 1px solid #f1f1f1;
  padding: ${responsiveHeight(12)}px ${responsiveWidth(16)}px;
`;

const CafeInfoText = styled.Text`
  font-family: PretendardSemiBold;
  font-size: ${responsiveFontSize(14)}px;
  font-weight: 600;
  line-height: ${responsiveHeight(19.32)}px;
  letter-spacing: -0.35px;
  color: #000000;
`;

const DirectionsButton = styled.TouchableOpacity`
  flex: 1;
  height: ${responsiveHeight(43)}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 43px;
  padding: ${responsiveHeight(12)}px ${responsiveWidth(16)}px;
`;

const DirectionsText = styled.Text`
  font-family: PretendardSemiBold;
  font-size: ${responsiveFontSize(14)}px;
  font-weight: 600;
  line-height: ${responsiveHeight(19.32)}px;
  letter-spacing: -0.35px;
  color: ${(props) => (props.pressed ? "#666" : "#fafafa")};
  margin-left: ${responsiveWidth(8)}px;
`;

const OptionsContainer = styled.View`
  position: absolute;
  bottom: ${responsiveHeight(110)}px;
  right: ${responsiveWidth(24)}px;
  align-items: flex-end;
  z-index: 2000;
  elevation: 10;
`;

const OptionButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
  border-radius: 33px 22px 0px 33px;
  padding: ${responsiveHeight(12)}px;
  margin-bottom: ${responsiveHeight(12)}px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;

const OptionText = styled.Text`
  font-family: PretendardSemiBold;
  font-size: ${responsiveFontSize(14)}px;
  font-weight: 600;
  line-height: ${responsiveHeight(19.32)}px;
  letter-spacing: -0.35px;
  color: #000000;
  margin-left: ${responsiveWidth(8)}px;
`;

const IconImage = styled.Image`
  width: ${responsiveWidth(19)}px;
  height: ${responsiveHeight(19)}px;
`;
