import styled from "styled-components/native";

/**
 * 본문 폰트 스타일입니다.
 * @author 현웅
 */
export const BodyText = styled.Text`
  font-size: ${({ theme }) => theme.size.body};
`;
