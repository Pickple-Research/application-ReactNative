import React from "react";
import { RadiusButton } from "src/Component/Button";
import { BlackBackgroundModal, ModalContent } from "src/Component/Modal";
import shallow from "zustand/shallow";
import { useMypageCreditHistoryScreenStore } from "src/Zustand";

/**
 * 마이페이지 크레딧 사용내역 페이지 '준비 중~' 모달입니다.
 * @author 현웅
 */
export function MypageCreditHistoryServiceGettingReadyModal() {
  const {
    serviceGettingReadyModalVisible,
    setServiceGettingReadyModalVisible,
  } = useMypageCreditHistoryScreenStore(
    state => ({
      serviceGettingReadyModalVisible: state.serviceGettingReadyModalVisible,
      setServiceGettingReadyModalVisible:
        state.setServiceGettingReadyModalVisible,
    }),
    shallow,
  );

  return (
    <BlackBackgroundModal
      modalVisible={serviceGettingReadyModalVisible}
      setModalVisible={setServiceGettingReadyModalVisible}>
      <ModalContent
        content="준비 중인 페이지입니다"
        LeftButton={
          <RadiusButton
            text="뒤로가기"
            type="PURPLE_CONFIRM"
            onPress={() => {
              setServiceGettingReadyModalVisible(false);
            }}
          />
        }
      />
    </BlackBackgroundModal>
  );
}
