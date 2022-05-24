import React from "react";
import styled from "styled-components/native";
import { ResearchUploadSectionHeaderTitle } from "src/Component/Research";
import { RoundTextInput } from "src/Component/TextInput";
import { SectionHeader__Container } from "src/StyledComponents/View";
import { useResearchUploadStore } from "src/Zustand";
import { globalStyles } from "src/Style/globalStyles";

/**
 * 리서치 작성 페이지 첫번째 단계의 리서치 내용 입력란입니다.
 * @author 현웅
 */
export function ResearchUploadTitleContentContent() {
  return (
    <Container>
      <SectionHeader />
      <ContentInput />
    </Container>
  );
}

function SectionHeader() {
  return (
    <SectionHeader__Container>
      <ResearchUploadSectionHeaderTitle title="리서치 내용" />
    </SectionHeader__Container>
  );
}

function ContentInput() {
  const setContentInput = useResearchUploadStore(
    state => state.setContentInput,
  );

  return (
    <ContentInput__Container style={globalStyles.screen__horizontalPadding}>
      <RoundTextInput
        placeHolder="참여하시는 분들께 리서치를 설명해주세요"
        dataTransfer={setContentInput}
      />
    </ContentInput__Container>
  );
}

const Container = styled.View``;

const ContentInput__Container = styled.View``;
