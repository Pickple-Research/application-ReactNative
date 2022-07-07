import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { RadiusButton } from "src/Component/Button";
import { BlackBackgroundModal, TitleModal } from "src/Component/Modal";
import shallow from "zustand/shallow";
import { useResearchParticipateScreenStore } from "src/Zustand";

/**
 * 리서치 참여 중 뒤로가기 버튼을 눌렀을 때 나타나는 모달입니다.
 * @author 현웅
 */
export function ResearchParticipateBlockExitModal() {
  const navigation =
    useNavigation<NavigationProp<AppStackProps, "ResearchParticipateScreen">>();

  const { blockExitModalVisible, setBlockExitModalVisible } =
    useResearchParticipateScreenStore(
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
      <TitleModal
        title={"리서치 응답을\n그만두시겠습니까?"}
        LeftButton={
          <RadiusButton
            text="이어하기"
            type="BLUE_CONFIRM"
            onPress={() => {
              setBlockExitModalVisible(false);
            }}
          />
        }
        RightButton={
          <RadiusButton
            text="그만두기"
            type="BLUE_CANCEL"
            onPress={() => {
              navigation.goBack();
            }}
          />
        }
      />
    </BlackBackgroundModal>
  );
}
