import React, { useState } from 'react';
import { Image } from "react-native";
import styled from 'styled-components/native';
import HeaderBar from '../components/HeaderBar';
import PopularSearchList from '../components/PopularSearchList';
import RecentSearchTags from '../components/RecentSearchTags';
import RecommendedCafes from '../components/RecommendedCafes';
import SearchResults from '../components/SearchResults';

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

  return (
    <Container>
      <HeaderBar
        onSearchPress={() => setShowSearchResults(true)}
        onSettingsPress={() => {
          setIsMapVisible(true); // 지도 표시
          setShowSearchResults(false); // 검색 슬라이드 닫기
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
  z-index: 1;
`;