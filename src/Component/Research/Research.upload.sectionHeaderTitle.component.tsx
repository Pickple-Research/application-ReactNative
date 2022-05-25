import React from "react";
import styled from "styled-components/native";
import { H2 } from "src/StyledComponents/Text";

/**
 * 리서치 업로드 페이지의 섹션 헤더 텍스트입니다.
 * @param title 텍스트 내용
 * @param bold 볼드체 적용 여부
 * @author 현웅
 */
export function ResearchUploadSectionHeaderTitle({
  title,
  bold = true,
}: {
  title: string;
  bold?: boolean;
}) {
  return (
    <SectionHeaderTitle__Text bold={bold}>{title}</SectionHeaderTitle__Text>
  );
}

const SectionHeaderTitle__Text = styled(H2)<{ bold: boolean }>`
  color: black;
  font-weight: ${props => (props.bold ? "bold" : "normal")};
`;
