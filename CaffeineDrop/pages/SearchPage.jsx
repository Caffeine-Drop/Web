import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import HeaderBar from '../components/HeaderBar';
import PopularSearchList from '../components/PopularSearchList';
import RecentSearchTags from '../components/RecentSearchTags';
import RecommendedCafes from '../components/RecommendedCafes';

const SearchPage = () => {
  const popularSearches = ['카이막', '두바이 초콜릿', '브런치 카페', '베이글', '콜드브루', '에스프레소'];
  const recentSearches = ['수플레', '딸기케이크', '휘낭시에'];
  const recommendedCafes = [
    { name: '언힙커피로스터스', distance: '600m', rating: 4.0 },
    { name: '언힙커피로스터스', distance: '600m', rating: 4.0 },
    { name: '언힙커피로스터스', distance: '600m', rating: 4.0 },
  ];

  const handleClearAll = () => {
    console.log('모두 삭제');
  };

  return (
    <ScrollView style={styles.container}>
      <HeaderBar />
      <PopularSearchList popularSearches={popularSearches} />
      <RecentSearchTags recentSearches={recentSearches} onClearAll={handleClearAll} />
      <RecommendedCafes cafes={recommendedCafes} />
    </ScrollView>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
});
