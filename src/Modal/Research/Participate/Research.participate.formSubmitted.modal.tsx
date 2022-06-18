import React from "react";
import { BlackBackgroundModal } from "src/Component/Modal";
import { ResearchParticipateFormSubmittedLoadingModal } from "./FormSubmitted/Research.participate.formSubmitted.loading.modal";
import { ResearchParticipateFormSubmittedSuccessModal } from "./FormSubmitted/Research.participate.formSubmitted.success.modal";
import { ResearchParticipateFormSubmittedFailModal } from "./FormSubmitted/Research.participate.formSubmitted.fail.modal";
import shallow from "zustand/shallow";
import { useResearchParticipateScreenStore } from "src/Zustand";

/**
 * 구글/네이버 폼 제출 완료 화면이 나타났을 때 나타나는 모달입니다.
 * 로딩(참여완료 요청 응답 대기) 중, 요청 성공, 요청 실패에 따라 내용이 달라집니다.
 * @author 현웅
 */
export function ResearchParticipateFormSubmittedModal() {
  const { formSubmittedModalVisible, setFormSubmittedModalVisible } =
    useResearchParticipateScreenStore(
      state => ({
        formSubmittedModalVisible: state.formSubmittedModalVisible,
        setFormSubmittedModalVisible: state.setFormSubmittedModalVisible,
      }),
      shallow,
    );

  return (
    <BlackBackgroundModal
      modalVisible={formSubmittedModalVisible}
      setModalVisible={setFormSubmittedModalVisible}
      allowIgnore={false}>
      <ModalContent />
    </BlackBackgroundModal>
  );
}

/**
 * 로딩 중, 참여 실패, 참여 성공에 따른 모달 콘텐츠
 * @author 현웅
 */
function ModalContent() {
  const { loading, participateSuccessed } = useResearchParticipateScreenStore(
    state => ({
      loading: state.loading,
      participateSuccessed: state.participateSuccessed,
    }),
    shallow,
  );

  //* 로딩 중 (서버 통신)
  if (loading) {
    return <ResearchParticipateFormSubmittedLoadingModal />;
  }

  //* 참여 성공시
  if (participateSuccessed) {
    return <ResearchParticipateFormSubmittedSuccessModal />;
  }

  //* 참여 실패시
  return <ResearchParticipateFormSubmittedFailModal />;
}
