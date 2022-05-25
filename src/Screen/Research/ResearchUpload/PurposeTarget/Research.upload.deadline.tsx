import React from "react";
import styled from "styled-components/native";
import { SimpleDropDown } from "src/Component/DropDown";
import { ResearchUpload__SectionHeader__Container } from "../Research.upload.component";
import { SectionHeaderText } from "src/Component/Text";
import { BodyText } from "src/StyledComponents/Text";
import { useResearchUploadStore } from "src/Zustand";
import { globalStyles } from "src/Style/globalStyles";

/**
 * 리서치 작성 페이지 두번째 단계의 리서치 예상 소요 시간 입력란입니다.
 * @author 현웅
 */
export function ResearchUploadDeadline() {
  return (
    <Container>
      <SectionHeader />
      <DeadlineInput />
    </Container>
  );
}

function SectionHeader() {
  return (
    <ResearchUpload__SectionHeader__Container
      style={{
        flexDirection: "column",
        alignItems: "flex-start",
      }}>
      <SectionHeaderTitle__Container>
        <SectionHeaderText title="마감일" />
        <SectionHeaderText title="을 입력해주세요" bold={false} />
      </SectionHeaderTitle__Container>
      <SectionDescription>
        마감일에 맞추어 해당 게시물이 자동 마감됩니다.
      </SectionDescription>
    </ResearchUpload__SectionHeader__Container>
  );
}

function DeadlineInput() {
  return (
    <DeadlineInput__Container style={globalStyles.screen__horizontalPadding}>
      <SimpleDropDown
        data={["2022. 04. 15"]}
        buttonStyle={{
          width: 180,
          borderRadius: 10,
        }}
      />
    </DeadlineInput__Container>
  );
}

const Container = styled.View``;

const SectionHeaderTitle__Container = styled.View`
  flex-direction: row;
  justify-content: flex-start;
`;

const SectionDescription = styled(BodyText)`
  justify-content: flex-start;
`;

const DeadlineInput__Container = styled.View``;
