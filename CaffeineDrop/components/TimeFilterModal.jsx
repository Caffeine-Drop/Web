import React from "react";
import { Modal, TouchableOpacity } from "react-native";
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
              <CloseIcon width={20} height={20} />
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
  padding: 24px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  shadow-color: rgba(0, 0, 0, 0.04);
  shadow-offset: 0px -8px;
  shadow-opacity: 1;
  shadow-radius: 16px;
  elevation: 4;`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;

const Option = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  padding-vertical: 8px;
  width: 312px;
  height: 40px;
`;

const OptionText = styled.Text`
  font-size: 14px;
  font-weight: ${(props) => (props.selected ? "bold" : "normal")};
  color: ${(props) => (props.selected ? "#000" : "#666")};
`;

const CheckMark = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;
