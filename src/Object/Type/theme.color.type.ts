/**
 * styled-component를 통해 뿌리는 테마 색상 종류입니다.
 * @author 현웅
 */
export type ThemeColors = {
  // bottomTabBar에서 사용되는 선택/비선택 회색
  focusedGray: string;
  unfocusedGray: string;

  // 아래는 희연이 작명 그대로 사용
  main_skyblue: string;
  main_purple: string;
  pastel_skyblue: string;
  pastel_purple: string;

  text_skyblue: string;
  text_purple: string;
  deep_purple_text: string;
  text_color_666: string;

  inactive_button: string;
  skyblue_textfield: string;
  background_purple: string;

  // 메인 테마 그라디언트 색상
  purple_blue_gradient: string[];
};
