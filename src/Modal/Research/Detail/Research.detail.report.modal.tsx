import React from "react";
import styled from "styled-components/native";
import {
  BlackBackgroundModal,
  ModalContentContainer,
} from "src/Component/Modal";
import { RadiusButton } from "src/Component/Button";
import { H2 } from "src/StyledComponents/Text";
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
    reportReserach,
  } = useResearchDetailScreenStore(
    state => ({
      researchReportModalVisible: state.researchReportModalVisible,
      setResearchReportModalVisible: state.setResearchReportModalVisible,
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
        <Button onPress={reportReserach} />
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

function Button({ onPress }: { onPress: () => void }) {
  return (
    <Button__Container>
      <RadiusButton text="확인" type="BLUE" onPress={onPress} />
    </Button__Container>
  );
}

// TitleContent()
const Title__Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-left: 8px;
  margin-top: 5px;
  margin-bottom: 12px;
`;

const Title__Text = styled.Text`
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

// Button()
const Button__Container = styled.View``;
