import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { RadiusButton } from "src/Component/Button";
import { BlackBackgroundModal, ModalContent } from "src/Component/Modal";
import shallow from "zustand/shallow";
import { useResearchDetailScreenStore } from "src/Zustand";

/**
 * 리서치 상세페이지 리서치 삭제 모달입니다.
 * @author 현웅
 */
export function ResearchDetailDeleteModal() {
  const navigation =
    useNavigation<NavigationProp<AppStackProps, "ResearchDetailScreen">>();

  const {
    researchDeleteModalVisible,
    setResearchDeleteModalVisible,
    deleting,
    deleteResearch,
  } = useResearchDetailScreenStore(
    state => ({
      researchDeleteModalVisible: state.researchDeleteModalVisible,
      setResearchDeleteModalVisible: state.setResearchDeleteModalVisible,
      deleting: state.deleting,
      deleteResearch: state.deleteResearch,
    }),
    shallow,
  );

  /**
   * 리서치 삭제를 시도합니다. 성공적으로 삭제한 경우 리서치 상세페이지에서 나갑니다.
   * @author 현웅
   */
  async function tryDeleteResearch() {
    if (await deleteResearch()) navigation.goBack();
  }

  return (
    <BlackBackgroundModal
      modalVisible={researchDeleteModalVisible}
      setModalVisible={setResearchDeleteModalVisible}
      allowIgnore={deleting ? false : true}>
      <ModalContent
        content={
          deleting
            ? "리서치를 삭제하고 있습니다\n잠시만 기다려 주세요"
            : "이 리서치를\n삭제하시겠습니까?"
        }
        buttonSymmetric={true}
        LeftButton={
          <RadiusButton
            text="취소"
            type="BLUE_CANCEL"
            onPress={
              deleting
                ? undefined
                : () => {
                    setResearchDeleteModalVisible(false);
                  }
            }
          />
        }
        RightButton={
          <RadiusButton
            text="삭제하기"
            type="BLUE_CONFIRM"
            onPress={deleting ? undefined : tryDeleteResearch}
          />
        }
      />
    </BlackBackgroundModal>
  );
}
