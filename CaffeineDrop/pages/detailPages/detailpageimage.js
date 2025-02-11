import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import styled from "styled-components/native";
import { responsiveWidth, responsiveHeight } from "../../utils/responsive";

// 이미지 파일 경로
// import DetailPageMainImg from "../assets/DetailPage/DetailPageMainImg.svg";
import DetailPageMainImg from "../../assets/DetailPage/DetailPageMainImg.png";

export default function DetailPageImage({ selectedTab, navigation }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1초 강제 딜레이

    return () => clearTimeout(timer);
  }, []);

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Container>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              gap: responsiveWidth(1),
            }}
          >
            {Array.from({ length: 9 }).map((_, index) => (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  !loading && navigation.navigate("DetailPageImageDetail")
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
                    source={DetailPageMainImg}
                  />
                )}
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
