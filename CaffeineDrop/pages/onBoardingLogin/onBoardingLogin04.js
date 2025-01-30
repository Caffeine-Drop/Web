import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Image,
} from "react-native";
import styled from "styled-components/native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "../../utils/responsive";
import * as ImagePicker from "expo-image-picker";
import { useFonts } from "../../styles";
// 이미지 임포트
import DefaultProfileImg from "../../assets/OnBoardingLogin/DefaultProfileImg.svg";
import EditIcon from "../../assets/OnBoardingLogin/EditIcon.svg";
import DeleteIcon from "../../assets/OnBoardingLogin/DeleteIcon.svg";

export default function onBoardingLogin04({ navigation }) {
  const fontsLoaded = useFonts();
  const [profileImage, setProfileImage] = useState(null);
  const [nickname, setNickname] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [hasChecked, setHasChecked] = useState(false);

  if (!fontsLoaded) {
    return null; // 폰트 로딩이 안되면 아무것도 렌더링하지 않음
  }

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <Container>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              paddingTop: responsiveHeight(17),
              paddingBottom: responsiveHeight(14),
            }}
          >
            <SetProfile>프로필 생성하기</SetProfile>
          </View>
          <View
            style={{
              display: "flex",
              width: responsiveWidth(312),
              height: responsiveHeight(200),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={pickImageAsync}>
              <View
                style={{
                  display: "relative",
                  width: responsiveWidth(110),
                  height: responsiveHeight(110),
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: responsiveHeight(8),
                  marginBottom: responsiveHeight(8),
                }}
              >
                {profileImage ? (
                  <Image
                    source={{ uri: profileImage }}
                    style={{
                      width: responsiveWidth(110),
                      height: responsiveHeight(110),
                      borderRadius: 100,
                      zIndex: 1,
                    }}
                  />
                ) : (
                  <DefaultProfileImg style={{ width: responsiveWidth(110), height: responsiveHeight(110) }} />
                )}
                <EditIcon
                  style={{
                    position: "absolute",
                    width: responsiveWidth(35),
                    height: responsiveHeight(35),
                    bottom: 0,
                    right: responsiveWidth(10),
                    zIndex: 1,
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ display: "flex" }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <Text
                style={{
                  fontFamily: "PretendardBold",
                  fontSize: responsiveFontSize(16),
                  lineHeight: responsiveHeight(22.08),
                  color: "#000",
                  marginLeft: responsiveWidth(8),
                  marginBottom: responsiveHeight(6),
                  letterSpacing: -0.4,
                }}
              >
                닉네임
              </Text>
              <Text
                style={{
                  fontFamily: "PretendardRegular",
                  fontSize: responsiveFontSize(14),
                  lineHeight: responsiveHeight(19.32),
                  color: "#666",
                  letterSpacing: -0.35,
                }}
              >
                {nickname.length}/20
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: responsiveWidth(312),
                borderBottomColor: isDuplicate ? "#E91111" : "#321900",
                borderBottomWidth: 2,
                alignItems: "center",
              }}
            >
              <TextInput
                placeholder="닉네임을 입력해주세요"
                value={nickname}
                onChangeText={setNickname}
                style={{
                  flex: 1,
                  height: responsiveHeight(44),
                  paddingHorizontal: 8,
                  paddingVertical: 12,
                  fontFamily: "PretendardRegular",
                  fontSize: responsiveFontSize(16),
                  lineHeight: responsiveHeight(22.08),
                  color: "#000",
                  letterSpacing: -0.4,
                }}
              />
              {nickname.length > 0 && (
                <TouchableOpacity
                  onPress={() => {
                    setNickname("");
                    setHasChecked(false);
                    setIsDuplicate(false);
                  }}
                >
                  <DeleteIcon style={{ marginLeft: 8 }} />
                </TouchableOpacity>
              )}
            </View>
            {hasChecked && (
              <Text
                style={{
                  fontFamily: "PretendardRegular",
                  fontSize: responsiveFontSize(12),
                  lineHeight: responsiveHeight(16.8),
                  color: isDuplicate ? "#E91111" : "#666",
                  letterSpacing: -0.3,
                  marginTop: responsiveHeight(4),
                }}
              >
                {isDuplicate
                  ? "이미 사용 중인 닉네임이 있어요!"
                  : "사용 가능한 닉네임이에요!"}
              </Text>
            )}
          </View>
          <DuplicateButton
            onPress={() => {
              setHasChecked(true);
              setIsDuplicate(!isDuplicate);
            }}
            disabled={!nickname}
          >
            <Text
              style={{
                fontFamily: "PretendardBold",
                fontSize: responsiveFontSize(16),
                lineHeight: responsiveHeight(22.08),
                color: "#000",
                letterSpacing: -0.4,
              }}
            >
              중복 확인
            </Text>
          </DuplicateButton>
        </View>
        <SaveButton
          hasChecked={hasChecked}
          isDuplicate={isDuplicate}
          disabled={!hasChecked || isDuplicate}
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
        >
          <Text
            style={{
              fontFamily: "PretendardBold",
              fontSize: responsiveFontSize(16),
              lineHeight: responsiveHeight(22.08),
              color: isDuplicate ? "#999" : "#fafafa",
              letterSpacing: -0.4,
            }}
          >
            저장하기
          </Text>
        </SaveButton>
      </Container>
    </KeyboardAvoidingView>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #fafafa;
  justify-content: space-between;
  align-items: center;
  padding-top: ${responsiveHeight(38)}px;
  padding-bottom: ${responsiveHeight(16)}px;
`;

const SetProfile = styled.Text`
  font-family: "PretendardSemiBold";
  font-size: ${responsiveFontSize(18)}px;
  line-height: ${responsiveHeight(24.84)}px;
  text-align: center;
  color: #000;
  letter-spacing: -0.45px;
`;

const DuplicateButton = styled.TouchableOpacity`
  background-color: #fff;
  justify-content: center;
  align-items: center;
  width: ${responsiveWidth(312)}px;
  height: ${responsiveHeight(46)}px;
  padding: 12px 0;
  border-radius: 8px;
  border-width: 1px;
  border-color: #f1f1f1;
  margin-top: ${responsiveHeight(16)}px;
`;

const SaveButton = styled.TouchableOpacity`
  background-color: ${({ hasChecked, isDuplicate }) =>
    hasChecked && !isDuplicate ? "#756555" : "#f1f1f1"};
  justify-content: center;
  align-items: center;
  width: ${responsiveWidth(312)}px;
  height: ${responsiveHeight(46)}px;
  padding: 12px 0;
  border-radius: 8px;
  border-width: 1px;
  border-color: #f1f1f1;
  margin-top: ${responsiveHeight(12)}px;
`;

function checkNicknameDuplicate(nickname) {
  // Implement your logic to check for duplicate nicknames
  // For now, let's assume it returns a boolean
  return !nickname; // Replace with actual logic
}
