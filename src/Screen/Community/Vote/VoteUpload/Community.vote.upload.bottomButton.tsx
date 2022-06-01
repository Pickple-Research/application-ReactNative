import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { H2 } from "src/StyledComponents/Text";
import { useVoteUploadStore } from "src/Zustand";

export function CommunityVoteUploadBottomButton() {
  const uploadVote = useVoteUploadStore(state => state.uploadVote);

  return (
    <Container onPress={uploadVote}>
      <ButtonText>작성 완료!</ButtonText>
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  position: absolute;
  bottom: 0px;
  justify-content: center;
  align-items: center;
  width: ${`${Dimensions.get("screen").width}px`};
  //* CommunityVoteUploadScreen의 padding-bottom과 같은 값으로 유지해야 합니다.
  height: 60px;
  background-color: ${({ theme }) => theme.color.purple.main};
`;

const ButtonText = styled(H2)`
  color: white;
  font-weight: bold;
`;
