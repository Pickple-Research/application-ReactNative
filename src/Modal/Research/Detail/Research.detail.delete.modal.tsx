import React from "react";
import { RadiusButton } from "src/Component/Button";
import { BlackBackgroundModal, ModalContent } from "src/Component/Modal";
import shallow from "zustand/shallow";
import { useResearchDetailScreenStore } from "src/Zustand";

/**
 * 리서치 상세페이지 리서치 삭제 모달입니다.
 * @author 현웅
 */
export function ResearchDetailDeleteModal() {
  const {
    researchDeleteModalVisible,
    setResearchDeleteModalVisible,
    deleteResearch,
  } = useResearchDetailScreenStore(
    state => ({
      researchDeleteModalVisible: state.researchDeleteModalVisible,
      setResearchDeleteModalVisible: state.setResearchDeleteModalVisible,
      deleteResearch: state.deleteResearch,
    }),
    shallow,
  );

  return (
    <BlackBackgroundModal
      modalVisible={researchDeleteModalVisible}
      setModalVisible={setResearchDeleteModalVisible}>
      <ModalContent
        content="이 리서치를 삭제하시겠습니까?"
        buttonSymmetric={true}
        LeftButton={
          <RadiusButton
            text="취소"
            type="BLUE_CANCEL"
            onPress={() => {
              setResearchDeleteModalVisible(false);
            }}
          />
        }
        RightButton={
          <RadiusButton
            text="삭제하기"
            type="BLUE_CONFIRM"
            onPress={deleteResearch}
          />
        }
      />
    </BlackBackgroundModal>
  );
}
