import React from "react";
import { TouchableOpacity } from "react-native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../../utils/responsive";
import styled from "styled-components/native";
import { useFonts } from "../../styles";

const OpenNowFilter = ({ isSelected, onSelect }) => {
  const fontsLoaded = useFonts();

  if (!fontsLoaded) {
    return null; // 폰트 로드될 때까지 렌더링 안 함
  }

  return (
    <FilterButton onPress={onSelect} selected={isSelected}>
      <FilterText selected={isSelected}>운영 중</FilterText>
    </FilterButton>
  );
};

export default OpenNowFilter;

const FilterButton = styled(TouchableOpacity)`
  padding: ${responsiveHeight(4)}px ${responsiveWidth(14)}px;
  border-radius: 41px;
  border: 1px solid #ebebeb;
  margin-right: ${responsiveWidth(6)}px;
  height: ${responsiveHeight(27)}px;
  justify-content: center;
  align-items: center;
  background: ${({ selected }) =>
    selected ? "rgba(117, 101, 85, 0.65)" : "transparent"};
`;

const FilterText = styled.Text`
  font-family: PretendardRegular;
  font-size: ${responsiveFontSize(14)}px;
  font-weight: ${({ selected }) => (selected ? "600" : "500")};
  color: ${({ selected }) => (selected ? "#FFF" : "#000")};
  font-style: normal;
  line-height: 138%;
  letter-spacing: -0.35;
`;
