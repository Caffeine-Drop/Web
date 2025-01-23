import React from "react";
import Svg, { Rect, Path } from "react-native-svg";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

const CheckedIconWrapper = styled(TouchableOpacity)`
    width: 20px;
    height: 20px;
    flex-shrink: 0;
`;

const CheckedIcon = ({ onPress }) => (
    <CheckedIconWrapper onPress={onPress}>
        <Svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <Rect width="20" height="20" rx="4" fill="#756555" />
            <Path d="M5.5 10L8.40559 13L14 6" fill="#756555" />
            <Path d="M5.5 10L8.40559 13L14 6" stroke="#FAFAFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    </CheckedIconWrapper>
);

export default CheckedIcon;
