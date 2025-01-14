import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../utils/responsive";
import styled from 'styled-components/native';
import HeartIcon from "../assets/home/HeartIcon.jsx";
import StarIcon from '../assets/home/StarIcon.svg';

const CafeListItem = ({ cafe }) => {
  const isBothBadges = cafe.isFavorite && cafe.isSpecialty;
  return (
    <Container>
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
                  <HeartIcon color="#FFFFFF" size={10} style={{ marginRight: 4 }} />
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
            horizontal showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              marginLeft: cafe.isFirst ? 24 : 0
            }}
          >
            <ImagePlaceholder1 />
            <ImagePlaceholder2 />
            <ImagePlaceholder3 />
          </ScrollView>
        </ImageContainer>

        <TouchableOpacity>
          <Info>
            <Title>{cafe.name}</Title>
            <Location>{cafe.location}</Location>
            <Details>
              <Distance>{cafe.distance}</Distance>
              <RatingContainer>
                <StarIcon width={12} height={12} style={{ marginRight: 5 }} />
                <RatingText>{cafe.rating} | {cafe.reviews}</RatingText>
              </RatingContainer>
            </Details>
          </Info>
        </TouchableOpacity>
      </ListContainer>
    </Container>
  );
};

export default CafeListItem;

// 스타일 정의
const Container = styled.View`
  background-color: #fafafa;
  border-radius: 10px;
  overflow: visible;
  width: ${responsiveWidth(312)}px;
  margin-left: ${(props) => (props.isFirst ? "24px" : "0px")}; /* ✅ 첫 번째 아이템만 왼쪽 여백 추가 */
  margin-top: 16px; /* ✅ 아이템 간 간격 유지 */
`;


const ListContainer = styled.View`
  width: ${responsiveWidth(360)}px;
  height: ${responsiveHeight(274)}px;
  padding: 16px 0;
`;

const ImageContainer = styled.View`
  position: relative; /* 배지와 이미지가 같은 컨텍스트를 공유 */
`;

const ImagePlaceholder1 = styled.View`
  width: ${responsiveWidth(150)}px;
  height: ${responsiveHeight(150)}px;
  background-color: #d9d9d9;
  margin-right: 4px;
  border-radius: 12px;
`;

const ImagePlaceholder2 = styled.View`
  width: ${responsiveWidth(112.5)}px;
  height: ${responsiveHeight(150)}px;
  background-color: #d9d9d9;
  margin-right: 4px;
  border-radius: 12px;
`;

const ImagePlaceholder3 = styled.View`
  width: ${responsiveWidth(113.5)}px;
  height: ${responsiveHeight(150)}px;
  background-color: #d9d9d9;
  margin-right: 4px;
  border-radius: 12px;
`;

/* ✅ 배지 컨테이너: 항상 고정 */
const BadgeContainer = styled.View`
  position: absolute;
  bottom: -4px;
  left: -4px;
  flex-direction: row;
  z-index: 10; /* 사진 위에 표시되도록 설정 */
`;

/* ✅ 배지 스타일 */
const Badge = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 4px 8px;
  border-radius: 4px;
`;

const BadgeText = styled.Text`
  font-size: 10px;
  font-weight: 500;
  color: #FAFAFA;
`;

const Info = styled.View`
  padding: 10px;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const Location = styled.Text`
  font-size: 14px;
  color: gray;
`;

const Details = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
`;

const Distance = styled.Text`
  font-size: 12px;
  color: gray;
`;

const RatingContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const RatingText = styled.Text`
  font-size: 12px;
  color: gray;
`;