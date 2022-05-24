import React from "react";
import styled from "styled-components/native";
import { ResearchUploadSectionHeaderTitle } from "src/Component/Research";
import { SimpleTextInput } from "src/Component/TextInput";
import { SectionHeader__Container } from "src/StyledComponents/View";
import { useResearchUploadStore } from "src/Zustand";
import { globalStyles } from "src/Style/globalStyles";

/**
 * 리서치 작성 페이지 첫번째 단계의 리서치 링크 입력란입니다.
 * @author 현웅
 */
export function ResearchUploadTitleContentLink() {
  return (
    <Container>
      <SectionHeader />
      <LinkInput />
    </Container>
  );
}

function SectionHeader() {
  return (
    <SectionHeader__Container>
      <ResearchUploadSectionHeaderTitle title="리서치 링크" />
    </SectionHeader__Container>
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
