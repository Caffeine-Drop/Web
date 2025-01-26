import React, { useState } from 'react';
import { Image } from "react-native";
import styled from 'styled-components/native';
import HeaderBar from '../components/HeaderBar';
import PopularSearchList from '../components/PopularSearchList';
import RecentSearchTags from '../components/RecentSearchTags';
import RecommendedCafes from '../components/RecommendedCafes';
import SearchResults from '../components/SearchResults';
import CurrentLocationIcon from '../assets/search/CurrentLocationIcon.svg'

const SearchPage = () => {
  const popularSearches = ['카이막', '두바이 초콜릿', '브런치 카페', '베이글', '콜드브루', '에스프레소'];
  const recentSearches = ['수플레', '딸기케이크', '휘낭시에', '휘낭시에', '카이막'];
  const recommendedCafes = [
    { name: '언힙커피로스터스', distance: '600m', rating: 4.0 },
    { name: '언힙커피로스터스', distance: '600m', rating: 4.0 },
    { name: '언힙커피로스터스', distance: '600m', rating: 4.0 },
  ];

  const [showSearchResults, setShowSearchResults] = useState(false);
  const [isMapVisible, setIsMapVisible] = useState(false);

  const handleClearAll = () => {
    console.log('모두 삭제');
  };

  const handleCurrentLocationPress = () => {
    console.log('현재 위치로 가기 버튼 클릭!');
  };

  return (
    <Container>
      <HeaderBar
        onSearchPress={() => setShowSearchResults(true)}
        onSettingsPress={(isSettingComplete) => {
          if (isSettingComplete) {
            setIsMapVisible(true); // 지도 표시
            setShowSearchResults(false); // 검색 슬라이드 닫기
          }
        }}
      />

      {/* 지도 표시 */}
      {isMapVisible && (
        <MapContainer>
          <Image
            source={require("../assets/home/MapImage.png")}
            style={{
              position: "absolute",
              top: 0, // FULLY_EXPANDED_POSITION
              width: "100%",
              height: "349px", // 지도 크기
              resizeMode: "cover",
            }}
          />
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
  top: 162px; /* 지도 위치 */
  left: 0;
  right: 0;
  bottom: 316px; /* 지도 높이 */
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
  top: 50%; /* 수직 중앙 */
  left: 50%; /* 수평 중앙 */
  transform: translate(-11.93px, -17.25px); /* 아이콘 크기 기준 조정 (32px의 절반) */
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