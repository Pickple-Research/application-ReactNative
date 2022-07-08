import React from "react";
import styled from "styled-components/native";
import { ResearchUpload__SectionHeader__Container } from "../Research.upload.component";
import { SectionHeaderText } from "src/Component/Text";
import { H2, BodyText } from "src/StyledComponents/Text";
import shallow from "zustand/shallow";
import { useResearchUploadScreenStore } from "src/Zustand";
import { globalStyles } from "src/Style";
import { convertTimeToYYYYMMDD } from "src/Util";

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
        {` 마감일에 맞추어 해당 게시물이 자동 마감됩니다.`}
      </SectionDescription>
    </ResearchUpload__SectionHeader__Container>
  );
}

function DeadlineInput() {
  const { deadlineInput, setDeadlineInput } = useResearchUploadScreenStore(
    state => ({
      deadlineInput: state.deadlineInput,
      setDeadlineInput: state.setDeadlineInput,
    }),
    shallow,
  );

  return (
    <DeadlineInput__Container style={globalStyles.screen__horizontalPadding}>
      <DeadlineInput__InputContainer activeOpacity={0.8}>
        <DeadlineInput__InputText>
          {convertTimeToYYYYMMDD(deadlineInput)}
        </DeadlineInput__InputText>
      </DeadlineInput__InputContainer>

      <DeadlineInput__SelectContainer></DeadlineInput__SelectContainer>
    </DeadlineInput__Container>
  );
}

const Container = styled.View``;

const SectionHeaderTitle__Container = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 2px;
`;

const SectionDescription = styled(BodyText)`
  justify-content: flex-start;
  color: ${({ theme }) => theme.color.grey.mild};
`;

// DeadlineInput()
const DeadlineInput__Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const DeadlineInput__InputContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  //TODO: #DESIGN-SYSTEM
  background-color: #eeeeee;
  padding: 14px 40px;
  border-radius: 10px;
`;

const DeadlineInput__InputText = styled(H2)`
  color: ${({ theme }) => theme.color.grey.icon};
`;

const DeadlineInput__SelectContainer = styled.View``;
