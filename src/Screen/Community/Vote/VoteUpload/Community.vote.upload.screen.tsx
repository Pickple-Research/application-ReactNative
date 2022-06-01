import React from "react";
import styled from "styled-components/native";
import { CommunityVoteUploadInput } from "./Community.vote.upload.input";
import { CommunityVoteUploadBottomButton } from "./Community.vote.upload.bottomButton";
import { WhiteBackgroundScrollView } from "src/Component/ScrollView";

export type CommunityVoteUploadScreenProps = {};

/**
 * 투표 업로드 페이지입니다.
 * @author 현웅
 */
export function CommunityVoteUploadScreen() {
  return (
    <Container>
      <WhiteBackgroundScrollView>
        <CommunityVoteUploadInput />
      </WhiteBackgroundScrollView>
      <CommunityVoteUploadBottomButton />
    </Container>
  );
}

const Container = styled.SafeAreaView`
  position: relative;
  flex: 1;
  background-color: white;
  //* CommunityVoteUploadBottomButton의 height값과 같은 값으로 유지해야 합니다.
  padding-bottom: 60px;
`;
