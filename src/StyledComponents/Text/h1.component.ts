import styled from "styled-components/native";

/**
 * Header 1 폰트 스타일입니다.
 * @author 현웅
 */
export const H1 = styled.Text`
  font-size: ${({ theme }) => theme.size.header1};
  font-weight: bold;
`;
