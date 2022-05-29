import React from "react";
import styled from "styled-components/native";
import { ResearchUpload__SectionHeader__Container } from "../Research.upload.component";
import { SimpleTextInput } from "src/Component/TextInput";
import { SectionHeaderText } from "src/Component/Text";
import { useResearchUploadStore } from "src/Zustand";
import { globalStyles } from "src/Style/globalStyles";

/**
 * 리서치 작성 페이지 첫번째 단계의 리서치 링크 입력란입니다.
 * @author 현웅
 */
export function ResearchUploadLink() {
  return (
    <Container>
      <SectionHeader />
      <LinkInput />
    </Container>
  );
}

function SectionHeader() {
  return (
    <ResearchUpload__SectionHeader__Container>
      <SectionHeaderText title="리서치 링크" />
    </ResearchUpload__SectionHeader__Container>
  );
}

function LinkInput() {
  const setLinkInput = useResearchUploadStore(state => state.setLinkInput);

  return (
    <LinkInput__Container style={globalStyles.screen__horizontalPadding}>
      <SimpleTextInput
        placeHolder="https://form.gle/example"
        dataTransfer={setLinkInput}
      />
    </LinkInput__Container>
  );
}

const Container = styled.View``;

const LinkInput__Container = styled.View``;
