import React from "react";
import styled from "styled-components/native";
import { BlackBackgroundModal } from "src/Component/Modal";
import shallow from "zustand/shallow";
import { useResearchDetailScreenStore } from "src/Zustand";

/**
 * 리서치 끌올 모달입니다.
 * @author 현웅
 */
export function ResearchPullupModal() {
  const { researchPullupModalVisible, setResearchPullupModalVisible } =
    useResearchDetailScreenStore(
      state => ({
        researchPullupModalVisible: state.researchPullupModalVisible,
        setResearchPullupModalVisible: state.setResearchPullupModalVisible,
      }),
      shallow,
    );

  return (
    <BlackBackgroundModal
      modalVisible={researchPullupModalVisible}
      setModalVisible={setResearchPullupModalVisible}>
      <Some />
    </BlackBackgroundModal>
  );
}

const Some = styled.View`
  width: 100px;
  height: 100px;
  background-color: blue;
`;
