import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
    width: 312px;
    height: 200px;

    margin-left: 24px;
    margin-right: 24px;
    margin-top: 12px;
    padding-top: 16px;
    padding-bottom: 16px;
    border-top-width: 1px;
    border-top-color: #d9d9d9;
    border-bottom-width: 1px;
    border-bottom-color: #d9d9d9;

    display: flex;
    justify-content: center;
`;

const ContentInput = styled.TextInput`
    width: 310px;
    height: 200px;
    justify-content: center;
    padding-left: 12px;
    padding-right: 12px;

    color: #666;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 138%; /* 16.56px */
    letter-spacing: -0.3px;
`;

const InputText = () => {
    return (
        <Container>
            <ContentInput placeholder="내용을 입력해주세요." multiline />
        </Container>
    );
};

export default InputText;
