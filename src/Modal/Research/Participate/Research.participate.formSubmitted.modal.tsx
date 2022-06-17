import React from "react";
import styled from "styled-components/native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { RadiusButton } from "src/Component/Button";
import {
  BlackBackgroundModal,
  ModalContentContainer,
} from "src/Component/Modal";
import shallow from "zustand/shallow";
import { useResearchParticipateScreenStore } from "src/Zustand";
import { H3 } from "src/StyledComponents/Text";

/**
 * 구글/네이버 폼 제출 완료 화면이 나타났을 때 나타나는 모달입니다.
 * @author 현웅
 */
export function ResearchParticipateFormSubmittedModal() {
  const { formSubmittedModalVisible, setFormSubmittedModalVisible } =
    useResearchParticipateScreenStore(
      state => ({
        formSubmittedModalVisible: state.formSubmittedModalVisible,
        setFormSubmittedModalVisible: state.setFormSubmittedModalVisible,
      }),
      shallow,
    );

  return (
    <BlackBackgroundModal
      modalVisible={formSubmittedModalVisible}
      setModalVisible={setFormSubmittedModalVisible}>
      <ModalContentContainer>
        <ModalContent />
      </ModalContentContainer>
    </BlackBackgroundModal>
  );
}

/**
 * 로딩 중, 참여 실패, 참여 성공에 따른 모달 콘텐츠
 * @author 현웅
 */
function ModalContent() {
  const navigation =
    useNavigation<NavigationProp<AppStackProps, "ResearchParticipateScreen">>();

  const { participateSuccessed, loading } = useResearchParticipateScreenStore(
    state => ({
      participateSuccessed: state.participateSuccessed,
      loading: state.loading,
    }),
    shallow,
  );

  //* 로딩중 (서버 통신)
  if (loading) {
    return (
      <Loading__Text>제출 중입니다. 잠시만 기다려 주세요...</Loading__Text>
    );
  }

  //* 참여 성공시
  if (participateSuccessed) {
    return (
      <RadiusButton
        text="완료!"
        type="BLACK"
        onPress={() => {
          navigation.goBack();
        }}
      />
    );
  }

  //* 참여 실패시
  //TODO: 실패 내역을 어딘가에 저장해야 합니다.
  return (
    <RadiusButton
      text="서버 통신에 문제가 있었습니다."
      type="BLACK"
      onPress={() => {
        navigation.goBack();
      }}
    />
  );
}

const Loading__Text = styled(H3)``;
