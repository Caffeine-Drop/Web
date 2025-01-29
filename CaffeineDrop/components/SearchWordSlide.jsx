import React, { useRef, useEffect } from "react";
import { Animated, PanResponder, Dimensions } from "react-native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../utils/responsive";
import styled from "styled-components/native";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const FULLY_EXPANDED_POSITION = responsiveHeight(162); // 슬라이드가 올라갈 최대 위치 (px)
const DEFAULT_POSITION = SCREEN_HEIGHT - responsiveHeight(356); // 기본 위치 (px)
const ANIMATION_DURATION = 300; // 애니메이션 지속 시간 (ms)

const SearchWordSlide = ({ onClose, children }) => {
  // translateY를 DEFAULT_POSITION으로 초기화
  const translateY = useRef(new Animated.Value(DEFAULT_POSITION)).current;

  useEffect(() => {
    // 컴포넌트가 마운트되면 슬라이드를 FULLY_EXPANDED_POSITION으로 애니메이션
    Animated.timing(translateY, {
      toValue: DEFAULT_POSITION,
      duration: ANIMATION_DURATION,
      useNativeDriver: true,
    }).start();
  }, []);

  const panResponder = useRef(
    PanResponder.create({
      // 드래그 시작 조건
      onMoveShouldSetPanResponder: (_, gestureState) =>
        Math.abs(gestureState.dy) > 5,

      // 드래그 중 translateY 업데이트
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dy > 0) { // 아래로 드래그만 허용
          const newY = gestureState.dy + FULLY_EXPANDED_POSITION;
          translateY.setValue(newY);
        }
      },

      // 드래그 릴리즈 시 애니메이션 처리
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 100) {
          // 충분히 아래로 드래그하면 슬라이드를 닫고 onClose 호출
          Animated.timing(translateY, {
            toValue: SCREEN_HEIGHT,
            duration: ANIMATION_DURATION,
            useNativeDriver: true,
          }).start(() => {
            onClose && onClose();
          });
        } else {
          // 그렇지 않으면 원래 위치로 복귀
          Animated.timing(translateY, {
            toValue: FULLY_EXPANDED_POSITION,
            duration: ANIMATION_DURATION,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  // 슬라이드의 모서리 반경 애니메이션 설정 (선택 사항)
  const borderRadius = translateY.interpolate({
    inputRange: [FULLY_EXPANDED_POSITION, DEFAULT_POSITION, SCREEN_HEIGHT],
    outputRange: [0, 24, 24], // 슬라이드가 내려갈 때 둥글게 유지
    extrapolate: "clamp",
  });

  return (
    <AnimatedContainer
      style={{
        transform: [{ translateY }],
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius,
      }}
      {...panResponder.panHandlers}
    >
      <DragHandleWrapper>
        <DragHandle />
      </DragHandleWrapper>
      
      {/* 슬라이드 내부에 전달된 children 렌더링 */}
      <ContentScrollView>
        {children}
      </ContentScrollView>
    </AnimatedContainer>
  );
};

export default SearchWordSlide;

// 스타일 정의
const AnimatedContainer = styled(Animated.View)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: ${SCREEN_HEIGHT}px;
  background-color: #fafafa;
  z-index: 20;
  elevation: 4;
  shadow-color: rgba(0, 0, 0, 0.1);
  shadow-offset: 0px -4px;
  shadow-opacity: 0.5;
  shadow-radius: 8px;
`;

const DragHandleWrapper = styled.View`
  align-items: center;
  padding-bottom: ${responsiveHeight(12)}px;
  padding-top: ${responsiveHeight(16)}px;
`;

const DragHandle = styled.View`
  width: ${responsiveWidth(64)}px;
  height: ${responsiveHeight(5)}px;
  border-radius: 5px;
  background: #d9d9d9;
`;

const ContentScrollView = styled.ScrollView`
  flex: 1;
`;
