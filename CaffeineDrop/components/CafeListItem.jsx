import React, { useState, useEffect, useContext } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import axios from "axios";
import * as Location from "expo-location";
import { AuthContext } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../utils/responsive";
import styled from "styled-components/native";
import CafeListItemSkeleton from "./CafeListItemSkeleton";
import HeartIcon from "../assets/home/HeartIcon.jsx";
import StarIcon from "../assets/home/StarIcon.svg";
import { useFonts } from "../styles";

import useFetchSpecialty from "../hooks/useFetchSpecialty";

const CafeListItem = ({ cafe, isSelected, isLoading }) => {
  const fontsLoaded = useFonts();
  const navigation = useNavigation(); // navigation 객체 가져오기

  const { likedCafes } = useContext(AuthContext);

  const [apiData, setApiData] = useState(null);
  const [cafeDistance, setCafeDistance] = useState(null);
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [averageRating, setAverageRating] = useState(null);
  const [reviewCount, setReviewCount] = useState(null);
  const [loadingRating, setLoadingRating] = useState(true);
  const [loadingReviews, setLoadingReviews] = useState(true);

  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (likedCafes.includes(cafe.cafe_id)) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [likedCafes, cafe.cafe_id]);

  const { isSpecialty, isLoading: isSpecialtyLoading } = useFetchSpecialty(
    cafe.cafe_id
  );
  console.log("🔥 isSpecialty in CafeListItem:", isSpecialty); // ✅ 값 확인

  const handlePress = () => {
    console.log("Navigating to DetailPage with cafeId:", cafe.cafe_id);
    navigation.navigate("DetailPage", { cafeId: cafe.cafe_id }); // DetailPage로 이동
  };

  // 대표 이미지 (메인 사진)
  const thumbnail =
    cafe.images?.find((img) => img.is_thumbnail) || cafe.images?.[0];
  // 리뷰 사진 (menu_items에서 가져오기)
  const reviewImages =
    cafe.menu_items?.map((menu) => menu.image_url).slice(0, 3) || [];
  // 현재 카페가 영업 중인지 확인 (null이면 영업 시간 정보 없음)
  const isClosed = cafe.operating_hour === null;
  // 배지 표시 여부
  const isBothBadges = cafe.isFavorite && isSpecialty;

  // ✅ 1. API 호출하여 데이터 가져오기 (DetailPage와 동일한 방식)
  useEffect(() => {
    const fetchData = async () => {
      setIsLoadingData(true);
      try {
        const response = await axios.get(
          `http://13.124.11.195:3000/cafes/${cafe.cafe_id}`
        );
        setApiData(response.data);
        console.log("📌 Cafe API Data:", response.data);
      } catch (error) {
        console.log("🚨 API 요청 실패:", error);
      } finally {
        setIsLoadingData(false);
      }
    };

    if (cafe.cafe_id) fetchData();
  }, [cafe.cafe_id]);

  // ✅ 2. 현재 위치 가져오고 거리 계산 (DetailPage와 동일한 방식)
  useEffect(() => {
    if (!apiData) return; // ✅ apiData가 로드되지 않으면 실행 안 함

    const fetchDistance = async () => {
      try {
        // 위치 권한 요청
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          console.log("위치 권한이 거부되었습니다.");
          return;
        }

        // 현재 위치 가져오기
        let currentLocation = await Location.getCurrentPositionAsync({});
        const currentCoords = {
          latitude: currentLocation.coords.latitude,
          longitude: currentLocation.coords.longitude,
        };

        // 카페 위치 정보 확인
        if (!apiData.latitude || !apiData.longitude) {
          console.log("📌 카페의 위도/경도 정보가 없습니다.");
          return;
        }

        const cafeCoords = {
          latitude: apiData.latitude,
          longitude: apiData.longitude,
        };

        // 거리 계산
        const distance = calculateDistance(currentCoords, cafeCoords);
        setCafeDistance(distance.toFixed(1)); // 소수점 한 자리까지 반올림
        console.log(`🔥 카페까지의 거리: ${distance.toFixed(1)} km`);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDistance();
  }, [apiData]); // ✅ apiData가 변경될 때 실행

  // ✅ 거리 계산 함수 (Haversine 공식 사용)
  const calculateDistance = (coord1, coord2) => {
    const toRad = (value) => (value * Math.PI) / 180;
    const R = 6371; // 지구 반지름 (km)
    const dLat = toRad(coord2.latitude - coord1.latitude);
    const dLon = toRad(coord2.longitude - coord1.longitude);
    const lat1 = toRad(coord1.latitude);
    const lat2 = toRad(coord2.latitude);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // 거리 (km)
  };

  const { accessToken, LoggedPlatform } = useContext(AuthContext);
  console.log("🔥 Token:", accessToken);
  console.log("🔥 Provider:", LoggedPlatform);

  useEffect(() => {
    const fetchCafeData = async () => {
      if (!accessToken || !LoggedPlatform) {
        console.error("🚨 인증 정보가 없습니다. API 요청을 취소합니다.");
        return;
      }

      try {
        console.log("📡 Sending request with headers:", {
          Authorization: `Bearer ${accessToken}`,
          Provider: LoggedPlatform,
        });

        // ✅ 1️⃣ 리뷰 개수 가져오기
        const fetchReviews = axios.get(
          `http://13.124.11.195:3000/reviews/${cafe.cafe_id}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              Provider: LoggedPlatform,
              "Content-Type": "application/json",
            },
          }
        );

        // ✅ 2️⃣ 별점 가져오기
        const fetchRatings = axios.get(
          `http://13.124.11.195:3000/reviews/${cafe.cafe_id}/ratings`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              Provider: LoggedPlatform,
              "Content-Type": "application/json",
            },
          }
        );

        // ✅ 3️⃣ **Specialty 여부 가져오기 (직접 API 요청)**
        const fetchSpecialty = axios.get(
          `http://13.124.11.195:3000/cafes/${cafe.cafe_id}/specialty`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              Provider: LoggedPlatform,
              "Content-Type": "application/json",
            },
          }
        );

        // ✅ 모든 API를 순차적으로 실행하고 결과를 받아옴
        const [reviewsResponse, ratingResponse, specialtyResponse] =
          await Promise.all([fetchReviews, fetchRatings, fetchSpecialty]);

        // ✅ 상태 업데이트
        setReviewCount(
          reviewsResponse.data.result === "Success" &&
            reviewsResponse.data.data &&
            reviewsResponse.data.data.reviews
            ? reviewsResponse.data.data.reviews.length
            : 0
        );

        setAverageRating(ratingResponse.data.data.averageRating || "N/A");

        // ✅ **스페셜티 정보 업데이트**
        const specialtyData = specialtyResponse.data.isSpecialty || false;
        setIsSpecialty(specialtyData);

        // ✅ **배지 업데이트**
        setIsBothBadges(cafe.isFavorite && specialtyData);
      } catch (error) {
        console.error(`🚨 API 요청 실패 (cafe_id: ${cafe.cafe_id}):`, error);
      } finally {
        setLoadingRating(false);
        setLoadingReviews(false);
      }
    };

    fetchCafeData();
  }, [cafe.cafe_id, accessToken, LoggedPlatform]);

  // ✅ 좋아요 정보 가져오기
  useEffect(() => {
    const fetchLikedCafes = async () => {
      if (!accessToken || !LoggedPlatform) {
        console.error("🚨 인증 정보가 없습니다. API 요청을 취소합니다.");
        return;
      }

      try {
        const response = await axios.get("http://13.124.11.195:3000/like", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            Provider: LoggedPlatform,
          },
        });

        if (response.data && response.data.cafeList) {
          const isCafeLiked = response.data.cafeList.some(
            (likedCafe) => likedCafe.cafe_id === cafe.cafe_id
          );
          setIsLiked(isCafeLiked);
        }
      } catch (error) {
        console.error("🚨 좋아요 API 요청 실패:", error);
      }
    };

    fetchLikedCafes();
  }, [cafe.cafe_id, accessToken, LoggedPlatform]);

  // useEffect(() => {
  //   const fetchCafeData = async () => {
  //     if (!accessToken || !LoggedPlatform) {
  //       console.error("🚨 인증 정보가 없습니다. API 요청을 취소합니다.");
  //       return;
  //     }
  //     try {
  //       console.log("📡 Sending request with headers:", {
  //         Authorization: `Bearer ${accessToken}`,
  //         Provider: LoggedPlatform,
  //       });

  //       // ⭐ 별점 가져오기
  //       const ratingResponse = await axios.get(
  //         `http://13.124.11.195:3000/reviews/${cafe.cafe_id}/ratings`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${accessToken}`,
  //             Provider: LoggedPlatform,
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );
  //       setAverageRating(ratingResponse.data.data.averageRating);

  //       // ⭐ 리뷰 개수 가져오기 (안전한 데이터 접근)
  //       const reviewsResponse = await axios.get(
  //         `http://13.124.11.195:3000/reviews/${cafe.cafe_id}`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${accessToken}`,
  //             Provider: LoggedPlatform,
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );

  //       console.log("✅ 리뷰 API 응답:", reviewsResponse.data);

  //       // 📌 응답 데이터에서 리뷰 개수 가져오기
  //       if (
  //         reviewsResponse.data.result === "Success" &&
  //         reviewsResponse.data.data &&
  //         reviewsResponse.data.data.reviews
  //       ) {
  //         setReviewCount(reviewsResponse.data.data.reviews.length);
  //       } else {
  //         setReviewCount(0); // ✅ 리뷰가 없으면 0으로 설정
  //       }
  //     } catch (error) {
  //       console.error(`🚨 API 요청 실패 (cafe_id: ${cafe.cafe_id}):`, error);
  //       if (error.response) {
  //         console.error("📌 Response Data:", error.response.data);
  //         console.error("📌 Response Status:", error.response.status);
  //       }

  //       setReviewCount(0); // ✅ 서버 에러 발생 시에도 안전하게 0으로 설정
  //     } finally {
  //       setLoadingRating(false);
  //       setLoadingReviews(false);
  //     }
  //   };

  //   fetchCafeData();
  // }, [cafe.cafe_id, accessToken, LoggedPlatform]);

  if (
    !fontsLoaded ||
    isLoading ||
    isSpecialtyLoading ||
    loadingRating ||
    loadingReviews
  ) {
    return <CafeListItemSkeleton />;
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <Container
        style={{
          backgroundColor: isSelected ? "#F1F1F1" : "#FAFAFA", // 동적 배경색 적용
        }}
      >
        <ListContainer>
          <ImageContainer>
            {/* 배지 컨테이너 (ScrollView 외부) */}
            {(isLiked !== undefined || isSpecialty !== undefined) && (
              <BadgeContainer>
                {/* 좋아요 배지 */}
                {isLiked && (
                  <Badge
                    style={{
                      backgroundColor: "#E91111",
                      borderTopRightRadius: isBothBadges ? 0 : 4, // ✅ 스페셜티가 있으면 오른쪽 위 모서리 없앰
                      borderBottomRightRadius: isBothBadges ? 0 : 4, // ✅ 스페셜티가 있으면 오른쪽 아래 모서리 없앰
                    }}
                  >
                    <HeartIcon color="#FFFFFF" size={responsiveWidth(10)} />
                    <BadgeText>좋아요</BadgeText>
                  </Badge>
                )}

                {/* Specialty Coffee 배지 */}
                {!isSpecialty && (
                  <Badge
                    style={{
                      backgroundColor: "#321900",
                      borderTopLeftRadius: isBothBadges ? 0 : 4, // ✅ 좋아요가 있으면 왼쪽 위 모서리 없앰
                      borderBottomLeftRadius: isBothBadges ? 0 : 4, // ✅ 좋아요가 있으면 왼쪽 아래 모서리 없앰
                    }}
                  >
                    <BadgeText>Specialty Coffee</BadgeText>
                  </Badge>
                )}
              </BadgeContainer>
            )}

            {/* ✅ 이미지 스크롤 뷰 */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingLeft: responsiveWidth(24), // 첫 번째 이미지 왼쪽 여백
                paddingRight: responsiveWidth(16), // 마지막 이미지 오른쪽 여백
              }}
            >
              {/* ✅ 첫 번째 이미지 (대표 이미지) */}
              <ThumbnailWrapper>
                {thumbnail ? (
                  <CafeImage source={{ uri: "https://ifh.cc/g/1mfJ2p.jpg" }} />
                ) : (
                  <CafeImagePlaceholder />
                )}
                {/* ✅ 미운영 알림 (영업 전일 때) */}
                {isClosed && (
                  <ClosedOverlay>
                    <ClosedSubText>미운영 알림</ClosedSubText>
                    <ClosedText>현재 영업</ClosedText>
                    <ClosedText>준비중이에요!</ClosedText>
                  </ClosedOverlay>
                )}
              </ThumbnailWrapper>

              {/* ✅ 두 번째 & 세 번째 이미지 (리뷰 사진) */}
              {reviewImages.map((img, index) => (
                <Thumbnail key={index} source={{ uri: img }} />
              ))}
            </ScrollView>
          </ImageContainer>

          <TouchableOpacity onPress={handlePress}>
            <Info>
              <Title>{cafe.name}</Title>
              <CafeLocation>{cafe.address}</CafeLocation>
              <Details>
                <DistanceBadge>거리</DistanceBadge>
                <Distance>
                  {cafeDistance !== null ? `${cafeDistance} km` : "계산 중..."}
                </Distance>
                <HashTag>{cafe.hashtag}</HashTag>
                <RatingContainer>
                  <StarIcon
                    width={responsiveWidth(12)}
                    height={responsiveHeight(12)}
                    style={{ marginRight: responsiveWidth(5) }}
                  />
                  <RatingText>
                    <RatingNumber>
                      {averageRating
                        ? parseFloat(averageRating).toFixed(1)
                        : "N/A"}
                    </RatingNumber>
                    <RatingSeparator> | </RatingSeparator>
                    <RatingReviews>
                      {reviewCount !== null ? reviewCount : "0"}
                    </RatingReviews>
                  </RatingText>
                </RatingContainer>
              </Details>
            </Info>
          </TouchableOpacity>
        </ListContainer>
      </Container>
    </TouchableOpacity>
  );
};

export default CafeListItem;

// 스타일 정의
const Container = styled.View`
  overflow: visible;
  width: ${responsiveWidth(360)}px;
  height: ${responsiveHeight(274)}px;
  padding-left: ${(props) =>
    props.isFirst
      ? responsiveWidth(24)
      : responsiveWidth(0)}; /* ✅ 첫 번째 아이템만 왼쪽 여백 추가 */
  padding-top: ${responsiveHeight(16)}px; /* ✅ 아이템 간 간격 유지 */
  margin-right: ${responsiveWidth(42)}px; /* ✅ 오른쪽 여백 추가 */
`;

const ListContainer = styled.View`
  width: ${responsiveWidth(360)}px;
  height: ${responsiveHeight(274)}px;
`;

const ImageContainer = styled.View`
  position: relative; /* 배지와 이미지가 같은 컨텍스트를 공유 */
`;

const ThumbnailWrapper = styled.View`
  position: relative;
`;

const CafeImage = styled.Image`
  width: ${responsiveWidth(150)}px;
  height: ${responsiveHeight(150)}px;
  border-radius: 12px;
`;

const CafeImagePlaceholder = styled.View`
  width: ${responsiveWidth(150)}px;
  height: ${responsiveHeight(150)}px;
  background-color: #d9d9d9;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;

const Thumbnail = styled.Image`
  width: ${responsiveWidth(112.5)}px;
  height: ${responsiveHeight(150)}px;
  border-radius: 8px;
  margin-left: ${responsiveWidth(4)}px;
`;

const ImagePlaceholder = styled.View`
  background-color: ${(props) =>
    props.isClosed
      ? "rgba(0, 0, 0, 0.55)"
      : "#d9d9d9"}; /* 닫힌 상태일 때 회색 */
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ImagePlaceholder1 = styled.View`
  width: ${responsiveWidth(150)}px;
  height: ${responsiveHeight(150)}px;
  background-color: ${(props) =>
    props.isClosed
      ? "rgba(0, 0, 0, 0.55)"
      : "#d9d9d9"}; /* ✅ 미운영이면 회색 */
  margin-right: ${responsiveWidth(4)}px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ImagePlaceholder2 = styled.View`
  width: ${responsiveWidth(112.5)}px;
  height: ${responsiveHeight(150)}px;
  background-color: ${(props) =>
    props.isClosed
      ? "rgba(0, 0, 0, 0.55)"
      : "#d9d9d9"}; /* ✅ 미운영이면 회색 */
  margin-right: ${responsiveWidth(4)}px;
  border-radius: 12px;
`;

const ImagePlaceholder3 = styled.View`
  width: ${responsiveWidth(112.5)}px;
  height: ${responsiveHeight(150)}px;
  background-color: ${(props) =>
    props.isClosed
      ? "rgba(0, 0, 0, 0.55)"
      : "#d9d9d9"}; /* ✅ 미운영이면 회색 */
  margin-right: ${responsiveWidth(4)}px;
  border-radius: 12px;
`;

/* ✅ 미운영 알림 스타일 */
const ClosedOverlay = styled.View`
  position: absolute;
  top: ${responsiveHeight(16)}px;
  left: ${responsiveWidth(16)}px;
  border-radius: 8px;
`;

const ClosedSubText = styled.Text`
  font-family: PretendardRegular;
  font-size: ${responsiveFontSize(12)}px;
  color: #fafafa;
  font-style: normal;
  font-weight: 400;
  padding-bottom: ${responsiveHeight(8)}px;
  line-height: ${responsiveHeight(16.56)}px;
  letter-spacing: -0.3;
`;

const ClosedText = styled.Text`
  font-family: PretendardBold;
  font-size: ${responsiveFontSize(16)}px;
  color: #fafafa;
  font-style: normal;
  font-weight: 700;
  line-height: ${responsiveHeight(22.08)}px;
  letter-spacing: -0.4;
`;

/* ✅ 배지 컨테이너: 항상 고정 */
const BadgeContainer = styled.View`
  position: absolute;
  bottom: ${responsiveHeight(-4)}px;
  left: ${responsiveWidth(20)}px;
  flex-direction: row;
  z-index: 10; /* 사진 위에 표시되도록 설정 */
`;

/* ✅ 배지 스타일 */
const Badge = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${responsiveHeight(4)}px ${responsiveWidth(8)}px;
  border-radius: 4px;
`;

const BadgeText = styled.Text`
  font-family: PretendardMedium;
  font-size: ${responsiveFontSize(10)}px;
  font-weight: 500;
  line-height: ${responsiveHeight(13.8)}px;
  letter-spacing: -0.25;
  margin-left: ${responsiveWidth(4)}px;
  color: #fafafa;
`;

const Info = styled.View`
  padding: ${responsiveHeight(12)}px ${responsiveWidth(24)}px
    ${responsiveHeight(0)}px;
`;

const Title = styled.Text`
  font-family: PretendardSemiBold;
  font-size: ${responsiveFontSize(18)}px;
  font-weight: 600;
  line-height: ${responsiveHeight(24.84)}px;
  letter-spacing: -0.45;
  padding-bottom: ${responsiveHeight(8)}px;
`;

const CafeLocation = styled.Text`
  font-family: PretendardRegular;
  font-size: ${responsiveFontSize(14)}px;
  font-weight: 400;
  line-height: ${responsiveHeight(19.32)}px;
  letter-spacing: -0.35;
  padding-bottom: ${responsiveHeight(8)}px;
`;

const Details = styled.View`
  flex-direction: row;
`;

const DistanceBadge = styled.Text`
  font-family: PretendardRegular;
  font-size: ${responsiveFontSize(10)}px;
  font-weight: 400;
  line-height: ${responsiveHeight(13.8)}px;
  letter-spacing: -0.25;
  padding: ${responsiveHeight(2)}px ${responsiveWidth(4)}px;
  margin-right: ${responsiveWidth(4)}px;
  border-radius: 8px;
  background-color: #f1f1f1;
`;

const Distance = styled.Text`
  font-family: PretendardRegular;
  font-size: ${responsiveFontSize(12)}px;
  font-weight: 400;
  line-height: ${responsiveHeight(16.56)}px;
  letter-spacing: -0.3;
  margin-right: ${responsiveWidth(12)}px;
`;

const HashTag = styled.Text`
  font-family: PretendardRegular;
  font-size: ${responsiveFontSize(12)}px;
  font-weight: 400;
  line-height: ${responsiveHeight(16.56)}px;
  letter-spacing: -0.3;
  color: #666;
`;
const RatingContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: auto;
`;

const RatingText = styled.Text`
  font-family: PretendardRegular;
  font-size: ${responsiveFontSize(14)}px;
  font-weight: 400;
  line-height: ${responsiveHeight(19.32)}px;
  letter-spacing: -0.35;
  color: #666;
`;

const RatingNumber = styled.Text`
  font-family: PretendardRegular;
  font-size: ${responsiveFontSize(14)}px;
  font-weight: 400;
  line-height: ${responsiveHeight(19.32)}px;
  letter-spacing: -0.35;
  color: #000;
`;

const RatingSeparator = styled.Text`
  font-family: PretendardRegular;
  font-size: ${responsiveFontSize(14)}px;
  font-weight: 400;
  line-height: ${responsiveHeight(19.32)}px;
  letter-spacing: -0.35;
  color: #666;
`;

const RatingReviews = styled.Text`
  font-family: PretendardRegular;
  font-size: ${responsiveFontSize(14)}px;
  font-weight: 400;
  line-height: ${responsiveHeight(19.32)}px;
  letter-spacing: -0.35;
  color: #666;
`;
