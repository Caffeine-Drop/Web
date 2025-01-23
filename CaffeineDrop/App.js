import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View, Platform } from "react-native";

// 각 페이지 임포트
import SpecialtyOptions from "./components/SpecialtyOptions";
import DetailPage from "./pages/detailpage";
import HomeScreen from "./pages/HomeScreen";
import DetailPageImage from "./pages/detailpageimage";
import DetailPageImageDetail from "./pages/detailpageimageDetail";
import ReviewPage from "./pages/reviewpage";
import SettingPage01 from "./pages/settingPages/settingpage01";
import SettingPage02 from "./pages/settingPages/settingpage02";
import SettingPage03 from "./pages/settingPages/settingpage03";
import SettingPage04 from "./pages/settingPages/settingpage04";
import SettingAskPage from "./pages/settingPages/settingaskpage";
import EventPage01 from "./pages/eventPages/eventPage01";
import EventPage02 from "./pages/eventPages/eventPage02";
import EventPage03 from "./pages/eventPages/eventPage03";
import EventPage04 from "./pages/eventPages/eventPage04";
import EventPage05 from "./pages/eventPages/eventPage05";
import EventPage06 from "./pages/eventPages/eventPage06";
import EventPage11 from "./pages/eventPages/eventPage11";
import EventPage12 from "./pages/eventPages/eventPage12";

const Stack = createNativeStackNavigator();

export default function App() {
    useEffect(() => {
        if (Platform.OS === "web") {
            document.body.style.overflow = "hidden";
        }
    }, []);
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {/* 임시로 세팅 페이지가 맨처음에 나오게 설정함 이 주석과 설정들은 나중에 지우기 */}
                <Stack.Screen name="SettingAskPage" component={SettingAskPage} />
                <Stack.Screen name="SettingPage04" component={SettingPage04} />
                <Stack.Screen name="SettingPage03" component={SettingPage03} />
                <Stack.Screen name="SettingPage02" component={SettingPage02} />
                <Stack.Screen name="SettingPage01" component={SettingPage01} />
                {/* 여기까지 내가 임의로 추가한 내용, 나중에 지우기 */}

                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="DetailPage" component={DetailPage} />
                <Stack.Screen name="DetailPageImage" component={DetailPageImage} />
                <Stack.Screen name="DetailPageImageDetail" component={DetailPageImageDetail} />
                <Stack.Screen name="ReviewPage" component={ReviewPage} />
                <Stack.Screen name="SpecialtyOptions" component={SpecialtyOptions} />
                <Stack.Screen name="EventPage01" component={EventPage01} />
                <Stack.Screen name="EventPage02" component={EventPage02} />
                <Stack.Screen name="EventPage03" component={EventPage03} />
                <Stack.Screen name="EventPage04" component={EventPage04} />
                <Stack.Screen name="EventPage05" component={EventPage05} />
                <Stack.Screen name="EventPage06" component={EventPage06} />
                <Stack.Screen name="EventPage11" component={EventPage11} />
                <Stack.Screen name="EventPage12" component={EventPage12} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
