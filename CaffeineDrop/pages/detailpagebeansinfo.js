import React from "react";
import DetailPageCoffeeBeanInfo from "../components/DetailPageCoffeeBeanInfo";
import DetailPageEmpty from "../components/DetailPageEmpty";

export default function DetailPageBeansInfo({ selectedTab }) {
  return (
    <>
      <DetailPageCoffeeBeanInfo />
      <DetailPageEmpty
        mainText1="원두 정보를"
        mainText2="찾을 수 없어요"
        subText1="원두 정보를 공개하지 않는"
        subText2="카페예요"
        selectedTab={selectedTab}
      />
    </>
  );
}

