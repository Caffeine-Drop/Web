import React from "react";
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
  return (
    <>
      <FilterContainerWrapper>
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
      </FilterContainerWrapper>
    </>
  );
};

export default TopFilter;

const FilterContainer = styled.View`
  margin: 10px 24px 11px 24px;
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