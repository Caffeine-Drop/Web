import React, { useState } from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import HeaderBar from "../components/HeaderBar";
import PopularSearchList from "../components/PopularSearchList";
import RecentSearchTags from "../components/RecentSearchTags";
import RecommendedCafes from "../components/RecommendedCafes";
import SearchResults from "../components/SearchResults";
import CafeLocation from "../components/CafeLocation";
import CurrentLocationIcon from "../assets/search/CurrentLocationIcon.svg";

const SearchPage = () => {
  const popularSearches = ["카이막", "두바이 초콜릿", "브런치 카페", "베이글", "콜드브루", "에스프레소"];
  const recentSearches = ["수플레", "딸기케이크", "휘낭시에", "휘낭시에", "카이막"];
  const recommendedCafes = [
    { name: "언힙커피로스터스", distance: "600m", rating: 4.0 },
    { name: "언힙커피로스터스", distance: "600m", rating: 4.0 },
    { name: "언힙커피로스터스", distance: "600m", rating: 4.0 },
  ];

  const [showSearchResults, setShowSearchResults] = useState(false);
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [isSettingComplete, setIsSettingComplete] = useState(false);

  const cafeLocations = [
    { id: "cafe1", top: 60, left: 170 },
    { id: "cafe2", top: 110, left: 100 },
    { id: "cafe3", top: 130, left: 230 },
    { id: "cafe4", top: 180, left: 160 },
  ];

  const handleClearAll = () => {
    console.log("모두 삭제");
  };

  const handleCurrentLocationPress = () => {
    console.log("현재 위치로 가기 버튼 클릭!");
  };

  const handleCafeSelect = (cafeId) => {
    console.log(`${cafeId} 선택됨`);
  };

  return (
    <Container>
      <HeaderBar
        onSearchPress={() => setShowSearchResults(true)}
        onSettingsPress={(isComplete) => {
          setIsSettingComplete(isComplete);
          if (!isMapVisible) {
            setIsMapVisible(true);
          }
          setShowSearchResults(false);
        }}
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
              height: "349px",
              resizeMode: "cover",
            }}
          />

          {/* "설정 완료" 상태일 때 */}
          {isSettingComplete && (
            <>
              <CurrentLocationWrapper onPress={handleCurrentLocationPress}>
                <CurrentLocationIcon width={12} height={12} />
                <CurrentLocationText>현재 위치로 가기</CurrentLocationText>
              </CurrentLocationWrapper>
              <LocationIconWrapper>
                <Image
                  source={require("../assets/search/LocationIcon.png")}
                  style={{ width: 23.859, height: 34.5 }}
                />
              </LocationIconWrapper>
              <MoveMapWrapper>
                <MoveMapText>지도를 움직여 검색 위치를 설정해주세요</MoveMapText>
              </MoveMapWrapper>
            </>
          )}

          {/* "검색 설정" 상태일 때 */}
          {!isSettingComplete &&
            cafeLocations.map((cafe) => (
              <CafeLocation
                key={cafe.id}
                top={cafe.top}
                left={cafe.left}
                isSelected={false}
                onSelect={() => handleCafeSelect(cafe.id)}
              />
            ))}
        </MapContainer>
      )}

      <SearchResults
        isVisible={showSearchResults}
        isSettingMode={isMapVisible}
        onClose={() => setShowSearchResults(false)}
      />

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
  );
};

export default SearchPage;

const Container = styled.View`
  flex: 1;
  background-color: #fafafa;
`;

const MapContainer = styled.View`
  position: absolute;
  top: 162px;
  left: 0;
  right: 0;
  bottom: 316px;
  z-index: 2;
`;

const CurrentLocationText = styled.Text`
  font-size: 12px;
  font-weight: 500;
  margin-left: 6px;
`;

const CurrentLocationWrapper = styled.TouchableOpacity`
  position: absolute;
  top: 16px;
  left: 120.5px;
  flex-direction: row;
  display: flex;
  padding: 8px 12px;
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
  font-size: 12px;
  font-weight: 500;
`;

const MoveMapWrapper = styled.View`
  position: absolute;
  top: 207px;
  left: 80px;
  flex-direction: row;
  display: flex;
  padding: 4px 8px;
  align-items: center;
  border-radius: 25px;
  background: rgba(130, 90, 50, 0.65);
  shadow-color: rgba(0, 0, 0, 0.12);
  shadow-offset: 0px 4px;
  shadow-opacity: 0.5;
  shadow-radius: 24px;
  z-index: 3;
`;