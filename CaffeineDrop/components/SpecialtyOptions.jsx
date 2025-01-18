import React from "react";
import styled from "styled-components/native";
import SpecialtyCoffeeIcon from "../assets/home/SpecialtyCoffeeIcon.svg";
import CoffeeBeansIcon from "../assets/home/CoffeeBeansIcon.svg";

const SpecialtyOptions = ({ onOptionSelect }) => {
  return (
    <OptionsContainer>
      <OptionButton onPress={() => onOptionSelect("specialtyCoffee")}>
        <SpecialtyCoffeeIcon width={24} height={24} />
        <OptionText>스페셜티 커피란?</OptionText>
      </OptionButton>
      <OptionButton onPress={() => onOptionSelect("coffeeBeans")}>
        <CoffeeBeansIcon width={24} height={24} />
        <OptionText>원두 진단하기</OptionText>
      </OptionButton>
    </OptionsContainer>
  );
};

export default SpecialtyOptions;

const OptionsContainer = styled.View`
  position: absolute;
  bottom: 100px;
  right: 16px;
  z-index: 3002;
  align-items: flex-end;
`;

const OptionButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: #321900;
  border-radius: 33px 22px 0px 33px;
  padding: 12px;
  margin-bottom: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;

const OptionText = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #FAFAFA;
  margin-left: 8px;
`;
