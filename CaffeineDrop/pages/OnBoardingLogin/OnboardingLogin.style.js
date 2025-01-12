import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

export const Logo = styled.Image`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 44.16px; /* 138% */
  letter-spacing: -0.8px;
  margin-bottom: 20px;
`;

export const Subtitle = styled.Text`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22.08px; /* 138% */
  letter-spacing: -0.4px;
  margin-bottom: 20px;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.kakao ? "#FFDD00" : props.naver ? "#03C75A" : "#FFF"};
  padding: 15px;
  margin-top: 15px;
  border-radius: 5px;
  width: 80%;
  height: 50px;
`;

export const Icon = styled.Image`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-color: #000;
  width: 80%;
  margin-bottom: 20px;
  padding: 5px 0;
`;

export const Divider = styled.View`
  height: 1px;
  background-color: #000;
  width: 80%;
  margin-bottom: 20px;
`;

export const InputWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-color: #6b4226;
  width: 80%;
  margin-bottom: 10px;
`;

export const StyledInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  padding: 10px;
  color: #000;
`;


export const Message = styled.Text`
  font-size: 14px;
  color: ${(props) => (props.isValid ? "#6B4226" : "#D9534F")};
  margin-bottom: 20px;
`;

export const SaveButtonContainer = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  align-self: center;
  width: 90%;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.isValid ? "#6B4226" : "#ccc")};
  border-radius: 5px;
`;

export const SaveButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: Pretendard;
  font-weight: 600;
  line-height: 22px;
`;

export const NicknameInput = styled.TextInput`
  border-width: 1px;
  border-color: #ccc;
  padding: 10px;
  margin-bottom: 20px;
  width: 80%;
  border-radius: 5px;
`;