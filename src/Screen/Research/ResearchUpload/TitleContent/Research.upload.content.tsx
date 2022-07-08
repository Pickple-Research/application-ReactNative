import React from "react";
import styled from "styled-components/native";
import { ResearchUpload__SectionHeader__Container } from "../Research.upload.component";
import { RoundTextInput } from "src/Component/TextInput";
import { SectionHeaderText } from "src/Component/Text";
import shallow from "zustand/shallow";
import { useResearchUploadScreenStore } from "src/Zustand";
import { globalStyles } from "src/Style/globalStyles";

/**
 * 리서치 작성 페이지 첫번째 단계의 리서치 내용 입력란입니다.
 * @author 현웅
 */
export function ResearchUploadContent() {
  return (
    <Container>
      <SectionHeader />
      <ContentInput />
    </Container>
  );
}

function SectionHeader() {
  return (
    <ResearchUpload__SectionHeader__Container>
      <SectionHeaderText title="리서치 내용" />
    </ResearchUpload__SectionHeader__Container>
  );
}

function ContentInput() {
  const { contentInput, setContentInput } = useResearchUploadScreenStore(
    state => ({
      contentInput: state.contentInput,
      setContentInput: state.setContentInput,
    }),
    shallow,
  );

  return (
    <ContentInput__Container style={globalStyles.screen__horizontalPadding}>
      <RoundTextInput
        style={{ height: 200, textAlignVertical: "top", padding: 30 }}
        props={{
          placeholder: "참여하시는 분들께 리서치를 설명해주세요",
          value: contentInput,
          onChangeText: setContentInput,
          multiline: true,
          maxLength: 800,
        }}
      />
    </ContentInput__Container>
  );
}

const Container = styled.View``;

const ContentInput__Container = styled.View``;
