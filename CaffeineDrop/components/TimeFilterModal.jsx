import React from "react";
import { Modal, TouchableOpacity } from "react-native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../utils/responsive";
import styled from "styled-components/native";
import CloseIcon from "../assets/home/CloseIcon.svg";

const timeOptions = [
  "전체", "24시간 영업", "10시 이전 오픈", "23시 이후 마감"
];

const TimeFilterModal = ({ visible, onClose, selectedTime, setSelectedTime }) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <Overlay>
        <Container>
          <Header>
            <Title>영업 시간</Title>
            <TouchableOpacity onPress={onClose}>
              <CloseIcon width={`${responsiveWidth(24)}px`} height={`${responsiveHeight(24)}px`} />
            </TouchableOpacity>
          </Header>
          {timeOptions.map((option) => (
            <Option
              key={option}
              onPress={() => {
                setSelectedTime(option);
                onClose();
              }}
            >
              <OptionText selected={selectedTime === option}>{option}</OptionText>
              {selectedTime === option && <CheckMark>✓</CheckMark>}
            </Option>
          ))}
        </Container>
      </Overlay>
    </Modal>
  );
};

export default TimeFilterModal;

const Overlay = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

const Container = styled.View`
  background-color: #fafafa;
  padding: ${responsiveHeight(8)}px ${responsiveWidth(24)}px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  box-shadow: 0px -8px 16px rgba(0, 0, 0, 0.12);
  margin-bottom: ${responsiveHeight(42)}px;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: ${responsiveHeight(12)}px;
  padding-bottom: ${responsiveHeight(16)}px;
`;

const Title = styled.Text`
  font-size: ${responsiveFontSize(16)}px;
  font-weight: 600;
`;

const Option = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  padding-vertical: ${responsiveHeight(8)}px;
  width: ${responsiveWidth(312)}px;
  height: ${responsiveHeight(40)}px;
`;

const OptionText = styled.Text`
  font-size: ${responsiveFontSize(14)}px;
  font-weight: ${(props) => (props.selected ? "bold" : "normal")};
  color: ${(props) => (props.selected ? "#000" : "#666")};
`;

const CheckMark = styled.Text`
  font-size: ${responsiveFontSize(16)}px;
  font-weight: 600;
`;
