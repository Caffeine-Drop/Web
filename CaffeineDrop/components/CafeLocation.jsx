import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import CafeLocationIcon from "../assets/home/CafeLocationIcon.svg";
import LocationHereIcon from "../assets/home/LocationHereIcon.svg";
import { responsiveWidth, responsiveHeight, responsiveFontSize } from "../utils/responsive";

const CafeLocation = ({ top, left, isSelected, onSelect }) => {
  return (
    <TouchableOpacity
      onPress={onSelect} // 선택되면 HomeScreen에서 상태 업데이트
      style={{ position: "absolute", top, left, alignItems: "center" }}
    >
      {isSelected ? (
        <LocationHereIcon width={`${responsiveWidth(35)}px`} height={`${responsiveHeight(44.375)}px`} />
      ) : (
        <>
          <CafeLocationIcon width={`${responsiveWidth(30)}px`} height={`${responsiveHeight(30)}px`} />
          <CafeLabel numberOfLines={1} ellipsizeMode="tail">언힙 커피로</CafeLabel>
        </>
      )}
    </TouchableOpacity>
  );
};

export default CafeLocation;

const CafeLabel = styled.Text`
  font-size: ${responsiveFontSize(10)}px;
  font-weight: 600;
  color: #000;
  text-align: center;
  margin-top: ${responsiveHeight(2)}px;
  overflow: hidden; /* 텍스트 넘칠 경우 숨김 */
  text-overflow: ellipsis; /* 말줄임표 처리 */
  white-space: nowrap; /* 줄바꿈 방지 */
  -webkit-text-stroke-width: 0.5;
  -webkit-text-stroke-color: #FAFAFA;
`;
