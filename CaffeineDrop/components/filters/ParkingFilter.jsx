import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const ParkingFilter = ({ isSelected, onSelect }) => {
  return (
    <FilterButton onPress={onSelect} selected={isSelected}>
      <FilterText selected={isSelected}>주차장</FilterText>
    </FilterButton>
  );
};

export default ParkingFilter;

const FilterButton = styled(TouchableOpacity)`
  padding: 4px 14px;
  border-radius: 41px;
  border: 0.5px solid #D9D9D9;
  margin-right: 6px;
  height: 27px;
  justify-content: center;
  align-items: center;
  background: ${({ selected }) =>
    selected ? "rgba(117, 101, 85, 0.65)" : "transparent"};
`;

const FilterText = styled.Text`
  font-size: 14px;
  font-weight: ${({ selected }) => (selected ? "600" : "500")};
  font-style: normal;
  line-height: 19.32px;
  letter-spacing: -0.35px;
  color: ${({ selected }) => (selected ? "#FFF" : "#666")};
`;
