import React from "react";
import Svg, { Path } from "react-native-svg";
import { BottomTabSvgIconProps } from ".";
import { theme } from "src/Theme/theme";

/**
 * LandingBottomTab의 커뮤니티 아이콘. focused 된 경우 색이 어두워집니다.
 * @author 현웅
 */
export function CommunityIcon({
  focused = false,
  width = "24",
  height = "24",
  fill = focused ? theme.color.grey.focused : theme.color.grey.unfocused,
}: BottomTabSvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16.5C17.8978 21 18.5967 21 19.1481 20.7716C19.8831 20.4672 20.4672 19.8831 20.7716 19.1481C21 18.5967 21 17.8978 21 16.5V12C21 7.02944 16.9706 3 12 3ZM8 11C8 10.4477 8.44772 10 9 10H15C15.5523 10 16 10.4477 16 11C16 11.5523 15.5523 12 15 12H9C8.44772 12 8 11.5523 8 11ZM11 15C11 14.4477 11.4477 14 12 14H15C15.5523 14 16 14.4477 16 15C16 15.5523 15.5523 16 15 16H12C11.4477 16 11 15.5523 11 15Z"
        fill={fill}
      />
    </Svg>
  );
}
