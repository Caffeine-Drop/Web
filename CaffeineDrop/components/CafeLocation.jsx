import React from "react";
import { View } from "react-native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../utils/responsive";
import styled from "styled-components/native";
import CafeLocationIcon from "../assets/home/CafeLocationIcon.svg";
import LocationHereIcon from "../assets/home/LocationHereIcon.svg";

const CafeLocation = ({ isSelected, cafeName }) => {
  return (
    <View style={{ alignItems: "center" }}>
      {isSelected ? (
        <LocationHereIcon
          width={responsiveWidth(35)}
          height={responsiveHeight(44.375)}
        />
      ) : (
        <>
          <CafeLocationIcon
            width={responsiveWidth(30)}
            height={responsiveHeight(30)}
          />
          <CafeLabel numberOfLines={1} ellipsizeMode="tail">
            {cafeName}
          </CafeLabel>
        </>
      )}
    </View>
  );
};

export default CafeLocation;

const CafeLabel = styled.Text`
  font-family: PretendardSemiBold;
  font-size: ${responsiveFontSize(10)}px;
  font-weight: 600;
  line-height: ${responsiveHeight(13.8)}px;
  letter-spacing: -0.25px;
  color: #000;
  text-align: center;
  margin-top: ${responsiveHeight(2)}px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: #fafafa;
`;
