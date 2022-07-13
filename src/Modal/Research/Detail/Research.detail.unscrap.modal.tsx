import React from "react";
import { RadiusButton } from "src/Component/Button";
import { BlackBackgroundModal, TitleModal } from "src/Component/Modal";
import shallow from "zustand/shallow";
import { useResearchDetailScreenStore } from "src/Zustand";

/**
 * 마이페이지 나의 스크랩 페이지 리서치 스크랩 취소 모달입니다.
 * @author 현웅
 */
export function ResearchDetailUnscrapModal() {
  const {
    researchUnscrapModalVisible,
    setResearchUnscrapModalVisible,
    scrapping,
    unscrapResearch,
  } = useResearchDetailScreenStore(
    state => ({
      researchUnscrapModalVisible: state.researchUnscrapModalVisible,
      setResearchUnscrapModalVisible: state.setResearchUnscrapModalVisible,
      scrapping: state.scrapping,
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
          scrapping ? (
            <RadiusButton
              loading
              text="스크랩 취소 중"
              type="BLUE"
              styleType="NARROW"
            />
          ) : (
            <RadiusButton
              text="아니오"
              type="BLUE_CONFIRM"
              styleType="NARROW"
              onPress={() => {
                setResearchUnscrapModalVisible(false);
              }}
            />
          )
        }
        RightButton={
          scrapping ? undefined : (
            <RadiusButton
              text="예"
              type="BLUE_CANCEL"
              styleType="NARROW"
              onPress={unscrapResearch}
            />
          )
        }
      />
    </BlackBackgroundModal>
  );
}
