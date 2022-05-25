import React from "react";
import styled from "styled-components/native";
import { SimpleDropDown } from "src/Component/DropDown";
import { SectionHeaderText } from "src/Component/Text";
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
  return (
    <EstimatedTimeInput__Container>
      <SimpleDropDown
        defaultValue={5}
        data={[3, 5, 7, 9]}
        buttonStyle={{
          width: 100,
          marginHorizontal: 8,
          borderRadius: 8,
        }}
      />
      <SectionHeaderText title="분" bold={false} />
    </EstimatedTimeInput__Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SectionTitle__Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const EstimatedTimeInput__Container = styled.View`
  flex-direction: row;
  align-items: center;
`;
