import React from "react";
import styled from "styled-components/native";
import {
  StackActions,
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import {
  BottomButton__Container,
  BottomButton__ButtonContainer,
} from "src/StyledComponents/View";
import { H2 } from "src/StyledComponents/Text";
import shallow from "zustand/shallow";
import { useVoteUploadScreenStore } from "src/Zustand";

export function CommunityVoteUploadBottomButton() {
  const navigation =
    useNavigation<NavigationProp<AppStackProps, "CommunityVoteUploadScreen">>();

  const { uploading: loading, uploadVote } = useVoteUploadScreenStore(
    state => ({
      uploading: state.uploading,
      checkInputValidity: state.checkInputValidity,
      uploadVote: state.uploadVote,
    }),
    shallow,
  );

  async function inputValidationAndUploadVote() {
    const vote = await uploadVote();
    if (vote !== null) {
      navigation.dispatch(
        StackActions.replace("CommunityVoteDetailScreen", { vote }),
      );
    }
  }

  return (
    <Container>
      <Button__Cotainer
        available={!loading}
        activeOpacity={!loading ? 0.8 : 1}
        onPress={!loading ? inputValidationAndUploadVote : undefined}>
        <Button__Text available={!loading}>
          {loading ? `업로드 중...` : `작성 완료!`}
        </Button__Text>
      </Button__Cotainer>
    </Container>
  );
}

const Container = styled(BottomButton__Container)``;

const Button__Cotainer = styled(BottomButton__ButtonContainer)<{
  available: boolean;
}>`
  //TODO: #DESIGN-SYSTEM
  background-color: ${({ available, theme }) =>
    available ? theme.color.purple.main : "#eeeeee"};
`;

const Button__Text = styled(H2)<{ available: boolean }>`
  //TODO: #DESIGN-SYSTEM
  color: ${({ available, theme }) =>
    available ? theme.color.grey.white : "#cccccc"};
  font-weight: bold;
`;
