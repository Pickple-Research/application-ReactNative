import React, { useEffect } from "react";
import { BackHandler } from "react-native";
import styled from "styled-components/native";
import { ResearchUploadTitleContentScreen } from "./TitleContent/Research.upload.titleContent.screen";
import { ResearchUploadPurposeTargetScreen } from "./PurposeTarget/Research.upload.purposeTarget.screen";
import { ResearchUploadGiftCreditScreen } from "./GiftCredit/Research.upload.giftCredit.screen";
import { ResearchUploadScreeningScreen } from "./Screening/Research.upload.screening.screen";
import { ResearchUploadProgressBar } from "./Research.upload.progressBar";
import { ResearchUploadButtomButton } from "./Research.upload.bottomButton";
import { WhiteBackgroundScrollView } from "src/Component/ScrollView";
import {
  ResearchUploadBlockExitModal,
  ResearchUploadConfirmModal,
} from "src/Modal";
import shallow from "zustand/shallow";
import { useResearchUploadScreenStore } from "src/Zustand";

/**
 * 리서치 작성 페이지 props
 * @author 현웅
 */
export type ResearchUploadScreenProps = {};

/**
 * 리서치 업로드 페이지입니다.
 * pages 리스트 순서대로 작성 페이지를 보여줍니다.
 * @author 원제
 * @modify 현웅
 */
export function ResearchUploadScreen({ navigation }: any) {
  const { step, setBlockExitModalVisible, clearInputs } =
    useResearchUploadScreenStore(
      state => ({
        step: state.step,
        setBlockExitModalVisible: state.setBlockExitModalVisible,
        clearInputs: state.clearInputs,
      }),
      shallow,
    );

  function showBlockExitModal() {
    setBlockExitModalVisible(true);
    return true;
  }

  useEffect(() => {
    //* 리서치 작성 중 뒤로가기 버튼을 눌렀을 때 재확인 모달을 띄우도록 이벤트 리스너를 추가합니다.
    BackHandler.addEventListener("hardwareBackPress", showBlockExitModal);

    return () => {
      //* 창을 벗어나면 모든 입력값을 초기화하고 BackButton 이벤트 리스너를 제거합니다.
      clearInputs();
      BackHandler.removeEventListener("hardwareBackPress", showBlockExitModal);
    };
  }, []);

  const pages = [
    <ResearchUploadTitleContentScreen />,
    <ResearchUploadPurposeTargetScreen />,
    <ResearchUploadGiftCreditScreen />,
    <ResearchUploadScreeningScreen />,
  ];

  return (
    <Container>
      <ResearchUploadProgressBar />
      <WhiteBackgroundScrollView>{pages[step]}</WhiteBackgroundScrollView>
      <ResearchUploadButtomButton />
      <ResearchUploadBlockExitModal />
      <ResearchUploadConfirmModal />
    </Container>
  );
}

const Container = styled.View`
  position: relative;
  flex: 1;
  padding-top: 6px;
  //* ResearchUploadBottomButton의 height과 같은 값으로 유지해야 합니다.
  padding-bottom: 60px;
  background-color: ${({ theme }) => theme.color.grey.white};
`;
