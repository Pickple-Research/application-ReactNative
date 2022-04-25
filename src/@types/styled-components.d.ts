import "styled-components/native";
import { ThemeColors, ThemeSizes } from "@Object/Type";

/**
 * styled-components/native에서 export되는 DefaultTheme을 덮어씌움으로써
 * ThemeProvider를 사용할 때 theme을 자동완성할 수 있도록 도와줍니다.
 * @see https://styled-components.com/docs/api#typescript
 * @author 현웅
 */
declare module "styled-components/native" {
  export interface DefaultTheme {
    color: ThemeColors;
    size: ThemeSizes;
  }
}
