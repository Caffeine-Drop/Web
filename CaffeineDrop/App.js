import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native";
import HomeScreen from "./pages/HomeScreen";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HomeScreen />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};