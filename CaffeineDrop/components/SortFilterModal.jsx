import React from "react";
import { Modal, TouchableOpacity } from "react-native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../utils/responsive";
import styled from "styled-components/native";
import CloseIcon from "../assets/home/CloseIcon.svg";

const sortOptions = [
  "인기순", "맛순", "거리순", "인테리어순", "청결도순", "가심비순", "후기 많은 순"
];

const SortFilterModal = ({ visible, onClose, selectedSort, setSelectedSort }) => {
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
            <Title>정렬</Title>
            <TouchableOpacity onPress={onClose}>
              <CloseIcon width={24} height={24} />
            </TouchableOpacity>
          </Header>
          {sortOptions.map((option) => (
            <Option
              key={option}
              onPress={() => {
                setSelectedSort(option);
                onClose();
              }}
            >
              <OptionText selected={selectedSort === option}>{option}</OptionText>
              {selectedSort === option && <CheckMark>✓</CheckMark>}
            </Option>
          ))}
        </Container>
      </Overlay>
    </Modal>
  );
};

export default SortFilterModal;

const Overlay = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

const Container = styled.View`
  background-color: #fafafa;
  padding: ${responsiveHeight(8)}px ${responsiveWidth(24)}px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.12);
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
