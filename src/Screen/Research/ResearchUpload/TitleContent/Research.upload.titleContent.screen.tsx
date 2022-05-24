import React from "react";
import styled from "styled-components/native";
import { ResearchUploadTitleContentTitle } from "./Research.upload.titleContent.title";
import { ResearchUploadTitleContentLink } from "./Research.upload.titleContent.link";
import { ResearchUploadTitleContentContent } from "./Research.upload.titleContent.content";

/**
 * 리서치 업로드 첫번째 페이지입니다.
 * 리서치 제목, 리서치 링크, 리서치 내용을 입력받는 리서치 업로드 페이지입니다.
 * @author 원제
 * @modify 현웅
 */
export function ResearchUploadTitleContentScreen({ navigation }: any) {
  return (
    <Container>
      <ResearchUploadTitleContentTitle />
      <ResearchUploadTitleContentLink />
      <ResearchUploadTitleContentContent />
    </Container>
  );
}

const Container = styled.View``;
