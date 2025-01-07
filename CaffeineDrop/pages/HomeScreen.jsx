import React, { useRef } from "react";
import { View, Text, Animated, PanResponder, Dimensions } from "react-native";
import styled from "styled-components/native";
import GNB from "../components/GNB";
import TopFilter from "../components/TopFilter";
import CafeListItem from "../components/CafeListItem";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const GNB_HEIGHT = 56; // GNB 높이

const HomeScreen = () => {
  const translateY = useRef(new Animated.Value(SCREEN_HEIGHT * 0.5)).current; // 초반에 반만 보이도록 설정

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        if (gesture.dy < 0) {
          translateY.setValue(SCREEN_HEIGHT * 0.5 + gesture.dy);
        }
      },
      onPanResponderRelease: (_, gesture) => {
        if (gesture.dy < -100) {
          // 완전히 올리기
          Animated.timing(translateY, {
            toValue: GNB_HEIGHT, // GNB 바로 아래로 이동
            duration: 300,
            useNativeDriver: true,
          }).start();
        } else {
          // 원래 위치로 되돌리기
          Animated.timing(translateY, {
            toValue: SCREEN_HEIGHT * 0.5,
            duration: 300,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  return (
    <Container>
      {/* 지도 */}
      <MapView />

      {/* GNB (고정) */}
      <GNBContainer>
        <GNB />
      </GNBContainer>

      {/* Bottom Sheet (상단 필터 + 카페 리스트) */}
      <AnimatedBottomSheet
        style={{
          transform: [{ translateY }],
          borderTopLeftRadius: translateY.interpolate({
            inputRange: [GNB_HEIGHT, SCREEN_HEIGHT * 0.5],
            outputRange: [0, 16], // 완전히 올리면 radius 제거
            extrapolate: "clamp",
          }),
          borderTopRightRadius: translateY.interpolate({
            inputRange: [GNB_HEIGHT, SCREEN_HEIGHT * 0.5],
            outputRange: [0, 16], // 완전히 올리면 radius 제거
            extrapolate: "clamp",
          }),
        }}
      >
        {/* 터치 가능한 TopFilter */}
        <TopFilter panHandlers={panResponder.panHandlers} />

        <SortContainer>
          <Text>인기순 ▼</Text>
          <Text>전체 ▼</Text>
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

const MapView = styled.View`
  flex: 1;
  background-color: lightgray;
`;

const GNBContainer = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10; /* GNB가 항상 위에 있도록 설정 */
`;

const AnimatedBottomSheet = styled(Animated.View)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: ${GNB_HEIGHT}px;
  background-color: #fff;
`;

const SortContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 20px;
`;

const CafeList = styled.ScrollView`
  flex: 1;
  padding-bottom: 20px;
`;
