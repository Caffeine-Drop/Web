import React from "react";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../utils/responsive";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import SpecialtyCoffeeIcon from "../assets/home/SpecialtyCoffeeIcon.svg";
import CoffeeBeansIcon from "../assets/home/CoffeeBeansIcon.svg";
import { useFonts } from "../styles";

const SpecialtyOptions = () => {
  const fontsLoaded = useFonts();

  const navigation = useNavigation();

  if (!fontsLoaded) {
    return null; // 폰트 로드될 때까지 렌더링 안 함
  }

  return (
    <OptionsContainer>
      <OptionButton onPress={() => navigation.navigate("EventPage12")}>
        <SpecialtyCoffeeIcon
          width={`${responsiveWidth(24)}px`}
          height={`${responsiveHeight(24)}px`}
        />
        <OptionText>스페셜티 커피란?</OptionText>
      </OptionButton>
      <OptionButton onPress={() => navigation.navigate("EventPage01")}>
        <CoffeeBeansIcon
          width={`${responsiveWidth(24)}px`}
          height={`${responsiveHeight(24)}px`}
        />
        <OptionText>원두 진단하기</OptionText>
      </OptionButton>
    </OptionsContainer>
  );
};

export default SpecialtyOptions;

const OptionsContainer = styled.View`
  position: absolute;
  bottom: ${responsiveHeight(66)}px;
  right: ${responsiveWidth(24)}px;
  z-index: 3002;
  align-items: flex-end;
`;

const OptionButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: #321900;
  border-radius: 33px 22px 0px 33px;
  padding: ${responsiveHeight(12)}px;
  margin-bottom: ${responsiveHeight(8)}px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;

const OptionText = styled.Text`
  font-family: PretendardSemiBold;
  font-size: ${responsiveFontSize(14)}px;
  font-weight: 600;
  line-height: ${responsiveHeight(19.32)}px;
  letter-spacing: -0.35px;
  color: #fafafa;
  margin-left: ${responsiveWidth(8)}px;
`;
