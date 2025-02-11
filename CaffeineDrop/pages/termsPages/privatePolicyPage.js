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

export default function PrivatePolicyPage({ navigation }) {
  return (
    <Container>
      <FixedHeader>
        <View style={{ width: "100%", flexDirection: "column" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <BackButtonBlack
              style={{ position: "absolute" }}
              onPress={() => navigation.goBack()}
            />
            <FixedHeaderText>개인 정보 처리 방침</FixedHeaderText>
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
          <MainText>개인 정보 처리 방침</MainText>
          <SubText>| 개인 정보의 수집 및 이용 목적</SubText>
          <ContentText>
            Caffeine Drop(카페인드롭)은 사용자에게 더 나은 서비스를 제공하기
            위해 최소한의 개인정보를 수집합니다. 수집된 개인정보는 다음과 같은
            목적을 위해 사용됩니다.
          </ContentText>
          <View
            style={{
              gap: responsiveHeight(16),
              marginTop: responsiveHeight(16),
            }}
          >
            <View style={{ gap: responsiveHeight(8) }}>
              <SectionText>회원가입 및 로그인</SectionText>
              <ContentText>
                네이버 및 카카오 로그인 기능을 통해 회원가입이 가능하며,
                사용자는 Caffeine Drop에서 자신만의 닉네임을 설정하여 사용할 수
                있습니다.
              </ContentText>
              <SectionText>문의하기 서비스</SectionText>
              <ContentText>
                사용자가 문의하기 서비스를 이용할 때 제공된 이메일을 통해 문의
                사항에 대한 답변을 제공합니다.
              </ContentText>
              <SectionText>후기 사진 업로드 시</SectionText>
              <ContentText>
                사용자가 업로드한 사진은 Caffeine Drop에서 다른 사용자들과
                공유되고, 서비스 운영에 사용될 수 있습니다.
              </ContentText>
              <SectionText>위치 정보 서비스 사용 시</SectionText>
              <ContentText>
                사용자의 위치정보는 지도 기능을 통해 수집되며, 이를 서비스
                제공을 위한 목적으로만 사용합니다.
              </ContentText>
            </View>
          </View>
        </View>
        <View
          style={{
            paddingLeft: responsiveWidth(24),
            paddingRight: responsiveWidth(24),
          }}
        >
          <SubText>| 개인 정보의 수집 및 이용 목적</SubText>
          <ContentText>
            Caffeine Drop 에서 수집하는 개인정보는 다음과 같습니다.
          </ContentText>
          <View
            style={{
              gap: responsiveHeight(16),
              marginTop: responsiveHeight(16),
            }}
          >
            <View style={{ gap: responsiveHeight(8) }}>
              <SectionText>회원가입 시</SectionText>
              <ContentText>
                닉네임, 카카오/네이버 계정(이메일 또는 ID)
              </ContentText>
              <SectionText>문의하기 시</SectionText>
              <ContentText>이메일</ContentText>
              <SectionText>후기 사진 업로드 시</SectionText>
              <ContentText>
                업로드된 사진 (개인정보가 포함될 수 있음)
              </ContentText>
              <SectionText>위치 정보 서비스 사용 시</SectionText>
              <ContentText>
                위치정보 (사용자가 위치 제공에 동의한 것으로 간주)
              </ContentText>
            </View>
          </View>
        </View>
        <View
          style={{
            paddingLeft: responsiveWidth(24),
            paddingRight: responsiveWidth(24),
          }}
        >
          <SubText>| 개인정보의 보유 및 이용 기간</SubText>
          <ContentText>
            Caffeine Drop 은 개인정보를 수집한 목적을 달성한 후에는 해당
            개인정보를 지체 없이 파기합니다. 단, 법령에 의한 보관 기간이 있을
            경우 이를 따릅니다.
          </ContentText>
        </View>
        <View
          style={{
            paddingLeft: responsiveWidth(24),
            paddingRight: responsiveWidth(24),
          }}
        >
          <SubText>| 개인정보의 보호를 위한 기술적·관리적 조치</SubText>
          <ContentText>
            Caffeine Drop 은 개인정보 보호를 위해 다음과 같은 기술적·관리적
            조치를 취하고 있습니다
          </ContentText>
          <View
            style={{
              gap: responsiveHeight(16),
              marginTop: responsiveHeight(16),
            }}
          >
            <View style={{ gap: responsiveHeight(8) }}>
              <SectionText>암호화 저장</SectionText>
              <ContentText>
                사용자 개인정보(닉네임 및 로그인 정보 등)는 암호화하여 안전하게
                저장됩니다.
              </ContentText>
              <SectionText>HTTPS 적용 예정</SectionText>
              <ContentText>
                현재 웹사이트는 HTTPS(SSL/TLS) 보안 프로토콜을 적용 중에 있으며,
                개인정보 전송은 안전하게 보호됩니다.
              </ContentText>
              <SectionText>관리자 접근 제한</SectionText>
              <ContentText>
                개인정보에 대한 접근은 관리자만 가능하며, 관리자의 권한은 엄격히
                제한됩니다. 관리자용 화면은 개발 중입니다.
              </ContentText>
            </View>
          </View>
        </View>
        <View
          style={{
            paddingLeft: responsiveWidth(24),
            paddingRight: responsiveWidth(24),
          }}
        >
          <SubText>| 사용자가 업로드한 콘텐츠</SubText>
          <ContentText>
            Caffeine Drop 은 사용자의 위치정보를 지도 기능을 통해 수집합니다.
            위치정보 제공 동의 체크는 현재 제공되지 않지만, 사용자가 위치기반
            서비스를 이용할 경우, 위치정보가 수집 및 이용될 수 있습니다.
            위치정보는 서비스 제공을 위한 목적으로 사용됩니다. 해당 정보는 다른
            용도로 사용되지 않으며, 사용자가 원할 경우 언제든지 해당 정보는
            삭제됩니다.
          </ContentText>
        </View>
        <View
          style={{
            paddingLeft: responsiveWidth(24),
            paddingRight: responsiveWidth(24),
          }}
        >
          <SubText>| 쿠키 사용 여부</SubText>
          <ContentText>
            Caffeine Drop 은 웹사이트 이용 중 쿠키를 사용하여 사용자 경험을
            향상시킬 수 있습니다. 쿠키 사용 정책은 향후 업데이트될 예정입니다.
            쿠키는 웹사이트에서 사용자 활동을 추적하거나, 웹앱의 성능을 개선하는
            데 사용됩니다.
          </ContentText>
        </View>
        <View
          style={{
            paddingLeft: responsiveWidth(24),
            paddingRight: responsiveWidth(24),
            marginBottom: responsiveHeight(110),
          }}
        >
          <SubText>| 개인정보 처리 방침 변경</SubText>
          <ContentText>
            본 개인정보 처리방침은 법령이나 회사 정책에 따라 변경될 수 있습니다.
            변경 사항은 Caffeine Drop 을 통해 공지되며, 중요한 사항의 변경
            시에는 이메일을 통해 개별적으로 안내할 수 있습니다.
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
