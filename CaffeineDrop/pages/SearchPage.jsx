import React, { useState } from 'react';
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

  const handleClearAll = () => {
    console.log('모두 삭제');
  };

  return (
    <Container>
      <HeaderBar onSearchPress={() => setShowSearchResults(true)}/>
      <SearchResults
        isVisible={showSearchResults}
        onClose={() => setShowSearchResults(false)}
      />
      <PopularSearchList popularSearches={popularSearches} />
      <RecentSearchTags recentSearches={recentSearches} onClearAll={handleClearAll} />
      <RecommendedCafes cafes={recommendedCafes} />
    </Container>
  );
};

export default SearchPage;

const Container = styled.View`
  flex: 1;
  background-color: #fafafa;
`;
