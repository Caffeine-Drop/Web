import React, { useState } from "react";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../utils/responsive";
import styled from "styled-components/native";
import RecentSearchTagsSkeleton from "./RecentSearchTagsSkeleton";
import DeleteIcon from "../assets/search/DeleteIcon.svg";
import { useFonts } from "../styles";

const RecentSearchTags = ({ recentSearches, onClearAll, isLoading }) => {
  const [searchTags, setSearchTags] = useState(recentSearches); // 상태로 관리
  const fontsLoaded = useFonts();

  if (!fontsLoaded || isLoading) {
    return <RecentSearchTagsSkeleton />;
  }

  const handleClearAll = () => {
    setSearchTags([]); // 모든 태그 삭제
    if (onClearAll) onClearAll(); // 부모 컴포넌트의 onClearAll 콜백 호출
  };

  const handleDeleteTag = (index) => {
    const updatedTags = searchTags.filter((_, i) => i !== index); // 해당 인덱스를 제외한 태그 목록
    setSearchTags(updatedTags);
  };

  return (
    <Container>
      <Header>
        <Title>최근 검색어</Title>
        <ClearText onPress={handleClearAll}>모두 삭제</ClearText>
      </Header>
      <TagList horizontal showsHorizontalScrollIndicator={false}>
        {searchTags.map((search, index) => (
          <Tag key={index}>
            <TagText>{search}</TagText>
            <DeleteIconWrapper onPress={() => handleDeleteTag(index)}>
              <DeleteIcon
                width={`${responsiveWidth(19)}px`}
                height={`${responsiveHeight(19)}px`}
              />
            </DeleteIconWrapper>
          </Tag>
        ))}
      </TagList>
    </Container>
  );
};

export default RecentSearchTags;

const Container = styled.View`
  margin-top: ${responsiveHeight(24)}px;
  border-bottom-width: 1px;
  border-bottom-color: #f1f1f1;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${responsiveWidth(24)}px;
  margin-bottom: ${responsiveHeight(16)}px;
`;

const Title = styled.Text`
  font-family: PretendardSemiBold;
  font-size: ${responsiveFontSize(18)}px;
  font-weight: 600;
  line-height: ${responsiveHeight(24.84)}px;
  letter-spacing: -0.45;
`;

const ClearText = styled.Text`
  font-family: PretendardMedium;
  font-size: ${responsiveFontSize(12)}px;
  font-weight: 500;
  line-height: ${responsiveHeight(16.56)}px;
  letter-spacing: -0.3;
  color: #999;
`;

const TagList = styled.ScrollView`
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${responsiveWidth(8)}px;
  padding-left: ${responsiveWidth(24)}px;
  margin-bottom: ${responsiveHeight(24)}px;
`;

const Tag = styled.View`
  flex-direction: row;
  height: ${responsiveHeight(36)}px;
  align-items: center;
  justify-content: center;
  padding: ${responsiveHeight(6)}px ${responsiveWidth(10)}px
    ${responsiveHeight(6)}px ${responsiveWidth(14)}px;
  border-radius: 41px;
  margin-right: ${responsiveWidth(8)}px;
  border: 1px solid #ebebeb;
`;

const TagText = styled.Text`
  font-family: PretendardMedium;
  font-size: ${responsiveFontSize(14)}px;
  line-height: ${responsiveHeight(19.32)}px;
  letter-spacing: -0.35;
  margin-right: 2px;
`;

const DeleteIconWrapper = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;
