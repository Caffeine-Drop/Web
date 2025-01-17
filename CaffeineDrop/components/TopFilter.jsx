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

const TopFilter = ({ panHandlers }) => {
  const [selectedFilter, setSelectedFilter] = useState(null);

  const handleFilterSelect = (filterName) => {
    setSelectedFilter(filterName === selectedFilter ? null : filterName);
  };

  return (
    <FilterContainerWrapper>
      <FilterContainer {...panHandlers}>
        <FilterScrollView horizontal showsHorizontalScrollIndicator={false}>
          <FavoriteFilter
            isSelected={selectedFilter === "favorite"}
            onSelect={() => handleFilterSelect("favorite")}
          />
          <UnmannedFilter
            isSelected={selectedFilter === "unmanned"}
            onSelect={() => handleFilterSelect("unmanned")}
          />
          <FranchiseFilter
            isSelected={selectedFilter === "franchise"}
            onSelect={() => handleFilterSelect("franchise")}
          />
          <ParkingFilter
            isSelected={selectedFilter === "parking"}
            onSelect={() => handleFilterSelect("parking")}
          />
          <LargeCafeFilter
            isSelected={selectedFilter === "largeCafe"}
            onSelect={() => handleFilterSelect("largeCafe")}
          />
          <OpenNowFilter
            isSelected={selectedFilter === "openNow"}
            onSelect={() => handleFilterSelect("openNow")}
          />
          <SpecialtyCoffeeFilter
            isSelected={selectedFilter === "specialtyCoffee"}
            onSelect={() => handleFilterSelect("specialtyCoffee")}
          />
          <DripCoffeeFilter
            isSelected={selectedFilter === "dripCoffee"}
            onSelect={() => handleFilterSelect("dripCoffee")}
          />
        </FilterScrollView>
      </FilterContainer>
    </FilterContainerWrapper>
  );
};

export default TopFilter;

const FilterContainer = styled.View`
  padding: 10px 24px 11px 24px;
  display: flex;
  height: 48px
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