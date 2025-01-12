import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import OnBoardingLogin from "./pages/OnBoardingLogin/OnboardingLogin";

// 각 페이지 임포트
import DetailPage from "./pages/detailpage";
import HomePage from "./pages/homepage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: true }}>
        <Stack.Screen name="OnBoardingLogin" component={OnBoardingLogin} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="DetailPage" component={DetailPage} />
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
