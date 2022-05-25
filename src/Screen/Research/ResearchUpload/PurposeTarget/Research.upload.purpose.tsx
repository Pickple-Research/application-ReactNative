import React from "react";
import styled from "styled-components/native";
import { ResearchUpload__SectionHeader__Container } from "../Research.upload.component";
import { SimpleDropDown } from "src/Component/DropDown";
import { SectionHeaderText } from "src/Component/Text";
import { useResearchUploadStore } from "src/Zustand";
import { globalStyles } from "src/Style/globalStyles";

/**
 * 리서치 작성 페이지 두번째 단계의 리서치 진행 목적 입력란입니다.
 * @author 현웅
 */
export function ResearchUploadPurpose() {
  return (
    <Container>
      <SectionHeader />
      <PurposeInput />
    </Container>
  );
}

function SectionHeader() {
  return (
    <ResearchUpload__SectionHeader__Container>
      <SectionHeaderText title="리서치를 진행하시는 " bold={false} />
      <SectionHeaderText title="목적" />
      <SectionHeaderText title="을 알려주세요" bold={false} />
    </ResearchUpload__SectionHeader__Container>
  );
}

function PurposeInput() {
  return (
    <PurposeInput__Container style={globalStyles.screen__horizontalPadding}>
      <SimpleDropDown
        data={["학술", "고객", "기타"]}
        buttonStyle={{
          width: 180,
          backgroundColor: "white",
          borderRadius: 10,
          borderWidth: 1,
          borderColor: "#E5E5E5",
        }}
        buttonTextStyle={{
          textAlign: "left",
          paddingLeft: 10,
        }}
      />
    </PurposeInput__Container>
  );
}

const Container = styled.View``;

const PurposeInput__Container = styled.View``;
