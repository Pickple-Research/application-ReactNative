import React from "react";
import styled from "styled-components/native";
import { ResearchUpload__SectionHeader__Container } from "../Research.upload.component";
import { SimpleDropDown, SimpleDropDownDataType } from "src/Component/DropDown";
import { SectionHeaderText } from "src/Component/Text";
import shallow from "zustand/shallow";
import { useResearchUploadScreenStore } from "src/Zustand";
import { ResearchPurpose } from "src/Object/Enum";
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
  const { purposeInput, setPurposeInput } = useResearchUploadScreenStore(
    state => ({
      purposeInput: state.purposeInput,
      setPurposeInput: state.setPurposeInput,
    }),
    shallow,
  );

  const purposeDropDownData: SimpleDropDownDataType[] = [
    { value: ResearchPurpose.ACADEMIC, displayName: "학술" },
    { value: ResearchPurpose.ETC, displayName: "기타" },
  ];

  return (
    <PurposeInput__Container style={globalStyles.screen__horizontalPadding}>
      <SimpleDropDown
        data={purposeDropDownData}
        onSelect={(selectedItem: SimpleDropDownDataType<ResearchPurpose>) => {
          setPurposeInput(selectedItem.value);
        }}
        type="RESEARCH_PURPOSE"
        props={{
          defaultButtonText: purposeInput
            ? purposeInput
            : "목적을 선택해주세요",
          defaultValue: purposeInput,
        }}
      />
    </PurposeInput__Container>
  );
}

const Container = styled.View`
  margin-bottom: 30px;
`;

const PurposeInput__Container = styled.View``;
