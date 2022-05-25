import React from "react";
import styled from "styled-components/native";
import { uploadScreenStyles } from "../Research.upload.screen";
import { ResearchUploadSectionHeaderTitle } from "src/Component/Research";
import { RoundTextInput } from "src/Component/TextInput";
import { SectionHeader__Container } from "src/StyledComponents/View";
import { useResearchUploadStore } from "src/Zustand";
import { globalStyles } from "src/Style/globalStyles";

/**
 * 리서치 작성 페이지 첫번째 단계의 리서치 제목 입력란입니다.
 * @author 현웅
 */
export function ResearchUploadTitle() {
  return (
    <Container>
      <SectionHeader />
      <TitleInput />
    </Container>
  );
}

function SectionHeader() {
  return (
    <SectionHeader__Container
      style={uploadScreenStyles.sectionHeaderBottomMargin}>
      <ResearchUploadSectionHeaderTitle title="리서치 제목" />
    </SectionHeader__Container>
  );
}

function TitleInput() {
  const setTitleInput = useResearchUploadStore(state => state.setTitleInput);

  return (
    <TitleInput__Container style={globalStyles.screen__horizontalPadding}>
      <RoundTextInput
        placeHolder="제목을 입력해주세요"
        dataTransfer={setTitleInput}
      />
    </TitleInput__Container>
  );
}

const Container = styled.View``;

const TitleInput__Container = styled.View``;
