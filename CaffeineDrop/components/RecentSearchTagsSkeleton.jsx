import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";
import styled from "styled-components/native";
import { responsiveWidth, responsiveHeight } from "../utils/responsive";

// 펄스 애니메이션 공통 컴포넌트
const SkeletonPulse = styled(Animated.View)`
  background-color: #d9d9d9;
  border-radius: 4px;
  width: ${(props) => props.width || responsiveWidth(80)}px;
  height: ${(props) => props.height || responsiveHeight(36)}px;
  margin-right: ${responsiveWidth(8)}px;
`;

const SkeletonLineWithPulse = ({ width, height }) => {
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

  return <SkeletonPulse style={{ opacity }} width={width} height={height} />;
};

const RecentSearchTagsSkeleton = () => {
  return (
    <Container>
      <Header>
        <SkeletonLineWithPulse
          width={responsiveWidth(80)}
          height={responsiveHeight(24)}
        />
        <SkeletonLineWithPulse
          width={responsiveWidth(44)}
          height={responsiveHeight(16)}
        />
      </Header>
    </Container>
  );
};

export default RecentSearchTagsSkeleton;

const Container = styled.View`
  margin-top: ${responsiveHeight(24)}px;
  border-bottom-width: ${responsiveHeight(1)}px;
  border-bottom-color: #f1f1f1;
  height: ${responsiveHeight(102)}px;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${responsiveWidth(24)}px;
  margin-bottom: ${responsiveHeight(16)}px;
  width: ${responsiveWidth(360)}px;
  height: ${responsiveHeight(25)}px;
`;
