import React from "react";
import styled from "styled-components/native";
import { H3 } from "src/StyledComponents/Text";
import { globalStyles } from "src/Style/globalStyles";

/**
 * 리서치 업로드 페이지에서 각 주요 단계별로 나타나는 단계 헤더입니다.
 * ex. 리서치 기본 정보 (필수) / 참여자 경품 (선택)
 * @param stepName 단계 이름
 * @param essential 단계 작성 필수 여부
 * @author 현웅
 */
export function ResearchUploadStepHeader({
  stepName,
  essential,
}: {
  stepName: string;
  essential: boolean;
}) {
  return (
    <Container style={globalStyles.screen__horizontalPadding}>
      <StepName__Text>{`${stepName} `}</StepName__Text>
      <Optional__Text>{essential ? `(필수)` : `(선택)`}</Optional__Text>
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.color.blue.mild};
  padding-top: 12px;
  padding-bottom: 12px;
  margin-bottom: 30px;
`;

const StepName__Text = styled.Text`
  color: ${({ theme }) => theme.color.blue.text};
  font-size: 16px;
  font-weight: bold;
`;

const Optional__Text = styled(H3)`
  color: ${({ theme }) => theme.color.grey.mild};
`;
