import React from "react";
import styled from "styled-components/native";
import { BlackBackgroundModal } from "src/Component/Modal";
import shallow from "zustand/shallow";
import { useResearchParticipateScreenStore } from "src/Zustand";

/**
 * 리서치 외부 폼이 로딩 중일 때 나타나는 모달입니다.
 * @author 현웅
 */
export function ResearchParticipateFormLoadingModal() {
  const { formLoadingModalVisible, setFormLoadingModalVisible } =
    useResearchParticipateScreenStore(
      state => ({
        formLoadingModalVisible: state.formLoadingModalVisible,
        setFormLoadingModalVisible: state.setFormLoadingModalVisible,
      }),
      shallow,
    );

  return (
    <BlackBackgroundModal
      modalVisible={formLoadingModalVisible}
      setModalVisible={setFormLoadingModalVisible}>
      <Container />
    </BlackBackgroundModal>
  );
}

const Container = styled.View``;
