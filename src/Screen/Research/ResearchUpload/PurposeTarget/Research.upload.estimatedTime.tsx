import React from "react";
import styled from "styled-components/native";
import { SimpleDropDown, SimpleDropDownDataType } from "src/Component/DropDown";
import { SectionHeaderText } from "src/Component/Text";
import shallow from "zustand/shallow";
import { useResearchUploadStore } from "src/Zustand";
import { globalStyles } from "src/Style/globalStyles";
import InfoIcon from "src/Resource/svg/Info-icon.svg";

/**
 * 리서치 작성 페이지 두번째 단계의 리서치 예상 소요 시간 입력란입니다.
 * @author 현웅
 */
export function ResearchUploadEstimatedTime() {
  return (
    <Container style={globalStyles.screen__horizontalPadding}>
      <SectionTitle />
      <EstimatedTimeInput />
    </Container>
  );
}

function SectionTitle() {
  return (
    <SectionTitle__Container>
      <SectionHeaderText title="예상 소요 시간" />
      <SectionHeaderText
        title="을 입력해주세요"
        bold={false}
        style={{ marginRight: 5 }}
      />
      <InfoIcon />
    </SectionTitle__Container>
  );
}

function EstimatedTimeInput() {
  const { estimatedTimeInput, setEstimatedTimeInput } = useResearchUploadStore(
    state => ({
      estimatedTimeInput: state.estimatedTimeInput,
      setEstimatedTimeInput: state.setEstimatedTimeInput,
    }),
    shallow,
  );

  const estimatedTimeDropDownData: SimpleDropDownDataType[] = [
    { value: 1, displayName: "1" },
    { value: 2, displayName: "2" },
    { value: 3, displayName: "3" },
    { value: 4, displayName: "4" },
    { value: 5, displayName: "5" },
  ];

  return (
    <EstimatedTimeInput__Container>
      <SimpleDropDown
        data={estimatedTimeDropDownData}
        onSelect={(selectedItem: SimpleDropDownDataType<number>) => {
          setEstimatedTimeInput(selectedItem.value);
        }}
        type="ESTIMATED_TIME"
        props={{
          defaultButtonText: estimatedTimeInput
            ? estimatedTimeInput.toString()
            : "0",
          defaultValue: estimatedTimeInput,
        }}
      />
      <SectionHeaderText title="분" bold={false} style={{ marginLeft: 12 }} />
    </EstimatedTimeInput__Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const SectionTitle__Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const EstimatedTimeInput__Container = styled.View`
  flex-direction: row;
  align-items: center;
`;
