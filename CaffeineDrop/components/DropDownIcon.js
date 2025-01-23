import React from "react";
import Svg, { Path } from "react-native-svg";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

const DropdownIconWrapper = styled(TouchableOpacity)`
    width: 18px;
    height: 18px;
    flex-shrink: 0;
`;

const DropdownIcon = ({ onPress }) => (
    <DropdownIconWrapper onPress={onPress}>
        <Svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <Path d="M3.75 6L9.375 11.625L15 6" stroke="#666666" strokeWidth="0.75" />
        </Svg>
    </DropdownIconWrapper>
);

export default DropdownIcon;
