import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import HeartIcon from "../assets/home/HeartIcon.svg";

const filters = ["좋아요", "무인", "프랜차이즈", "주차장", "대형카페", "운영 중", "스페셜티 커피", "드립커피 전문점"];

const TopFilter = ({ panHandlers }) => {
  return (
    <>
      <DragHandleWrapper>
        <DragHandle />
      </DragHandleWrapper>

      <FilterContainer {...panHandlers}>
        <FilterScrollView horizontal showsHorizontalScrollIndicator={false}>
          {filters.map((filter, index) => (
            <FilterButton key={index}>
              <FilterContent>
                {filter === "좋아요" && <HeartIcon style={{ marginRight: 5 }} />}
                <FilterText>{filter}</FilterText>
              </FilterContent>
            </FilterButton>
          ))}
        </FilterScrollView>
      </FilterContainer>
    </>
  );
};

export default TopFilter;

// 스타일 정의
const DragHandleWrapper = styled.View`
  align-items: center;
  margin-bottom: 12px;
  margin-top: 16px;
`;

const DragHandle = styled.View`
  width: 64px;
  height: 5px;
  border-radius: 5px;
  background: #D9D9D9;
`;

const FilterContainer = styled.View`
  margin: 10px 24px 11px 24px;
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

const FilterContent = styled.View`
  flex-direction: row;
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
