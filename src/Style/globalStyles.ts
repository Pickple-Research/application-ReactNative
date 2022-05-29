import { StyleSheet } from "react-native";

/**
 * 전역적으로 사용되는 style을 정의합니다. 공통으로 적용되는 style들의 위계는
 * globalStyles -> screenStyles (각 .screen.tsx 파일에서 정의) -> styles (각 섹션별 .tsx 파일에서 정의) 순입니다.
 * @author 현웅
 */
export const globalStyles = StyleSheet.create({
  /**
   * 스크린 좌우 여백. 좌우에 20px 여백을 줍니다.
   * @author 현웅
   */
  screen__horizontalPadding: {
    paddingHorizontal: 20,
  },
});
