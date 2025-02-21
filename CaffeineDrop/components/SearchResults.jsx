import React, { useState, useEffect, useRef } from "react";
import { Animated, PanResponder, Dimensions, Image } from "react-native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../utils/responsive";
import styled from "styled-components/native";
import TopFilter from "./TopFilter";
import CafeListItem from "./CafeListItem";
import CafeListItemSkeleton from "./CafeListItemSkeleton";
import SortFilterModal from "./SortFilterModal";
import TimeFilterModal from "./TimeFilterModal";
import UpIcon from "../assets/home/UpIcon.svg";
import DownIcon from "../assets/home/DownIcon.svg";
import { useFonts } from "../styles";

const SCREEN_HEIGHT = Dimensions.get("window").height; // 화면 높이
const FULLY_EXPANDED_POSITION = responsiveHeight(162); // 슬라이드가 올라갈 최대 위치
const DEFAULT_POSITION = SCREEN_HEIGHT - responsiveHeight(356); // 기본 위치 (아래쪽)
const ANIMATION_DURATION = 300; // 애니메이션 지속 시간

const SearchResults = ({ isVisible, isSettingMode, onClose, onSlideDown }) => {
  const fontsLoaded = useFonts();

  const translateY = useRef(new Animated.Value(SCREEN_HEIGHT)).current;
  const [sortModalVisible, setSortModalVisible] = useState(false);
  const [timeModalVisible, setTimeModalVisible] = useState(false);
  const [selectedSort, setSelectedSort] = useState("인기순");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [cafeList, setCafeList] = useState([]);

  // 모서리 반경 애니메이션 설정
  const borderRadius = translateY.interpolate({
    inputRange: [FULLY_EXPANDED_POSITION, DEFAULT_POSITION],
    outputRange: [0, 24], // 위로 올라갈수록 직각, 아래로 내려갈수록 둥글게
    extrapolate: "clamp",
  });

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: isSettingMode
        ? DEFAULT_POSITION // 검색 설정 모드일 때 기본 위치로 이동
        : isVisible
        ? FULLY_EXPANDED_POSITION // 검색 결과 슬라이드 표시
        : SCREEN_HEIGHT, // 슬라이드 숨김
      duration: ANIMATION_DURATION,
      useNativeDriver: true,
    }).start();
  }, [isVisible, isSettingMode]);

  useEffect(() => {
    if (isVisible) {
      setIsLoading(true); // 검색 결과가 보일 때마다 로딩 시작
      // 데이터 로딩 시뮬레이션
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
            isClosed: false,
          },
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
            isClosed: true,
          },
        ]);
        setIsLoading(false);
      }, 2000); // 2초 후 로딩 종료
    }
  }, [isVisible]);

  // 슬라이드 핸들링
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) =>
        Math.abs(gestureState.dy) > 5, // 드래그 시작 조건
      onPanResponderMove: (_, gestureState) => {
        const newY = translateY._value + gestureState.dy;
        if (newY >= FULLY_EXPANDED_POSITION && newY <= SCREEN_HEIGHT) {
          translateY.setValue(newY); // 드래그 중 위치 업데이트
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 100) {
          // 아래로 충분히 드래그하면 기본 위치로 이동
          Animated.timing(translateY, {
            toValue: DEFAULT_POSITION,
            duration: ANIMATION_DURATION,
            useNativeDriver: true,
          }).start(() => {
            if (onSlideDown) {
              onSlideDown(); // ✅ handleSlideDown 호출
            }
          });
        } else {
          // 위로 드래그하지 않으면 162px 위치로 복귀
          Animated.timing(translateY, {
            toValue: FULLY_EXPANDED_POSITION,
            duration: ANIMATION_DURATION,
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
    <>
      <AnimatedContainer
        style={{
          transform: [{ translateY }],
          borderTopLeftRadius: borderRadius,
          borderTopRightRadius: borderRadius,
        }}
        {...panResponder.panHandlers}
      >
        <DragHandleWrapper>
          <DragHandle />
        </DragHandleWrapper>

        {/* TopFilter와 SortContainer */}
        <FilterContainer>
          <TopFilter
            onFilterSelect={(filter) => setSelectedFilter(filter)}
            selectedFilter={selectedFilter}
          />
          <SortContainer>
            <FilterButton
              onPress={() => setSortModalVisible(!sortModalVisible)}
            >
              <SortText selected={selectedSort !== "인기순"}>
                {selectedSort}
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
        </FilterContainer>

        {/* 카페 리스트 */}
        <CafeList>
          {isLoading ? (
            // 로딩 중일 때 스켈레톤 UI 표시
            <>
              <CafeListItemSkeleton />
              <CafeListItemSkeleton />
              <CafeListItemSkeleton />
            </>
          ) : (
            cafeList.map((cafe, index) => (
              <CafeListItem key={index} cafe={cafe} isSelected={false} />
            ))
          )}
        </CafeList>
      </AnimatedContainer>

      {/* 정렬 필터 모달 */}
      <SortFilterModal
        visible={sortModalVisible}
        onClose={() => setSortModalVisible(false)}
        selectedSort={selectedSort}
        setSelectedSort={setSelectedSort}
      />

      {/* 시간 필터 모달 */}
      <TimeFilterModal
        visible={timeModalVisible}
        onClose={() => setTimeModalVisible(false)}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
      />
    </>
  );
};

export default SearchResults;

const AnimatedContainer = styled(Animated.View)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: ${SCREEN_HEIGHT}px;
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
  font-family: Pretendard;
  font-size: ${responsiveFontSize(12)}px;
  font-weight: ${(props) => (props.selected ? "600" : "400")};
  line-height: ${responsiveHeight(16.56)}px;
  letter-spacing: -0.3px;
  color: #000;
`;

const FilterContainer = styled.View``;

const CafeList = styled.ScrollView`
  flex: 1;
`;
