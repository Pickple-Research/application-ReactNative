import { ThemeColors } from "@Object/Type";

/**
 * 모든 테마에 공통으로 적용되는 색상값들
 * @author 현웅
 */
const defaultThemeColors = {};

/**
 * Light 테마 선택시 사용되는 색상값들
 * !색상을 추가하려면 ThemeColors에 정의를 추가해줘야 합니다.
 * @author 현웅
 */
export const lightThemeColors: ThemeColors = {
  // bottomTabBar에서 사용되는 선택/비선택 회색
  focused_gray: "#848899",
  unfocused_gray: "#D3D4D4",

  // 아래는 희연이 작명 그대로 사용
  main_skyblue: "#8BBFF5",
  main_purple: "#BDB5EC",
  pastel_skyblue: "#DEEEFF",
  pastel_purple: "#E7E4F5",

  text_skyblue: "#599BDF",
  text_purple: "#8F84D0",
  text_deep_purple: "#594E96",
  text_color_333: "#333333",
  text_color_666: "#666666",
  text_color_bbb: "#BBBBBB",
  text_color_8f: "#8F8F8F",
  text_color_999: "#999999",

  inactive_button: "#D6D4E2",
  inactive_button_purple: "#D6D4E2",
  inactive_button_gray: "#EEEEEE",
  textfield_skyblue: "#EDF5FD",
  background_purple: "#F5F5FC",

  // 메인 테마 그라디언트 색상
  purple_blue_gradient: ["#F2CCFF", "#82BDF3"],
};

/**
 * Dark 테마 선택시 사용되는 색상값들
 * !색상을 추가하려면 ThemeColors에 정의를 추가해줘야 합니다.
 * @author 현웅
 */
export const darkThemeColors: ThemeColors = {
  // bottomTabBar에서 사용되는 선택/비선택 회색
  focused_gray: "",
  unfocused_gray: "",

  // 아래는 희연이 작명 그대로 사용
  main_skyblue: "",
  main_purple: "",
  pastel_skyblue: "",
  pastel_purple: "",

  text_skyblue: "",
  text_purple: "",
  text_deep_purple: "",
  text_color_333: "",
  text_color_666: "",
  text_color_bbb: "",
  text_color_8f: "",
  text_color_999: "",

  inactive_button: "",
  inactive_button_purple: "",
  inactive_button_gray: "",
  textfield_skyblue: "",
  background_purple: "",

  // 메인 테마 그라디언트 색상
  purple_blue_gradient: [""],
};
