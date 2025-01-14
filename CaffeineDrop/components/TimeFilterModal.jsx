import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";

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
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>영업 시간</Text>
          {timeOptions.map((option) => (
            <TouchableOpacity
              key={option}
              style={styles.option}
              onPress={() => {
                setSelectedTime(option);
                onClose();
              }}
            >
              <Text style={[styles.text, selectedTime === option && styles.selectedText]}>
                {option}
              </Text>
              {selectedTime === option && <Text style={styles.check}>✔</Text>}
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  container: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  text: {
    fontSize: 14,
  },
  selectedText: {
    fontWeight: "bold",
  },
  check: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default TimeFilterModal;
