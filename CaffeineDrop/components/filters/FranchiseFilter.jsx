import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const FranchiseFilter = () => {
  const [selected, setSelected] = useState(false);

  return (
    <FilterButton onPress={() => setSelected(!selected)} selected={selected}>
      <FilterText selected={selected}>프랜차이즈</FilterText>
    </FilterButton>
  );
};

export default FranchiseFilter;

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
  color: #666;
`;
