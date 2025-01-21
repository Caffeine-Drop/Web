import React, { useRef, useState } from "react";
import { Animated, PanResponder, Easing } from "react-native";
import styled from "styled-components/native";
import CoffeePng from "../assets/EventPage/Coffee.png";
import { responsiveWidth, responsiveHeight } from "../utils/responsive";

const CoffeeImage = () => {
    const MAX_DRAG_DISTANCE_LEFT = -responsiveWidth(110); // 왼쪽으로 드래그 가능한 범위
    const MAX_DRAG_DISTANCE_RIGHT = responsiveWidth(10); // 오른쪽으로 드래그 가능한 범위
    const translateX = useRef(new Animated.Value(0)).current; // 애니메이션 값 정의
    const [startPosition, setStartPosition] = useState(0); // 시작 위치 저장

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true, // 드래그 시작 조건
            onMoveShouldSetPanResponder: () => true, // 드래그 중 PanResponder 유지
            onPanResponderGrant: (_, gestureState) => {
                // 드래그 시작 시 시작 위치 저장
                setStartPosition(translateX._value); // 현재 translateX 값 저장
            },
            onPanResponderMove: (_, gestureState) => {
                // 현재 위치 = 시작 위치 + 현재 드래그 거리
                const currentPosition = startPosition + gestureState.dx;

                // 드래그 제한 범위 내에서만 움직이도록 제한 (오른쪽과 왼쪽 범위 다르게 설정)
                const limitedPosition = Math.max(MAX_DRAG_DISTANCE_LEFT, Math.min(currentPosition, MAX_DRAG_DISTANCE_RIGHT));

                // 부드럽게 값 변경하기 위해 Animated.timing 사용
                Animated.timing(translateX, {
                    toValue: limitedPosition,
                    duration: 20, // 애니메이션의 지속 시간
                    easing: Easing.inOut(Easing.ease), // Ease 타이밍 함수 사용
                    useNativeDriver: false,
                }).start();
            },
            onPanResponderRelease: (_, gestureState) => {
                // 드래그 종료 시 위치를 최종 위치로 설정
                const currentPosition = startPosition + gestureState.dx;

                // 드래그 종료 시에도 제한 범위 내로 이동하도록 제한 (오른쪽과 왼쪽 범위 다르게 설정)
                const limitedPosition = Math.max(MAX_DRAG_DISTANCE_LEFT, Math.min(currentPosition, MAX_DRAG_DISTANCE_RIGHT));

                // 부드럽게 위치를 설정
                Animated.timing(translateX, {
                    toValue: limitedPosition,
                    duration: 20, // 애니메이션의 지속 시간
                    easing: Easing.inOut(Easing.ease), // Ease 타이밍 함수 사용
                    useNativeDriver: false,
                }).start();
            },
        })
    ).current;

    return (
        <Container>
            <PanResponderView {...panResponder.panHandlers}>
                <AnimatedImage
                    source={CoffeePng}
                    style={{
                        transform: [{ translateX }], // translateX 적용
                    }}
                />
            </PanResponderView>
        </Container>
    );
};

const Container = styled.View`
    width: 100%;
    justify-content: center; /* 수직 중앙 정렬 */
`;

const PanResponderView = styled.View`
    width: ${responsiveWidth(456)}px;
    height: ${responsiveHeight(169)}px;
`;

const AnimatedImage = styled(
    Animated.createAnimatedComponent(styled.Image`
        width: ${responsiveWidth(476)}px;
        height: ${responsiveHeight(169)}px;
        justify-content: left;
        align-items: left;
    `)
)``;

export default CoffeeImage;
