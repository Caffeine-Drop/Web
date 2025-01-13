import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import FavoriteFilter from "./filters/FavoriteFilter";
import UnmannedFilter from "./filters/UnmannedFilter";
import FranchiseFilter from "./filters/FranchiseFilter";
import ParkingFilter from "./filters/ParkingFilter";
import LargeCafeFilter from "./filters/LargeCafeFilter";
import OpenNowFilter from "./filters/OpenNowFilter";
import SpecialtyCoffeeFilter from "./filters/SpecialtyCoffeeFilter";
import DripCoffeeFilter from "./filters/DripCoffeeFilter";

const TopFilter = ({ panHandlers }) => {
  return (
    <>
      <DragHandleWrapper {...panHandlers}>
        <DragHandle />
      </DragHandleWrapper>

      <FilterContainer {...panHandlers}>
        <FilterScrollView horizontal showsHorizontalScrollIndicator={false}>
          <FavoriteFilter />
          <UnmannedFilter />
          <FranchiseFilter />
          <ParkingFilter />
          <LargeCafeFilter />
          <OpenNowFilter />
          <SpecialtyCoffeeFilter />
          <DripCoffeeFilter />
        </FilterScrollView>
      </FilterContainer>
    </>
  );
};

export default TopFilter;

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