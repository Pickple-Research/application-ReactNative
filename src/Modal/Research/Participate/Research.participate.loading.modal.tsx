import React from "react";
import styled from "styled-components/native";
import { BlackBackgroundModal } from "src/Component/Modal";
import shallow from "zustand/shallow";
import { useResearchParticipateStore } from "src/Zustand";

/**
 * 리서치 외부 폼이 로딩 중일 때 나타나는 모달입니다.
 * @author 현웅
 */
export function ResearchParticipateLoadingModal() {
  const { loadingModalVisible, setLoadingModalVisible } =
    useResearchParticipateStore(
      state => ({
        loadingModalVisible: state.loadingModalVisible,
        setLoadingModalVisible: state.setLoadingModalVisible,
      }),
      shallow,
    );

  return (
    <BlackBackgroundModal
      modalVisible={loadingModalVisible}
      setModalVisible={setLoadingModalVisible}>
      <Container />
    </BlackBackgroundModal>
  );
}

const Container = styled.View``;
