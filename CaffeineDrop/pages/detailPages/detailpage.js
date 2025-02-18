import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Animated,
  ActivityIndicator,
} from "react-native";
import styled from "styled-components/native";
import { useFonts } from "../../styles";
import axios from "axios";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../../utils/responsive";
import * as Location from 'expo-location';

// 컴포넌트
import DetailPageHeader from "../../components/detailPage/DetailPageHeader";
import DetailPageWriteReviewButton from "../../components/detailPage/DetailPageWriteReviewButton";
import DetailPageHome from "../../pages/detailPages/detailpagehome";
import DetailPageReview from "../../pages/detailPages/detailpagereview";
import DetailPageImage from "../../pages/detailPages/detailpageimage";
import DetailPageBeansInfo from "../../pages/detailPages/detailpagebeansinfo";
import BackButton from "../../components/BackButton";
import { CalculateDistance } from '../../components/CalculateDistance';

export default function DetailPage({ navigation, route }) {
  const { cafe } = route.params || {};
  const [isLoading, setIsLoading] = useState(true);
  const [apiData, setApiData] = useState(null);
  const [beansInfo, setBeansInfo] = useState(null);
  const [selectedTab, setSelectedTab] = useState("home");
  const fadeAnim = useState(new Animated.Value(1))[0];
  const [cafeDistance, setCafeDistance] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavBarFixed, setIsNavBarFixed] = useState(false);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const scrollViewRef = useRef(null);
  const fontsLoaded = useFonts();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [cafeResponse, beansResponse] = await Promise.all([
          axios.get("http://13.124.11.195:3000/cafes/1"),
          axios.get("http://13.124.11.195:3000/cafes/1/beans"),
        ]);
        // console.log(cafeResponse.data);
        console.log(beansResponse.data.success);
        setApiData(cafeResponse.data);
        setLatitude(cafeResponse.data.latitude);
        setLongitude(cafeResponse.data.longitude);
        console.log(latitude, longitude);
        setBeansInfo(beansResponse.data.success);
        console.log(beansInfo);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!apiData) return; // Ensure apiData is available

    const fetchData = async () => {
      try {
        // 위치 권한 요청
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.log('위치 권한이 거부되었습니다.');
          return;
        }
  
        // 현재 위치 가져오기
        let currentLocation = await Location.getCurrentPositionAsync({});
        const currentCoords = {
          latitude: currentLocation.coords.latitude,
          longitude: currentLocation.coords.longitude,
        };
        const cafeCoords = {
          latitude: apiData.latitude,
          longitude: apiData.longitude,
        };
        const distance = CalculateDistance(currentCoords, cafeCoords);
        setCafeDistance(distance.toFixed(1));
        console.log(`카페까지의 거리: ${distance.toFixed(1)} km`);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, [apiData]);
  
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

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
            cafe={cafe}
            selectedTab={selectedTab}
            navigation={navigation}
            distance={cafeDistance}           
            apiData={apiData}
            latitude={latitude}
            longitude={longitude}
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
        return <DetailPageReview selectedTab={selectedTab} apiData={apiData} />;
      case "image":
        return (
          <DetailPageImage
            selectedTab={selectedTab}
            navigation={navigation}
            apiData={apiData}
          />
        );
      case "beansinfo":
        return <DetailPageBeansInfo selectedTab={selectedTab} beansInfo={beansInfo} />;
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
              <FixedHeaderText>{apiData.name}</FixedHeaderText>
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
        <DetailPageHeader
          navigation={navigation}
          isScrolled={isScrolled}
          apiData={apiData}
          distance={cafeDistance}
        />
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