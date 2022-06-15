import React from "react";
import styled from "styled-components/native";
import { ResearchUpload__SectionHeader__Container } from "../Research.upload.component";
import { LinedTextInput } from "src/Component/TextInput";
import { SectionHeaderText } from "src/Component/Text";
import shallow from "zustand/shallow";
import { useResearchUploadScreenStore } from "src/Zustand";
import { globalStyles } from "src/Style/globalStyles";

/**
 * 리서치 작성 페이지 두번째 단계의 리서치 참여대상 입력란입니다.
 * @author 현웅
 */
export function ResearchUploadTarget() {
  return (
    <Container>
      <SectionHeader />
      <TargetInput />
    </Container>
  );
}

function SectionHeader() {
  return (
    <ResearchUpload__SectionHeader__Container>
      <SectionHeaderText title="참여 대상을 입력해주세요" />
    </ResearchUpload__SectionHeader__Container>
  );
}

function TargetInput() {
  const { targetInput, setTargetInput } = useResearchUploadScreenStore(
    state => ({
      targetInput: state.targetInput,
      setTargetInput: state.setTargetInput,
    }),
    shallow,
  );

  return (
    <TargetInput__Container style={globalStyles.screen__horizontalPadding}>
      <LinedTextInput
        props={{
          placeholder: "쇼핑몰 이용 경험이 있는 MZ세대 여성",
          value: targetInput,
          onChangeText: setTargetInput,
        }}
      />
    </TargetInput__Container>
  );
}

const Container = styled.View`
  margin-bottom: 30px;
`;

const TargetInput__Container = styled.View``;
