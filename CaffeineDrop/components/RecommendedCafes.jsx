import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../utils/responsive";
import styled from "styled-components/native";
import RecommendedCafesSkeleton from "./RecommendedCafesSkeleton";
import ExclamationIcon from "../assets/search/ExclamationIcon.svg";
import StarIcon from "../assets/search/StarIcon.svg";
import { useFonts } from "../styles";

const RecommendedCafes = ({ cafes, isLoading }) => {
  const fontsLoaded = useFonts();
  const navigation = useNavigation();

  const handlePress = (cafe) => {
    navigation.navigate("DetailPage", { cafe }); // DetailPage로 이동
  };

  if (!fontsLoaded || isLoading) {
    return <RecommendedCafesSkeleton />;
  }

  return (
    <Container>
      <Header>
        <Title>추천 핫한 카페 모음</Title>
        <AdText>광고</AdText>
        <ExclamationIconWrapper>
          <ExclamationIcon
            width={`${responsiveWidth(14)}px`}
            height={`${responsiveHeight(14)}px`}
          />
        </ExclamationIconWrapper>
      </Header>
      <FlatList
        horizontal
        data={cafes}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => handlePress(item)}>
            <CafeCard
              style={{
                marginLeft:
                  index === 0 ? responsiveWidth(24) : responsiveWidth(6),
              }}
            >
              <CafeText numberOfLines={1} ellipsizeMode="tail">
                {item.name}
              </CafeText>
              <DistanceWrapper>
                <DistanceLabel>거리</DistanceLabel>
                <DistanceValue>{item.distance}</DistanceValue>
              </DistanceWrapper>
              <Rating>
                <StarIcon
                  width={`${responsiveWidth(18)}px`}
                  height={`${responsiveHeight(18)}px`}
                />
                <RatingText>{parseFloat(item.rating).toFixed(1)}</RatingText>
              </Rating>
            </CafeCard>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
};

export default RecommendedCafes;

const Container = styled.View`
  margin-top: ${responsiveHeight(24)}px;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: ${responsiveWidth(24)}px;
  margin-bottom: ${responsiveHeight(20)}px;
`;

const Title = styled.Text`
  font-family: PretendardSemiBold;
  font-size: ${responsiveFontSize(20)}px;
  font-weight: 600;
  line-height: ${responsiveHeight(27.6)}px;
  letter-spacing: -0.5;
  margin-right: ${responsiveWidth(12)}px;
`;

const AdText = styled.Text`
  font-family: PretendardMedium;
  font-size: ${responsiveFontSize(12)}px;
  font-weight: 500;
  line-height: ${responsiveHeight(16.56)}px;
  letter-spacing: -0.3;
  color: #999;
`;

const ExclamationIconWrapper = styled.View`
  margin-left: 0;
`;

const CafeCard = styled.View`
  width: ${responsiveWidth(120)}px;
  height: ${responsiveHeight(160)}px;
  background-color: #888;
  border-radius: 12px;
  border: 1px solid #f1f1f1;
  padding-horizontal: ${responsiveWidth(12)}px;
  padding-bottom: ${responsiveHeight(16)}px;
  justify-content: flex-end;
  overflow: hidden;
`;

const CafeText = styled.Text`
  font-family: PretendardSemiBold;
  font-size: ${responsiveFontSize(14)}px;
  font-weight: 600;
  line-height: ${responsiveHeight(19.32)}px;
  letter-spacing: -0.35;
  color: #fafafa;
`;

const DistanceWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${responsiveHeight(8)}px;
`;

const DistanceLabel = styled.Text`
  font-family: PretendardRegular;
  font-size: ${responsiveFontSize(10)}px;
  font-weight: 400;
  line-height: ${responsiveHeight(13.8)}px;
  letter-spacing: -0.25;
  background-color: #f1f1f1;
  border-radius: 8px;
  display: flex;
  padding: ${responsiveHeight(2)}px ${responsiveWidth(4)}px;
  justify-content: center;
  align-items: center;
  margin-right: ${responsiveWidth(4)}px;
`;

const DistanceValue = styled.Text`
  font-family: PretendardRegular;
  font-size: ${responsiveFontSize(12)}px;
  font-weight: 400;
  line-height: ${responsiveHeight(16.56)}px;
  letter-spacing: -0.3;
  color: #fafafa;
`;

const Rating = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${responsiveHeight(4)}px;
`;

const RatingText = styled.Text`
  font-family: PretendardRegular;
  font-size: ${responsiveFontSize(12)}px;
  font-weight: 400;
  line-height: ${responsiveHeight(16.56)}px;
  letter-spacing: -0.3;
  color: #fafafa;
  margin-left: ${responsiveWidth(4)}px;
`;
