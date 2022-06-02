import React from "react";
import styled from "styled-components/native";
import { ResearchUpload__SectionHeader__Container } from "../Research.upload.component";
import { RoundTextInput } from "src/Component/TextInput";
import { SectionHeaderText } from "src/Component/Text";
import shallow from "zustand/shallow";
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
    <ResearchUpload__SectionHeader__Container>
      <SectionHeaderText title="리서치를 진행하시는" bold={false} />
      <SectionHeaderText title="기업/단체/수업명" />
      <SectionHeaderText title="을 알려주세요" bold={false} />
    </ResearchUpload__SectionHeader__Container>
  );
}

function OrganizationInput() {
  const { organizationInput, setOrganizationInput } = useResearchUploadStore(
    state => ({
      organizationInput: state.organizationInput,
      setOrganizationInput: state.setOrganizationInput,
    }),
    shallow,
  );

  return (
    <OrganizationInput__Container
      style={globalStyles.screen__horizontalPadding}>
      <RoundTextInput
        props={{
          placeholder: "기업/단체/수업명 ex. 알투씨 컴퍼니",
          value: organizationInput,
          onChangeText: setOrganizationInput,
        }}
      />
    </OrganizationInput__Container>
  );
}

const Container = styled.View`
  margin-bottom: 30px;
`;

const OrganizationInput__Container = styled.View``;
