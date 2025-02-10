import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
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

const CafeListItem = ({ cafe, isSelected, isLoading }) => {
  const fontsLoaded = useFonts();

  const navigation = useNavigation(); // navigation 객체 가져오기

  const handlePress = () => {
    navigation.navigate("DetailPage", { cafe }); // DetailPage로 이동
  };

  const isBothBadges = cafe.isFavorite && cafe.isSpecialty;

  if (!fontsLoaded || isLoading) {
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
            {/* ✅ 배지 컨테이너 (ScrollView 외부) */}
            {(cafe.isFavorite || cafe.isSpecialty) && (
              <BadgeContainer>
                {/* 좋아요 배지 */}
                {cafe.isFavorite && (
                  <Badge
                    style={{
                      backgroundColor: "#E91111",
                      borderTopRightRadius: isBothBadges ? 0 : 4, // 두 배지가 있을 때 오른쪽 위 모서리 제거
                      borderBottomRightRadius: isBothBadges ? 0 : 4, // 두 배지가 있을 때 오른쪽 아래 모서리 제거
                    }}
                  >
                    <HeartIcon color="#FFFFFF" size={responsiveWidth(10)} />
                    <BadgeText>좋아요</BadgeText>
                  </Badge>
                )}
                {/* Specialty Coffee 배지 */}
                {cafe.isSpecialty && (
                  <Badge
                    style={{
                      backgroundColor: "#321900",
                      borderTopLeftRadius: isBothBadges ? 0 : 4, // 두 배지가 있을 때 왼쪽 위 모서리 제거
                      borderBottomLeftRadius: isBothBadges ? 0 : 4, // 두 배지가 있을 때 왼쪽 아래 모서리 제거
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
              {/* 첫 번째 이미지 */}
              <ImagePlaceholder
                isClosed={cafe.isClosed}
                style={{
                  width: responsiveWidth(150),
                  height: responsiveHeight(150),
                  marginRight: responsiveWidth(4),
                }}
              >
                {cafe.isClosed && (
                  <ClosedOverlay>
                    <ClosedSubText>미운영 알림</ClosedSubText>
                    <ClosedText>현재 영업</ClosedText>
                    <ClosedText>준비중이에요!</ClosedText>
                  </ClosedOverlay>
                )}
              </ImagePlaceholder>

              {/* 두 번째 이미지 */}
              <ImagePlaceholder
                isClosed={cafe.isClosed}
                style={{
                  width: responsiveWidth(112.5),
                  height: responsiveHeight(150),
                  marginRight: responsiveWidth(4),
                }}
              />

              {/* 세 번째 이미지 */}
              <ImagePlaceholder
                isClosed={cafe.isClosed}
                style={{
                  width: responsiveWidth(112.5),
                  height: responsiveHeight(150),
                }}
              />
            </ScrollView>
          </ImageContainer>

          <TouchableOpacity onPress={handlePress}>
            <Info>
              <Title>{cafe.name}</Title>
              <Location>{cafe.location}</Location>
              <Details>
                <DistanceBadge>거리</DistanceBadge>
                <Distance>{cafe.distance}</Distance>
                <HashTag>{cafe.hashtag}</HashTag>
                <RatingContainer>
                  <StarIcon
                    width={responsiveWidth(12)}
                    height={responsiveHeight(12)}
                    style={{ marginRight: responsiveWidth(5) }}
                  />
                  <RatingText>
                    <RatingNumber>
                      {parseFloat(cafe.rating).toFixed(1)}
                    </RatingNumber>
                    <RatingSeparator> | </RatingSeparator>
                    <RatingReviews>{cafe.reviews}</RatingReviews>
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

const Location = styled.Text`
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
