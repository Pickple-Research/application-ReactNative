import { CommonThemeColors, ThemeColors } from "@Object/Type";

/**
 * 모든 테마에 공통으로 적용되는 색상값들
 * @author 현웅
 */
const commonThemeColors: CommonThemeColors = {
  // bottomTabBar에서 사용되는 선택/비선택 회색
  focused_gray: "#848899",
  unfocused_gray: "#D3D4D4",

  text_color_bbb: "#BBBBBB",

  // 하연이 figma 디자인 시스템 그대로 사용
  blue: {
    main: "#8BBFF5",
    mild: "#EDF5FD",
    pastel: "#DEEEFF",
    text: "#599BDF",
  },

  purple: {
    deep: "#594E96",
    inactive: "#D6D4E2",
    main: "#BDB5EC",
    mild: "#F5F5FC",
    pastel: "#E7E4F5",
    text: "#8F84D0",
  },

  gradient: {
    purpleBlue: ["#F2CCFF", "#82BDF3"],
  },

  grey: {
    black: "#000000",
    deep: "#333333",
    main: "#555555",
    icon: "#666666",
    mild: "#999999",
    white: "#FFFFFF",
  },

  red: {
    warning: "#FF6B6B",
  },
};

/**
 * Light 테마 선택시 사용되는 색상값들
 * !색상을 추가하려면 ThemeColors에 정의를 추가해줘야 합니다.
 * @author 현웅
 */
export const lightThemeColors: ThemeColors = {
  ...commonThemeColors,
  background: "white",
};

/**
 * Dark 테마 선택시 사용되는 색상값들
 * !색상을 추가하려면 ThemeColors에 정의를 추가해줘야 합니다.
 * @author 현웅
 */
export const darkThemeColors: ThemeColors = {
  ...commonThemeColors,
  background: "black",
};
