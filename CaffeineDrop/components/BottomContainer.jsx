import React, { useState } from "react";
import styled from "styled-components/native";
import MapIcon from "../assets/home/MapIcon.svg";
import NaverIcon from "../assets/home/NaverIcon.svg";
import KakaoIcon from "../assets/home/KakaoIcon.svg";

const BottomContainer = ({
    isDirectionsPressed,
    setIsDirectionsPressed,
    handleNaverDirections,
    handleKakaoDirections,
  }) => {
    return (
      <>
        {isDirectionsPressed && (
          <OptionsContainer>
            <OptionButton onPress={handleNaverDirections}>
              <NaverIcon width={24} height={24} />
              <OptionText>네이버 길찾기</OptionText>
            </OptionButton>
            <OptionButton onPress={handleKakaoDirections}>
              <KakaoIcon width={24} height={24} />
              <OptionText>카카오 길찾기</OptionText>
            </OptionButton>
          </OptionsContainer>
        )}
        <BottomContainerWrapper>
          <CafeInfoButton>
            <CafeInfoText>카페 정보</CafeInfoText>
          </CafeInfoButton>
          <DirectionsButton
            pressed={isDirectionsPressed}
            onPress={() => setIsDirectionsPressed((prev) => !prev)} // 토글 처리
          >
            <MapIcon width={19} height={19} />
            <DirectionsText pressed={isDirectionsPressed}>길찾기</DirectionsText>
          </DirectionsButton>
        </BottomContainerWrapper>
      </>
    );
  };
  

export default BottomContainer;

const BottomContainerWrapper = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 66px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #fafafa;
  z-index: 1000;
`;

const CafeInfoButton = styled.TouchableOpacity`
  flex: 1;
  height: 43px;
  margin: 0 8px;
  justify-content: center;
  align-items: center;
  border-radius: 43px;
  border: 1px solid #f1f1f1;
`;

const CafeInfoText = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #000000;
`;

const DirectionsButton = styled.TouchableOpacity`
  flex: 1;
  height: 43px;
  margin: 0 8px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 43px;
  ${(props) =>
    props.pressed
      ? "background-color: #F1F1F1;"
      : "background-image: linear-gradient(90deg, #3F2D1E 0%, #6A331B 100%);"}
`;

const DirectionsText = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => (props.pressed ? "#666" : "#fafafa")};
  margin-left: 8px;
`;

const OptionsContainer = styled.View`
  position: absolute;
  bottom: 76px;
  right: 16px;
  align-items: flex-end;
  z-index: 2000;
  elevation: 10;
`;

const OptionButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
  border-radius: 33px 22px 0px 33px;
  padding: 12px;
  margin-bottom: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;

const OptionText = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #000000;
  margin-left: 8px;
`;
