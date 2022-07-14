import React from "react";
import { RadiusButton } from "src/Component/Button";
import { BlackBackgroundModal, TitleModal } from "src/Component/Modal";
import shallow from "zustand/shallow";
import { useVoteDetailScreenStore } from "src/Zustand";

/**
 * 투표 상세 페이지 투표 스크랩 취소 모달입니다.
 * @author 현웅
 */
export function VoteDetailUnscrapVoteModal() {
  const {
    voteUnscrapModalVisible,
    setVoteUnscrapModalVisible,
    scrapping,
    unscrapVote,
  } = useVoteDetailScreenStore(
    state => ({
      voteUnscrapModalVisible: state.voteUnscrapModalVisible,
      setVoteUnscrapModalVisible: state.setVoteUnscrapModalVisible,
      scrapping: state.scrapping,
      unscrapVote: state.unscrapVote,
    }),
    shallow,
  );

  async function tryUnscrapVote() {
    const result = await unscrapVote();
    if (result) setVoteUnscrapModalVisible(false);
  }

  return (
    <BlackBackgroundModal
      modalVisible={voteUnscrapModalVisible}
      setModalVisible={setVoteUnscrapModalVisible}>
      <TitleModal
        title={"스크랩을\n취소하시겠습니까?"}
        buttonSymmetric={true}
        LeftButton={
          scrapping ? (
            <RadiusButton
              loading
              text="스크랩 취소 중"
              type="PURPLE"
              styleType="NARROW"
            />
          ) : (
            <RadiusButton
              text="아니오"
              type="PURPLE_CONFIRM"
              styleType="NARROW"
              onPress={() => {
                setVoteUnscrapModalVisible(false);
              }}
            />
          )
        }
        RightButton={
          scrapping ? undefined : (
            <RadiusButton
              text="예"
              type="PURPLE_CANCEL"
              styleType="NARROW"
              onPress={tryUnscrapVote}
            />
          )
        }
      />
    </BlackBackgroundModal>
  );
}
