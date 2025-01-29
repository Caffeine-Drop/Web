import React from "react";
import styled from "styled-components/native";

const BlurComponent = styled.View`
    width: 318px;
    height: 318px;
    flex-shrink: 0;
    border-radius: 318px;
    background: rgba(130, 90, 50, 0.08);
    filter: blur(25px);
`;

const SettingPageBlur = () => {
    return <BlurComponent />;
};

export default SettingPageBlur;
