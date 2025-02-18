import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Animated,
} from "react-native";
import styled from "styled-components/native";
import { useFonts } from "../../styles";

import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../../utils/responsive";

// 컴포넌트
import DetailPageHeader from "../../components/detailPage/DetailPageHeader";
import DetailPageWriteReviewButton from "../../components/detailPage/DetailPageWriteReviewButton";
import DetailPageHome from "../../pages/detailPages/detailpagehome";
import DetailPageReview from "../../pages/detailPages/detailpagereview";
import DetailPageImage from "../../pages/detailPages/detailpageimage";
import DetailPageBeansInfo from "../../pages/detailPages/detailpagebeansinfo";
import BackButton from "../../components/BackButton";

import useFetchCafeDetail from "../../hooks/useFetchCafeDetail";

export default function DetailPage({ navigation, route }) {
  const { cafe } = route.params || {};
  const cafeId = route.params?.cafeId; // ✅ cafeId만 받아옴
  const { cafeDetail, isLoading, error } = useFetchCafeDetail(cafeId); // ✅ cafeId로 API 호출
  const [selectedTab, setSelectedTab] = useState("home");
  const fadeAnim = useState(new Animated.Value(1))[0];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavBarFixed, setIsNavBarFixed] = useState(false);
  const scrollViewRef = useRef(null);
  const fontsLoaded = useFonts();

  useEffect(() => {
    console.log("불러올 카페 ID:", cafeId);
  }, [cafeId]);

  if (!fontsLoaded) {
    return null; // 폰트 로딩이 안되면 아무것도 렌더링하지 않음
  }

  const handleScroll = (event) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    setIsScrolled(scrollY > responsiveHeight(10));
    setIsNavBarFixed(scrollY > responsiveHeight(327));
  };

  const fixedHandleTabPress = (tab) => {
    setSelectedTab(tab);
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        y: responsiveHeight(340),
        animated: true,
      });
    }
  };

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const renderPage = () => {
    switch (selectedTab) {
      case "home":
        return (
          <DetailPageHome
            cafe={cafeDetail}
            selectedTab={selectedTab}
            navigation={navigation}
            onViewMoreImgPress={() => handleTabPress("image")}
            onViewMoreReviewPress={() => {
              handleTabPress("review");
              if (scrollViewRef.current) {
                scrollViewRef.current.scrollTo({ y: 0, animated: true });
              }
            }}
          />
        );
      case "review":
        return <DetailPageReview selectedTab={selectedTab} />;
      case "image":
        return (
          <DetailPageImage selectedTab={selectedTab} navigation={navigation} />
        );
      case "beansinfo":
        return <DetailPageBeansInfo />;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {isScrolled && (
        <FixedHeader>
          <View style={{ width: "100%", flexDirection: "column" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <BackButton
                style={{
                  position: "absolute",
                  width: responsiveWidth(24),
                  height: responsiveWidth(24),
                }}
                onPress={() => navigation.goBack()}
              />
              <FixedHeaderText>언힙커피로스터스</FixedHeaderText>
            </View>
            {isNavBarFixed && (
              <NavBar>
                {["home", "review", "image", "beansinfo"].map((tab) => (
                  <TouchableOpacity
                    key={tab}
                    onPress={() => fixedHandleTabPress(tab)}
                  >
                    <NavTab isSelected={selectedTab === tab}>
                      <TabText isSelected={selectedTab === tab}>
                        {tab === "home"
                          ? "홈"
                          : tab === "review"
                          ? "리뷰"
                          : tab === "image"
                          ? "이미지"
                          : "원두 정보"}
                      </TabText>
                    </NavTab>
                  </TouchableOpacity>
                ))}
              </NavBar>
            )}
          </View>
        </FixedHeader>
      )}
      <ScrollView
        ref={scrollViewRef}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        <DetailPageHeader navigation={navigation} isScrolled={isScrolled} />
        <View>
          <Container>
            <NavBar>
              {["home", "review", "image", "beansinfo"].map((tab) => (
                <TouchableOpacity key={tab} onPress={() => handleTabPress(tab)}>
                  <NavTab isSelected={selectedTab === tab}>
                    <TabText isSelected={selectedTab === tab}>
                      {tab === "home"
                        ? "홈"
                        : tab === "review"
                        ? "리뷰"
                        : tab === "image"
                        ? "이미지"
                        : "원두 정보"}
                    </TabText>
                  </NavTab>
                </TouchableOpacity>
              ))}
            </NavBar>
            <Animated.View style={{ opacity: fadeAnim }}>
              {renderPage()}
            </Animated.View>
          </Container>
        </View>
      </ScrollView>
      <DetailPageWriteReviewButton navigation={navigation} />
    </View>
  );
}

const Container = styled.View`
  width: 100%;
  position: relative;
`;

const NavBar = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  gap: 12px;
  bottom: 0;
  width: 100%;
  height: ${responsiveHeight(48)}px;
  background-color: #756555;
`;

const NavTab = styled.View`
  padding: ${responsiveHeight(12)}px ${responsiveWidth(16)}px;
  border-bottom-width: 2px;
  border-bottom-color: ${(props) =>
    props.isSelected ? "#fafafa" : "transparent"};
`;

const TabText = styled.Text`
  color: ${(props) => (props.isSelected ? "#ffffff" : "#999999")};
  font-family: "PretendardSemiBold";
  font-size: ${responsiveFontSize(16)}px;
  line-height: ${responsiveHeight(22.08)}px;
  letter-spacing: -0.04px;
`;

const FixedHeader = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding-top: ${responsiveHeight(38)}px;
  background-color: #756555;
  z-index: 1000;
`;

const FixedHeaderText = styled.Text`
  overflow: hidden;
  width: 100%;
  height: ${responsiveHeight(56)}px;
  padding: 15px 0;
  color: #fafafa;
  text-align: center;
  text-overflow: ellipsis;
  font-family: "PretendardSemiBold";
  font-size: ${responsiveFontSize(18)}px;
  line-height: ${responsiveHeight(24.84)}px;
  letter-spacing: -0.45px;
`;
