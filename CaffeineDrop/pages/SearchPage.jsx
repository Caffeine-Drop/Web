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
import LocationIcon from "../assets/search/LocationIcon.svg";
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
  const [isInSearchMode, setIsInSearchMode] = useState(false); // 🔹 검색 설정 모드 상태
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

  // 🔥 검색 버튼 눌렀을 때 스켈레톤 UI 새로 적용하는 함수
  const resetSearch = () => {
    setShowSearchResults(false); // 기존 검색 결과 숨기기
    setIsMapVisible(false); // 지도 숨기기
    setIsNewSlideVisible(false); // 추천 검색어 슬라이드 숨기기

    // 짧은 딜레이 후 검색 결과 다시 표시 → 스켈레톤 UI 적용
    setTimeout(() => {
      setShowSearchResults(true);
    }, 50);
  };

  const handleClearAll = () => {
    console.log("모두 삭제");
  };

  const handleCurrentLocationPress = () => {
    console.log("현재 위치로 가기 버튼 클릭!");
  };

  const handleSlideDown = () => {
    setIsSettingComplete(true); // 검색 설정 버튼을 "설정 완료"로 변경
    setIsMapVisible(true); // 지도 화면이 아니라 기본 화면으로 복귀
    setShowSearchResults(false); // 검색 결과가 아닌 기본 상태 유지
    setIsInSearchMode(false); // 🔹 검색 설정 모드 해제 (카페 아이콘 보이게)

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

  const handleSettingsPress = () => {
    if (!isInSearchMode) {
      // 🔹 검색 설정 버튼을 눌렀을 때 (search02 또는 search03)
      setIsMapVisible(true); // 지도 표시
      setIsInSearchMode(true); // 검색 설정 모드 활성화
      setIsSettingComplete(false); // 설정 완료 상태가 아님

      if (searchText.trim().length === 0) {
        // 🔹 검색어 없을 때 → SearchWordSlide 표시 (search02)
        setIsNewSlideVisible(true);
        setShowSearchResults(false);
      } else {
        // 🔹 검색어 있을 때 → SearchResults 표시 (search03)
        setIsNewSlideVisible(false);
        setShowSearchResults(true);
      }
    } else {
      // 🔹 설정 완료 버튼을 눌렀을 때
      if (searchText.trim().length === 0) {
        // 🔹 검색어 없으면 search01로 이동
        setIsNewSlideVisible(false);
        setShowSearchResults(false);
        setIsMapVisible(false); // 지도 닫기
        setIsInSearchMode(false); // 검색 설정 모드 해제
        setIsSettingComplete(false); // 초기화
      } else {
        if (isNewSlideVisible) {
          // 🔹 검색 설정 모드에서 입력한 경우 → 초기 화면으로 돌아가면서 검색어 유지
          setIsNewSlideVisible(false);
          setShowSearchResults(false);
          setIsMapVisible(false); // 지도 닫기
          setIsInSearchMode(false); // 검색 설정 모드 해제
          setIsSettingComplete(false); // 초기화
        } else {
          // 🔹 일반 검색 후 검색 설정 → search04로 이동 (지도 유지)
          setIsNewSlideVisible(false);
          setShowSearchResults(true);
          setIsMapVisible(true); // 지도 유지
          setIsInSearchMode(false); // 검색 설정 모드 해제
          setIsSettingComplete(true); // 설정 완료
        }
      }
    }
  };

  if (!fontsLoaded) {
    return null; // 폰트 로드될 때까지 렌더링 안 함
  }

  return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <Container>
      <HeaderBar
        onSearchPress={resetSearch}
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

          {/* 🔹 검색 설정 모드일 때는 무조건 위치 아이콘과 안내 텍스트 표시 */}
          {isInSearchMode ? (
            <>
              <CurrentLocationWrapper onPress={handleCurrentLocationPress}>
                <CurrentLocationIcon
                  width={`${responsiveWidth(12)}px`}
                  height={`${responsiveHeight(12)}px`}
                />
                <CurrentLocationText>현재 위치로 가기</CurrentLocationText>
              </CurrentLocationWrapper>
              <LocationIconWrapper>
                <LocationIcon
                  width={responsiveWidth(23.859)}
                  height={responsiveHeight(34.5)}
                />
              </LocationIconWrapper>
              <MoveMapWrapper>
                <MoveMapText>
                  지도를 움직여 검색 위치를 설정해주세요
                </MoveMapText>
              </MoveMapWrapper>
            </>
          ) : (
            // 🔹 검색 설정 모드가 해제되었을 때만 카페 아이콘 표시
            isSettingComplete &&
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
          )}
        </MapContainer>
      )}

      {!isNewSlideVisible && (
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
      )}

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
    // </TouchableWithoutFeedback>
  );
};

export default SearchPage;

const Container = styled.View`
  background-color: #fafafa;
`;

const MapContainer = styled.View`
  width: 100%;
  height: 100%;
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
  line-height: ${responsiveHeight(16.56)}px;
  letter-spacing: -0.3;
  margin-left: ${responsiveWidth(6)}px;
  justify-content: center;
`;

const CurrentLocationWrapper = styled.TouchableOpacity`
  position: absolute;
  top: ${responsiveHeight(16)}px;
  left: 50%;
  transform: translateX(-${responsiveWidth(60)}px);
  width: ${responsiveWidth(119)}px;
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
  justify-content: center;
`;

const LocationIconWrapper = styled.View`
  position: absolute;
  top: ${responsiveHeight(121)}px;
  left: 50%;
  transform: translate(-11.93px, -17.25px);
  z-index: 3;
`;

const MoveMapText = styled.Text`
  color: #fafafa;
  font-family: PretendardMedium;
  font-size: ${responsiveFontSize(12)}px;
  font-weight: 500;
  line-height: ${responsiveHeight(16.56)}px;
  letter-spacing: -0.3;
`;

const MoveMapWrapper = styled.View`
  position: absolute;
  top: ${responsiveHeight(207)}px;
  left: 50%;
  transform: translateX(-${responsiveWidth(100)}px);
  width: ${responsiveWidth(199)}px;
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
  justify-content: center;
`;
