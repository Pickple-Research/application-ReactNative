import React from "react";
import styled from "styled-components/native";
import { ResearchUploadStepHeader } from "../Research.upload.stepHeader";
import { ResearchUploadPurpose } from "./Research.upload.purpose";
import { ResearchUploadType } from "./Research.upload.type";
import { ResearchUploadOrganization } from "./Research.upload.organization";
import { ResearchUploadTarget } from "./Research.upload.target";
import { ResearchUploadEstimatedTime } from "./Research.upload.estimatedTime";
import { ResearchUploadDeadline } from "./Research.upload.deadline";

/**
 * 리서치 업로드 두번째 페이지입니다.
 * 리서치 진행 목적, 리서치 유형, 기업/단체명, 참여 대상, 예상 소요 시간, 마감일을 입력 받습니다.
 * @author 원제
 * @modify 현웅
 */
export function ResearchUploadPurposeTypeScreen() {
  return (
    <Container>
      <ResearchUploadStepHeader stepName="리서치 기본 정보" essential={true} />
      <ResearchUploadPurpose />
      <ResearchUploadType />
      <ResearchUploadOrganization />
      <ResearchUploadTarget />
      <ResearchUploadEstimatedTime />
      <ResearchUploadDeadline />
    </Container>
  );
}

const Container = styled.View``;
