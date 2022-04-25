import styled from "styled-components/native";

/**
 * 작은 글씨 스타일입니다.
 * @author 현웅
 */
export const SmallText = styled.Text`
  font-size: ${({ theme }) => theme.size.small};
`;
