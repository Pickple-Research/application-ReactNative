import React from "react";
import { BlackBackgroundModal, TitleContentModal } from "src/Component/Modal";
import { RadiusButton } from "src/Component/Button";
import shallow from "zustand/shallow";
import { useVoteDetailScreenStore } from "src/Zustand";

/**
 * 투표 상세페이지 투표 마감 모달입니다.
 * @author 현웅
 */
export function VoteDetailCloseModal() {
  const { voteCloseModalVisible, setVoteCloseModalVisible, closeVote } =
    useVoteDetailScreenStore(
      state => ({
        voteCloseModalVisible: state.voteCloseModalVisible,
        setVoteCloseModalVisible: state.setVoteCloseModalVisible,
        closeVote: state.closeVote,
      }),
      shallow,
    );

  return (
    <BlackBackgroundModal
      modalVisible={voteCloseModalVisible}
      setModalVisible={setVoteCloseModalVisible}>
      <TitleContentModal
        title="마감하시겠습니까?"
        content={"마감하면 투표가 종료됩니다.\n최종 결과를 공유할 수 있습니다."}
        headHeight={16}
        buttonSymmetric={false}
        LeftButton={
          <RadiusButton
            text="취소"
            type="PURPLE_CANCEL"
            styleType="NARROW"
            onPress={() => {
              setVoteCloseModalVisible(false);
            }}
          />
        }
        RightButton={
          <RadiusButton
            text="마감하기"
            type="PURPLE_CONFIRM"
            styleType="NARROW"
            onPress={closeVote}
          />
        }
      />
    </BlackBackgroundModal>
  );
}
