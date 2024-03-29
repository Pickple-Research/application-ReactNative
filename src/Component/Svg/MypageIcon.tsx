import React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import { BottomTabSvgIconProps } from ".";
import { theme } from "src/Theme/theme";

/**
 * LandingBottomTab의 마이페이지 아이콘. focused 된 경우 색이 어두워집니다.
 * @author 현웅
 */
export function MypageSvgIcon({
  focused = false,
  width = "24",
  height = "24",
  fill = focused ? theme.color.grey.focused : theme.color.grey.unfocused,
}: BottomTabSvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M19.6515 20.4054C20.2043 20.2902 20.5336 19.7117 20.2589 19.2183C19.6533 18.1307 18.6993 17.1749 17.4788 16.4465C15.907 15.5085 13.9812 15 12 15C10.0188 15 8.09292 15.5085 6.52112 16.4465C5.30069 17.1749 4.34666 18.1307 3.74108 19.2183C3.46638 19.7117 3.79562 20.2902 4.34843 20.4054C9.39524 21.4572 14.6047 21.4572 19.6515 20.4054Z"
        fill={fill}
      />
      <Circle cx="12" cy="8" r="5" fill={fill} />
    </Svg>
  );
}
