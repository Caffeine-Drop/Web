import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

const filters = ["좋아요", "무인", "프랜차이즈", "주차장", "대형카페", "운영 중", "스페셜티 커피", "드립커피 전문점"];

const TopFilter = ({ panHandlers }) => {
  return (
    <FilterContainer {...panHandlers}>  {/* 터치 이벤트 적용 */}
      {/* 드래그 핸들 */}
      <DragHandle />

      {/* 필터 버튼 */}
      <FilterScrollView horizontal showsHorizontalScrollIndicator={false}>
        {filters.map((filter, index) => (
          <FilterButton key={index}>
            <FilterText>{filter}</FilterText>
          </FilterButton>
        ))}
      </FilterScrollView>
    </FilterContainer>
  );
};

export default TopFilter;

const FilterContainer = styled.View`
  padding: 6px 12px;
  margin-top: 10px;
  margin-bottom: 11px;
  margin-left: 24px;
  margin-right: 24px;
`;

const DragHandle = styled.View`
  width: 64px;
  height: 5px;
  border-radius: 5px;
  background: #D9D9D9;
  align-self: center;
  margin-top: 16px;
  margin-bottom: 12px;
`;

const FilterScrollView = styled.ScrollView`
  flex-direction: row;
`;

const FilterButton = styled(TouchableOpacity)`
  padding: 6px 12px;
  border-radius: 41px;
  border: 0.5px solid #D9D9D9;
  margin-right: 8px;
  height: 30px;
  justify-content: center;
  align-items: center;
`;

const FilterText = styled.Text`
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: 19.32px;
  letter-spacing: -0.35px;
  color: #666;
`;
