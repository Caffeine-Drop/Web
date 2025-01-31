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
          fontFamily: "PretendardSemiBold",
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
            width: "100%",
            height: responsiveHeight(130),
          }}
        />
        <SubtractIcon
          style={{
            position: "absolute",
            width: responsiveWidth(35),
            height: responsiveHeight(44),
            left: "50%",
            top: "50%",
            transform: [
              { translateX: -responsiveWidth(35) / 2 },
              { translateY: -responsiveHeight(46) / 2 },
            ],
          }}
        />
        <TouchableOpacity
          style={{
            position: "absolute",
            left: responsiveWidth(0),
            top: responsiveHeight(83),
          }}
        >
          <SearchRoadButton
            width={responsiveWidth(83)}
            height={responsiveHeight(35)}
          />
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
        <DistanceLogo
          style={{
            width: responsiveWidth(26),
            height: responsiveHeight(18),
            preserveAspectRatio: "none",
          }}
        />
        <Distance>600m</Distance>
      </View>
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  padding-top: ${responsiveHeight(40)};
  padding-left: ${responsiveWidth(24)};
  padding-right: ${responsiveWidth(24)};
  background-color: #fafafa;
`;

const MapContainer = styled.View`
  position: relative;
  width: 100%;
  height: ${responsiveHeight(130)}px;
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
  font-family: "PretendardRegular";
  line-height: ${responsiveFontSize(19.32)}px;
  letter-spacing: -0.35px;
`;

// const DistanceLogo = styled.Image`
//   width: ${responsiveWidth(26)}px;
//   height: ${responsiveHeight(18)}px;
// `;

const Distance = styled.Text`
  font-size: ${responsiveFontSize(12)}px;
  font-family: "PretendardRegular";
  line-height: ${responsiveFontSize(16.56)}px;
  padding-left: ${responsiveWidth(4)}px;
  letter-spacing: -0.3px;
  color: #000000;
`;
