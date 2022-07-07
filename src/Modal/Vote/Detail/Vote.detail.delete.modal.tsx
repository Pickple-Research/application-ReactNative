import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { BlackBackgroundModal, TitleModal } from "src/Component/Modal";
import { RadiusButton } from "src/Component/Button";
import shallow from "zustand/shallow";
import { useVoteDetailScreenStore } from "src/Zustand";

/**
 * 투표 상세페이지 투표 삭제 모달입니다.
 * @author 현웅
 */
export function VoteDetailDeleteModal() {
  const navigation =
    useNavigation<NavigationProp<AppStackProps, "CommunityVoteDetailScreen">>();

  const {
    voteDeleteModalVisible,
    setVoteDeleteModalVisible,
    deleting,
    deleteVote,
  } = useVoteDetailScreenStore(
    state => ({
      voteDeleteModalVisible: state.voteDeleteModalVisible,
      setVoteDeleteModalVisible: state.setVoteDeleteModalVisible,
      deleting: state.deleting,
      deleteVote: state.deleteVote,
    }),
    shallow,
  );

  /**
   * 투표 삭제를 시도합니다. 성공적으로 삭제한 경우 투표 상세페이지에서 나갑니다.
   * @author 현웅
   */
  async function tryDeleteVote() {
    if (await deleteVote()) navigation.goBack();
  }

  return (
    <BlackBackgroundModal
      modalVisible={voteDeleteModalVisible}
      setModalVisible={setVoteDeleteModalVisible}
      allowIgnore={deleting ? false : true}>
      <TitleModal
        title={"이 투표를\n삭제하시겠습니까?"}
        buttonSymmetric={true}
        LeftButton={
          <RadiusButton
            text="취소"
            type="PURPLE_CANCEL"
            styleType="NARROW"
            onPress={
              deleting
                ? undefined
                : () => {
                    setVoteDeleteModalVisible(false);
                  }
            }
          />
        }
        RightButton={
          <RadiusButton
            text="삭제하기"
            type="PURPLE_CONFIRM"
            styleType="NARROW"
            onPress={deleting ? undefined : tryDeleteVote}
          />
        }
      />
    </BlackBackgroundModal>
  );
}
