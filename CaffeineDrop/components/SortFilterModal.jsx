import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";

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
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>정렬</Text>
          {sortOptions.map((option) => (
            <TouchableOpacity
              key={option}
              style={styles.option}
              onPress={() => {
                setSelectedSort(option);
                onClose();
              }}
            >
              <Text style={[styles.text, selectedSort === option && styles.selectedText]}>
                {option}
              </Text>
              {selectedSort === option && <Text style={styles.check}>✔</Text>}
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

export default SortFilterModal;