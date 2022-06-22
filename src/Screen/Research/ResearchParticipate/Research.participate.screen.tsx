import React, { useEffect } from "react";
import { BackHandler } from "react-native";
import styled from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackProps } from "src/Navigator";
import { ResearchParticipateWebView } from "./Research.participate.webView";
import {
  ResearchParticipateFormLoadingModal,
  ResearchParticipateBlockExitModal,
  ResearchParticipateFormSubmittedModal,
} from "src/Modal";
import { useResearchParticipateScreenStore } from "src/Zustand";

export type ResearchParticipateScreenProps = { link: string };

/**
 * 리서치 참여 페이지입니다. 내부적으로 WebView를 사용합니다.
 * @author 현웅
 */
export function ResearchParticipateScreen({
  route,
}: NativeStackScreenProps<AppStackProps, "ResearchParticipateScreen">) {
  const { handleBackPress, clearInputs } = useResearchParticipateScreenStore(
    state => ({
      handleBackPress: state.handleBackPress,
      clearInputs: state.clearInputs,
    }),
  );

  useEffect(() => {
    //* 리서치 참여 중 뒤로가기 버튼을 눌렀을 때 행동을 처리할 이벤트 리스너를 추가합니다.
    BackHandler.addEventListener("hardwareBackPress", handleBackPress);

    //* 리서치 참여 페이지를 벗어나면 이벤트 리스너를 삭제하고 모든 상태값을 초기화합니다.
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
      clearInputs();
    };
  }, []);

  return (
    <Container>
      <ResearchParticipateWebView link={route.params.link} />
      <ResearchParticipateFormLoadingModal />
      <ResearchParticipateBlockExitModal />
      <ResearchParticipateFormSubmittedModal />
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.color.grey.white};
`;
