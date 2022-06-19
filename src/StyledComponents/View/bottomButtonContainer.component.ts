import { Dimensions } from "react-native";
import styled from "styled-components/native";

/**
 * 스크린 하단 버튼(들)을 감싸는 콘테이너 스타일입니다.
 * @author 현웅
 */
export const BottomButton__Container = styled.View`
  position: absolute;
  bottom: 0px;
  width: ${`${Dimensions.get("screen").width}px`};
`;
