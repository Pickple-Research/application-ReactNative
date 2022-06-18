import React from "react";
import { BlackBackgroundModal, ModalContent } from "src/Component/Modal";
import { RadiusButton } from "src/Component/Button";
import shallow from "zustand/shallow";
import { useVoteDetailScreenStore } from "src/Zustand";

/**
 * 투표 상세페이지 투표 삭제 모달입니다.
 * @author 현웅
 */
export function VoteDetailDeleteModal() {
  const { voteDeleteModalVisible, setVoteDeleteModalVisible, deleteVote } =
    useVoteDetailScreenStore(
      state => ({
        voteDeleteModalVisible: state.voteDeleteModalVisible,
        setVoteDeleteModalVisible: state.setVoteDeleteModalVisible,
        deleteVote: state.deleteVote,
      }),
      shallow,
    );

  return (
    <BlackBackgroundModal
      modalVisible={voteDeleteModalVisible}
      setModalVisible={setVoteDeleteModalVisible}>
      <ModalContent
        content={"이 투표를\n삭제하시겠습니까?"}
        buttonSymmetric={true}
        LeftButton={
          <RadiusButton
            text="취소"
            type="PURPLE_CANCEL"
            onPress={() => {
              setVoteDeleteModalVisible(false);
            }}
          />
        }
        RightButton={
          <RadiusButton
            text="삭제하기"
            type="PURPLE_CONFIRM"
            onPress={deleteVote}
          />
        }
      />
    </BlackBackgroundModal>
  );
}
