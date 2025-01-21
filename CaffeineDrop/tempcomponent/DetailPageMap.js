import React from "react";

import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../utils/responsive";
import styled from "styled-components/native";

// 이미지 임포트
import MapImg from "../assets/DetailPage/MapImg.svg";
import SubtractIcon from "../assets/DetailPage/SubtractIcon.svg";
import SearchRoadButton from "../assets/DetailPage/SearchRoadButton.svg";
import DistanceLogo from "../assets/DetailPage/DistanceLogo.svg";

export default function DetailPageMap() {
  return (
    <Container>
      <Text
        style={{
          fontSize: responsiveFontSize(20),
          fontWeight: 600,
          lineHeight: responsiveFontSize(27.6),
          paddingBottom: responsiveHeight(20),
        }}
      >
        카페 이용 정보
      </Text>
      <MapContainer>
        <MapImg
          style={{
            position: "absolute",
            left: responsiveWidth(0),
            top: responsiveHeight(0),
          }}
        />
        <SubtractIcon
          style={{
            position: "absolute",
            left: responsiveWidth(139),
            top: responsiveHeight(43),
          }}
        />
        <TouchableOpacity
          style={{
            position: "absolute",
            left: responsiveWidth(0),
            top: responsiveHeight(83),
          }}
        >
          <SearchRoadButton />
        </TouchableOpacity>
      </MapContainer>
      <CaffeeAddress>인천 미추홀구 인하로67번길 6 2층</CaffeeAddress>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingTop: responsiveHeight(8),
        }}
      >
        <DistanceLogo style={{ paddingRight: responsiveWidth(4) }} />
        <Distance>600m</Distance>
      </View>
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  padding: ${responsiveHeight(40)}px 24px 0 24px;
  background-color: #fafafa;
`;

const MapContainer = styled.View`
  position: relative;
  width: ${responsiveWidth(312)}px;
  height: ${responsiveHeight(130)}px;
`;

const MapImage = styled.Image`
  position: relative;
  width: ${responsiveWidth(312)}px;
  height: ${responsiveHeight(130)}px;
  border-radius: ${responsiveWidth(15)}px;
`;

const SubtractImage = styled.Image`
  position: absolute;
  width: ${responsiveWidth(35)}px;
  height: ${responsiveHeight(44)}px;
  left: ${responsiveWidth(139)}px;
  top: ${responsiveHeight(43)}px;
`;

const SearchRoadImage = styled.Image`
  position: absolute;
  width: ${responsiveWidth(83)}px;
  height: ${responsiveHeight(35)}px;
  left: ${responsiveWidth(0)}px;
  top: ${responsiveHeight(118)}px;
`;

const CaffeeAddress = styled.Text`
  padding-top: ${responsiveHeight(16)}px;
  color: #000000;
  font-size: ${responsiveFontSize(14)}px;
  font-weight: 400;
  line-height: ${responsiveFontSize(19.32)}px;
  letter-spacing: -0.35px;
`;

// const DistanceLogo = styled.Image`
//   width: ${responsiveWidth(26)}px;
//   height: ${responsiveHeight(18)}px;
// `;

const Distance = styled.Text`
  font-size: ${responsiveFontSize(12)}px;
  font-weight: 400;
  line-height: ${responsiveFontSize(16.56)}px;
  letter-spacing: -0.3px;
  color: #000000;
`;
