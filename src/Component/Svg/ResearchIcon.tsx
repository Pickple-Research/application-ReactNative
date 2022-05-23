import React from "react";
import Svg, { Path } from "react-native-svg";
import { BottomTabSvgIconProps } from ".";
import { theme } from "@Theme/theme";

/**
 * LandingBottomTab의 리서치 아이콘. focused 된 경우 색이 어두워집니다.
 * @author 현웅
 */
export function ResearchIcon({
  focused = false,
  width = "24",
  height = "24",
  fill = focused ? theme.color.focused_gray : theme.color.unfocused_gray,
}: BottomTabSvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Path
        d="M18 20V10"
        stroke={fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12 20V4"
        stroke={fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6 20V14"
        stroke={fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
