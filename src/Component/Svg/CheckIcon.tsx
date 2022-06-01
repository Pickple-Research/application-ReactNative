import React from "react";
import Svg, { Path } from "react-native-svg";

/**
 * 체크 표시 아이콘.
 * width와 height는 대략 10:7의 비율을 맞춰주면 좋습니다.
 * @author 현웅
 */
export function CheckIcon({
  width = "10",
  height = "7",
  //TODO: #DESIGN-SYSTEM
  color = "#EEEEEE",
}: {
  width?: string;
  height?: string;
  color?: string;
}) {
  return (
    <Svg width={width} height={height} viewBox="0 0 10 7" fill="none">
      <Path
        d="M8.55642 1.33337L6.11198 3.77782L3.66753 6.22226L1.44531 4.00004"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
