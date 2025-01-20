import React from "react";
import { TouchableOpacity } from "react-native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../../utils/responsive";
import styled from "styled-components/native";

const UnmannedFilter = ({ isSelected, onSelect }) => {
  return (
    <FilterButton onPress={onSelect} selected={isSelected}>
      <FilterText selected={isSelected}>무인</FilterText>
    </FilterButton>
  );
};

export default UnmannedFilter;

const FilterButton = styled(TouchableOpacity)`
  padding: ${responsiveHeight(4)}px ${responsiveWidth(14)}px;
  border-radius: 41px;
  border: 1px solid #EBEBEB;
  margin-right: ${responsiveWidth(6)}px;
  height: ${responsiveHeight(27)}px;
  justify-content: center;
  align-items: center;
  background: ${({ selected }) =>
    selected ? "rgba(117, 101, 85, 0.65)" : "transparent"};
`;

const FilterText = styled.Text`
  font-size: ${responsiveFontSize(14)}px;
  font-weight: ${({ selected }) => (selected ? "600" : "500")};
  color: ${({ selected }) => (selected ? "#FFF" : "#000")};
  font-style: normal;
  line-height: 19.32px;
  letter-spacing: -0.35px;
`;
