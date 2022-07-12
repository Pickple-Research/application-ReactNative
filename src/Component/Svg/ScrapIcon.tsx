import React from "react";
import Svg, { Path } from "react-native-svg";

/**
 * 스크랩 아이콘. 스크랩 된 경우 흰색을 채웁니다.
 * 기본 가로:세로비는 18:23 입니다.
 * @author 현웅
 */
export function ScrapIcon({
  scrapped,
  width = "18",
  height = "23",
}: {
  scrapped: boolean;
  width?: string;
  height?: string;
}) {
  return (
    <Svg width={width} height={height} viewBox="0 0 18 23" fill="none">
      <Path
        d="M1 8.25524C1 4.83509 1 3.12501 1.87868 2.06251C2.75736 1 4.17157 1 7 1H11C13.8284 1 15.2426 1 16.1213 2.06251C17 3.12501 17 4.83509 17 8.25524V16.5112C17 19.7559 17 21.3782 16.1557 21.8744C15.3114 22.3706 14.2565 21.3683 12.1465 19.3637L11.4713 18.7221C10.2849 17.595 9.69173 17.0314 9 17.0314C8.30827 17.0314 7.71509 17.595 6.52871 18.7222L5.85346 19.3637C3.74355 21.3683 2.68859 22.3706 1.84429 21.8744C1 21.3782 1 19.7559 1 16.5112V8.25524Z"
        fill={scrapped ? "white" : "none"}
        stroke="white"
      />
    </Svg>
  );
}
