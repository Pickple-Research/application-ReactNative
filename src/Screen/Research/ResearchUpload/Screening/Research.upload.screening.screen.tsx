import React from "react";
import styled from "styled-components/native";
import { ResearchUploadStepHeader } from "../Research.upload.stepHeader";
import { ResearchUploadScreening } from "./Research.upload.screening";
import { ResearchUploadCertificate } from "./Research.upload.certificate";

/**
 * 리서치 업로드 네번째 페이지.
 * 리서치 스크리닝 및 목표 인원 보장 여부를 입력받습니다.
 * @author 현웅
 */
export function ResearchUploadScreeningScreen() {
  return (
    <Container>
      <ResearchUploadStepHeader stepName="스크리닝" essential={false} />
      <ResearchUploadScreening />
      <ResearchUploadStepHeader stepName="목표 인원 보장" essential={false} />
      <ResearchUploadCertificate />
    </Container>
  );
}

const Container = styled.View``;
