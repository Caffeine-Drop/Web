import React from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { responsiveWidth, responsiveHeight } from "../utils/responsive";

// 이미지 파일 경로
import DetailPageMainImg from "../assets/DetailPage/DetailPageMainImg.svg";

export default function DetailPageImage({ selectedTab, navigation }) {
  return (
    <View>
      <ScrollView>
        <Container>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              borderCollapse: "collapse",
              gap: responsiveWidth(1),
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("DetailPageImageDetail")}>
              <DetailPageMainImg width={responsiveWidth(119)} height={responsiveHeight(119)} preserveAspectRatio="none" borderWidth={1} borderColor="#fafafa" />
            </TouchableOpacity>
            <TouchableOpacity>
              <DetailPageMainImg width={responsiveWidth(119)} height={responsiveHeight(119)} preserveAspectRatio="none" borderWidth={1} borderColor="#fafafa" />
            </TouchableOpacity>
            <TouchableOpacity>
              <DetailPageMainImg width={responsiveWidth(119)} height={responsiveHeight(119)} preserveAspectRatio="none" borderWidth={1} borderColor="#fafafa" />
            </TouchableOpacity>
            <TouchableOpacity>
              <DetailPageMainImg width={responsiveWidth(119)} height={responsiveHeight(119)} preserveAspectRatio="none" borderWidth={1} borderColor="#fafafa" />
            </TouchableOpacity>
            <TouchableOpacity>
              <DetailPageMainImg width={responsiveWidth(119)} height={responsiveHeight(119)} preserveAspectRatio="none" borderWidth={1} borderColor="#fafafa" />
            </TouchableOpacity>
            <TouchableOpacity>
              <DetailPageMainImg width={responsiveWidth(119)} height={responsiveHeight(119)} preserveAspectRatio="none" borderWidth={1} borderColor="#fafafa" />
            </TouchableOpacity>
            <TouchableOpacity>
              <DetailPageMainImg width={responsiveWidth(119)} height={responsiveHeight(119)} preserveAspectRatio="none" borderWidth={1} borderColor="#fafafa" />
            </TouchableOpacity>
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

const Image = styled.Image`
  width: ${responsiveWidth(118)}px;
  height: ${responsiveHeight(118)}px;
  border-width: 1px;
  border-color: #fafafa;
`;
