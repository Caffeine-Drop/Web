import React, { useRef } from "react";
import { View, Text, Animated, PanResponder, Dimensions, ImageBackground } from "react-native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../utils/responsive";
import styled from "styled-components/native";
import GNB from "../components/GNB";
import TopFilter from "../components/TopFilter";
import CafeListItem from "../components/CafeListItem";
import CurrentLocationIcon from "../assets/home/CurrentLocationIcon.svg";
import DownIcon from "../assets/home/DownIcon.svg";
import LogoIcon from "../assets/home/LogoIcon.svg";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const GNB_HEIGHT = 94; // GNB 높이
const DEFAULT_POSITION = SCREEN_HEIGHT - GNB_HEIGHT - 350; // Bottom Sheet 기본 위치

const HomeScreen = () => {
  const translateY = useRef(new Animated.Value(DEFAULT_POSITION)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        if (gesture.dy < 0) {
          translateY.setValue(DEFAULT_POSITION + gesture.dy);
        }
      },
      onPanResponderRelease: (_, gesture) => {
        if (gesture.dy < -100) {
          // 완전히 올리기
          Animated.timing(translateY, {
            toValue: 0, // GNB 바로 아래로 이동
            duration: 300,
            useNativeDriver: true,
          }).start();
        } else {
          // 원래 위치로 되돌리기
          Animated.timing(translateY, {
            toValue: DEFAULT_POSITION,
            duration: 300,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  return (
    <Container>
      {/* 지도 (MapView 대신 ImageBackground 사용) */}
      <MapBackground source={require("../assets/home/MapImage.png")}>
        <MapView />
        <CurrentLocationMarker>
          <CurrentLocationIcon width={43} height={43} />
        </CurrentLocationMarker>
      </MapBackground>

      {/* GNB (고정) */}
      <GNBContainer>
        <GNB />
      </GNBContainer>

      {/* 🏷️ LogoIcon (TopFilter 기준으로 배치) */}
      <LogoContainer style={{ top: DEFAULT_POSITION + GNB_HEIGHT + 245}}>
        <LogoIcon width={24} height={24} />
      </LogoContainer>

      {/* Bottom Sheet (상단 필터 + 카페 리스트) */}
      <AnimatedBottomSheet
        style={{
          transform: [{ translateY }],
          height: SCREEN_HEIGHT - GNB_HEIGHT,
          borderTopLeftRadius: translateY.interpolate({
            inputRange: [Math.min(GNB_HEIGHT, DEFAULT_POSITION), Math.max(GNB_HEIGHT, DEFAULT_POSITION)],
            outputRange: [0, 24], // 완전히 올리면 radius 제거
            extrapolate: "clamp",
          }),
          borderTopRightRadius: translateY.interpolate({
            inputRange: [Math.min(GNB_HEIGHT, DEFAULT_POSITION), Math.max(GNB_HEIGHT, DEFAULT_POSITION)],
            outputRange: [0, 24], // 완전히 올리면 radius 제거
            extrapolate: "clamp",
          }),
        }}
      >
        {/* 터치 가능한 TopFilter */}
        <TopFilter panHandlers={panResponder.panHandlers} />

        <SortContainer>
          <SortOption>
            <SortText>인기순</SortText>
            <DownIcon width={17} height={17} style={{ marginLeft: 4 }} />
          </SortOption>
          <SortOption>
            <SortText>전체</SortText>
            <DownIcon width={17} height={17} style={{ marginLeft: 4 }} />
          </SortOption>
        </SortContainer>

        {/* 카페 리스트 */}
        <CafeList>
          <CafeListItem cafe={{ name: "언힙커피로스터스", location: "인천 미추홀구", distance: "600m", rating: 4.0, reviews: 605 }} />
          <CafeListItem cafe={{ name: "언힙커피로스터스", location: "서울 강남구", distance: "1.2km", rating: 4.2, reviews: 512 }} />
        </CafeList>
      </AnimatedBottomSheet>
    </Container>
  );
};

export default HomeScreen;

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

/* ImageBackground를 이용한 MapView */
const MapBackground = styled(ImageBackground)`
  width: ${responsiveWidth(360)}px;
  height: ${responsiveHeight(349)}px;
  top: ${GNB_HEIGHT}px;
  flex-shrink: 0;
  align-self: center;
`;

const MapView = styled.View`
  flex: 1;
`;

const GNBContainer = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10; /* GNB가 항상 위에 있도록 설정 */
`;

const LogoContainer = styled.View`
  position: absolute;
  top: ${DEFAULT_POSITION + GNB_HEIGHT + 245}px;
  left: 293px;
  right: 24px;
  width: 43px;
  height: 43px;
  border-radius: 46px;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);
  background-image: linear-gradient(90deg, #3F2D1E 0%, #6A331B 100%);
`;



const AnimatedBottomSheet = styled(Animated.View)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: ${GNB_HEIGHT}px;
  background-color: #fafafa;
`;

const SortContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 24px;
  border-bottom-width: 0.5px;
  border-bottom-color: #D9D9D9;
  background-color: #fafafa;
`;

const SortOption = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SortText = styled.Text`
  font-size: 12px;
  font-weight: 400;
  color: #000;
`;

const CafeList = styled.ScrollView`
  flex: 1;
  padding-bottom: 20px;
`;

/* 📍 현재 위치 아이콘의 정확한 위치 설정 */
const CurrentLocationMarker = styled.View`
  position: absolute;
  top: 249px;
  bottom: 57px;
  left: 24px;
  right: 293px;
`;