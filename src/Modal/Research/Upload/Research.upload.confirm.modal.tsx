import React from "react";
import { ActivityIndicator } from "react-native";
import {
  StackActions,
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { RadiusButton } from "src/Component/Button";
import { BlackBackgroundModal, TitleContentModal } from "src/Component/Modal";
import shallow from "zustand/shallow";
import { useResearchUploadScreenStore } from "src/Zustand";

/**
 * 리서치 작성 완료 후 업로드 하기 전에 보여주는 재확인 모달입니다.
 * @author 현웅
 */
export function ResearchUploadConfirmModal() {
  const navigation =
    useNavigation<NavigationProp<AppStackProps, "ResearchUploadScreen">>();

  const {
    confirmModalVisible,
    setConfirmModalVisible,
    uploading,
    uploadResearch,
  } = useResearchUploadScreenStore(
    state => ({
      confirmModalVisible: state.confirmModalVisible,
      setConfirmModalVisible: state.setConfirmModalVisible,
      uploading: state.uploading,
      uploadResearch: state.uploadResearch,
    }),
    shallow,
  );

  /**
   * 리서치 업로드를 시도합니다.
   * 성공적으로 업로드된 경우, 생성된 리서치 상세 페이지로 이동합니다.
   * @author 현웅
   */
  async function tryUploadResearch() {
    const newResearch = await uploadResearch();
    if (newResearch !== null) {
      navigation.dispatch(
        StackActions.replace("ResearchDetailScreen", { research: newResearch }),
      );
    }
  }

  return (
    <BlackBackgroundModal
      modalVisible={confirmModalVisible}
      setModalVisible={setConfirmModalVisible}>
      <TitleContentModal
        title="리서치 게시"
        content={`한 번 게시물을 올리면 수정이 어렵습니다.\n이 리서치를 작성 완료하시겠습니까?`}
        alignCenter={false}
        head={false}
        buttonSymmetric={false}
        LeftButton={
          uploading ? (
            <RadiusButton
              text="게시 중..."
              type="BLUE_CONFIRM"
              styleType="NARROW"
            />
          ) : (
            <RadiusButton
              text="취소"
              type="BLUE_CANCEL"
              styleType="NARROW"
              onPress={() => {
                setConfirmModalVisible(false);
              }}
            />
          )
        }
        RightButton={
          uploading ? undefined : (
            <RadiusButton
              text={`작성완료`}
              type="BLUE_CONFIRM"
              styleType="NARROW"
              onPress={tryUploadResearch}
            />
          )
        }
      />
    </BlackBackgroundModal>
  );
}
