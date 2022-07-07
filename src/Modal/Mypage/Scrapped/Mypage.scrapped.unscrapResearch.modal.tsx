import React from "react";
import { RadiusButton } from "src/Component/Button";
import { BlackBackgroundModal, TitleModal } from "src/Component/Modal";
import shallow from "zustand/shallow";
import { useMypageScrappedScreenStore } from "src/Zustand";

/**
 * 마이페이지 나의 스크랩 페이지 리서치 스크랩 취소 모달입니다.
 * @author 현웅
 */
export function MypageScrappedUnscrapResearchModal() {
  const {
    researchUnscrapModalVisible,
    setResearchUnscrapModalVisible,
    unscrapResearch,
  } = useMypageScrappedScreenStore(
    state => ({
      researchUnscrapModalVisible: state.researchUnscrapModalVisible,
      setResearchUnscrapModalVisible: state.setResearchUnscrapModalVisible,
      unscrapResearch: state.unscrapResearch,
    }),
    shallow,
  );

  return (
    <BlackBackgroundModal
      modalVisible={researchUnscrapModalVisible}
      setModalVisible={setResearchUnscrapModalVisible}>
      <TitleModal
        title={"스크랩을\n취소하시겠습니까?"}
        buttonSymmetric={true}
        LeftButton={
          <RadiusButton
            text="아니오"
            type="BLUE_CONFIRM"
            styleType="NARROW"
            onPress={() => {
              setResearchUnscrapModalVisible(false);
            }}
          />
        }
        RightButton={
          <RadiusButton
            text="예"
            type="BLUE_CANCEL"
            styleType="NARROW"
            onPress={unscrapResearch}
          />
        }
      />
    </BlackBackgroundModal>
  );
}
