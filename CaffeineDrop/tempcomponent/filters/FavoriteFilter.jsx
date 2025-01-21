import React from "react";
import { TouchableOpacity } from "react-native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../../utils/responsive";
import styled from "styled-components/native";
import HeartIcon from "../../assets/home/HeartIcon.jsx";

const FavoriteFilter = ({ isSelected, onSelect, isFirst }) => {
  return (
    <FilterButton onPress={onSelect} selected={isSelected} isFirst={isFirst}>
      <FilterContent>
        <HeartIcon color="#E91111" size={15} style={{ marginRight: 5 }} />
        <FilterText selected={isSelected}>좋아요</FilterText>
      </FilterContent>
    </FilterButton>
  );
};

export default FavoriteFilter;

const FilterButton = styled(TouchableOpacity)`
  padding: ${responsiveHeight(4)}px ${responsiveWidth(14)}px;
  border-radius: 41px;
  border: 1px solid #EBEBEB;
  margin-right: ${responsiveWidth(6)}px;
  margin-left: ${({ isFirst }) => (isFirst ? `${responsiveWidth(24)}px` : 0)};
  height: ${responsiveHeight(27)}px;
  justify-content: center;
  align-items: center;
  background: ${({ selected }) =>
    selected ? "rgba(117, 101, 85, 0.65)" : "transparent"};
`;

const FilterContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

const FilterText = styled.Text`
  font-size: ${responsiveFontSize(14)}px;
  font-weight: ${({ selected }) => (selected ? "600" : "500")};
  color: ${({ selected }) => (selected ? "#FFF" : "#000")};
  font-style: normal;
  line-height: 19.32px;
  letter-spacing: -0.35px;
`;
