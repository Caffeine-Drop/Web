import React, { useState, useEffect, useRef } from "react";
import { ScrollView, Animated } from "react-native";
import styled from "styled-components/native";
import CoffeePng from "../assets/EventPage/Coffee.png";
import { responsiveWidth, responsiveHeight } from "../utils/responsive";
import { Dimensions } from "react-native";

// 화면 크기 가져오기
const { width } = Dimensions.get("window");

// 태블릿 판별 기준 (보통 width가 600px 이상이면 태블릿)
const isTablet = width >= 600;

const CoffeeImage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // ✨ 펄스 애니메이션 설정
    const pulseAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0.6, // 투명도 낮춤
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1, // 다시 원래대로
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    );

    pulseAnimation.start();

    // 0.7초 후 이미지 로딩 완료
    const timer = setTimeout(() => {
      setIsLoading(false);
      pulseAnimation.stop();
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <Container>
        {isLoading ? (
          <>
            <AnimatedSkeleton style={{ opacity }} />
            <AnimatedSkeleton2 style={{ opacity }} />
            <AnimatedSkeleton3 style={{ opacity }} />
          </>
        ) : (
          <StyledImage source={CoffeePng} />
        )}
      </Container>
    </ScrollView>
  );
};

const Container = styled.View`
  width: ${responsiveWidth(456)}px;
  justify-content: center;
  display: flex;
  margin-left: ${responsiveWidth(18)}px;
`;

// 펄스 애니메이션을 적용한 스켈레톤 UI
const AnimatedSkeleton = styled(Animated.View)`
  width: ${responsiveWidth(108)}px;
  height: ${isTablet ? responsiveHeight(205) : responsiveHeight(153)}px;
  background-color: #e0e0e0;
  border-radius: 0px 24px;
`;
const AnimatedSkeleton2 = styled(Animated.View)`
  width: ${responsiveWidth(108)}px;
  height: ${isTablet ? responsiveHeight(205) : responsiveHeight(153)}px;
  background-color: #e0e0e0;
  border-radius: 0px 24px;

  margin-left: ${responsiveWidth(118.6)}px;
  margin-top: ${responsiveWidth(-150)}px;
`;
const AnimatedSkeleton3 = styled(Animated.View)`
  width: ${responsiveWidth(108)}px;
  height: ${isTablet ? responsiveHeight(205) : responsiveHeight(153)}px;
  background-color: #e0e0e0;
  border-radius: 0px 24px;

  margin-left: ${responsiveWidth(236)}px;
  margin-top: ${responsiveWidth(-160)}px;
`;
// 실제 이미지 (로딩 후 표시)
const StyledImage = styled.Image`
  width: ${responsiveWidth(456)}px;
  height: ${isTablet ? responsiveHeight(205) : responsiveHeight(153)}px;
  border-radius: 8px;
`;

export default CoffeeImage;
