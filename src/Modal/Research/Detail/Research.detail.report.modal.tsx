import React from "react";
import styled from "styled-components/native";
import {
  BlackBackgroundModal,
  ModalContentContainer,
} from "src/Component/Modal";
import { RadioButtonGroup } from "src/Component/Radio";
import { RadiusButton } from "src/Component/Button";
import { LinedTextInput } from "src/Component/TextInput";
import { H1, H2 } from "src/StyledComponents/Text";
import shallow from "zustand/shallow";
import { useResearchDetailScreenStore } from "src/Zustand";
import CloseIcon from "src/Resource/svg/close-icon.svg";

/**
 * 리서치 상세페이지 리서치 신고 모달입니다.
 * @author 현웅
 */
export function ResearchDetailReportModal() {
  const {
    researchReportModalVisible,
    setResearchReportModalVisible,
    researchReportOptions,
    selectedReportOptionIndexes,
    onPressReportOption,
    reportEtcOptionInput,
    setReportEtcOptionInput,
    reporting,
    reportReserach,
  } = useResearchDetailScreenStore(
    state => ({
      researchReportModalVisible: state.researchReportModalVisible,
      setResearchReportModalVisible: state.setResearchReportModalVisible,
      researchReportOptions: state.researchReportOptions,
      selectedReportOptionIndexes: state.selectedReportOptionIndexes,
      onPressReportOption: state.onPressReportOption,
      reportEtcOptionInput: state.reportEtcOptionInput,
      setReportEtcOptionInput: state.setReportEtcOptionInput,
      reporting: state.reporting,
      reportReserach: state.reportReserach,
    }),
    shallow,
  );

  return (
    <BlackBackgroundModal
      modalVisible={researchReportModalVisible}
      setModalVisible={setResearchReportModalVisible}>
      <ModalContentContainer>
        <Title
          onPressClose={() => {
            setResearchReportModalVisible(false);
          }}
        />
        <Content />
        <ReportOptions
          researchReportOptions={researchReportOptions}
          selectedReportOptionIndexes={selectedReportOptionIndexes}
          onPressReportOption={onPressReportOption}
          reportEtcOptionInput={reportEtcOptionInput}
          setReportEtcOptionInput={setReportEtcOptionInput}
        />
        <Button reporting={reporting} onPress={reportReserach} />
      </ModalContentContainer>
    </BlackBackgroundModal>
  );
}

function Title({ onPressClose }: { onPressClose: () => void }) {
  return (
    <Title__Container>
      <Title__Text>신고하기</Title__Text>
      <CloseIcon onPress={onPressClose} />
    </Title__Container>
  );
}

function Content() {
  return (
    <Content__Container>
      <Content__Text>어떤 이유로 신고하시나요?</Content__Text>
    </Content__Container>
  );
}

function ReportOptions({
  researchReportOptions,
  selectedReportOptionIndexes,
  onPressReportOption,
  reportEtcOptionInput,
  setReportEtcOptionInput,
}: {
  researchReportOptions: string[];
  selectedReportOptionIndexes: number[];
  onPressReportOption: (index: number) => void;
  reportEtcOptionInput: string;
  setReportEtcOptionInput: (input: string) => void;
}) {
  const editable = selectedReportOptionIndexes.includes(
    researchReportOptions.length - 1,
  );

  return (
    <ReportOptions__Container>
      <RadioButtonGroup
        options={researchReportOptions}
        selectedOptionIndexes={selectedReportOptionIndexes}
        onPress={onPressReportOption}
      />
      <EtcInput__Container>
        <LinedTextInput
          style={{ fontSize: 11, paddingBottom: 0 }}
          props={{
            maxLength: 240,
            editable: editable,
            placeholder: "기타 신고 사유를 입력해주세요",
            value: reportEtcOptionInput,
            onChangeText: setReportEtcOptionInput,
          }}
        />
      </EtcInput__Container>
    </ReportOptions__Container>
  );
}

function Button({
  reporting,
  onPress,
}: {
  reporting: boolean;
  onPress: () => void;
}) {
  return (
    <Button__Container>
      <RadiusButton
        text={reporting ? "신고하는 중.." : "확인"}
        type={reporting ? "BLUE_CANCEL" : "BLUE"}
        onPress={onPress}
      />
    </Button__Container>
  );
}

// TitleContent()
const Title__Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-left: 8px;
  margin-top: 12px;
  margin-bottom: 12px;
`;

const Title__Text = styled(H1)`
  color: ${({ theme }) => theme.color.grey.black};
  font-weight: bold;
`;

// Content()
const Content__Container = styled.View`
  padding-left: 8px;
  margin-bottom: 32px;
`;

const Content__Text = styled(H2)`
  color: ${({ theme }) => theme.color.grey.mild};
`;

// ReportOptions__Container()
const ReportOptions__Container = styled.View`
  padding-left: 8px;
  padding-right: 8px;
  margin-bottom: 32px;
`;

const EtcInput__Container = styled.View`
  padding-left: 24px;
`;

// Button()
const Button__Container = styled.View`
  margin-bottom: 8px;
`;
