import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { RadiusButton } from "src/Component/Button";
import { BlackBackgroundModal, TitleContentModal } from "src/Component/Modal";
import shallow from "zustand/shallow";
import { useResearchUploadScreenStore } from "src/Zustand";

/**
 * 리서치 작성 중 뒤로가기 버튼을 눌렀을 때 나타나는 모달입니다.
 * @author 현웅
 */
export function ResearchUploadBlockExitModal() {
  const navigation =
    useNavigation<NavigationProp<AppStackProps, "ResearchUploadScreen">>();

  const { blockExitModalVisible, setBlockExitModalVisible } =
    useResearchUploadScreenStore(
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
        title="작성 취소"
        content={`리서치 작성을 취소하겠습니까?\n취소하실 경우 작성하신 내용이 저장되지 않습니다.`}
        alignCenter={false}
        head={false}
        buttonSymmetric={false}
        LeftButton={
          <RadiusButton
            text="취소"
            type="BLUE_CANCEL"
            styleType="NARROW"
            onPress={() => {
              setBlockExitModalVisible(false);
            }}
          />
        }
        RightButton={
          <RadiusButton
            text="뒤로가기"
            type="BLUE_CONFIRM"
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
