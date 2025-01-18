import React from "react";
import Svg, { Path } from "react-native-svg";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function BackIcon() {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.goBack();
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M15 19L8 12L15 5" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
            </Svg>
        </TouchableOpacity>
    );
}
