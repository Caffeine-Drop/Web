import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Modal,
  Text,
  Pressable,
} from "react-native";
import styled from "styled-components/native";
import { responsiveWidth, responsiveHeight } from "../../utils/responsive";
import { PanGestureHandler } from "react-native-gesture-handler";

// 이미지 파일 경로
// import DetailPageMainImg from "../assets/DetailPage/DetailPageMainImg.svg";
import DetailPageMainImg from "../../assets/DetailPage/DetailPageMainImg.png";

export default function DetailPageImage({
  selectedTab,
  navigation,
  reviews,
  ratings,
  images,
}) {
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  console.log(reviews.data.reviews);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1초 강제 딜레이

    return () => clearTimeout(timer);
  }, []);

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <PanGestureHandler
          onGestureEvent={({ nativeEvent }) => {
            if (nativeEvent.translationY > 100) {
              setModalVisible(false);
            }
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            <Image
              source={{ uri: selectedImage }}
              style={{ width: "80%", height: "80%", borderRadius: 10 }}
              resizeMode="contain"
            />
          </View>
        </PanGestureHandler>
      </Modal>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Container>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              gap: responsiveWidth(1),
            }}
          >
            {reviews.data.reviews.map((review, index) =>
              review.images && review.images.length > 0 ? (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    !loading &&
                    navigation.navigate("DetailPageImageDetail", {
                      reviews,
                      ratings,
                      review,
                    })
                  }
                >
                  {loading ? (
                    <View
                      style={{
                        backgroundColor: "#d9d9d9",
                        width: responsiveWidth(119),
                        height: responsiveWidth(119),
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    />
                  ) : (
                    <Image
                      style={{
                        width: responsiveWidth(119),
                        height: responsiveWidth(119),
                      }}
                      source={{ uri: review.images[0].image_url }}
                    />
                  )}
                </TouchableOpacity>
              ) : null
            )}
            {images.map((image, index) => (
              <TouchableOpacity
                key={`image-${index}`}
                onPress={() => {
                  setSelectedImage(image.image_url);
                  setModalVisible(true);
                }}
              >
                <Image
                  source={{ uri: image.image_url }}
                  style={{
                    width: responsiveWidth(119),
                    height: responsiveWidth(119),
                  }}
                />
              </TouchableOpacity>
            ))}
          </View>
        </Container>
      </ScrollView>
    </View>
  );
}

const Container = styled.View`
  width: 100%;
  padding: ${responsiveHeight(40)}px 0 ${responsiveHeight(107)}px 0;
  display: grid;
  flex-direction: row;
  grid-template-rows: repeat(3, 1fr);
`;
