import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";
import styled from "styled-components/native";
import { responsiveWidth, responsiveHeight } from "../utils/responsive";

// 펄스 애니메이션 공통 컴포넌트
const SkeletonPulse = styled(Animated.View)`
  background-color: #d9d9d9;
  border-radius: 4px;
  width: ${(props) => props.width || responsiveWidth(120)}px;
  height: ${(props) => props.height || responsiveHeight(160)}px;
  margin-right: ${responsiveWidth(6)}px;
`;

const SkeletonLineWithPulse = ({ width, height, marginLeft }) => {
  const opacity = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.3,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <SkeletonPulse
      style={{ opacity, marginLeft }}
      width={width}
      height={height}
    />
  );
};

const RecommendedCafesSkeleton = () => {
  return (
    <Container>
      <Header>
        <SkeletonLineWithPulse
          width={responsiveWidth(148)}
          height={responsiveHeight(24)}
        />
        <SkeletonLineWithPulse
          width={responsiveWidth(35)}
          height={responsiveHeight(16)}
          marginLeft={responsiveWidth(12)}
        />
      </Header>
    </Container>
  );
};

export default RecommendedCafesSkeleton;

const Container = styled.View`
  margin-top: ${responsiveHeight(24)}px;
  border-bottom-width: ${responsiveHeight(1)}px;
  border-bottom-color: #f1f1f1;
  height: ${responsiveHeight(208)}px;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 ${responsiveWidth(24)}px;
  margin-bottom: ${responsiveHeight(16)}px;
  height: ${responsiveHeight(28)}px;
`;
