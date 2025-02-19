import React, { useState, useRef, useEffect } from "react";
import {
  View,
  ScrollView,
  Animated,
  TouchableOpacity,
  PanResponder,
  Dimensions,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../utils/responsive";
import styled from "styled-components/native";
import GNB from "../components/GNB";
import TopFilter from "../components/TopFilter";
import CafeListItem from "../components/CafeListItem";
import CafeListItemSkeleton from "../components/CafeListItemSkeleton";
import SortFilterModal from "../components/SortFilterModal";
import TimeFilterModal from "../components/TimeFilterModal";
import CafeLocation from "../components/CafeLocation";
import BottomContainer from "../components/BottomContainer";
import SpecialtyOptions from "../components/SpecialtyOptions";
import NoResults from "../components/NoResults";
import CurrentLocationIcon from "../assets/home/CurrentLocationIcon.svg";
import DownIcon from "../assets/home/DownIcon.svg";
import UpIcon from "../assets/home/UpIcon.svg";
import { useFonts } from "../styles";

import useFetchCafeList from "../hooks/useFetchCafeList";

const GNB_HEIGHT = responsiveHeight(94); // GNB 높이
const DEFAULT_POSITION = responsiveHeight(316); // Bottom Sheet 기본 위치

const HomeScreen = ({ navigation }) => {
  const [region, setRegion] = useState({
    latitude: 37.5665, // 기본값: 서울
    longitude: 126.978,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  const fontsLoaded = useFonts();
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
  const [selectedCafe, setSelectedCafe] = useState(null);
  const { cafeList, setCafeList, isLoading, setIsLoading, error } =
    useFetchCafeList();

  useEffect(() => {
    if (cafeList.length > 0) {
      setRegion({
        latitude: cafeList[0].latitude, // 첫 번째 카페 위치로 초기 설정
        longitude: cafeList[0].longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    }
  }, [cafeList]);

  // if (isLoading) {
  //   return (
  //     <LoadingContainer>
  //       <ActivityIndicator size="large" color="#000" />
  //       <Text>카페 정보를 불러오는 중...</Text>
  //     </LoadingContainer>
  //   );
  // }

  if (error) {
    return (
      <NoResults message="카페 데이터를 불러오는 중 오류가 발생했습니다." />
    );
  }

  // const initialLocations = [
  //   { id: "cafe1", top: responsiveHeight(76), left: responsiveWidth(170) },
  //   { id: "cafe2", top: responsiveHeight(126), left: responsiveWidth(100) },
  //   { id: "cafe3", top: responsiveHeight(146), left: responsiveWidth(230) },
  //   { id: "cafe4", top: responsiveHeight(196), left: responsiveWidth(160) },
  // ];

  // const animatedLocations = useRef(
  //   initialLocations.map((loc) => ({
  //     id: loc.id,
  //     top: new Animated.Value(loc.top),
  //     left: new Animated.Value(loc.left),
  //   }))
  // ).current;

  const [selectedFilter, setSelectedFilter] = useState(null); // 선택된 필터 상태 관리

  // 필터 클릭 시 처리
  const handleFilterSelect = (filterName) => {
    setIsLoading(true); // 필터 클릭 시 로딩 시작

    if (selectedFilter === filterName) {
      // 동일한 필터 클릭 시 초기 상태로 복구
      setSelectedFilter(null);

      setTimeout(() => {
        // 2초 후 초기 리스트로 복원
        setCafeList([
          {
            id: 2,
            name: "언힙커피로스터스",
            location: "인천 미추홀구 인하로67번길 6 2층",
            distance: "600m",
            hashtag: "#24시간",
            rating: 4.0,
            reviews: 605,
            isFavorite: true,
            isSpecialty: true,
          },
          {
            id: 1,
            name: "언힙커피로스터스",
            location: "인천 미추홀구 인하로67번길 6 2층",
            distance: "600m",
            hashtag: "#24시간",
            rating: 4.0,
            reviews: 605,
            isSpecialty: true,
            isClosed: true,
          },
        ]);
        setIsLoading(false); // 로딩 종료
      }, 2000); // 2초 후 로딩 종료
    } else {
      // 새로운 필터 클릭 시 선택
      setSelectedFilter(filterName);

      setTimeout(() => {
        if (filterName === "unmanned") {
          setCafeList([]); // 무인 카페 필터 시 리스트 없음
        } else if (filterName === "specialty") {
          setCafeList([
            {
              id: 3,
              name: "블루보틀",
              location: "서울 성동구 왕십리로 8",
              distance: "800m",
              hashtag: "#스페셜티 #핸드드립",
              rating: 4.7,
              reviews: 900,
              isFavorite: true,
              isSpecialty: true,
            },
          ]);
        } else {
          // 기본 필터일 때 리스트
          setCafeList([
            {
              id: 4,
              name: "카페 라떼아트",
              location: "서울 마포구 서교동 123",
              distance: "1.5km",
              hashtag: "#라떼아트 #디저트맛집",
              rating: 4.2,
              reviews: 310,
            },
          ]);
        }
        setIsLoading(false); // 필터 적용 후 로딩 종료
      }, 2000);
    }
  };

  const handleBackgroundPress = () => {
    if (selectedLocation) {
      resetToInitialState(); // 카페 위치 선택 시 초기화
    }

    if (isDirectionsPressed) {
      setIsDirectionsPressed(false); // 길찾기 옵션 닫기
    }

    if (showDirectionsOptions) {
      setShowDirectionsOptions(false); // 길찾기 옵션 토글 해제
    }

    if (isLogoPressed) {
      setIsLogoPressed(false); // 로고 초기화
    }
  };

  const [showDirectionsOptions, setShowDirectionsOptions] = useState(false);

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

  const handleSelectCafe = (cafe) => {
    setSelectedCafe(cafe); // 선택된 카페 저장
  };

  const resetToInitialState = () => {
    setIsLoading(true);

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
    setTimeout(() => {
      setCafeList([
        {
          id: 1,
          name: "언힙커피로스터스",
          location: "인천 미추홀구 인하로67번길 6 2층",
          distance: "600m",
          hashtag: "#24시간",
          rating: 4.0,
          reviews: 605,
          isFavorite: true,
          isSpecialty: true,
        },
        {
          id: 2,
          name: "언힙커피로스터스",
          location: "인천 미추홀구 인하로67번길 6 2층",
          distance: "600m",
          hashtag: "#24시간",
          rating: 4.0,
          reviews: 605,
          isSpecialty: true,
          isClosed: false,
        },
      ]);
      setIsLoading(false); // 로딩 종료
    }, 2000);
  };

  const handleSelectLocation = (id) => {
    setIsLoading(true);

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
        toValue: DEFAULT_POSITION - responsiveHeight(66),
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

    setTimeout(() => {
      setIsLoading(false);
      setCafeList([
        {
          id: 1,
          name: "언힙커피로스터스",
          location: "인천 미추홀구 인하로67번길 6 2층",
          distance: "600m",
          hashtag: "#24시간",
          rating: 4.0,
          reviews: 605,
          isFavorite: true,
          isSpecialty: true,
        },
      ]);
    }, 2000);
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

  if (!fontsLoaded) {
    return null; // 폰트 로드될 때까지 렌더링 안 함
  }

  return (
    <TouchableWithoutFeedback onPress={handleBackgroundPress}>
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
        <MapWrapper>
          <MapView
            style={styles.map}
            initialRegion={region}
            region={region}
            showsUserLocation={true}
            onRegionChangeComplete={(newRegion) => setRegion(newRegion)}
          >
            {cafeList.map((cafe) => (
              <Marker
                key={cafe.id}
                coordinate={{
                  latitude: cafe.latitude,
                  longitude: cafe.longitude,
                }}
                onPress={() =>
                  setRegion({
                    latitude: cafe.latitude,
                    longitude: cafe.longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                  })
                }
              >
                <CafeLocation isSelected={false} />
              </Marker>
            ))}
          </MapView>

          <CurrentLocationButton onPress={() => setRegion(region)}>
            <CurrentLocationIcon
              width={responsiveWidth(50)}
              height={responsiveHeight(50)}
            />
          </CurrentLocationButton>
        </MapWrapper>

        {/* GNB (고정) */}
        <GNBContainer>
          <GNB />
        </GNBContainer>

        {/* 로고 아이콘 */}
        {!showBottomContainer && cafeList.length > 0 && (
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
              inputRange: [
                Math.min(GNB_HEIGHT, DEFAULT_POSITION),
                Math.max(GNB_HEIGHT, DEFAULT_POSITION),
              ],
              outputRange: [0, 24], // 완전히 올리면 radius 제거
              extrapolate: "clamp",
            }),
            borderTopRightRadius: translateY.interpolate({
              inputRange: [
                Math.min(GNB_HEIGHT, DEFAULT_POSITION),
                Math.max(GNB_HEIGHT, DEFAULT_POSITION),
              ],
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
                <FilterButton
                  onPress={() => setSortModalVisible(!sortModalVisible)}
                >
                  <SortText selected={selectedSort !== ""}>
                    {selectedSort || "인기순"}
                  </SortText>
                  {sortModalVisible ? (
                    <UpIcon
                      width={`${responsiveWidth(17)}px`}
                      height={`${responsiveHeight(17)}px`}
                      style={{ marginLeft: 4 }}
                    />
                  ) : (
                    <DownIcon
                      width={`${responsiveWidth(17)}px`}
                      height={`${responsiveHeight(17)}px`}
                      style={{ marginLeft: 4 }}
                    />
                  )}
                </FilterButton>

                <FilterButton
                  onPress={() => setTimeModalVisible(!timeModalVisible)}
                >
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
                    <UpIcon
                      width={`${responsiveWidth(17)}px`}
                      height={`${responsiveHeight(17)}px`}
                      style={{ marginLeft: 4 }}
                    />
                  ) : (
                    <DownIcon
                      width={`${responsiveWidth(17)}px`}
                      height={`${responsiveHeight(17)}px`}
                      style={{ marginLeft: 4 }}
                    />
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
          <CafeList>
            {isLoading ? (
              // ✅ 로딩 중이면 스켈레톤 UI 표시
              <>
                <CafeListItemSkeleton />
                <CafeListItemSkeleton />
                <CafeListItemSkeleton />
              </>
            ) : error ? (
              // ✅ 오류 발생 시 메시지 표시
              <NoResults message="카페 데이터를 불러오는 중 오류가 발생했습니다." />
            ) : cafeList.length === 0 ? (
              // ✅ 데이터가 없을 때 메시지 표시
              <NoResults message="등록된 카페가 없습니다." />
            ) : isCafeLocationSelected && selectedLocation ? (
              // ✅ 특정 카페를 선택했을 때 (첫 번째 카페만 표시)
              cafeList
                .filter((cafe) => cafe.cafe_id === selectedLocation)
                .map((cafe) => (
                  <CafeListItem
                    key={cafe.cafe_id}
                    cafe={cafe}
                    isSelected={true}
                    navigation={navigation}
                  />
                ))
            ) : (
              // ✅ 전체 카페 리스트 표시
              cafeList.map((cafe, index) => (
                <CafeListItem
                  key={cafe.cafe_id}
                  cafe={cafe}
                  isFirst={index === 0} // 첫 번째 아이템 여부 전달
                  isSelected={false}
                  navigation={navigation}
                />
              ))
            )}
          </CafeList>

          {/* 카페 리스트 또는 NoResults
          <CafeList>
            {isLoading ? (
              // 로딩 중일 때 스켈레톤 UI 표시
              isCafeLocationSelected && selectedLocation ? (
                <CafeListItemSkeleton /> // 카페 아이콘 클릭 시 하나만 표시
              ) : (
                <>
                  <CafeListItemSkeleton />
                  <CafeListItemSkeleton />
                  <CafeListItemSkeleton />
                </>
              )
            ) : cafeList.length === 0 ? (
              <NoResults /> // 카페 리스트가 없을 때 NoResults 표시
            ) : isCafeLocationSelected && selectedLocation ? (
              // 선택된 카페만 표시
              cafeList
                .filter((_, index) => index === 0)
                .map((cafe, index) => (
                  <CafeListItem
                    key={index}
                    cafe={{ ...cafe, isFirst: true }}
                    isSelected={true}
                    navigation={navigation}
                  />
                ))
            ) : (
              // 전체 카페 리스트 표시
              cafeList.map((cafe, index) => (
                <CafeListItem
                  key={index}
                  cafe={{ ...cafe, isFirst: index % 1 === 0 }}
                  isSelected={false}
                  navigation={navigation}
                />
              ))
            )}
          </CafeList> */}
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
              cafe={selectedCafe}
            />
          )}
        </Animated.View>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});

const Container = styled.View`
  flex: 1;
  background-color: #fafafa;
  margin-bottom: ${responsiveHeight(42)}px;
`;

/* ImageBackground를 이용한 MapView */
const MapBackground = styled(ImageBackground)`
  width: ${responsiveWidth(360)}px;
  height: ${responsiveHeight(349)}px;
  top: ${responsiveHeight(GNB_HEIGHT)}px;
  flex-shrink: 0;
  align-self: center;
`;

const MapContainer = styled.View`
  position: relative;
  width: ${responsiveWidth(360)}px;
  height: ${responsiveHeight(349)}px;
`;

const MapWrapper = styled.View`
  position: absolute;
  top: ${responsiveHeight(94)}px;
  width: ${responsiveWidth(360)}px;
  height: ${responsiveHeight(349)}px;
  align-self: center;
`;

const GNBContainer = styled.View`
  position: absolute;
  top: 0;
  width: ${responsiveWidth(360)}px;
  z-index: 10;
`;

const AnimatedBottomSheet = styled(Animated.View)`
  position: absolute;
  width: ${responsiveWidth(360)}px;
  height: ${responsiveHeight(760)}px;
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
  padding-bottom: ${responsiveHeight(12)}px;
  padding-top: ${responsiveHeight(16)}px;
`;

const DragHandle = styled.View`
  width: ${responsiveWidth(64)}px;
  height: ${responsiveHeight(5)}px;
  border-radius: 5px;
  background: #d9d9d9;
`;

const SortContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: ${responsiveHeight(8)}px ${responsiveWidth(24)}px;
  border-bottom-width: ${responsiveWidth(0.5)}px;
  border-bottom-color: #d9d9d9;
  background-color: #fafafa;
`;

const FilterButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: ${responsiveHeight(6)}px ${responsiveWidth(12)}px;
  background-color: #fafafa;
`;

const SortText = styled.Text`
  font-family: PretendardRegular;
  font-size: ${responsiveFontSize(12)}px;
  font-weight: ${(props) => (props.selected ? "600" : "400")};
  line-height: ${responsiveHeight(16.56)}px;
  letter-spacing: -0.3;
  color: #000;
`;

const CafeList = styled.ScrollView`
  flex: 1;
  padding-bottom: ${responsiveHeight(20)}px;
`;

const BackgroundOverlay = styled.View`
  position: absolute;
  width: ${responsiveWidth(360)}px;
  height: ${responsiveHeight(760)}px;
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

const CurrentLocationButton = styled.TouchableOpacity`
  position: absolute;
  bottom: ${responsiveHeight(57)}px;
  left: ${responsiveWidth(24)}px;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 5;
  z-index: 50;
`;
