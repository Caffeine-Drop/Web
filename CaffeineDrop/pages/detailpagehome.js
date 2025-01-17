import React from "react";
import { View, ScrollView } from "react-native";
import styled from "styled-components/native";
import { responsiveWidth, responsiveHeight } from "../utils/responsive";
import { LinearGradient } from "expo-linear-gradient";

// 컴포넌트
import DetailPageImg from "../components/DetailPageImg";
import DetailpageMenu from "../components/DetailPageMenu";
import DetailPageMap from "../components/DetailPageMap";
import DetailPageCategory from "../components/DetailPageCategory";
import DetailPageReviews from "../components/DetailPageReviews";

export default function DetailPageHome({
  onViewMoreImgPress,
  selectedTab,
  onViewMoreReviewPress,
}) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <DetailPageImg onViewMoreImgPress={onViewMoreImgPress} />
        <DetailpageMenu />
        <DetailPageMap />
        <DetailPageCategory />
        <StyledGradientBox
          colors={["rgba(0, 0, 0, 0.00)", "rgba(0, 0, 0, 0.02)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        />
        <DetailPageReviews
          selectedTab={selectedTab}
          onViewMoreReviewPress={onViewMoreReviewPress}
        />
      </ScrollView>
    </View>
  );
}

const StyledGradientBox = styled(LinearGradient)`
  width: 100%;
  height: ${responsiveHeight(16)}px;
  flex-shrink: 0;
`;
