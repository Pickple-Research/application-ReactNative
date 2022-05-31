/**
 * LightTheme, DarkTheme에 상관없이 공통으로 쓰이는 색상 타입
 * @author 현웅
 */
export type CommonThemeColors = {
  blue: {
    main: string;
    mild: string;
    pastel: string;
    text: string;
  };

  purple: {
    deep: string;
    inactive: string;
    main: string;
    mild: string;
    pastel: string;
    text: string;
  };

  gradient: {
    purpleBlue: string[];
  };

  grey: {
    black: string;
    deep: string;
    icon: string;
    main: string;
    mild: string;
    white: string;
  };

  red: {
    warning: string;
  };

  // bottomTabBar에서 사용되는 선택/비선택 회색
  focused_gray: string;
  unfocused_gray: string;

  text_color_bbb: string;
};

/**
 * LightTheme/DarkTheme에 따라 색상값에 차이가 나는 색상 타입.
 * 위에서 정의한 DefaultThemeColors를 확장합니다.
 * @types/styled-components.d.ts 에서 import하여 사용합니다.
 * @author 현웅
 */
export type ThemeColors = CommonThemeColors & {
  background: string;
};
