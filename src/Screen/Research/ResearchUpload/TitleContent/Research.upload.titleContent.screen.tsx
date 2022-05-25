import React from "react";
import styled from "styled-components/native";
import { ResearchUploadTitle } from "./Research.upload.title";
import { ResearchUploadLink } from "./Research.upload.link";
import { ResearchUploadContent } from "./Research.upload.content";

/**
 * 리서치 업로드 첫번째 페이지입니다.
 * 리서치 제목, 리서치 링크, 리서치 내용을 입력받는 리서치 업로드 페이지입니다.
 * @author 원제
 * @modify 현웅
 */
export function ResearchUploadTitleContentScreen({ navigation }: any) {
  return (
    <Container>
      <ResearchUploadTitle />
      <ResearchUploadLink />
      <ResearchUploadContent />
    </Container>
  );
}

const Container = styled.View``;
