/**
 * LightTheme, DarkTheme에 상관없이 공통으로 쓰이는 색상 타입
 * @author 현웅
 */
export type CommonThemeColorsType = {
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
    focused: string;
    unfocused: string;
  };

  red: {
    warning: string;
  };
};

/**
 * LightTheme/DarkTheme에 따라 색상값에 차이가 나는 색상 타입.
 * 위에서 정의한 DefaultThemeColors를 확장합니다.
 * @types/styled-components.d.ts 에서 import하여 사용합니다.
 * @author 현웅
 */
export type ThemeColorsType = CommonThemeColorsType & {
  background: string;
};
