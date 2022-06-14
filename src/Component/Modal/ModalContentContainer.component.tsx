import React from "react";
import styled from "styled-components/native";

/**
 * 모달 콘텐츠를 감싸는 모서리가 둥근 흰색 배경입니다.
 * @author 현웅
 */
export function ModalContentContainer({ children }: { children: any }) {
  return <Container>{children}</Container>;
}

const Container = styled.View`
  width: 70%;
  background-color: ${({ theme }) => theme.color.grey.white};
  padding: 16px;
  border-radius: 12px;
`;
