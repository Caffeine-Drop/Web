import React, { useState } from "react";

import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../../utils/responsive";
import styled from "styled-components/native";

// 이미지 임포트
import DetailPageMapImg from "../../assets/DetailPage/DetailPageMapImg.png";
import SubtractIcon from "../../assets/DetailPage/SubtractIcon.svg";
import SearchRoadButton from "../../assets/DetailPage/SearchRoadButton.svg";
import NaverSearchLoad from "../../assets/DetailPage/NaverSearchLoad.svg";
import KakaoSearchLoad from "../../assets/DetailPage/KakaoSearchLoad.svg";
import DistanceLogo from "../../assets/DetailPage/DistanceLogo.svg";

export default function DetailPageMap({ distance, apiData }) {
  const [isBtnClicked, setIsBtnClicked] = useState(false);

  const handleBtnClicked = () => {
    setIsBtnClicked(true);
    console.log("btn clicked");
    setTimeout(() => setIsBtnClicked(false), 2000);
  };

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
      <MapContainer isBtnClicked={isBtnClicked}>
        <Image
          source={DetailPageMapImg}
          style={{
            position: "absolute",
            left: responsiveWidth(0),
            top: responsiveHeight(0),
            width: responsiveWidth(312),
            height: responsiveHeight(130),
            resizeMode: "cover",
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
        {!isBtnClicked && (
          <TouchableOpacity
            style={{
              position: "absolute",
              left: responsiveWidth(0),
              top: responsiveHeight(88),
            }}
            onPress={handleBtnClicked}
          >
            <SearchRoadButton
              width={responsiveWidth(83)}
              height={responsiveHeight(35)}
            />
          </TouchableOpacity>
        )}
        {isBtnClicked && (
          <>
            <View
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: responsiveWidth(312),
                height: responsiveHeight(130),
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                borderRadius: responsiveWidth(12),
              }}
            />
            <TouchableOpacity>
              <NaverSearchLoad
                style={{
                  position: "absolute",
                  left: responsiveWidth(0),
                  top: responsiveHeight(20),
                  width: responsiveWidth(145),
                  height: responsiveHeight(60),
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <KakaoSearchLoad
                style={{
                  position: "absolute",
                  left: responsiveWidth(0),
                  top: responsiveHeight(70),
                  width: responsiveWidth(145),
                  height: responsiveHeight(60),
                }}
              />
            </TouchableOpacity>
          </>
        )}
      </MapContainer>
      <CaffeeAddress>{apiData.address}</CaffeeAddress>
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
        <Distance>{distance}km</Distance>
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
  width: ${responsiveWidth(312)}px;
  height: ${responsiveHeight(130)}px;
  border-radius: ${responsiveWidth(12)}px;
`;

const CaffeeAddress = styled.Text`
  padding-top: ${responsiveHeight(16)}px;
  color: #000000;
  font-size: ${responsiveFontSize(14)}px;
  font-family: "PretendardRegular";
  line-height: ${responsiveFontSize(19.32)}px;
  letter-spacing: -0.35px;
`;

const Distance = styled.Text`
  font-size: ${responsiveFontSize(12)}px;
  font-family: "PretendardRegular";
  line-height: ${responsiveFontSize(16.56)}px;
  padding-left: ${responsiveWidth(4)}px;
  letter-spacing: -0.3px;
  color: #000000;
`;
