import React, { useState, useRef } from "react";
import {
  Animated,
  Image,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../utils/responsive";
import styled from "styled-components/native";
import HeaderBar from "../components/HeaderBar";
import PopularSearchList from "../components/PopularSearchList";
import RecentSearchTags from "../components/RecentSearchTags";
import RecommendedCafes from "../components/RecommendedCafes";
import SearchResults from "../components/SearchResults";
import CafeLocation from "../components/CafeLocation";
import SearchWordSlide from "../components/SearchWordSlide";
import CurrentLocationIcon from "../assets/search/CurrentLocationIcon.svg";
import LocationHereIcon from "../assets/home/LocationHereIcon.svg";
import { useFonts } from "../styles";

const SCREEN_HEIGHT = responsiveHeight(800); // 화면 높이 (예제값)
const DEFAULT_POSITION = responsiveHeight(316); // Bottom Sheet 기본 위치
const FULLY_EXPANDED_POSITION = responsiveHeight(162); // 슬라이드 최상단 위치
const ANIMATION_DURATION = 300; // 애니메이션 지속 시간

const SearchPage = () => {
  const fontsLoaded = useFonts();

  const popularSearches = [
    "카이막",
    "두바이 초콜릿",
    "브런치 카페",
    "베이글",
    "콜드브루",
    "에스프레소",
  ];
  const recentSearches = [
    "수플레",
    "딸기케이크",
    "휘낭시에",
    "휘낭시에",
    "카이막",
  ];
  const recommendedCafes = [
    { name: "언힙커피로스터스", distance: "600m", rating: 4.0 },
    { name: "언힙커피로스터스", distance: "600m", rating: 4.0 },
    { name: "언힙커피로스터스", distance: "600m", rating: 4.0 },
  ];

  const [showSearchResults, setShowSearchResults] = useState(false);
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [isSettingComplete, setIsSettingComplete] = useState(false);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  const [searchText, setSearchText] = useState("");
  const [isNewSlideVisible, setIsNewSlideVisible] = useState(false);

  const translateY = useRef(new Animated.Value(DEFAULT_POSITION)).current;
  const animatedLocations = useRef([
    {
      id: "cafe1",
      top: new Animated.Value(responsiveHeight(60)),
      left: new Animated.Value(responsiveWidth(170)),
    },
    {
      id: "cafe2",
      top: new Animated.Value(responsiveHeight(110)),
      left: new Animated.Value(responsiveWidth(100)),
    },
    {
      id: "cafe3",
      top: new Animated.Value(responsiveHeight(130)),
      left: new Animated.Value(responsiveWidth(230)),
    },
    {
      id: "cafe4",
      top: new Animated.Value(responsiveHeight(180)),
      left: new Animated.Value(responsiveWidth(160)),
    },
  ]).current;

  const handleClearAll = () => {
    console.log("모두 삭제");
  };

  const handleCurrentLocationPress = () => {
    console.log("현재 위치로 가기 버튼 클릭!");
  };

  const handleSlideDown = () => {
    setIsSettingComplete(false); // 검색 설정 버튼을 "설정 완료"로 바꾸지 않음
    setIsMapVisible(true); // 지도 화면이 아니라 기본 화면으로 복귀
    setShowSearchResults(false); // 검색 결과가 아닌 기본 상태 유지

    // 슬라이드를 원래 default 상태로 복귀
    Animated.timing(translateY, {
      toValue: SCREEN_HEIGHT - responsiveHeight(356), // Default position (카페 아이콘들이 나타나는 높이)
      duration: ANIMATION_DURATION,
      useNativeDriver: true,
    }).start();
  };

  const [selectedCafe, setSelectedCafe] = useState(null);
  const handleCafeSelect = (cafeId) => {
    const selected = animatedLocations.find((loc) => loc.id === cafeId);
    if (!selected) return;

    const centerX = responsiveWidth(160); // 중앙 X 좌표
    const centerY = responsiveHeight(116); // 중앙 Y 좌표

    const deltaY = centerY - selected.top.__getValue();
    const deltaX = centerX - selected.left.__getValue();

    Animated.parallel([
      ...animatedLocations.map((loc) =>
        Animated.timing(loc.top, {
          toValue: loc.top.__getValue() + deltaY,
          duration: ANIMATION_DURATION,
          useNativeDriver: false,
        })
      ),
      ...animatedLocations.map((loc) =>
        Animated.timing(loc.left, {
          toValue: loc.left.__getValue() + deltaX,
          duration: ANIMATION_DURATION,
          useNativeDriver: false,
        })
      ),
      Animated.timing(translateY, {
        toValue: FULLY_EXPANDED_POSITION,
        duration: ANIMATION_DURATION,
        useNativeDriver: true,
      }),
    ]).start();

    setSelectedCafe(cafeId);
  };

  const handleSettingsPress = (isComplete) => {
    if (searchText.trim().length > 0) {
      setIsSettingComplete(isComplete);
      setIsMapVisible(true);
      setShowSearchResults(true);
    } else {
      setIsNewSlideVisible(true);
      setShowSearchResults(false);
      setIsSettingComplete(false);
      setIsMapVisible(true);
    }
  };

  if (!fontsLoaded) {
    return null; // 폰트 로드될 때까지 렌더링 안 함
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Container>
        <HeaderBar
          onSearchPress={() => {
            setShowSearchResults(true);
            setIsMapVisible(false);
            setIsNewSlideVisible(false);
          }}
          onSettingsPress={handleSettingsPress}
          setIsKeyboardVisible={setIsKeyboardVisible}
          searchText={searchText} // Pass searchText as a prop
          setSearchText={setSearchText} // Pass setSearchText as a prop
        />

        {/* 지도 표시 */}
        {isMapVisible && (
          <MapContainer>
            <Image
              source={require("../assets/home/MapImage.png")}
              style={{
                position: "absolute",
                top: 0,
                width: "100%",
                height: responsiveHeight(349),
                resizeMode: "cover",
              }}
            />
            {/* 설정 완료 상태일 때 */}
            {!isSettingComplete ? (
              animatedLocations.map((loc) => (
                <Animated.View
                  key={loc.id}
                  style={{
                    position: "absolute",
                    top: loc.top,
                    left: loc.left,
                  }}
                >
                  {selectedCafe === loc.id ? (
                    <TouchableOpacity onPress={() => setSelectedCafe(null)}>
                      <LocationHereIcon
                        width={`${responsiveWidth(35)}px`}
                        height={`${responsiveHeight(44.375)}px`}
                      />
                    </TouchableOpacity>
                  ) : (
                    <CafeLocation
                      isSelected={selectedCafe === loc.id}
                      onSelect={() => handleCafeSelect(loc.id)}
                    />
                  )}
                </Animated.View>
              ))
            ) : (
              <>
                <CurrentLocationWrapper onPress={handleCurrentLocationPress}>
                  <CurrentLocationIcon
                    width={`${responsiveWidth(12)}px`}
                    height={`${responsiveHeight(12)}px`}
                  />
                  <CurrentLocationText>현재 위치로 가기</CurrentLocationText>
                </CurrentLocationWrapper>
                <LocationIconWrapper>
                  <Image
                    source={require("../assets/search/LocationIcon.png")}
                    style={{
                      width: responsiveWidth(23.859),
                      height: responsiveHeight(34.5),
                    }}
                  />
                </LocationIconWrapper>
                <MoveMapWrapper>
                  <MoveMapText>
                    지도를 움직여 검색 위치를 설정해주세요
                  </MoveMapText>
                </MoveMapWrapper>
              </>
            )}
          </MapContainer>
        )}

        <SearchResults
          isVisible={showSearchResults}
          isSettingMode={isMapVisible}
          onClose={() => {
            setShowSearchResults(false);
            setIsMapVisible(true);
            setIsSettingComplete(true);
          }}
          onSlideDown={handleSlideDown}
        />

        {isNewSlideVisible && (
          <SearchWordSlide onClose={() => setIsNewSlideVisible(false)}>
            <PopularSearchList popularSearches={popularSearches} />
            <RecentSearchTags
              recentSearches={recentSearches}
              onClearAll={handleClearAll}
            />
            <RecommendedCafes cafes={recommendedCafes} />
          </SearchWordSlide>
        )}

        {/* 검색 추천 UI */}
        {!showSearchResults && !isMapVisible && (
          <>
            <PopularSearchList popularSearches={popularSearches} />
            <RecentSearchTags
              recentSearches={recentSearches}
              onClearAll={handleClearAll}
            />
            <RecommendedCafes cafes={recommendedCafes} />
          </>
        )}
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default SearchPage;

const Container = styled.View`
  flex: 1;
  background-color: #fafafa;
`;

const MapContainer = styled.View`
  position: absolute;
  top: ${responsiveHeight(162)}px;
  left: 0;
  right: 0;
  bottom: ${responsiveHeight(316)}px;
  z-index: 2;
`;

const CurrentLocationText = styled.Text`
  font-family: PretendardMedium;
  font-size: ${responsiveFontSize(12)}px;
  font-weight: 500;
  line-height: ${responsiveHeight(19.32)}px;
  letter-spacing: -0.3;
  margin-left: ${responsiveWidth(6)}px;
`;

const CurrentLocationWrapper = styled.TouchableOpacity`
  position: absolute;
  top: ${responsiveHeight(16)}px;
  left: ${responsiveWidth(120.5)}px;
  flex-direction: row;
  display: flex;
  padding: ${responsiveHeight(8)}px ${responsiveWidth(12)}px;
  align-items: center;
  border-radius: 24px;
  background: #fafafa;
  shadow-color: rgba(0, 0, 0, 0.08);
  shadow-offset: 0px 4px;
  shadow-opacity: 0.5;
  shadow-radius: 24px;
  z-index: 3;
`;

const LocationIconWrapper = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-11.93px, -17.25px);
  z-index: 3;
`;

const MoveMapText = styled.Text`
  color: #fafafa;
  font-family: PretendardMedium;
  font-size: ${responsiveFontSize(12)}px;
  font-weight: 500;
  line-height: ${responsiveHeight(19.32)}px;
  letter-spacing: -0.3;
`;

const MoveMapWrapper = styled.View`
  position: absolute;
  top: ${responsiveHeight(207)}px;
  left: ${responsiveWidth(80)}px;
  flex-direction: row;
  display: flex;
  padding: ${responsiveHeight(4)}px ${responsiveWidth(8)}px;
  align-items: center;
  border-radius: 25px;
  background: rgba(130, 90, 50, 0.65);
  shadow-color: rgba(0, 0, 0, 0.12);
  shadow-offset: 0px 4px;
  shadow-opacity: 0.5;
  shadow-radius: 24px;
  z-index: 3;
`;
