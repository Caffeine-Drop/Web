import React, { useRef, useEffect } from "react";
import { Animated, PanResponder, Dimensions } from "react-native";
import styled from "styled-components/native";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const ANIMATION_DURATION = 300;

const NewEmptySlide = ({ onClose }) => {
  const translateY = useRef(new Animated.Value(SCREEN_HEIGHT)).current;

  useEffect(() => {
    // Slide up on mount
    Animated.timing(translateY, {
      toValue: 0, // Slide to the top
      duration: ANIMATION_DURATION,
      useNativeDriver: true,
    }).start();
  }, []);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) =>
        Math.abs(gestureState.dy) > 5,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dy > 0) { // Only allow downward swipe
          translateY.setValue(gestureState.dy);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 100) {
          // Slide down and close
          Animated.timing(translateY, {
            toValue: SCREEN_HEIGHT,
            duration: ANIMATION_DURATION,
            useNativeDriver: true,
          }).start(() => {
            onClose && onClose();
          });
        } else {
          // Return to original position
          Animated.timing(translateY, {
            toValue: 0,
            duration: ANIMATION_DURATION,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  return (
    <AnimatedContainer
      style={{
        transform: [{ translateY }],
      }}
      {...panResponder.panHandlers}
    >
      <DragHandleWrapper>
        <DragHandle />
      </DragHandleWrapper>
      {/* Add any content you want here. For now, it's empty */}
      <EmptyContent>
        <EmptyText>No Search Query Entered</EmptyText>
      </EmptyContent>
    </AnimatedContainer>
  );
};

export default NewEmptySlide;

const AnimatedContainer = styled(Animated.View)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: ${Dimensions.get("window").height}px;
  background-color: #fafafa;
  z-index: 20;
  elevation: 4;
  shadow-color: rgba(0, 0, 0, 0.1);
  shadow-offset: 0px -4px;
  shadow-opacity: 0.5;
  shadow-radius: 8px;
`;

const DragHandleWrapper = styled.View`
  align-items: center;
  padding-bottom: 12px;
  padding-top: 16px;
`;

const DragHandle = styled.View`
  width: 64px;
  height: 5px;
  border-radius: 5px;
  background: #D9D9D9;
`;

const EmptyContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const EmptyText = styled.Text`
  font-size: 16px;
  color: #999;
`;
