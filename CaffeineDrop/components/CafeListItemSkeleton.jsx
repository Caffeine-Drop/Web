import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";
import styled from "styled-components/native";
import { responsiveWidth, responsiveHeight } from "../utils/responsive";

// 펄스 애니메이션 효과를 위한 컴포넌트
const SkeletonPulse = styled(Animated.View)`
  background-color: #e0e0e0;
  border-radius: 4px;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || responsiveHeight(14)}px;
  margin-bottom: ${responsiveHeight(8)}px;
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

const CafeListItemSkeleton = () => {
  return (
    <SkeletonContainer>
      {/* 이미지 영역 */}
      <SkeletonImageWrapper>
        <SkeletonImage />
        <SkeletonImage small />
        <SkeletonImage small />
      </SkeletonImageWrapper>

      {/* 텍스트 정보 영역 */}
      <SkeletonInfo>
        <SkeletonLineWithPulse width="60%" height={responsiveHeight(20)} />
        <SkeletonLineWithPulse width="40%" height={responsiveHeight(14)} />

        {/* 거리 및 해시태그 영역 */}
        <SkeletonDetails>
          <SkeletonBadge />
          <SkeletonLineWithPulse width="30%" height={responsiveHeight(12)} />
        </SkeletonDetails>
      </SkeletonInfo>
    </SkeletonContainer>
  );
};

export default CafeListItemSkeleton;

const SkeletonContainer = styled.View`
  width: ${responsiveWidth(360)}px;
  height: ${responsiveHeight(274)}px;
  padding: ${responsiveHeight(16)}px ${responsiveWidth(24)}px;
  background-color: #fafafa;
  margin-bottom: ${responsiveHeight(12)}px;
  border-radius: 12px;
`;

const SkeletonImageWrapper = styled.View`
  flex-direction: row;
  margin-bottom: ${responsiveHeight(16)}px;
`;

const SkeletonImage = styled.View`
  width: ${(props) =>
    props.small ? responsiveWidth(112.5) : responsiveWidth(150)}px;
  height: ${responsiveHeight(150)}px;
  background-color: #d9d9d9;
  border-radius: 12px;
  margin-right: ${responsiveWidth(4)}px;
`;

const SkeletonInfo = styled.View``;

const SkeletonDetails = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${responsiveHeight(8)}px;
`;

const SkeletonBadge = styled.View`
  width: ${responsiveWidth(40)}px;
  height: ${responsiveHeight(16)}px;
  background-color: #d9d9d9;
  border-radius: 8px;
  margin-right: ${responsiveWidth(8)}px;
`;
