import styled from "styled-components/native";

/**
 * 상세정보 폰트 스타일입니다. (10px)
 * @author 현웅
 */
export const DetailText = styled.Text`
  font-size: ${({ theme }) => theme.size.detail};
  color: black;
`;
