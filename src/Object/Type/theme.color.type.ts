/**
 * LightTheme, DarkTheme에 상관없이 공통으로 쓰이는 색상 타입
 * @author 현웅
 */
export type CommonThemeColors = {
  // bottomTabBar에서 사용되는 선택/비선택 회색
  focused_gray: string;
  unfocused_gray: string;

  // 아래는 희연이 작명 그대로 사용
  main_skyblue: string;
  main_purple: string;
  pastel_skyblue: string;
  pastel_purple: string;

  text_skyblue: string;
  text_purple: string;
  text_deep_purple: string;
  text_color_333: string;
  text_color_555: string;
  text_color_666: string;
  text_color_bbb: string;
  text_color_8f: string;
  text_color_999: string;

  inactive_button: string;
  inactive_button_purple: string;
  inactive_button_gray: string;
  textfield_skyblue: string;
  background_purple: string;

  // 메인 테마 그라디언트 색상
  purple_blue_gradient: string[];
};

/**
 * LightTheme/DarkTheme에 따라 색상값에 차이가 나는 색상 타입.
 * 위에서 정의한 DefaultThemeColors를 확장합니다.
 * @types/styled-components.d.ts 에서 import하여 사용합니다.
 * @author 현웅
 */
export type ThemeColors = CommonThemeColors & {};
