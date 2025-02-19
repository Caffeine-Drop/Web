import React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import { responsiveWidth, responsiveHeight } from "../../utils/responsive";

export default function KaKaoIcon(props) {
  return (
    <Svg
      width={responsiveWidth(20)}
      height={responsiveHeight(21)}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx="10" cy="10.1875" r="10" fill="#FEE500" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.0001 6.1875C7.63301 6.1875 5.71436 7.66986 5.71436 9.49811C5.71436 10.6351 6.45645 11.6375 7.58651 12.2337L7.11104 13.9706C7.06903 14.1241 7.24455 14.2464 7.37934 14.1575L9.46357 12.7819C9.63945 12.7989 9.8182 12.8088 10.0001 12.8088C12.367 12.8088 14.2858 11.3265 14.2858 9.49811C14.2858 7.66986 12.367 6.1875 10.0001 6.1875Z"
        fill="black"
      />
    </Svg>
  );
}
