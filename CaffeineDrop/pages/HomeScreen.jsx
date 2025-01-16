import React, { useState, useRef } from "react";
import { View, Text, Animated, TouchableOpacity, PanResponder, Dimensions, ImageBackground, StyleSheet } from "react-native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../utils/responsive";
import styled from "styled-components/native";
import GNB from "../components/GNB";
import TopFilter from "../components/TopFilter";
import CafeListItem from "../components/CafeListItem";
import SortFilterModal from "../components/SortFilterModal";
import TimeFilterModal from "../components/TimeFilterModal";
import CafeLocation from "../components/CafeLocation";
import CurrentLocationIcon from "../assets/home/CurrentLocationIcon.svg";
import DownIcon from "../assets/home/DownIcon.svg";
import UpIcon from "../assets/home/UpIcon.svg";
import LogoIcon from "../assets/home/LogoIcon.svg";
import CafeLocationIcon from "../assets/home/CafeLocationIcon.svg";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const GNB_HEIGHT = 94; // GNB 높이
const DEFAULT_POSITION = SCREEN_HEIGHT - GNB_HEIGHT - 350; // Bottom Sheet 기본 위치

const HomeScreen = () => {
  const translateY = useRef(new Animated.Value(DEFAULT_POSITION)).current;
  const locationTranslateY = useRef(new Animated.Value(0)).current; // CurrentLocationIcon 이동용
  const [sortModalVisible, setSortModalVisible] = useState(false);
  const [timeModalVisible, setTimeModalVisible] = useState(false);
  const [selectedSort, setSelectedSort] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [showFilters, setShowFilters] = useState(true);

  const initialLocations = [
    { id: "cafe1", top: responsiveHeight(76), left: responsiveWidth(170) },
    { id: "cafe2", top: responsiveHeight(126), left: responsiveWidth(100) },
    { id: "cafe3", top: responsiveHeight(146), left: responsiveWidth(230) },
    { id: "cafe4", top: responsiveHeight(196), left: responsiveWidth(160) },
  ];
  
  const animatedLocations = useRef(
    initialLocations.map((loc) => ({
      id: loc.id,
      top: new Animated.Value(loc.top),
      left: new Animated.Value(loc.left),
    }))
  ).current;

  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isCafeLocationSelected, setIsCafeLocationSelected] = useState(false);

  const resetToInitialState = () => {
    // 애니메이션 초기화
    animatedLocations.forEach((loc, index) => {
      Animated.timing(loc.top, {
        toValue: initialLocations[index].top, // 초기 위치
        duration: 300,
        useNativeDriver: false,
      }).start();
  
      Animated.timing(loc.left, {
        toValue: initialLocations[index].left, // 초기 위치
        duration: 300,
        useNativeDriver: false,
      }).start();
    });
  
    // Bottom Sheet와 CurrentLocationIcon 초기화
    Animated.timing(translateY, {
      toValue: DEFAULT_POSITION,
      duration: 300,
      useNativeDriver: true,
    }).start();
  
    Animated.timing(locationTranslateY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  
    // 상태 초기화
    setShowFilters(true);
    setSelectedLocation(null);
    setIsCafeLocationSelected(false);
  };
  
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        if (gesture.dy < 0) {
          translateY.setValue(DEFAULT_POSITION + gesture.dy);
        }
      },
      onPanResponderRelease: (_, gesture) => {
        if (gesture.dy < -100) {
          // 완전히 올리기
          Animated.timing(translateY, {
            toValue: 0, // GNB 바로 아래로 이동
            duration: 300,
            useNativeDriver: true,
          }).start();
        } else {
          // 원래 위치로 되돌리기
          Animated.timing(translateY, {
            toValue: DEFAULT_POSITION,
            duration: 300,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  const handleSelectLocation = (id) => {
    // 상태 업데이트
    setIsCafeLocationSelected(true);
    // Find clicked icon's current location
    const clickedLocation = animatedLocations.find((loc) => loc.id === id);
    if (!clickedLocation) return;

    // Calculate target center position
    const centerX = responsiveWidth(180); // Screen horizontal center
    const centerY = responsiveHeight(116); // 116px below the map start

    // Calculate deltas
    const currentTop = clickedLocation.top.__getValue(); // Get current value of Animated.Value
    const currentLeft = clickedLocation.left.__getValue();
    const deltaY = centerY - currentTop;
    const deltaX = centerX - currentLeft;

    // Animate all icons to maintain relative positions
    animatedLocations.forEach((loc) => {
      Animated.timing(loc.top, {
        toValue: loc.top.__getValue() + deltaY,
        duration: 300, // Animation duration in milliseconds
        useNativeDriver: false,
      }).start();

      Animated.timing(loc.left, {
        toValue: loc.left.__getValue() + deltaX,
        duration: 300,
        useNativeDriver: false,
      }).start();
    });

    // 애니메이션으로 필터 숨기고 바텀시트를 위로 이동
    setShowFilters(false);
    // Animate Bottom Sheet and CurrentLocationIcon
    Animated.timing(translateY, {
      toValue: DEFAULT_POSITION - 66, // 66px 위로 이동
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(locationTranslateY, {
      toValue: -66, // CurrentLocationIcon 이동
      duration: 300,
      useNativeDriver: true,
    }).start();

    setSelectedLocation(id); // Update selected location
  };

  return (
    <Container>
      {/* 지도 */}
      <MapBackground source={require("../assets/home/MapImage.png")}>

        <MapContainer>
        {animatedLocations.map((loc) => (
          <Animated.View
            key={loc.id}
            style={{
              position: "absolute",
              top: loc.top,
              left: loc.left,
            }}
          >
            <CafeLocation
              isSelected={selectedLocation === loc.id}
              onSelect={() => handleSelectLocation(loc.id)}
            />
          </Animated.View>
        ))}
        </MapContainer>

        {/* 현재 위치 아이콘 */}
        <Animated.View
          style={{
            position: "absolute",
            top: responsiveHeight(249),
            left: responsiveWidth(24),
            transform: [{ translateY: locationTranslateY }],
          }}
        >
          <TouchableOpacity onPress={resetToInitialState}>
            <CurrentLocationIcon
              width={`${responsiveHeight(43)}px`}
              height={`${responsiveWidth(43)}px`}
            />
          </TouchableOpacity>
        </Animated.View>

      </MapBackground>

      {/* GNB (고정) */}
      <GNBContainer>
        <GNB />
      </GNBContainer>

      {/* 🏷️ LogoIcon (TopFilter 기준으로 배치) */}
      <LogoContainer style={{ top: DEFAULT_POSITION + GNB_HEIGHT + 245}}>
        <LogoIcon width={24} height={24} />
      </LogoContainer>

      {/* Bottom Sheet (상단 필터 + 카페 리스트) */}
      <AnimatedBottomSheet
        style={{
          transform: [{ translateY }],
          height: SCREEN_HEIGHT - GNB_HEIGHT,
          borderTopLeftRadius: translateY.interpolate({
            inputRange: [Math.min(GNB_HEIGHT, DEFAULT_POSITION), Math.max(GNB_HEIGHT, DEFAULT_POSITION)],
            outputRange: [0, 24], // 완전히 올리면 radius 제거
            extrapolate: "clamp",
          }),
          borderTopRightRadius: translateY.interpolate({
            inputRange: [Math.min(GNB_HEIGHT, DEFAULT_POSITION), Math.max(GNB_HEIGHT, DEFAULT_POSITION)],
            outputRange: [0, 24], // 완전히 올리면 radius 제거
            extrapolate: "clamp",
          }),
        }}
      >
        <DragHandleWrapper {...panResponder.panHandlers}>
          <DragHandle />
        </DragHandleWrapper>

        {/* 터치 가능한 TopFilter */}
        {showFilters && (
          <>
            <TopFilter panHandlers={panResponder.panHandlers} />

            <SortContainer>
              <FilterButton onPress={() => setSortModalVisible(!sortModalVisible)}>
                <SortText selected={selectedSort !== ""}>{selectedSort || "인기순"}</SortText>
                {sortModalVisible ? <UpIcon width={17} height={17} style={{ marginLeft: 4 }} /> : <DownIcon width={17} height={17} style={{ marginLeft: 4 }} />}
              </FilterButton>

              <FilterButton onPress={() => setTimeModalVisible(!timeModalVisible)}>
                <SortText selected={selectedTime !== ""}>{selectedTime || "전체"}</SortText>
                {timeModalVisible ? <UpIcon width={17} height={17} style={{ marginLeft: 4 }} /> : <DownIcon width={17} height={17} style={{ marginLeft: 4 }} />}
              </FilterButton>
            </SortContainer>
          </>
        )}

        {/* 정렬 필터 모달 */}
        <SortFilterModal
          visible={sortModalVisible}
          onClose={() => setSortModalVisible(false)}
          selectedSort={selectedSort}
          setSelectedSort={setSelectedSort}
        />

        {/* 영업 시간 필터 모달 */}
        <TimeFilterModal
          visible={timeModalVisible}
          onClose={() => setTimeModalVisible(false)}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
        />

        {/* 카페 리스트 */}
        <CafeList>
          {[
            {
              name: "언힙커피로스터스",
              location: "인천 미추홀구 인하로67번길 6 2층",
              distance: "600m",
              rating: 4.0,
              reviews: 605,
              isFavorite: true,
              isSpecialty: true,
              isBothBadges: true
            },
            {
              name: "언힙커피로스터스",
              location: "인천 미추홀구 인하로67번길 6 2층",
              distance: "600m",
              rating: 4.0,
              reviews: 605,
              isSpecialty: true,
              isClosed: true
            }
          ].map((cafe, index) => (
            <CafeListItem
              key={index}
              cafe={{ ...cafe, isFirst: index % 1 === 0 }}
              isSelected={isCafeLocationSelected}
            />
          ))}
        </CafeList>

      </AnimatedBottomSheet>
    </Container>
  );
};

export default HomeScreen;

const Container = styled.View`
  flex: 1;
  background-color: #fafafa;
`;

/* ImageBackground를 이용한 MapView */
const MapBackground = styled(ImageBackground)`
  width: ${responsiveWidth(360)}px;
  height: ${responsiveHeight(349)}px;
  top: ${GNB_HEIGHT}px;
  flex-shrink: 0;
  align-self: center;
`;

const MapView = styled.View`
  flex: 1;
`;

const MapContainer = styled.View`
  position: relative;
  width: ${responsiveWidth(360)}px;
  height: ${responsiveHeight(349)}px;
`;

const GNBContainer = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10;
`;

const LogoContainer = styled.View`
  position: absolute;
  top: ${DEFAULT_POSITION + GNB_HEIGHT + 245}px;
  right: 24px;
  width: 43px;
  height: 43px;
  border-radius: 46px;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);
  background-image: linear-gradient(90deg, #3F2D1E 0%, #6A331B 100%);
`;

const AnimatedBottomSheet = styled(Animated.View)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: ${GNB_HEIGHT}px;
  background-color: #fafafa;
  z-index: 20;
  shadow-color: rgba(0, 0, 0, 0.02);
  shadow-offset: 0px -4px;
  shadow-opacity: 1;
  shadow-radius: 4px;
  elevation: 4;
`;

const DragHandleWrapper = styled.View`
  align-items: center;
  margin-bottom: 12px;
  margin-top: 16px;
`;

const DragHandle = styled.View`
  width: ${responsiveWidth(64)}px;
  height: ${responsiveHeight(5)}px;
  border-radius: 5px;
  background: #D9D9D9;
`;

const SortContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 24px;
  border-bottom-width: 0.5px;
  border-bottom-color: #D9D9D9;
  background-color: #fafafa;
`;

const FilterButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 6px 12px;
  background-color: #fafafa;
`;  

const SortText = styled.Text`
  font-size: 12px;
  font-weight: ${(props) => (props.selected ? "600" : "400")};
  color: #000;
`;

const CafeList = styled.ScrollView`
  flex: 1;
  padding-bottom: 20px;
`;

/* 📍 현재 위치 아이콘의 정확한 위치 설정 */
const CurrentLocationMarker = styled.View`
  position: absolute;
  top: ${responsiveHeight(249)}px;
  left: ${responsiveWidth(24)}px;
`;