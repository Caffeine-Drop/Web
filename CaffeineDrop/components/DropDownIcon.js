import React from "react";
import Svg, { Path } from "react-native-svg";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { responsiveFontSize, responsiveWidth, responsiveHeight } from "../utils/responsive";

const DropdownIconWrapper = styled(TouchableOpacity)`
    width: ${responsiveWidth(18)}px;
    height: ${responsiveHeight(18)}px;
    flex-shrink: 0;
    transform: ${({ isModalVisible }) => (isModalVisible ? "rotate(180deg)" : "rotate(0deg)")};
`;

const DropdownIcon = ({ onPress, isModalVisible }) => (
    <DropdownIconWrapper onPress={onPress} isModalVisible={isModalVisible}>
        <Svg xmlns="http://www.w3.org/2000/svg" width={`${responsiveWidth(18)}px`} height={`${responsiveHeight(18)}px`} viewBox="0 0 18 18" fill="none">
            <Path d="M3.75 6L9.375 11.625L15 6" stroke="#666666" strokeWidth="0.75" />
        </Svg>
    </DropdownIconWrapper>
);

export default DropdownIcon;
