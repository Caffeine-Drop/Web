import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View, Platform } from "react-native";
import { AuthProvider } from "./context/AuthContext";

// 각 페이지 임포트
import OnboardingLogin01 from "./pages/onBoardingLogin/onBoardingLogin01";
import OnboardingLogin03 from "./pages/onBoardingLogin/onBoardingLogin03";
import KakaoLogin from "./pages/onBoardingLogin/kakaoLogin";
import NaverLogin from "./pages/onBoardingLogin/naverLogin";
import OnboardingLogin04 from "./pages/onBoardingLogin/onBoardingLogin04";
import SpecialtyOptions from "./components/SpecialtyOptions";
import DetailPage from "./pages/detailPages/detailpage";
import HomeScreen from "./pages/HomeScreen";
import SearchPage from "./pages/SearchPage";
import DetailPageImage from "./pages/detailPages/detailpageimage";
import DetailPageImageDetail from "./pages/detailPages/detailpageimageDetail";
import ReviewPage from "./pages/reviewPage/reviewpage";
import SettingPage01 from "./pages/settingPages/settingpage01";
import SettingPage02 from "./pages/settingPages/settingpage02";
import SettingPage03 from "./pages/settingPages/settingpage03";
import SettingPage04 from "./pages/settingPages/settingpage04";
import SettingPage05 from "./pages/settingPages/settingpage05";
import SettingAskPage from "./pages/settingPages/settingaskpage";
import EventPage01 from "./pages/eventPages/eventPage01";
import EventPage02 from "./pages/eventPages/eventPage02";
import EventPage03 from "./pages/eventPages/eventPage03";
import EventPage04 from "./pages/eventPages/eventPage04";
import EventPage05 from "./pages/eventPages/eventPage05";
import EventPage06 from "./pages/eventPages/eventPage06";
import EventPage11 from "./pages/eventPages/eventPage11";
import EventPage12 from "./pages/eventPages/eventPage12";
import PrivatePolicyPage from "./pages/termsPages/privatePolicyPage";
import TermsOfServicePage from "./pages/termsPages/termsOfServicePage";

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    if (Platform.OS === "web") {
      document.body.style.overflow = "hidden";
    }
  }, []);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="OnboardingLogin01" component={OnboardingLogin01} />
          <Stack.Screen name="OnboardingLogin03" component={OnboardingLogin03} />
          <Stack.Screen name="KakaoLogin" component={KakaoLogin} />
          <Stack.Screen name="NaverLogin" component={NaverLogin} />
          <Stack.Screen name="OnboardingLogin04" component={OnboardingLogin04} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="SearchPage" component={SearchPage} />
          <Stack.Screen name="DetailPage" component={DetailPage} />
          <Stack.Screen name="DetailPageImage" component={DetailPageImage} />
        <Stack.Screen
          name="DetailPageImageDetail"
          component={DetailPageImageDetail}
          options={{
            presentation: "transparentModal",
          }}
        />
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
        <Stack.Screen name="SettingAskPage" component={SettingAskPage} />
        <Stack.Screen name="SettingPage01" component={SettingPage01} />
        <Stack.Screen name="SettingPage02" component={SettingPage02} />
        <Stack.Screen name="SettingPage03" component={SettingPage03} />
        <Stack.Screen name="SettingPage04" component={SettingPage04} />
        <Stack.Screen name="SettingPage05" component={SettingPage05} />
        </Stack.Navigator>
        </NavigationContainer>
      </AuthProvider>
    </GestureHandlerRootView>
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
