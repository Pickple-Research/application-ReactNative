import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { RadiusButton } from "src/Component/Button";
import { BlackBackgroundModal, TitleContentModal } from "src/Component/Modal";
import shallow from "zustand/shallow";
import { useVoteUploadScreenStore } from "src/Zustand";

/**
 * 투표 작성 중 뒤로가기 버튼을 눌렀을 때 나타나는 모달입니다.
 * @author 현웅
 */
export function VoteUploadBlockExitModal() {
  const navigation =
    useNavigation<NavigationProp<AppStackProps, "CommunityVoteUploadScreen">>();

  const { blockExitModalVisible, setBlockExitModalVisible } =
    useVoteUploadScreenStore(
      state => ({
        blockExitModalVisible: state.blockExitModalVisible,
        setBlockExitModalVisible: state.setBlockExitModalVisible,
      }),
      shallow,
    );

  return (
    <BlackBackgroundModal
      modalVisible={blockExitModalVisible}
      setModalVisible={setBlockExitModalVisible}>
      <TitleContentModal
        title="작성을 취소하시겠습니까?"
        content="입력한 내용이 저장되지 않습니다."
        LeftButton={
          <RadiusButton
            text="아니오"
            type="PURPLE_CONFIRM"
            styleType="NARROW"
            onPress={() => {
              setBlockExitModalVisible(false);
            }}
          />
        }
        RightButton={
          <RadiusButton
            text="예"
            type="PURPLE_CANCEL"
            styleType="NARROW"
            onPress={() => {
              navigation.goBack();
            }}
          />
        }
      />
    </BlackBackgroundModal>
  );
}
