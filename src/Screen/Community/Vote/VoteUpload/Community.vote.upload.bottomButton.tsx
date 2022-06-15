import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import {
  StackActions,
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
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
    <Container
      available={!loading}
      activeOpacity={!loading ? 0.8 : 1}
      onPress={!loading ? inputValidationAndUploadVote : undefined}>
      <ButtonText available={!loading}>
        {loading ? `업로드 중...` : `작성 완료!`}
      </ButtonText>
    </Container>
  );
}

const Container = styled.TouchableOpacity<{ available: boolean }>`
  position: absolute;
  bottom: 0px;
  justify-content: center;
  align-items: center;
  width: ${`${Dimensions.get("screen").width}px`};
  //* CommunityVoteUploadScreen의 padding-bottom과 같은 값으로 유지해야 합니다.
  height: 60px;
  //TODO: #DESIGN-SYSTEM
  background-color: ${({ available, theme }) =>
    available ? theme.color.purple.main : "#eeeeee"};
`;

const ButtonText = styled(H2)<{ available: boolean }>`
  //TODO: #DESIGN-SYSTEM
  color: ${({ available, theme }) =>
    available ? theme.color.grey.white : "#cccccc"};
  font-weight: bold;
`;
