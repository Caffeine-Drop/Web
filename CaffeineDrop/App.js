import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";

// 각 페이지 임포트
import DetailPage from "./pages/detailpage";
import HomePage from "./pages/homepage";
import EventPage01 from "./pages/eventPages/eventPage01";
import EventPage02 from "./pages/eventPages/eventPage02";
import EventPage03 from "./pages/eventPages/eventPage03";
import EventPage04 from "./pages/eventPages/eventPage04";
import EventPage05 from "./pages/eventPages/eventPage05";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="HomePage" component={HomePage} />
                <Stack.Screen name="DetailPage" component={DetailPage} />
                <Stack.Screen name="EventPage01" component={EventPage01} />
                <Stack.Screen name="EventPage02" component={EventPage02} />
                <Stack.Screen name="EventPage03" component={EventPage03} />
                <Stack.Screen name="EventPage04" component={EventPage04} />
                <Stack.Screen name="EventPage05" component={EventPage05} />
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
