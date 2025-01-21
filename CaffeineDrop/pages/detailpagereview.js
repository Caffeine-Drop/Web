import React from "react";
import { View, ScrollView } from "react-native";

// 컴포넌트
import DetailPageReviewOverView from "../components/DetailPageReviewOverView";
import DetailPageReviews from "../components/DetailPageReviews";
import DetailPageEmpty from "../components/DetailPageEmpty";
export default function DetailPageReview({
  selectedTab,
  onViewMoreReviewPress,
}) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <DetailPageReviewOverView />
        <DetailPageReviews
          selectedTab={selectedTab}
          onViewMoreReviewPress={onViewMoreReviewPress}
        />
        <DetailPageEmpty
          mainText1="아직 등록된"
          mainText2="리뷰가 없어요"
          subText1="카페 방문 후 리뷰를"
          subText2="남겨 보세요"
          selectedTab={selectedTab}
        />
      </ScrollView>
    </View>
  );
}
