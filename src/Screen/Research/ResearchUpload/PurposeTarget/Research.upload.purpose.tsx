import React from "react";
import styled from "styled-components/native";
import { ResearchUploadSectionHeaderTitle } from "src/Component/Research";
import { SimpleDropDown } from "src/Component/DropDown";
import { SectionHeader__Container } from "src/StyledComponents/View";
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
    <SectionHeader__Container>
      <ResearchUploadSectionHeaderTitle
        title="리서치를 진행하시는 "
        bold={false}
      />
      <ResearchUploadSectionHeaderTitle title="목적" />
      <ResearchUploadSectionHeaderTitle title="을 알려주세요" bold={false} />
    </SectionHeader__Container>
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
