import { useState, useEffect } from "react";
import * as Font from "expo-font";

// 폰트 로드 함수
export const useFonts = () => {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        const loadFonts = async () => {
            await Font.loadAsync({
                PretendardThin: require("./assets/fonts/Pretendard-Thin.ttf"), // 100
                PretendardExtraLight: require("./assets/fonts/Pretendard-ExtraLight.ttf"), // 200
                PretendardLight: require("./assets/fonts/Pretendard-Light.ttf"), // 300
                PretendardRegular: require("./assets/fonts/Pretendard-Regular.ttf"), // 400
                PretendardMedium: require("./assets/fonts/Pretendard-Medium.ttf"), // 500
                PretendardSemiBold: require("./assets/fonts/Pretendard-SemiBold.ttf"), // 600
                PretendardBold: require("./assets/fonts/Pretendard-Bold.ttf"), // 700
                PretendardExtraBold: require("./assets/fonts/Pretendard-ExtraBold.ttf"), // 800
                PretendardBlack: require("./assets/fonts/Pretendard-Black.ttf"), // 900
            });
            setFontsLoaded(true);
        };

        loadFonts();
    }, []);

    return fontsLoaded;
};
