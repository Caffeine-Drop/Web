import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../utils/responsive";
import styled from "styled-components/native";
import SearchIcon from "../assets/home/SearchIcon.svg";
import MypageIcon from "../assets/home/MypageIcon.svg";
import { useFonts } from "../styles";

const GNB = () => {
  const fontsLoaded = useFonts();

  const navigation = useNavigation();

  if (!fontsLoaded) {
    return null; // 폰트 로드될 때까지 렌더링 안 함
  }

  return (
    <Container>
      <Title>Caffeine Drop</Title>
      <Icons>
        <TouchableOpacity onPress={() => navigation.navigate("SearchPage")}>
          <SearchIcon
            width={responsiveWidth(24)}
            height={responsiveHeight(24)}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("SettingPage01")}>
          <MypageIcon
            width={responsiveWidth(24)}
            height={responsiveHeight(24)}
          />
        </TouchableOpacity>
      </Icons>
    </Container>
  );
};

export default GNB;

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${responsiveHeight(38)}px;
  background-color: #fafafa;
  height: ${responsiveHeight(56)}px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);
`;

const Title = styled.Text`
  font-family: PretendardSemiBold;
  font-size: ${responsiveFontSize(18)}px;
  font-weight: 600;
  line-height: ${responsiveHeight(24.84)}px;
  letter-spacing: -0.45;
  padding-left: ${responsiveWidth(24)}px;
`;

const Icons = styled.View`
  flex-direction: row;
  gap: ${responsiveWidth(16)}px;
  padding-right: ${responsiveWidth(16)}px;
`;
