import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View, Platform } from "react-native";

// 각 페이지 임포트
import OnboardingLogin01 from "./pages/onBoardingLogin/onBoardingLogin01";
import OnboardingLogin03 from "./pages/onBoardingLogin/onBoardingLogin03";
import OnboardingLogin04 from "./pages/onBoardingLogin/onBoardingLogin04";
import SpecialtyOptions from "./components/SpecialtyOptions";
import DetailPage from "./pages/detailpage";
import HomeScreen from "./pages/HomeScreen";
import DetailPageImage from "./pages/detailpageimage";
import DetailPageImageDetail from "./pages/detailpageimageDetail";
import ReviewPage from "./pages/reviewpage";
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
                <Stack.Screen name="OnboardingLogin01" component={OnboardingLogin01} />
                <Stack.Screen name="OnboardingLogin03" component={OnboardingLogin03} />
                <Stack.Screen name="OnboardingLogin04" component={OnboardingLogin04} />
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
