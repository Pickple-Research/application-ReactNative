import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import shallow from "zustand/shallow";
import { useResearchUploadStore } from "src/Zustand";

/**
 * 리서치 업로드 페이지의 하단 버튼입니다.
 * 업로드 단계에 따라 활성화 조건과 기능, 문구가 달라집니다.
 * @author 현웅
 */
export function ResearchUploadProgressButton() {
  const { step, goNextStep, titleInput, linkInput, contentInput } =
    useResearchUploadStore(
      state => ({
        step: state.step,
        goNextStep: state.goNextStop,
        titleInput: state.titleInput,
        linkInput: state.linkInput,
        contentInput: state.contentInput,
      }),
      shallow,
    );

  function go() {
    if (titleInput && linkInput && contentInput) {
      goNextStep();
    }
  }

  return (
    <Container onPress={go}>
      <Text>다음 단계로 이동</Text>
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  width: 100%;
  //* ResearchUploadScreen의 padding-bottom과 같은 값으로 유지해야 합니다.
  height: 60px;
  background-color: #eeeeee;
  justify-content: center;
  align-items: center;
`;
