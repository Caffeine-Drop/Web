import React, { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../utils/responsive";
import styled from "styled-components/native";
import FavoriteFilter from "./filters/FavoriteFilter";
import UnmannedFilter from "./filters/UnmannedFilter";
import FranchiseFilter from "./filters/FranchiseFilter";
import ParkingFilter from "./filters/ParkingFilter";
import LargeCafeFilter from "./filters/LargeCafeFilter";
import OpenNowFilter from "./filters/OpenNowFilter";
import SpecialtyCoffeeFilter from "./filters/SpecialtyCoffeeFilter";
import DripCoffeeFilter from "./filters/DripCoffeeFilter";

const TopFilter = ({ panHandlers, onFilterSelect, selectedFilter }) => {
  return (
    <FilterContainerWrapper>
      <FilterContainer {...panHandlers}>
        <FilterScrollView horizontal showsHorizontalScrollIndicator={false}>
          <FavoriteFilter
            isSelected={selectedFilter === "favorite"}
            onSelect={() => onFilterSelect("favorite")}
            isFirst={true}
          />
          <UnmannedFilter
            isSelected={selectedFilter === "unmanned"}
            onSelect={() => onFilterSelect("unmanned")}
          />
          <FranchiseFilter
            isSelected={selectedFilter === "franchise"}
            onSelect={() => onFilterSelect("franchise")}
          />
          <ParkingFilter
            isSelected={selectedFilter === "parking"}
            onSelect={() => onFilterSelect("parking")}
          />
          <LargeCafeFilter
            isSelected={selectedFilter === "largeCafe"}
            onSelect={() => onFilterSelect("largeCafe")}
          />
          <OpenNowFilter
            isSelected={selectedFilter === "openNow"}
            onSelect={() => onFilterSelect("openNow")}
          />
          <SpecialtyCoffeeFilter
            isSelected={selectedFilter === "specialtyCoffee"}
            onSelect={() => onFilterSelect("specialtyCoffee")}
          />
          <DripCoffeeFilter
            isSelected={selectedFilter === "dripCoffee"}
            onSelect={() => onFilterSelect("dripCoffee")}
          />
        </FilterScrollView>
      </FilterContainer>
    </FilterContainerWrapper>
  );
};

export default TopFilter;

const FilterContainer = styled.View`
  padding-top: ${responsiveHeight(10)}px;
  padding-bottom: ${responsiveHeight(11)}px;
  display: flex;
  height: ${responsiveHeight(48)}px;
`;

const FilterContainerWrapper = styled.View`
  background-color: #fafafa;
  shadow-color: rgba(0, 0, 0, 0.02);
  shadow-offset: 0px 4px;
  shadow-opacity: 1;
  shadow-radius: 4px;
  z-index: 1000;
`;
const FilterScrollView = styled.ScrollView`
  flex-direction: row;
`;