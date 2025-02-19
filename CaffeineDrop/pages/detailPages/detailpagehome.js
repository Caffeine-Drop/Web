import React from "react";
import { View, ScrollView } from "react-native";
import styled from "styled-components/native";
import { responsiveWidth, responsiveHeight } from "../../utils/responsive";
import { LinearGradient } from "expo-linear-gradient";

// 컴포넌트
import DetailPageImg from "../../components/detailPage/DetailPageImg";
import DetailpageMenu from "../../components/detailPage/DetailPageMenu";
import DetailPageMap from "../../components/detailPage/DetailPageMap";
import DetailPageCategory from "../../components/detailPage/DetailPageCategory";
import DetailPageReviews from "../../components/detailPage/DetailPageReviews";

export default function DetailPageHome({
  onViewMoreImgPress,
  selectedTab,
  onViewMoreReviewPress,
  navigation,
  apiData,
  images,
  menuItems,
  distance,
  latitude,
  longitude,
  reviews,
  ratings,
}) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <DetailPageImg
          onViewMoreImgPress={onViewMoreImgPress}
          navigation={navigation}
          images={images}
        />
        <DetailpageMenu apiData={apiData} images={images} menuItems={menuItems}/>
        <DetailPageMap
          distance={distance}
          apiData={apiData}
          latitude={latitude}
          longitude={longitude}
        />
        <DetailPageCategory apiData={apiData} />
        <StyledGradientBox
          colors={["rgba(0, 0, 0, 0.00)", "rgba(0, 0, 0, 0.02)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        />
        <DetailPageReviews
          selectedTab={selectedTab}
          onViewMoreReviewPress={onViewMoreReviewPress}
          reviews={reviews}
          ratings={ratings}
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
