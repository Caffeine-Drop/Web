import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Animated,
  Easing,
} from "react-native";
import styled from "styled-components/native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../utils/responsive";
import * as ImagePicker from "expo-image-picker";

// 이미지 임포트
import SpecialtyCoffeeLogo from "../assets/DetailPage/SpecialtyCoffeeLogo.svg";
import Star from "../assets/DetailPage/DetailPageStarImg.svg";
import BlankStar from "../assets/DetailPage/DetailPageBlankStarImg.svg";
import DownIcon from "../assets/ReviewPage/DownIcon.svg";
import AddReviewImageButton from "../assets/ReviewPage/AddReviewImageButton.svg";
import MinusIcon from "../assets/ReviewPage/MinusIcon.svg";

// 컴포넌트 임포트
import BackButton from "../components/BackButton";

const StarIcon = ({ filled }) => {
  const Icon = filled ? Star : BlankStar;
  return <Icon width={responsiveWidth(20)} height={responsiveHeight(20)} />;
};

export default function ReviewPage({ navigation }) {
  const [images, setImages] = useState([]);
  const [text, setText] = useState("");
  const animationValue = useRef(new Animated.Value(0)).current;

  const addImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      const newImageUri = result.assets[0].uri;
      setImages((prevImages) => [newImageUri, ...prevImages]);
    }
  };

  const removeImage = (uri) => {
    setImages((prevImages) => prevImages.filter((image) => image !== uri));
  };

  useEffect(() => {
    const animateIcon = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(animationValue, {
            toValue: 1,
            duration: 500,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(animationValue, {
            toValue: 0,
            duration: 500,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };

    animateIcon();
  }, [animationValue]);

  const translateY = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 10], // Adjust the values for the desired effect
  });

  return (
    <Container>
      <FixedHeader>
        <View style={{ width: "100%", flexDirection: "column" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <BackButton
              style={{ position: "absolute" }}
              onPress={() => navigation.goBack()}
            />
            <FixedHeaderText>리뷰 작성하기</FixedHeaderText>
          </View>
        </View>
      </FixedHeader>
      <ScrollView>
        <CoffeeInfo>
          <SpecialtyCoffeeLogo />
          <View
            style={{
              gap: responsiveHeight(12),
              paddingBottom: responsiveHeight(32),
            }}
          >
            <CoffeeName>언힙커피로스터스</CoffeeName>
            <CaffeeAddress>인천 미추홀구 인하로67번길 6 2층</CaffeeAddress>
          </View>
        </CoffeeInfo>
        <ReviewRateOverview>
          <Title1>
            <Number>01</Number>
            <Title>항목별 세부 평점</Title>
          </Title1>
          <ReviewOverViewDetailRate>
            {/* 항목별 세부 평점 */}
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
              }}
            >
              {/* 여기서부터 하나 시작 */}
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View
                  style={{ display: "flex", flexDirection: "row", gap: 24 }}
                >
                  <ReviewOverViewDetailRateTheme>
                    <Text>맛</Text>
                  </ReviewOverViewDetailRateTheme>
                  <ReviewOverViewDetailRateStars>
                    <StarIcon filled={true} />
                    <StarIcon filled={true} />
                    <StarIcon filled={true} />
                    <StarIcon filled={false} />
                    <StarIcon filled={false} />
                  </ReviewOverViewDetailRateStars>
                </View>
                <ReviewOverViewDetailRateScore>
                  3.0
                </ReviewOverViewDetailRateScore>
              </View>
              {/* 여기까지가 하나 */}
              {/* 여기서부터 두 번째 시작 */}
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View
                  style={{ display: "flex", flexDirection: "row", gap: 24 }}
                >
                  <ReviewOverViewDetailRateTheme>
                    <Text>인테리어</Text>
                  </ReviewOverViewDetailRateTheme>
                  <ReviewOverViewDetailRateStars>
                    <StarIcon filled={true} />
                    <StarIcon filled={true} />
                    <StarIcon filled={true} />
                    <StarIcon filled={true} />
                    <StarIcon filled={false} />
                  </ReviewOverViewDetailRateStars>
                </View>
                <ReviewOverViewDetailRateScore>
                  4.0
                </ReviewOverViewDetailRateScore>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View
                  style={{ display: "flex", flexDirection: "row", gap: 24 }}
                >
                  <ReviewOverViewDetailRateTheme>
                    <Text>청결도</Text>
                  </ReviewOverViewDetailRateTheme>
                  <ReviewOverViewDetailRateStars>
                    <StarIcon filled={true} />
                    <StarIcon filled={true} />
                    <StarIcon filled={true} />
                    <StarIcon filled={false} />
                    <StarIcon filled={false} />
                  </ReviewOverViewDetailRateStars>
                </View>
                <ReviewOverViewDetailRateScore>
                  3.0
                </ReviewOverViewDetailRateScore>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View
                  style={{ display: "flex", flexDirection: "row", gap: 24 }}
                >
                  <ReviewOverViewDetailRateTheme>
                    <Text>가심비</Text>
                  </ReviewOverViewDetailRateTheme>
                  <ReviewOverViewDetailRateStars>
                    <StarIcon filled={true} />
                    <StarIcon filled={true} />
                    <StarIcon filled={true} />
                    <StarIcon filled={false} />
                    <StarIcon filled={false} />
                  </ReviewOverViewDetailRateStars>
                </View>
                <ReviewOverViewDetailRateScore>
                  3.0
                </ReviewOverViewDetailRateScore>
              </View>
            </View>
          </ReviewOverViewDetailRate>
          <ReviewOverViewRate>
            <ReviewOverViewRateText>1.0</ReviewOverViewRateText>
            <View style={{ gap: responsiveHeight(5) }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: responsiveWidth(3),
                  paddingBottom: responsiveHeight(5),
                }}
              >
                <StarIcon filled={true} />
                <StarIcon filled={false} />
                <StarIcon filled={false} />
                <StarIcon filled={false} />
                <StarIcon filled={false} />
              </View>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <ReviewCountText>종합평점 | </ReviewCountText>
                <ReviewCount>1.0</ReviewCount>
              </View>
            </View>
          </ReviewOverViewRate>
        </ReviewRateOverview>
        <View style={{ backgroundColor: "#FAFAFA" }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: responsiveHeight(10),
              paddingBottom: responsiveHeight(10),
              marginTop: responsiveHeight(8),
            }}
          >
            <View style={{ position: "absolute", left:120 }}>
              <DownIcon style={{color:'lightgray' }} />
            </View>

            <Animated.View
              style={{
                transform: [{ translateY }],
                borderRadius: 24,
                boxShadow: "4px 4px 4px 0px rgba(0, 0, 0, 0.02)",
                backdropFilter: "blur(3px)",
              }}
            >
              <DownIcon />
            </Animated.View>
            <ScrollText>리뷰를 작성할 수 있어요</ScrollText>
          </View>
          <View
            style={{
              paddingTop: responsiveHeight(20),
              paddingBottom: responsiveHeight(32),
            }}
          >
            <Title1>
              <Number>02</Number>
              <Title>방문하신 카페는 어떠셨나요?</Title>
            </Title1>
          </View>
          <ReviewContainer>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    color: "#000",
                    fontSize: responsiveFontSize(12),
                    fontWeight: 600,
                    lineHeight: responsiveHeight(19.32),
                    letterSpacing: -0.35,
                  }}
                >
                  Q.
                </Text>
                <Text
                  style={{
                    color: "#000",
                    fontSize: responsiveFontSize(12),
                    fontWeight: 400,
                    lineHeight: responsiveHeight(19.32),
                    letterSpacing: -0.35,
                  }}
                >
                  커피는 어떠셨나요?
                </Text>
              </View>
              <View style={{ display: "flex", flexDirection: "row", gap: 4 }}>
                <Text
                  style={{
                    color: "#999",
                    textAlign: "right",
                    fontSize: responsiveFontSize(12),
                    fontWeight: 500,
                    lineHeight: responsiveHeight(16.56),
                    letterSpacing: -0.3,
                  }}
                >
                  글자 수
                </Text>
                <Text
                  style={{
                    color: "#666",
                    textAlign: "right",
                    fontSize: responsiveFontSize(12),
                    fontWeight: 500,
                    lineHeight: responsiveHeight(16.56),
                    letterSpacing: -0.3,
                  }}
                >
                  {text.length}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => Keyboard.dismiss()}
              style={{ height: responsiveHeight(232) }}
            >
              <TextInput
                placeholder="솔직한 리뷰를 작성해주세요!"
                placeholderTextColor="#666"
                textAlignVertical="top"
                multiline={true}
                value={text}
                onChangeText={setText}
              />
            </TouchableOpacity>
            <ScrollView horizontal={true}>
              <ReviewImages>
                {images.map((image, index) => (
                  <ImageContainer key={index}>
                    <TouchableOpacity onPress={() => removeImage(image)}>
                      <StyledImage source={{ uri: image }} />
                      <StyledMinusIcon />
                    </TouchableOpacity>
                  </ImageContainer>
                ))}
                <TouchableOpacity onPress={addImage}>
                  <AddReviewImageButton
                    width={responsiveWidth(60)}
                    preserveAspectRatio="none"
                    height={responsiveHeight(80)}
                  />
                </TouchableOpacity>
              </ReviewImages>
            </ScrollView>
            <TouchableOpacity
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: responsiveHeight(16),
                paddingBottom: responsiveHeight(16),
                backgroundColor: "#E5E3E1",
                borderRadius: 12,
                marginBottom: responsiveHeight(16),
              }}
            >
              <Text
                style={{
                  color: "#756555",
                  fontSize: responsiveFontSize(16),
                  fontWeight: "700",
                  lineHeight: responsiveHeight(22.08),
                  letterSpacing: -0.4,
                }}
              >
                리뷰 작성하기
              </Text>
            </TouchableOpacity>
          </ReviewContainer>
        </View>
      </ScrollView>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
`;

const FixedHeader = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding-top: 38px;
  background-color: #756555;
  z-index: 1000;
`;

const FixedHeaderText = styled.Text`
  overflow: hidden;
  width: 100%;
  height: ${responsiveHeight(56)}px;
  padding: 15px 0;
  color: #fafafa;
  text-align: center;
  text-overflow: ellipsis;
  font-size: ${responsiveFontSize(18)}px;
  font-weight: 600;
  line-height: ${responsiveHeight(24.84)}px;
  letter-spacing: -0.45px;
`;

const CoffeeInfo = styled.View`
  width: 100%;
  padding: 110px ${responsiveWidth(24)}px 0;
  background-color: #756555;
  gap: ${responsiveHeight(4)}px;
`;

const CoffeeName = styled.Text`
  color: #fafafa;
  font-size: ${responsiveFontSize(28)}px;
  font-weight: 600;
  line-height: ${responsiveHeight(38.64)}px;
  letter-spacing: -0.7px;
`;

const CaffeeAddress = styled.Text`
  color: #fafafa;
  font-size: ${responsiveFontSize(14)}px;
  font-weight: 400;
  line-height: ${responsiveHeight(19.32)}px;
  letter-spacing: -0.35px;
`;

const ReviewRateOverview = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
  gap: ${responsiveHeight(24)}px;
  padding-top: ${responsiveWidth(24)}px;
  padding-bottom: ${responsiveHeight(40)}px;
`;

const Title1 = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: ${responsiveHeight(8)}px;
`;

const Number = styled.Text`
  color: #666;
  font-family: Pretendard;
  font-size: ${responsiveFontSize(12)}px;
  font-weight: 500;
  line-height: ${responsiveHeight(16.56)}px;
  letter-spacing: -0.3px;
  text-transform: uppercase;
`;

const Title = styled.Text`
  color: #000;
  text-align: center;
  font-size: ${responsiveFontSize(20)}px;
  font-weight: 600;
  line-height: ${responsiveHeight(27.6)}px;
  letter-spacing: -0.5px;
  text-transform: uppercase;
  width: ${responsiveWidth(130)}px;
`;

const ReviewOverViewDetailRate = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${responsiveWidth(24)}px;
`;

const ReviewOverViewDetailRateTheme = styled.View`
  display: flex;
  flex-direction: row;
  width: ${responsiveWidth(60)}px;
  height: ${responsiveHeight(27)}px;
  padding: ${responsiveWidth(5)}px 0;
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
  border-color: #000;
`;

const ReviewOverViewDetailRateStars = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${responsiveWidth(3)}px;
`;

const ReviewOverViewDetailRateScore = styled.Text`
  color: #000;
  font-family: Pretendard;
  font-size: ${responsiveFontSize(14)}px;
  font-style: normal;
  font-weight: 600;
  line-height: ${responsiveHeight(19.32)}px;
  letter-spacing: -0.35px;
  padding-left: ${responsiveWidth(8)}px;
  text-transform: uppercase;
`;

const ReviewOverViewRate = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${responsiveWidth(24)}px;
`;

const ReviewOverViewRateText = styled.Text`
  color: #000;
  font-family: Pretendard;
  font-size: ${responsiveFontSize(50)}px;
  font-style: normal;
  font-weight: 600;
  line-height: ${responsiveHeight(69)}px;
  letter-spacing: -1.25px;
  text-transform: uppercase;
`;

const ReviewCountText = styled.Text`
  color: #666666;
  font-family: Pretendard;
  font-size: ${responsiveFontSize(12)}px;
  font-style: normal;
  font-weight: 500;
  line-height: ${responsiveHeight(16.56)}px;
  letter-spacing: -0.3px;
  text-transform: uppercase;
`;

const ReviewCount = styled.Text`
  color: #000000;
  font-family: Pretendard;
  font-size: ${responsiveFontSize(12)}px;
  font-style: normal;
  font-weight: 500;
  line-height: ${responsiveHeight(16.56)}px;
  letter-spacing: -0.3px;
  text-transform: uppercase;
`;

const ScrollText = styled.Text`
  color: #000;
  font-family: Pretendard;
  font-size: ${responsiveFontSize(12)}px;
  font-style: normal;
  font-weight: 500;
  line-height: ${responsiveHeight(16.56)}px;
  letter-spacing: -0.3px;
`;

const ReviewContainer = styled.View`
  display: flex;
  flex-direction: column;
  padding: 0 ${responsiveWidth(24)}px 0;
  gap: ${responsiveHeight(16)}px;
`;

const TextInput = styled.TextInput`
  justify-content: flex-start;
  width: ${responsiveWidth(312)}px;
  height: ${responsiveHeight(232)}px;
  border-top-width: 1;
  border-bottom-width: 1;
  border-color: #d9d9d9;
  padding: ${responsiveHeight(16)}px ${responsiveWidth(12)}px;
  color: #000;
  font-size: ${responsiveFontSize(12)}px;
  font-style: normal;
  font-weight: 500;
  line-height: ${responsiveHeight(16.56)}px;
  letter-spacing: -0.3px;
`;

const ReviewImages = styled.View`
  display: flex;
  flex-direction: row;
  height: ${responsiveHeight(80)}px;
  gap: ${responsiveWidth(4)}px;
`;

const ImageContainer = styled.View`
  position: relative;
  width: ${responsiveWidth(60)}px;
  height: ${responsiveHeight(80)}px;
`;

const StyledImage = styled.Image`
  width: ${responsiveWidth(60)}px;
  height: ${responsiveHeight(80)}px;
`;

const StyledMinusIcon = styled(MinusIcon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-12px, -12px);
`;
