import { lightThemeColors, darkThemeColors } from "./color.theme";
import { themeSizes } from "./size.theme";

/**
 * 모든 테마를 가져와 배포합니다.
 * @author 현웅
 */
export const theme = {
  color: lightThemeColors,
  size: themeSizes,
};

//TODO: Platform과 Appearance에 따라 theme을 다르게 배포해주어야 합니다.
// function getTheme(){
//   if(Platform.OS === "android"){
//     if(Appearance.getColorScheme() === "light"){
//       return lightThemeColors
//     } else {
//       return darkThemeColors
//     }
//   }

//   if(Platform.OS === "ios"){
//     if(Appearance.getColorScheme() === "light"){
//       return lightThemeColors
//     } else {
//       return darkThemeColors
//     }
//   }

//   if(Appearance.getColorScheme() === "light"){
//     return lightThemeColors
//   } else {
//     return darkThemeColors
//   }
// }
