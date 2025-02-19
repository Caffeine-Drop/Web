import React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import { responsiveWidth, responsiveHeight } from "../../utils/responsive";

export default function NaverIcon(props) {
  return (
    <Svg
      width={responsiveWidth(16)}
      height={responsiveHeight(16)}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx="8" cy="8" r="8" fill="#03C75A" />
      <Path
        d="M9.13965 8.22508L6.76675 4.80001H4.8V11.2H6.86035V7.77441L9.23325 11.2H11.2V4.80001H9.13965V8.22508Z"
        fill="#FAFAFA"
      />
    </Svg>
  );
}
