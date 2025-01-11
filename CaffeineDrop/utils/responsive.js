import { Dimensions, PixelRatio } from "react-native";

// 현재 디바이스의 화면 크기 가져오기
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

// 기준 디바이스 너비와 높이 설정
const guidelineBaseWidth = 360; // Figma 디자인 기준 해상도
const guidelineBaseHeight = 760; // Figma 디자인 기준 해상도

/**
 * 반응형 폰트 크기를 계산하는 함수
 * @param {number} fontSize 기준 폰트 크기
 * @returns {number} 디바이스에 맞게 조정된 폰트 크기
 */

export function responsiveFontSize(fontSize) {
    const scaleWidth = SCREEN_WIDTH / guidelineBaseWidth;
    const scaleHeight = SCREEN_HEIGHT / guidelineBaseHeight;

    const scale = (scaleWidth + scaleHeight) / 2;
    return Math.round(PixelRatio.roundToNearestPixel(fontSize * scale));
}

/**
 * 반응형 너비 계산
 * @param {number} width 기준 너비
 * @returns {number} 디바이스에 맞게 조정된 너비
 */
export function responsiveWidth(width) {
    const scale = SCREEN_WIDTH / guidelineBaseWidth;
    return Math.round(PixelRatio.roundToNearestPixel(width * scale));
}

/**
 * 반응형 높이 계산
 * @param {number} height 기준 높이
 * @returns {number} 디바이스에 맞게 조정된 높이
 */
export function responsiveHeight(height) {
    const scale = SCREEN_HEIGHT / guidelineBaseHeight;
    return Math.round(PixelRatio.roundToNearestPixel(height * scale));
}

/* 사용 방법은

폰트 사이즈 적용
responsiveFontSize(fontsize)
ex ) responsiveFontSize(16)

너비 적용(컨테이너 크기나 사진 파일 너비 변경 시 사용)
responsiveWidth(width)
ex ) responsiveWidth(250)

높이 적용(컨테이너 크기나 사진 파일 너비 변경, 행간 변경 시 사용)
responsiveHeight(height)
ex ) responsiveHeight(200)

이렇게 사용해주시면 됩니다 */
