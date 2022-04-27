import styled from "styled-components/native";

/**
 * 화면 헤더 스타일입니다. 스크롤 하더라도 고정되어 움직이지 않습니다.
 * @author 현웅
 */
export const ScreenHeader__Container = styled.SafeAreaView`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.color.background};
  padding: 10px 15px;
`;
