import React, { useRef, useState, useEffect, useContext } from "react";
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
import * as ImageManipulator from "expo-image-manipulator";
import { useFonts } from "../../styles";
// 이미지 임포트
import DefaultProfileImg from "../../assets/OnBoardingLogin/DefaultProfileImg.svg";
import EditIcon from "../../assets/OnBoardingLogin/EditIcon.svg";
import DeleteIcon from "../../assets/OnBoardingLogin/DeleteIcon.svg";
import BackIcon from "../../components/BackIcon";

import axios from "axios";
import { AuthContext } from "../../context/AuthContext"; //context 가져오기

export default function SettingPage05({ navigation }) {
  const fontsLoaded = useFonts();
  const { accessToken, userId, storeNickname, LoggedPlatform } =
    useContext(AuthContext);

  const [profileImage, setProfileImage] = useState(null);
  const [nickname, setNickname] = useState("");
  const [profileImageUrl, setProfileImageUrl] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [hasChecked, setHasChecked] = useState(false);

  // 사용자 정보 가져오기
  const getUserInfo = async () => {
    try {
      const response = await axios.get(`http://13.124.11.195:3000/users`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          Provider: LoggedPlatform,
        },
      });
      console.log("Response(사용자 정보 가져오기):", response.data);
      const { nickname, profileImageUrl } = response.data.success;
      setNickname(nickname);
      setProfileImageUrl(profileImageUrl);
    } catch (error) {
      console.error(error);
    }
  };

  async function checkNickname() {
    try {
      const response = await axios.get(
        `http://13.124.11.195:3000/users/nickname/check?nickname=${nickname}`,
      );
      console.log("닉네임 중복 확인 결과:", response.data);
      console.log("닉네임", nickname);
      setIsDuplicate(response.data.success.isNotOverlap);
      setHasChecked(true);
      return response.data;
    } catch (error) {
      console.log(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  }

  const handleCheckNickname = async () => {
    const data = await checkNickname();
    if (data.success.isNotOverlap === false) {
      console.log("닉네임 중복 아님");
    } else {
      console.log("닉네임 중복");
    }
  };

  // 프로필 사진 변경
  const updateProfileImage = async (imageUri) => {
    const formData = new FormData();
    formData.append("file", {
      uri: imageUri,
      name: "profile.jpg",
      type: "image/jpeg",
    });

    try {
      const response = await axios.patch(
        `http://13.124.11.195:3000/users/profile-image`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`,
            Provider: LoggedPlatform,
          },
        }
      );
      console.log("Response(프로필 사진 변경 성공):", response.data);
    } catch (error) {
      console.error("Response(프로필 사진 변경 실패):" + error);
    }
  };

  // 닉네임 변경
  const EditUserNickname = async () => {
    try {
      const response = await axios.patch(
        `http://13.124.11.195:3000/users/nickname`,
        { nickname: nickname },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
            Provider: LoggedPlatform,
          },
        }
      );
      console.log("Response(닉네임 변경):", response.data);
      setNickname(response.data.success.nickname);
      navigation.navigate("HomeScreen");
    } catch (error) {
      console.error(error);
    }
  };

  //사용자 선호 원두 정보 자동으로 가져오기
  useEffect(() => {
    getUserInfo();
  }, []);

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
      const newImageUri = result.assets[0].uri;

      const manipulatedImage = await ImageManipulator.manipulateAsync(
        newImageUri,
        [],
        { compress: 1, format: ImageManipulator.SaveFormat.JPEG }
      );

      setProfileImage(manipulatedImage.uri); // 새 이미지 미리보기

      // 서버에 업로드 후 새로운 이미지 URL 반영
      await updateProfileImage(manipulatedImage.uri);
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
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              gap: responsiveWidth(94),
              marginRight: responsiveWidth(110),
            }}
          >
            <BackIcon />
            <SetProfile>프로필 관리</SetProfile>
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
                <Image
                  source={{ uri: profileImage || profileImageUrl }} // 로컬에서 선택한 이미지가 없으면 서버 이미지 사용
                  style={{
                    width: responsiveWidth(110),
                    height: responsiveHeight(110),
                    borderRadius: 100,
                    zIndex: 1,
                  }}
                />
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
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
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
            onPress={handleCheckNickname}
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
          onPress={EditUserNickname}
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
