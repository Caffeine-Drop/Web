import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import HeartIcon from "../../assets/home/HeartIcon.svg";

const FavoriteFilter = () => {
  const [selected, setSelected] = useState(false);

  return (
    <FilterButton
      onPress={() => setSelected(!selected)}
      selected={selected}
    >
      <FilterContent>
        <HeartIcon style={{ marginRight: 5 }} />
        <FilterText selected={selected}>좋아요</FilterText>
      </FilterContent>
    </FilterButton>
  );
};

export default FavoriteFilter;

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
