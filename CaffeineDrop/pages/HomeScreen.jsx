import React, { useState, useRef } from "react";
import { View, Animated, TouchableOpacity, PanResponder, Dimensions, Image, ImageBackground, TouchableWithoutFeedback, StyleSheet } from "react-native";
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
import BottomContainer from "../components/BottomContainer";
import SpecialtyOptions from "../components/SpecialtyOptions";
import NoResults from "../components/NoResults";

import CurrentLocationIcon from "../assets/home/CurrentLocationIcon.svg";
import DownIcon from "../assets/home/DownIcon.svg";
import UpIcon from "../assets/home/UpIcon.svg";

const GNB_HEIGHT = responsiveHeight(94); // GNB 높이
const DEFAULT_POSITION = responsiveHeight(316); // Bottom Sheet 기본 위치

const HomeScreen = () => {
  const translateY = useRef(new Animated.Value(DEFAULT_POSITION)).current;
  const locationTranslateY = useRef(new Animated.Value(0)).current; // CurrentLocationIcon 이동용
  const bottomContainerTranslateY = useRef(new Animated.Value(66)).current;
  const [isDirectionsPressed, setIsDirectionsPressed] = useState(false); // 버튼 눌림 상태 관리
  
  const [sortModalVisible, setSortModalVisible] = useState(false);
  const [timeModalVisible, setTimeModalVisible] = useState(false);
  const [selectedSort, setSelectedSort] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [showFilters, setShowFilters] = useState(true);
  const [showLogo, setShowLogo] = useState(true);
  const [showBottomContainer, setShowBottomContainer] = useState(false);

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

  const [selectedFilter, setSelectedFilter] = useState(null); // 선택된 필터 상태 관리
  const [cafeList, setCafeList] = useState([
    { id: 1, name: "카페1" },
    { id: 2, name: "카페2" },
  ]); // 카페 리스트 상태 (예시)
  
  // 필터 클릭 시 처리
  const handleFilterSelect = (filterName) => {
    if (selectedFilter === filterName) {
      // 동일한 필터 클릭 시 초기 상태로 복구
      setSelectedFilter(null);
      setCafeList([
        { id: 1, name: "카페1" },
        { id: 2, name: "카페2" },
      ]);
    } else {
      // 새로운 필터 클릭 시 선택
      setSelectedFilter(filterName);
  
      if (filterName === "unmanned") {
        setCafeList([]); // 조건에 맞는 카페가 없는 경우
      } else {
        setCafeList([
          { id: 1, name: "카페1" },
          { id: 2, name: "카페2" },
        ]); // 조건에 맞는 카페가 있는 경우
      }
    }
  };

  const handleBackgroundPress = () => {
    setIsDirectionsPressed(false);
    setShowDirectionsOptions(false);
    setIsLogoPressed(false);
  };

  const [setShowDirectionsOptions] = useState(false); // 길찾기 옵션 토글 상태

  const handleToggleDirections = () => {
    setShowDirectionsOptions((prev) => !prev);
    setIsDirectionsPressed((prev) => !prev);
  };

  const handleNaverDirections = () => {
    console.log("네이버 지도로 연결"); // 나중에 네이버 지도 API 연결
  };

  const handleKakaoDirections = () => {
    console.log("카카오 지도로 연결"); // 나중에 카카오 지도 API 연결
  };
  
  const [isLogoPressed, setIsLogoPressed] = useState(false); // LogoIcon 상태 관리

  const handleLogoPress = () => {
    setIsLogoPressed((prev) => !prev);
  };

  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isCafeLocationSelected, setIsCafeLocationSelected] = useState(false);

  const handleOptionSelect = (option) => {
    console.log(`${option} 선택됨`);
    // 추가 로직 작성 가능
  };

  const resetToInitialState = () => {
    Animated.parallel([
      // 아이콘 위치 초기화
      ...animatedLocations.map((loc, index) =>
        Animated.timing(loc.top, {
          toValue: initialLocations[index].top,
          duration: 300,
          useNativeDriver: false,
        })
      ),
      ...animatedLocations.map((loc, index) =>
        Animated.timing(loc.left, {
          toValue: initialLocations[index].left,
          duration: 300,
          useNativeDriver: false,
        })
      ),
      // Bottom Sheet 초기화
      Animated.timing(translateY, {
        toValue: DEFAULT_POSITION,
        duration: 300,
        useNativeDriver: true,
      }),
      // CurrentLocationIcon 초기화
      Animated.timing(locationTranslateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      // BottomContainer 아래로 숨김
      Animated.timing(bottomContainerTranslateY, {
        toValue: 66,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // 애니메이션 완료 후 상태 초기화
      setShowFilters(true);
      setSelectedLocation(null);
      setIsCafeLocationSelected(false);
      setShowBottomContainer(false);
      setShowLogo(true);
    });
  };
  
  const handleSelectLocation = (id) => {
    const clickedLocation = animatedLocations.find((loc) => loc.id === id);
    if (!clickedLocation) return;
  
    const centerX = responsiveWidth(160);
    const centerY = responsiveHeight(116);
  
    const deltaY = centerY - clickedLocation.top.__getValue();
    const deltaX = centerX - clickedLocation.left.__getValue();
  
    // Bottom Sheet와 BottomContainer 애니메이션 병렬 실행
    setShowBottomContainer(true); // 먼저 렌더링 활성화
    Animated.parallel([
      // 모든 아이콘 위치 이동
      ...animatedLocations.map((loc) =>
        Animated.timing(loc.top, {
          toValue: loc.top.__getValue() + deltaY,
          duration: 300,
          useNativeDriver: false,
        })
      ),
      ...animatedLocations.map((loc) =>
        Animated.timing(loc.left, {
          toValue: loc.left.__getValue() + deltaX,
          duration: 300,
          useNativeDriver: false,
        })
      ),
      // Bottom Sheet 위로 이동
      Animated.timing(translateY, {
        toValue: DEFAULT_POSITION - 66,
        duration: 300,
        useNativeDriver: true,
      }),
      // CurrentLocationIcon 이동
      Animated.timing(locationTranslateY, {
        toValue: -66,
        duration: 300,
        useNativeDriver: true,
      }),
      // BottomContainer 위로 이동
      Animated.timing(bottomContainerTranslateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  
    setSelectedLocation(id);
    setIsCafeLocationSelected(true);
    setShowFilters(false);
    setShowLogo(false);
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

  return (
    <Container>
      {/* 전체 화면 반투명 배경 */}
      {isDirectionsPressed && (
        <TouchableWithoutFeedback
          onPress={handleBackgroundPress}
          pointerEvents="box-none"
        >
          <BackgroundOverlay />
        </TouchableWithoutFeedback>
      )}

      {isLogoPressed && (
        <TouchableWithoutFeedback
          onPress={() => setIsLogoPressed(false)}
          pointerEvents="box-none"
        >
          <BackgroundOverlay />
        </TouchableWithoutFeedback>
      )}

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
              width={`${responsiveWidth(50)}px`}
              height={`${responsiveHeight(50)}px`}
            />
          </TouchableOpacity>
        </Animated.View>

      </MapBackground>

      {/* GNB (고정) */}
      <GNBContainer>
        <GNB />
      </GNBContainer>

      {/* 로고 아이콘 */}
      {!showBottomContainer && (
        <LogoButton onPress={handleLogoPress}>
          <Image
            source={
              isLogoPressed
                ? require("../assets/home/LogoIconAfterClick.png")
                : require("../assets/home/LogoIconBeforeClick.png")
            }
            style={{
              width: responsiveWidth(50),
              height: responsiveHeight(50),
            }}
            resizeMode="contain"
          />
        </LogoButton>
      )}

      {/* 스페셜티 커피란? 및 원두 진단하기 버튼 */}
      {isLogoPressed && (
        <SpecialtyOptions onOptionSelect={handleOptionSelect} />
      )}

      {/* Bottom Sheet (상단 필터 + 카페 리스트) */}
      <AnimatedBottomSheet
        style={{
          transform: [{ translateY }],
          height: responsiveHeight(666),
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
            <TopFilter 
              panHandlers={panResponder.panHandlers} 
              onFilterSelect={handleFilterSelect} // handleFilterSelect 전달
              selectedFilter={selectedFilter} // 선택된 필터 상태 전달
            />
            <SortContainer>
              <FilterButton onPress={() => setSortModalVisible(!sortModalVisible)}>
                <SortText selected={selectedSort !== ""}>{selectedSort || "인기순"}</SortText>
                {sortModalVisible ? (
                  <UpIcon width={`${responsiveWidth(17)}px`} height={`${responsiveHeight(17)}px`} style={{ marginLeft: 4 }} />
                ) : (
                  <DownIcon width={`${responsiveWidth(17)}px`} height={`${responsiveHeight(17)}px`} style={{ marginLeft: 4 }} />
                )}
              </FilterButton>

              <FilterButton onPress={() => setTimeModalVisible(!timeModalVisible)}>
                <SortText selected={selectedTime !== ""}>
                  {selectedTime === ""
                    ? "전체"
                    : selectedTime
                        .replace("영업", "")
                        .replace("오픈", "")
                        .replace("마감", "")
                        .trim()}
                </SortText>
                {timeModalVisible ? (
                  <UpIcon width={`${responsiveWidth(17)}px`} height={`${responsiveHeight(17)}px`} style={{ marginLeft: 4 }} />
                ) : (
                  <DownIcon width={`${responsiveWidth(17)}px`} height={`${responsiveHeight(17)}px`} style={{ marginLeft: 4 }} />
                )}
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

        {/* 카페 리스트 또는 NoResults */}
        {cafeList.length === 0 ? (
          <NoResults /> // 카페 리스트가 없을 때 NoResults 표시
        ) : (
          <CafeList>
            {isCafeLocationSelected && selectedLocation
              ? [
                  {
                    name: "언힙커피로스터스",
                    location: "인천 미추홀구 인하로67번길 6 2층",
                    distance: "600m",
                    hashtag: "#24시간",
                    rating: 4.0,
                    reviews: 605,
                    isFavorite: true,
                    isSpecialty: true,
                    isBothBadges: true,
                  },
                  {
                    name: "언힙커피로스터스",
                    location: "인천 미추홀구 인하로67번길 6 2층",
                    distance: "600m",
                    hashtag: "#24시간",
                    rating: 4.0,
                    reviews: 605,
                    isSpecialty: true,
                    isClosed: true,
                  },
                ]
                  .filter((_, index) => index === 0) // 선택된 카페 하나만 표시
                  .map((cafe, index) => (
                    <CafeListItem
                      key={index}
                      cafe={{ ...cafe, isFirst: true }}
                      isSelected={true}
                    />
                  ))
              : [
                  {
                    name: "언힙커피로스터스",
                    location: "인천 미추홀구 인하로67번길 6 2층",
                    distance: "600m",
                    hashtag: "#24시간",
                    rating: 4.0,
                    reviews: 605,
                    isFavorite: true,
                    isSpecialty: true,
                    isBothBadges: true,
                  },
                  {
                    name: "언힙커피로스터스",
                    location: "인천 미추홀구 인하로67번길 6 2층",
                    distance: "600m",
                    hashtag: "#24시간",
                    rating: 4.0,
                    reviews: 605,
                    isSpecialty: true,
                    isClosed: true,
                  },
                ].map((cafe, index) => (
                  <CafeListItem
                    key={index}
                    cafe={{ ...cafe, isFirst: index % 1 === 0 }}
                    isSelected={false}
                  />
                ))}
          </CafeList>
        )}
      

      </AnimatedBottomSheet>

      <Animated.View
        style={{
          transform: [{ translateY: bottomContainerTranslateY }],
          position: "absolute",
          bottom: 0,
          width: "100%",
          zIndex: 1500,
        }}
      >

        {showBottomContainer && (
          <BottomContainer
            isDirectionsPressed={isDirectionsPressed}
            setIsDirectionsPressed={setIsDirectionsPressed}
            handleNaverDirections={handleNaverDirections}
            handleKakaoDirections={handleKakaoDirections}
          />
        )}
      </Animated.View>
    </Container>
  );
};

export default HomeScreen;

const Container = styled.View`
  flex: 1;
  background-color: #fafafa;
  margin-bottom: ${responsiveHeight(42)}px;
`;

/* ImageBackground를 이용한 MapView */
const MapBackground = styled(ImageBackground)`
  width: ${responsiveWidth(360)}px;
  height: ${responsiveHeight(349)}px;
  top: ${GNB_HEIGHT}px;
  flex-shrink: 0;
  align-self: center;
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

const AnimatedBottomSheet = styled(Animated.View)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: ${responsiveHeight(94)}px;
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
  margin-bottom: ${responsiveHeight(12)}px;
  margin-top: ${responsiveHeight(16)}px;
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
  padding: ${responsiveHeight(8)}px ${responsiveWidth(24)}px;
  border-bottom-width: ${responsiveWidth(0.5)}px;
  border-bottom-color: #D9D9D9;
  background-color: #fafafa;
`;

const FilterButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: ${responsiveHeight(6)}px ${responsiveWidth(12)}px;
  background-color: #fafafa;
`;  

const SortText = styled.Text`
  font-size: ${responsiveFontSize(12)}px;
  font-weight: ${(props) => (props.selected ? "600" : "400")};
  color: #000;
`;

const CafeList = styled.ScrollView`
  flex: 1;
  padding-bottom: ${responsiveHeight(20)}px;
`;

const BackgroundOverlay = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.12);
  z-index: 1000;
`;

const LogoButton = styled.TouchableOpacity`
  position: absolute;
  bottom: ${responsiveHeight(13)}px;
  right: ${responsiveWidth(23)}px;
  justify-content: center;
  align-items: center;
  z-index: 3000;
`;