import React, { useState, useEffect } from "react";
import { Container } from "./OnboardingLogin.style";
import Step01Logo from "./components/Step01Logo";
import Step02Login from "./components/Step02Login";
import Step03Profile from "./components/Step03Profile";

const OnboardingLogin = ({ navigation }) => {
  const [step, setStep] = useState(0); // 현재 단계 상태

  useEffect(() => {
    // 첫 화면 로고에서 1.5초 후 다음 단계로 이동
    if (step === 0) {
      const timer = setTimeout(() => setStep(1), 1500);
      return () => clearTimeout(timer); // 타이머 정리
    }
  }, [step]);

  const renderStep = () => {
    switch (step) {
      case 0: // 첫 화면 (로고 화면)
        return <Step01Logo />;
      case 1: // 로그인 화면
        return <Step02Login setStep={setStep} />;
      case 2: // 프로필 생성 화면
        return <Step03Profile navigation={navigation} />;
      default:
        return null;
    }
  };

  return <Container>{renderStep()}</Container>;
};

export default OnboardingLogin;
