import React from "react";
import styled from "styled-components/native";
import { ResearchUploadSectionHeaderTitle } from "src/Component/Research";
import { RoundTextInput } from "src/Component/TextInput";
import { SectionHeader__Container } from "src/StyledComponents/View";
import { useResearchUploadStore } from "src/Zustand";
import { globalStyles } from "src/Style/globalStyles";

/**
 * 리서치 작성 페이지 두번째 단계의 리서치 진행 기업/단체/수업명 입력란입니다.
 * @author 현웅
 */
export function ResearchUploadOrganization() {
  return (
    <Container>
      <SectionHeader />
      <OrganizationInput />
    </Container>
  );
}

function SectionHeader() {
  return (
    <SectionHeader__Container>
      <ResearchUploadSectionHeaderTitle
        title="리서치를 진행하시는"
        bold={false}
      />
      <ResearchUploadSectionHeaderTitle title="기업/단체/수업명" />
      <ResearchUploadSectionHeaderTitle title="을 알려주세요" bold={false} />
    </SectionHeader__Container>
  );
}

function OrganizationInput() {
  const setOrganizationInput = useResearchUploadStore(
    state => state.setOrganizationInput,
  );

  return (
    <OrganizationInput__Container
      style={globalStyles.screen__horizontalPadding}>
      <RoundTextInput
        placeHolder="기업/단체/수업명 ex. 알투씨 컴퍼니"
        dataTransfer={setOrganizationInput}
      />
    </OrganizationInput__Container>
  );
}

const Container = styled.View``;

const OrganizationInput__Container = styled.View``;
