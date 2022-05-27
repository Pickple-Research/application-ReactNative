import styled from "styled-components/native";

/**
 * 화면 헤더 스타일입니다. 스크롤 하더라도 고정되어 움직이지 않습니다.
 * @author 현웅
 */
export const ScreenHeader__Container = styled.SafeAreaView`
  position: relative;
  flex-direction: row;
  align-items: center;
  height: 45px;
  background-color: ${({ theme }) => theme.color.background};
  padding: 10px 15px;
`;
