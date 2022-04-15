import { ThemeColors } from "@Object/Type";

/**
 * Light 테마 선택시 사용되는 색상값들
 * !색상을 추가하려면 ThemeColors에 정의를 추가해줘야 합니다.
 * @author 현웅
 */
export const lightThemeColors: ThemeColors = {
  // bottomTabBar에서 사용되는 선택/비선택 회색
  focusedGray: "#848899",
  unfocusedGray: "#D3D4D4",

  // 아래는 희연이 작명 그대로 사용
  main_skyblue: "#8BBFF5",
  main_purple: "#BDB5EC",
  pastel_skyblue: "#DEEEFF",
  pastel_purple: "#E7E4F5",

  text_skyblue: "#599BDF",
  text_purple: "#8F84D0",
  deep_purple_text: "#594E96",
  text_color_666: "#666666",

  inactive_button: "#D6D4E2",
  skyblue_textfield: "#EDF5FD",
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
  focusedGray: "",
  unfocusedGray: "",

  // 아래는 희연이 작명 그대로 사용
  main_skyblue: "",
  main_purple: "",
  pastel_skyblue: "",
  pastel_purple: "",

  text_skyblue: "",
  text_purple: "",
  deep_purple_text: "",
  text_color_666: "",

  inactive_button: "",
  skyblue_textfield: "",
  background_purple: "",

  // 메인 테마 그라디언트 색상
  purple_blue_gradient: [""],
};
