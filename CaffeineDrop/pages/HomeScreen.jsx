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

import axios from "axios";
import useFetchCafeList from "../hooks/useFetchCafeList";
import * as Location from "expo-location";
import { Alert } from "react-native";

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

  const [cafeData, setCafeData] = useState([]);

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

  const [selectedFilter, setSelectedFilter] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCafes = async (filterName) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `http://13.124.11.195:3000/like?filter=${filterName}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer 6VSTCSYSqp926_PCIBLYHelPumxA5IsMAAAAAQorDKcAAAGVHw-EBW1lzvpaqIEo`, // 토큰
            provider: "kakao", // naver 또는 kakao
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      console.log("✅ 백엔드 응답 데이터:", data);

      if (data && Array.isArray(data.cafeList)) {
        setCafeList(data.cafeList);
      } else {
        console.warn("🚨 데이터가 올바른 형식이 아닙니다:", data);
        setCafeList([]);
      }
    } catch (error) {
      console.error("🚨 카페 리스트 불러오기 실패:", error);
      setCafeList([]);
    } finally {
      setIsLoading(false);
    }
  };

  // const onFilterSelect = (filterName) => {
  //   setSelectedFilter(filterName);
  //   fetchCafes(filterName); // 필터 선택 시 API 요청 실행
  // };

  // 필터에 맞는 카페 데이터를 가져오는 함수
  const getFilteredCafes = async (filter) => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:3000/like?filter=${filter}`
      );
      const data = await response.json();
      setCafeData(data.cafeList);
    } catch (error) {
      console.error("카페 데이터 로딩 오류:", error);
    } finally {
      setLoading(false);
    }
  };

  // // 필터 선택 시 호출되는 함수
  // const onFilterSelect = (filter) => {
  //   setSelectedFilter(filter);
  //   getFilteredCafes(filter); // 선택된 필터로 카페 데이터 가져오기
  // };

  // useEffect(() => {
  //   if (selectedFilter) {
  //     getFilteredCafes(selectedFilter); // 초기 필터 적용 시 데이터 가져오기
  //   }
  // }, [selectedFilter]);

  // 필터 클릭 시 처리
  const handleFilterSelect = (filterName) => {
    setIsLoading(true); // 필터 클릭 시 로딩 시작
    setTimeout(() => {
      if (selectedFilter === filterName) {
        // 동일한 필터 클릭 시 초기 상태로 복구
        setSelectedFilter(null);
        fetchCafes(null); // 기본 리스트 가져오기
      } else {
        setSelectedFilter(filterName);
        fetchCafes(filterName); // 선택한 필터로 API 요청
      }
      setIsLoading(false); // 로딩 종료
    }, 500);
  };

  const handleBackgroundPress = () => {
    if (selectedLocation) {
      // resetToInitialState(); // 카페 위치 선택 시 초기화
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

  // const resetToInitialState = () => {
  //   setIsLoading(true);

  //   Animated.parallel([
  //     // 아이콘 위치 초기화
  //     ...animatedLocations.map((loc, index) =>
  //       Animated.timing(loc.top, {
  //         toValue: initialLocations[index].top,
  //         duration: 300,
  //         useNativeDriver: false,
  //       })
  //     ),
  //     ...animatedLocations.map((loc, index) =>
  //       Animated.timing(loc.left, {
  //         toValue: initialLocations[index].left,
  //         duration: 300,
  //         useNativeDriver: false,
  //       })
  //     ),
  //     // Bottom Sheet 초기화
  //     Animated.timing(translateY, {
  //       toValue: DEFAULT_POSITION,
  //       duration: 300,
  //       useNativeDriver: true,
  //     }),
  //     // CurrentLocationIcon 초기화
  //     Animated.timing(locationTranslateY, {
  //       toValue: 0,
  //       duration: 300,
  //       useNativeDriver: true,
  //     }),
  //     // BottomContainer 아래로 숨김
  //     Animated.timing(bottomContainerTranslateY, {
  //       toValue: 66,
  //       duration: 300,
  //       useNativeDriver: true,
  //     }),
  //   ]).start(() => {
  //     // 애니메이션 완료 후 상태 초기화
  //     setShowFilters(true);
  //     setSelectedLocation(null);
  //     setIsCafeLocationSelected(false);
  //     setShowBottomContainer(false);
  //     setShowLogo(true);
  //   });
  //   setTimeout(() => {
  //     setCafeList([
  //       {
  //         id: 1,
  //         name: "언힙커피로스터스",
  //         location: "인천 미추홀구 인하로67번길 6 2층",
  //         distance: "600m",
  //         hashtag: "#24시간",
  //         rating: 4.0,
  //         reviews: 605,
  //         isFavorite: true,
  //         isSpecialty: true,
  //       },
  //       {
  //         id: 2,
  //         name: "언힙커피로스터스",
  //         location: "인천 미추홀구 인하로67번길 6 2층",
  //         distance: "600m",
  //         hashtag: "#24시간",
  //         rating: 4.0,
  //         reviews: 605,
  //         isSpecialty: true,
  //         isClosed: false,
  //       },
  //     ]);
  //     setIsLoading(false); // 로딩 종료
  //   }, 2000);
  // };

  const handleCurrentLocationPress = async () => {
    console.log("📍 현재 위치 가져오는 중...");

    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("위치 권한 거부됨", "설정에서 위치 권한을 허용해주세요.");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;

    console.log("✅ 현재 위치:", latitude, longitude);

    setRegion({
      latitude: latitude + 0.002, // BottomSheet 고려해서 살짝 위로 이동
      longitude: longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });

    // ✅ 모든 UI를 초기 상태로 되돌리기
    setSelectedCafe(null); // 선택된 카페 초기화
    setSelectedLocation(null); // 선택된 위치 초기화
    setIsDirectionsPressed(false); // 길찾기 UI 초기화
    setShowBottomContainer(false); // 바텀 컨테이너 숨기기
    setShowFilters(true); // 필터 다시 보이게 함
    setShowLogo(true); // 로고 다시 보이게 함

    // ✅ 바텀시트를 원래 초기 상태로 되돌리기 (기본 위치로 설정)
    Animated.timing(translateY, {
      toValue: DEFAULT_POSITION, // 🔹 카페를 선택하기 전 기본 위치로 복귀
      duration: 300,
      useNativeDriver: true,
    }).start();

    // ✅ 현재 위치 아이콘 애니메이션 실행
    Animated.timing(locationTranslateY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleSelectLocation = async (cafe_id, latitude, longitude) => {
    console.log("📍 선택한 카페 ID:", cafe_id);
    console.log("🔄 기존 선택된 카페 ID:", selectedLocation);

    if (selectedLocation === cafe_id) {
      console.log("🔄 동일한 카페를 다시 클릭: 초기 상태로 복귀");

      // 🔹 초기 상태로 복귀
      setSelectedLocation(null);
      setSelectedCafe(null);
      setShowFilters(true);
      setShowLogo(true);
      setShowBottomContainer(false);
      setIsCafeLocationSelected(false);

      // ✅ 기존 리스트에서 모든 `isSelected`를 false로 변경
      setCafeList((prevList) =>
        prevList.map((cafe) => ({
          ...cafe,
          isSelected: cafe.cafe_id === cafe_id,
        }))
      );

      // 🔹 애니메이션 초기 위치로 복귀
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: DEFAULT_POSITION,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(locationTranslateY, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(bottomContainerTranslateY, {
          toValue: 66,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();

      return; // ✅ 여기서 종료
    }

    // ✅ 선택한 카페를 `selectedLocation`으로 즉시 반영
    setSelectedLocation(cafe_id);

    // ✅ `setSelectedLocation`이 반영된 후 `cafeList` 업데이트
    setTimeout(() => {
      setCafeList((prevList) =>
        prevList.map((cafe) => ({
          ...cafe,
          isSelected: cafe.cafe_id === cafe_id,
        }))
      );
    }, 0);

    setIsCafeLocationSelected(true);
    setShowFilters(false);
    setShowLogo(false);
    setShowBottomContainer(true);
    setIsLoading(true);

    // ✅ 지도 중앙을 선택한 카페 위치로 이동
    setRegion({
      latitude,
      longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });

    try {
      console.log(
        "🌐 API 요청 시작:",
        `http://13.124.11.195:3000/cafes/${cafe_id}`
      );
      const response = await fetch(
        `http://13.124.11.195:3000/cafes/${cafe_id}`
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error("API 요청 실패");
      }

      console.log("📡 불러온 카페 데이터:", data);

      if (data) {
        setSelectedCafe(data);
      } else {
        console.warn("🚨 API 응답 데이터가 유효하지 않음:", data);
        // ✅ 데이터가 유효하지 않으면 기존 selectedCafe 유지
      }
    } catch (error) {
      console.error("🚨 카페 데이터 불러오기 오류:", error);
      // ✅ 기존 selectedCafe 유지 (null로 설정하지 않음)
    } finally {
      setIsLoading(false);
    }

    // ✅ API 요청 완료 후 애니메이션 실행 (BottomSheet 올리기)
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: DEFAULT_POSITION - responsiveHeight(66),
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(locationTranslateY, {
        toValue: -66,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(bottomContainerTranslateY, {
        toValue: 23,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
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
                key={JSON.stringify({
                  id: cafe.cafe_id,
                  selected: cafe.isSelected,
                })}
                coordinate={{
                  latitude: cafe.latitude,
                  longitude: cafe.longitude,
                }}
                onPress={() =>
                  handleSelectLocation(
                    cafe.cafe_id,
                    cafe.latitude,
                    cafe.longitude
                  )
                }
              >
                <CafeLocation
                  key={`location-${cafe.cafe_id}-${cafe.isSelected}`} // ✅ 강제 리렌더링 유도
                  isSelected={selectedLocation === cafe.cafe_id}
                  cafeName={cafe.name}
                />
              </Marker>
            ))}
          </MapView>

          <CurrentLocationButton onPress={handleCurrentLocationPress}>
            <Animated.View
              style={{
                transform: [{ translateY: locationTranslateY }],
              }}
            >
              <CurrentLocationIcon
                width={responsiveWidth(50)}
                height={responsiveHeight(50)}
              />
            </Animated.View>
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
            bottom: -23,
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

// /* ImageBackground를 이용한 MapView */
// const MapBackground = styled(ImageBackground)`
//   width: ${responsiveWidth(360)}px;
//   height: ${responsiveHeight(349)}px;
//   top: ${responsiveHeight(GNB_HEIGHT)}px;
//   flex-shrink: 0;
//   align-self: center;
// `;

// const MapContainer = styled.View`
//   position: relative;
//   width: ${responsiveWidth(360)}px;
//   height: ${responsiveHeight(349)}px;
// `;

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
  z-index: 20;
`;
