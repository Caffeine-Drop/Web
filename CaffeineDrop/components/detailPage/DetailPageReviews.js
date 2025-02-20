import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";

// 이미지 임포트
import Profile from "../../assets/DetailPage/Profile.svg";
// import ProfileImage from "../assets/DetailPage/Profile.png";
import ViewMoreButton from "../../assets/DetailPage/ViewMoreButton.svg";
import ReviewStarIcon from "../../assets/DetailPage/ReviewStarIcon.svg";
import BlankMenuImage from "../../assets/DetailPage/blankMenuImg.png";
import SignatureMenuImg1 from "../../assets/DetailPage/signatureMenuImg1.png";
import SignatureMenuImg2 from "../../assets/DetailPage/signatureMenuImg2.png";
import SignatureMenuImg3 from "../../assets/DetailPage/signatureMenuImg3.png";
import PlusIcon from "../../assets/DetailPage/PlusIcon.svg";

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "../../utils/responsive";

export default function DetailPageReviews({
  selectedTab,
  onViewMoreReviewPress,
  reviews = { data: { reviews: [] } },
}) {
  const [userReviews, setUserReviews] = useState([]);
  useEffect(() => {
    setUserReviews(reviews);
  }, [reviews]);
  console.log(reviews.data.reviews[0].images[0].image_url);
  return (
    <Container>
      <Header>
        <ReviewTitle>
          <Title>이용자 리뷰</Title>
          <ReviewCount>{reviews.data.reviews.length}건</ReviewCount>
        </ReviewTitle>
        {selectedTab !== "review" && (
          <ReviewViewMoreButton onPress={onViewMoreReviewPress}>
            <ReviewViewMoreButtonText>더보기</ReviewViewMoreButtonText>
            <ViewMoreButton
              width={responsiveWidth(16)}
              height={responsiveHeight(16)}
            />
          </ReviewViewMoreButton>
        )}
      </Header>
      <ReviewList>
        {reviews.data.reviews.map((review) => (
          <Review key={review.review_id}>
            <ReviewUserInfo>
              {review.user.profile_image_url ? (
                <Image
                  source={{ uri: review.user.profile_image_url }}
                  style={{
                    width: responsiveWidth(34),
                    height: responsiveWidth(34),
                    borderRadius: responsiveWidth(17),
                  }}
                />
              ) : (
                <Profile
                  width={responsiveWidth(34)}
                  height={responsiveWidth(34)}
                  preserveAspectRatio="xMinYMin meet"
                />
              )}
              <ReviewUser>
                <ReviewUserNickName>{review.user.nickname}</ReviewUserNickName>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <ReviewCreatedAt>
                    {new Date(review.created_at).toISOString().split("T")[0]}
                  </ReviewCreatedAt>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <ReviewStarIcon
                      width={responsiveWidth(12)}
                      height={responsiveHeight(12)}
                    />
                    <ReviewRating>
                      {review.evaluations.length > 0
                        ? (
                            review.evaluations.reduce(
                              (sum, evaluation) => sum + evaluation.rating,
                              0
                            ) / review.evaluations.length
                          ).toFixed(1)
                        : 0}
                    </ReviewRating>
                  </View>
                </View>
              </ReviewUser>
            </ReviewUserInfo>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <ReviewPictures>
                {review.images && review.images.length > 0 && (
                  <ReviewPictures>
                    {review.images.map((image, index) => (
                      <ReviewPictureImage
                        key={index}
                        source={{ uri: image.image_url }}
                        style={{
                          width: responsiveWidth(120),
                          height: responsiveWidth(80),
                        }}
                        resizeMode="stretch"
                      />
                    ))}
                  </ReviewPictures>
                )}
              </ReviewPictures>
            </ScrollView>
            <ReviewContent>
              <Text
                style={{
                  color: "#000",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  fontSize: responsiveFontSize(12),
                  fontFamily: "PretendardRegular",
                  lineHeight: responsiveFontSize(16.56),
                  letterSpacing: "-0.3",
                  flexWrap: "wrap",
                  width: "100%",
                }}
              >
                {review.content}
              </Text>
            </ReviewContent>
          </Review>
        ))}
        {/* 리뷰 추가 */}
        {/* <Review>
          <ReviewUserInfo>
            <Profile
              width={responsiveWidth(34)}
              height={responsiveWidth(34)}
              preserveAspectRatio="xMinYMin meet"
            />
            <ReviewUser>
              <ReviewUserNickName>닉네임</ReviewUserNickName>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <ReviewCreatedAt>2025.01.12</ReviewCreatedAt>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <ReviewStarIcon
                    width={responsiveWidth(12)}
                    height={responsiveHeight(12)}
                  />
                  <ReviewRating>4.0</ReviewRating>
                </View>
              </View>
            </ReviewUser>
          </ReviewUserInfo>
          <ReviewContent>
            <Text
              style={{
                color: "#000",
                overflow: "hidden",
                textOverflow: "ellipsis",
                fontSize: responsiveFontSize(12),
                fontFamily: "PretendardRegular",
                lineHeight: responsiveFontSize(16.56),
                letterSpacing: "-0.3",
                flexWrap: "wrap",
                width: "100%",
              }}
            >
              도시 위에 소음 넘쳐나는 트러블 여유 없는 걸음 이건 마치 정글
              멍하니 또 한숨이
            </Text>
          </ReviewContent>
        </Review> */}
      </ReviewList>
      {/* 하단 리뷰 추가 버튼 */}
      <ReviewAddButton>
        <PlusIcon />
      </ReviewAddButton>
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  padding: ${responsiveHeight(28.5)}px 0 0;
  background-color: #fafafa;
`;

const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${responsiveWidth(24)}px ${responsiveHeight(12)}px
    ${responsiveWidth(24)}px;
`;

const ReviewTitle = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${responsiveWidth(8)}px;
`;

const Title = styled.Text`
  color: #000;
  font-family: "PretendardSemiBold";
  font-size: ${responsiveFontSize(16)}px;
  line-height: ${responsiveFontSize(22.08)}px;
  letter-spacing: -0.4px;
  text-transform: uppercase;
`;

const ReviewCount = styled.Text`
  color: #666;
  text-align: center;
  font-size: ${responsiveFontSize(14)}px;
  font-family: "PretendardMedium";
  line-height: ${responsiveFontSize(19.32)}px;
  letter-spacing: -0.35px;
  text-transform: uppercase;
`;

const ReviewViewMoreButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ReviewViewMoreButtonText = styled.Text`
  color: #666;
  font-size: ${responsiveFontSize(14)}px;
  font-family: "PretendardMedium";
  line-height: ${responsiveFontSize(19.32)}px;
  letter-spacing: -0.35px;
`;

const ReviewList = styled.View`
  display: flex;
  flex-direction: column;
`;

const Review = styled.View`
  display: flex;
  flex-direction: column;
  padding: ${responsiveHeight(16)}px 0;
  gap: ${responsiveHeight(12)}px;
`;

const ReviewUserInfo = styled.View`
  display: flex;
  flex-direction: row;
  gap: ${responsiveWidth(12)}px;
  padding: 0 ${responsiveWidth(24)}px 0 ${responsiveWidth(24)}px;
`;

const ReviewUser = styled.View`
  display: flex;
  flex-direction: column;
`;

const ReviewUserNickName = styled.Text`
  color: #000;
  font-size: ${responsiveFontSize(16)}px;
  font-family: "PretendardSemiBold";
  line-height: ${responsiveFontSize(22.08)}px;
  letter-spacing: -0.4px;
  text-transform: uppercase;
`;

const ReviewCreatedAt = styled.Text`
  color: #666;
  font-size: ${responsiveFontSize(14)}px;
  font-family: "PretendardMedium";
  line-height: ${responsiveFontSize(19.32)}px;
  letter-spacing: -0.35px;
  margin-right: ${responsiveWidth(4)}px;
`;

const ReviewRating = styled.Text`
  color: #666;
  font-size: ${responsiveFontSize(12)}px;
  font-family: "PretendardRegular";
  line-height: ${responsiveFontSize(16.56)}px;
  letter-spacing: -0.3px;
`;

const ReviewPictures = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 12px 0 0 ${responsiveWidth(24)}px;
  gap: ${responsiveWidth(4)}px;
`;

const ReviewPictureImage = styled.Image`
  height: ${responsiveWidth(80)}px;
  max-width: ${responsiveWidth(120)}px;
  border-radius: ${responsiveWidth(4)}px;
`;

const ReviewContent = styled.View`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  padding: 0 ${responsiveWidth(24)}px 0 ${responsiveWidth(24)}px;
`;

const ReviewAddButton = styled.TouchableOpacity`
  display: flex;
  width: ${responsiveWidth(312)}px;
  padding: ${responsiveHeight(8)}px 0;
  justify-content: center;
  align-items: center;
  border: 1px solid #d9d9d9;
  border-radius: ${responsiveWidth(1)}px;
  margin-bottom: ${responsiveHeight(107)}px;
  margin-left: ${responsiveWidth(24)}px;
`;
