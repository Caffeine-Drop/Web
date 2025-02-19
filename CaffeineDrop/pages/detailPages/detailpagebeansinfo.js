import React from "react";
import DetailPageCoffeeBeanInfo from "../../components/detailPage/DetailPageCoffeeBeanInfo";
import DetailPageEmpty from "../../components/detailPage/DetailPageEmpty";

export default function DetailPageBeansInfo({ selectedTab, beansInfo }) {
  return (
    <>
      {beansInfo.bean.length > 0 ? (
        <DetailPageCoffeeBeanInfo beansInfo={beansInfo} />
      ) : (
        <DetailPageEmpty
          mainText1="원두 정보를"
        mainText2="찾을 수 없어요"
        subText1="원두 정보를 공개하지 않는"
        subText2="카페예요"
          selectedTab={selectedTab}
        />
      )}
    </>
  );
}
