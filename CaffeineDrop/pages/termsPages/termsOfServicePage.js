import React from "react";
import { View, Text, ScrollView } from "react-native";
import styled from "styled-components/native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "../../utils/responsive";

// 컴포넌트 임포트
import BackButtonBlack from "../../components/BackButtonBlack";

export default function TermsOfServicePage({ navigation }) {
  return (
    <Container>
      <FixedHeader>
        <View style={{ width: "100%", flexDirection: "column" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <BackButtonBlack
              style={{ position: "absolute" }}
              onPress={() => navigation.goBack()}
            />
            <FixedHeaderText>서비스 이용약관</FixedHeaderText>
          </View>
        </View>
      </FixedHeader>
      <ScrollView>
        <View
          style={{
            paddingLeft: responsiveWidth(24),
            paddingRight: responsiveWidth(24),
          }}
        >
          <MainText>서비스 이용약관</MainText>
          <SubText>| 서비스의 이용</SubText>
          <ContentText>
            Caffeine Drop 은 웹앱을 통해 다양한 서비스를 제공합니다. 사용자는
            웹앱에 접속하여 서비스 이용이 가능하며, 사용자는 본 약관에 동의한
            것으로 간주됩니다.
          </ContentText>
        </View>
        <View
          style={{
            paddingLeft: responsiveWidth(24),
            paddingRight: responsiveWidth(24),
          }}
        >
          <SubText>| 회원가입</SubText>
          <ContentText>
            회원가입은 네이버 및 카카오 로그인을 통해 진행되며, 사용자는 본
            서비스에서 자신만의 닉네임을 설정하여 사용할 수 있습니다. 회원가입
            시 제공된 정보는 본 서비스의 이용에만 사용됩니다.
          </ContentText>
        </View>
        <View
          style={{
            paddingLeft: responsiveWidth(24),
            paddingRight: responsiveWidth(24),
          }}
        >
          <SubText>| 이용자의 의무</SubText>
          <ContentText>
            사용자는 서비스 이용 중 제공되는 모든 정보를 정확하게 입력해야 하며,
            타인의 개인정보를 침해하거나 불법적인 목적으로 서비스를 사용해서는
            안 됩니다. 불법적인 행위로 인해 발생하는 모든 책임은 사용자에게
            있습니다.
          </ContentText>
        </View>
        <View
          style={{
            paddingLeft: responsiveWidth(24),
            paddingRight: responsiveWidth(24),
          }}
        >
          <SubText>| 사진 업로드 기능</SubText>
          <ContentText>
            사용자는 Caffeine Drop 의 프로필 사진 설정 및 후기 작성 기능을 통해
            사진을 업로드할 수 있습니다. 사용자가 업로드한 사진은 후기 및 서비스
            제공을 위한 목적으로 다른 사용자들에게 보일 수 있습니다. 사용자는
            자신의 업로드된 콘텐츠에 대한 권리를 보유하며, 탈퇴 시 자동 삭제
            처리되지 않습니다.
          </ContentText>
        </View>
        <View
          style={{
            paddingLeft: responsiveWidth(24),
            paddingRight: responsiveWidth(24),
          }}
        >
          <SubText>| 위치정보 서비스</SubText>
          <ContentText>
            Caffeine Drop 은 사용자의 위치정보를 수집하여 지도 기능을
            제공합니다. 위치정보 동의 체크는 현재 제공되지 않지만, 사용자가
            위치기반 서비스를 이용할 경우, 위치정보가 수집 및 이용될 수
            있습니다. 위치정보는 서비스 제공을 위한 목적으로 사용되며, 다른
            용도로 사용되지 않습니다. 사용자가 원할 경우 언제든지 위치정보를
            삭제할 수 있습니다.
          </ContentText>
        </View>
        <View
          style={{
            paddingLeft: responsiveWidth(24),
            paddingRight: responsiveWidth(24),
          }}
        >
          <SubText>| 쿠키 사용 및 보안 프로토콜</SubText>
          <ContentText>
            Caffeine Drop 은 쿠키 사용 여부에 대한 동의를 추후 받을 예정입니다.
            쿠키는 사용자의 웹사이트 사용을 개선하기 위한 목적으로 사용될 수
            있습니다. 또한, HTTPS 보안 프로토콜 적용 예정으로, 사용자 데이터는
            보안이 강화된 방법으로 처리될 것입니다.
          </ContentText>
        </View>
        <View
          style={{
            paddingLeft: responsiveWidth(24),
            paddingRight: responsiveWidth(24),
          }}
        >
          <SubText>| 면책 조항</SubText>
          <ContentText>
            Caffeine Drop 은 서비스 이용과 관련하여 발생하는 문제에 대해 법적
            책임을 지지 않으며, 사용자가 본 서비스를 사용하면서 발생한 어떠한
            문제에 대해서도 책임을 지지 않습니다.
          </ContentText>
        </View>
        <View
          style={{
            paddingLeft: responsiveWidth(24),
            paddingRight: responsiveWidth(24),
            marginBottom: responsiveHeight(110),
          }}
        >
          <SubText>| 약관의 변경</SubText>
          <ContentText>
            본 서비스 이용약관은 법령의 변경 또는 서비스 운영 정책에 따라 변경될
            수 있습니다. 변경 사항은 Caffeine Drop 에 공지되며, 변경된 약관은
            공지된 시점부터 효력을 발생합니다.
          </ContentText>
        </View>
      </ScrollView>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #fafafa;
`;

const FixedHeader = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding-top: 38px;
  background-color: #fafafa;
  z-index: 1000;
`;

const FixedHeaderText = styled.Text`
  overflow: hidden;
  width: 100%;
  height: ${responsiveHeight(56)}px;
  padding-top: ${responsiveHeight(15)}px;
  color: #000;
  font-family: "PretendardSemiBold";
  text-align: center;
  text-overflow: ellipsis;
  font-size: ${responsiveFontSize(18)}px;
  line-height: ${responsiveHeight(24.84)}px;
  letter-spacing: -0.45px;
`;

const MainText = styled.Text`
  font-family: "PretendardSemiBold";
  font-size: ${responsiveFontSize(24)}px;
  line-height: ${responsiveHeight(36)}px;
  color: #000;
  padding-top: ${responsiveHeight(110)}px;
  letter-spacing: -0.6px;
`;

const SubText = styled.Text`
  font-family: "PretendardSemiBold";
  font-size: ${responsiveFontSize(16)}px;
  line-height: ${responsiveHeight(24)}px;
  color: #000;
  letter-spacing: -0.45px;
  margin-bottom: ${responsiveHeight(20)}px;
  margin-top: ${responsiveHeight(40)}px;
`;

const ContentText = styled.Text`
  font-family: "PretendardRegular";
  font-size: ${responsiveFontSize(12)}px;
  line-height: ${responsiveHeight(18)}px;
  color: #000;
  letter-spacing: -0.3px;
`;

const SectionText = styled.Text`
  font-family: "PretendardSemiBold";
  font-size: ${responsiveFontSize(14)}px;
  line-height: ${responsiveHeight(21)}px;
  color: #000;
  letter-spacing: -0.35px;
`;
