import React from "react";
import { RadiusButton } from "src/Component/Button";
import { BlackBackgroundModal, ModalContent } from "src/Component/Modal";
import shallow from "zustand/shallow";
import { useMypageScrappedScreenStore } from "src/Zustand";

/**
 * 마이페이지 나의 스크랩 페이지 투표 스크랩 취소 모달입니다.
 * @author 현웅
 */
export function MypageScrappedUnscrapVoteModal() {
  const { voteUnscrapModalVisible, setVoteUnscrapModalVisible, unscrapVote } =
    useMypageScrappedScreenStore(
      state => ({
        voteUnscrapModalVisible: state.voteUnscrapModalVisible,
        setVoteUnscrapModalVisible: state.setVoteUnscrapModalVisible,
        unscrapVote: state.unscrapVote,
      }),
      shallow,
    );

  return (
    <BlackBackgroundModal
      modalVisible={voteUnscrapModalVisible}
      setModalVisible={setVoteUnscrapModalVisible}>
      <ModalContent
        content={"스크랩을\n취소하시겠습니까?"}
        buttonSymmetric={true}
        LeftButton={
          <RadiusButton
            text="아니오"
            type="PURPLE_CONFIRM"
            onPress={() => {
              setVoteUnscrapModalVisible(false);
            }}
          />
        }
        RightButton={
          <RadiusButton text="예" type="PURPLE_CANCEL" onPress={unscrapVote} />
        }
      />
    </BlackBackgroundModal>
  );
}
