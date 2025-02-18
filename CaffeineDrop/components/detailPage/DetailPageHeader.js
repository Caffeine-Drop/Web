import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../../utils/responsive";
import styled from "styled-components/native";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

// 이미지 assets
import DetailMainImg from "../../assets/DetailPage/DetailPageMainImg.png";
import DetailPageGradient from "../../assets/DetailPage/DetailPageGradient.png";
import SpecialtyCoffeeLogo from "../../assets/DetailPage/SpecialtyCoffeeLogo.svg";
import DistanceLogo from "../../assets/DetailPage/DistanceLogo.svg";
import CaffeeLikeDefault from "../../assets/DetailPage/CaffeeLikeDefault.svg";
import CaffeeLike from "../../assets/DetailPage/CaffeeLike.svg";
import HeaderStarIcon from "../../assets/DetailPage/HeaderStarIcon.svg";
import HeaderStarHalfIcon from "../../assets/DetailPage/HeaderStarHalfIcon.svg";
import HeaderStarBlankIcon from "../../assets/DetailPage/HeaderStarBlankIcon.svg";

// 컴포넌트
import BackButton from "../../components/BackButton";

export default function DetailPageHeader({ navigation, apiData }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [rating, setRating] = useState(0);
  const [isSpecialty, setIsSpecialty] = useState(false);
  const { accessToken, LoggedPlatform } = useContext(AuthContext);
  useEffect(() => {
    Promise.all([
      axios.get("http://13.124.11.195:3000/reviews/1/ratings"),
      axios.get("http://13.124.11.195:3000/cafes/1/specialty"),
    ])
      .then((responses) => {
        console.log("카페 평균 별점: ", responses[0].data.data.averageRating);
        setRating(responses[0].data.data.averageRating);
        console.log("스페셜티 여부: ", responses[1].data.success);
        setIsSpecialty(responses[1].data.success);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleCafeLike = async () => {
    const response = await axios.post(
      "http://13.124.11.195:3000/like/1",
      {
        cafe_id: 1,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Provider: LoggedPlatform,
        },
      }
    );
    console.log(response.data.like.message);
    setIsLiked(!isLiked);
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return (
    <View style={{ flex: 1 }}>
      <Container>
        <Image
          source={DetailMainImg}
          style={{
            width: responsiveWidth(360),
            height: responsiveHeight(400),
            zIndex: 998,
          }}
        />
        <Image
          source={DetailPageGradient}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: responsiveWidth(360),
            height: responsiveHeight(400),
            zIndex: 999,
          }}
        />
        <Header>
          <BackButton
            style={{
              position: "absolute",
              width: responsiveWidth(24),
              height: responsiveWidth(24),
              zIndex: 1002,
            }}
            onPress={() => navigation.goBack()}
          />
          <ViewDetailText>카페 상세보기</ViewDetailText>
        </Header>
        <View
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            left: responsiveWidth(24),
            top: responsiveHeight(222),
            zIndex: 1000,
          }}
        >
          {isSpecialty ? (
            <SpecialtyCoffeeLogo
              style={{
                width: responsiveWidth(88),
                height: responsiveHeight(22),
                preserveAspectRatio: "none",
              }}
            />
          ) : (
            <View
              style={{
                width: responsiveWidth(88),
                height: responsiveHeight(22),
              }}
            />
          )}
          <TitleText>{apiData.name}</TitleText>
          <AddressText>{apiData.address}</AddressText>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: responsiveWidth(4),
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
            <DistanceText>1.2km</DistanceText>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: responsiveWidth(312),
              alignItems: "center",
              justifyContent: "space-between",
              gap: responsiveWidth(12),
            }}
          >
            <ReviewRateContainer>
              <ReviewRateText>{rating.toFixed(1)}</ReviewRateText>
              <View style={{ display: "flex", flexDirection: "row" }}>
                {[...Array(Math.floor(rating))].map((_, i) => (
                  <HeaderStarIcon
                    key={i}
                    style={{
                      width: responsiveWidth(15),
                      height: responsiveWidth(15),
                    }}
                  />
                ))}
                {rating % 1 > 0.5 ? (
                  <HeaderStarHalfIcon
                    style={{
                      width: responsiveWidth(15),
                      height: responsiveWidth(15),
                    }}
                  />
                ) : (
                  <HeaderStarBlankIcon
                    style={{
                      width: responsiveWidth(15),
                      height: responsiveWidth(15),
                    }}
                  />
                )}
                {[...Array(5 - Math.ceil(rating))].map((_, i) => (
                  <HeaderStarBlankIcon
                    key={i}
                    style={{
                      width: responsiveWidth(15),
                      height: responsiveWidth(15),
                    }}
                  />
                ))}
              </View>
            </ReviewRateContainer>
            <TouchableOpacity onPress={handleCafeLike}>
              {isLiked ? (
                <CaffeeLike
                  style={{
                    width: responsiveWidth(35),
                    height: responsiveWidth(35),
                  }}
                />
              ) : (
                <CaffeeLikeDefault
                  style={{
                    width: responsiveWidth(35),
                    height: responsiveWidth(35),
                  }}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    </View>
  );
}

const Container = styled.View`
  width: 100%;
  position: relative;
`;

const Header = styled.View`
  position: absolute;
  top: ${responsiveHeight(50)}px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 0;
  padding-top: ${responsiveHeight(20)}px;
  z-index: 1006;
`;

const ViewDetailText = styled.Text`
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: ${responsiveFontSize(18)}px;
  font-family: "PretendardSemiBold";
  color: #fafafa;
  z-index: 1000;
`;

const TitleText = styled.Text`
  font-family: "PretendardSemiBold";
  font-size: ${responsiveFontSize(28)}px;
  line-height: ${responsiveHeight(38.64)}px;
  letter-spacing: -0.7px;
  color: #fafafa;
  padding-top: ${responsiveHeight(4)}px;
`;

const AddressText = styled.Text`
  font-family: "PretendardRegular";
  font-size: ${responsiveFontSize(14)}px;
  line-height: ${responsiveHeight(19.32)}px;
  padding-top: ${responsiveHeight(12)}px;
  color: #fafafa;
`;

const DistanceText = styled.Text`
  font-size: ${responsiveFontSize(12)}px;
  font-family: "PretendardRegular";
  line-height: ${responsiveHeight(16.56)}px;
  color: #fafafa;
`;

const ReviewRateContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${responsiveWidth(4)}px;
  padding-top: ${responsiveHeight(12)}px;
`;

const ReviewRateText = styled.Text`
  font-size: ${responsiveFontSize(14)}px;
  font-family: "PretendardSemiBold";
  line-height: ${responsiveHeight(19.32)}px;
  color: #fafafa;
`;
