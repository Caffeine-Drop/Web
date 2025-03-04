import React from "react";
import Svg, { Path } from "react-native-svg";

const HeartIcon = ({ color = "#E91111", size = 15 }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.79474 2.96985C5.44599 1.65388 3.28582 1.68046 1.96985 3.0292C0.653884 4.37795 0.680457 6.53813 2.0292 7.85409L5.11723 10.8671L7.5 13.1919L9.88277 10.8671L12.9708 7.85409C14.3195 6.53813 14.3461 4.37795 13.0301 3.0292C11.7142 1.68046 9.55401 1.65388 8.20526 2.96985L7.5 3.65797L6.79474 2.96985Z"
        fill={color} /* ✅ 동적으로 색상 변경 */
      />
    </Svg>
  );
};

export default HeartIcon;
