import React from "react";
import styled from "styled-components/native";
import {
  StackActions,
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { H2 } from "src/StyledComponents/Text";
import shallow from "zustand/shallow";
import { useResearchUploadStore } from "src/Zustand";

/**
 * 리서치 업로드 페이지의 하단 버튼입니다.
 * 업로드 단계에 따라 활성화 조건과 기능, 문구가 달라집니다.
 * @author 현웅
 */
export function ResearchUploadButtomButton() {
  const step = useResearchUploadStore(state => state.step);

  switch (step) {
    case 0: // 제목, 내용 입력 단계
      return <TitleContentStepButton />;
    case 1: // 제목, 내용 입력 단계
      return <PurposeTargetStepButton />;
    case 2: // 제목, 내용 입력 단계
      return <GiftCreditStepButton />;
    case 3: // 제목, 내용 입력 단계
      return <ScreeningStepButton />;
    default:
      return null;
  }
}

/** 제목, 내용 입력 단계 */
function TitleContentStepButton() {
  const { goNextStep, titleInput, linkInput, contentInput } =
    useResearchUploadStore(
      state => ({
        goNextStep: state.goNextStop,
        titleInput: state.titleInput,
        linkInput: state.linkInput,
        contentInput: state.contentInput,
      }),
      shallow,
    );

  const available =
    Boolean(titleInput) && Boolean(linkInput) && Boolean(contentInput);

  return (
    <Container
      activeOpacity={available ? 0.6 : 1}
      onPress={available ? goNextStep : undefined}
      available={available}>
      <ButtonText available={available}>다음 단계로 이동</ButtonText>
    </Container>
  );
}

/** 목적, 참여대상 입력 단계 */
function PurposeTargetStepButton() {
  const {
    goNextStep,
    purposeInput,
    organizationInput,
    targetInput,
    estimatedTimeInput,
  } = useResearchUploadStore(
    state => ({
      goNextStep: state.goNextStop,
      purposeInput: state.purposeInput,
      organizationInput: state.organizationInput,
      targetInput: state.targetInput,
      estimatedTimeInput: state.estimatedTimeInput,
    }),
    shallow,
  );

  const available =
    Boolean(purposeInput) &&
    Boolean(organizationInput) &&
    Boolean(targetInput) &&
    Boolean(estimatedTimeInput);

  return (
    <Container
      activeOpacity={available ? 0.6 : 1}
      onPress={available ? goNextStep : undefined}
      available={available}>
      <ButtonText available={available}>다음 단계로 이동</ButtonText>
    </Container>
  );
}

/** 경품, 기프티콘 입력 단계 */
function GiftCreditStepButton() {
  const { goNextStep, gifts } = useResearchUploadStore(
    state => ({
      goNextStep: state.goNextStop,
      gifts: state.gifts,
    }),
    shallow,
  );

  const uploadedGifts = gifts.filter(gift => !gift.deleted);

  //* 삭제되지 않은 모든 경품은 사진과 이름이 모두 있거나, 혹은 모두 없어야 합니다.
  const available = uploadedGifts.every(gift => {
    return (
      (Boolean(gift.giftName) && Boolean(Object.keys(gift.giftImage).length)) ||
      (!Boolean(gift.giftName) && !Boolean(Object.keys(gift.giftImage).length))
    );
  });

  return (
    <Container
      activeOpacity={available ? 0.6 : 1}
      onPress={available ? goNextStep : undefined}
      available={available}>
      <ButtonText available={available}>다음 단계로 이동</ButtonText>
    </Container>
  );
}

/** 스크리닝, 목표 인원 보장 입력 단계 */
function ScreeningStepButton() {
  const navigation =
    useNavigation<NavigationProp<AppStackProps, "ResearchUploadScreen">>();

  const { uploading, uploadResearch } = useResearchUploadStore(
    state => ({
      uploading: state.uploading,
      uploadResearch: state.uploadResearch,
    }),
    shallow,
  );

  async function tryUploadResearch() {
    const newResearch = await uploadResearch();
    if (newResearch !== null) {
      navigation.dispatch(
        StackActions.replace("ResearchDetailScreen", { research: newResearch }),
      );
    }
  }

  return (
    <Container
      activeOpacity={!uploading ? 0.6 : 1}
      onPress={!uploading ? tryUploadResearch : undefined}
      available={!uploading}>
      <ButtonText available={!uploading}>
        {!uploading ? "작성 완료!" : "업로드 중..."}
      </ButtonText>
    </Container>
  );
}

const Container = styled.TouchableOpacity<{ available: boolean }>`
  position: absolute;
  bottom: 0;
  width: 100%;
  //* ResearchUploadScreen의 padding-bottom과 같은 값으로 유지해야 합니다.
  height: 60px;
  //TODO: #DESIGN-SYSTEM
  background-color: ${({ available, theme }) =>
    available ? theme.color.blue.main : "#eeeeee"};
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled(H2)<{ available: boolean }>`
  //TODO: #DESIGN-SYSTEM
  color: ${({ available, theme }) =>
    available ? theme.color.grey.white : "#cccccc"};
`;
