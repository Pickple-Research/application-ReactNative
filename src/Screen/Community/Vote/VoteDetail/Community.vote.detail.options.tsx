import React from "react";
import styled from "styled-components/native";
import { VoteOption } from "src/Component/Vote";
import { H3, BodyText } from "src/StyledComponents/Text";
import shallow from "zustand/shallow";
import { useVoteDetailStore } from "src/Zustand";
import { VoteOptionSchema } from "src/Schema/Vote/Embedded";
import { globalStyles } from "src/Style/globalStyles";

/**
 * 투표 상세 화면 선택지/투표 및 마감 버튼/댓글, 스크랩 수 정보 항목입니다.
 * @author 현웅
 */
export function CommunityVoteDetailOptions() {
  const { vote, voteParticipation } = useVoteDetailStore(
    state => ({
      vote: state.vote,
      voteParticipation: state.voteParticipation,
    }),
    shallow,
  );

  return (
    <Container style={globalStyles.screen__horizontalPadding}>
      <InnerContainer>
        <Options options={vote.options} />
        <VoteButton />
        <VotedUserNum participantsNum={voteParticipation.participantNum} />
      </InnerContainer>
      <CommentsScrapNum />
    </Container>
  );
}

function Options({ options }: { options: VoteOptionSchema[] }) {
  const { selectedOptions, onPressOption } = useVoteDetailStore(
    state => ({
      selectedOptions: state.selectedOptions,
      onPressOption: state.onPressOption,
    }),
    shallow,
  );

  return (
    <>
      {options.map((option, index) => {
        return (
          <VoteOption
            key={`${index}: ${option.content}`}
            voteOption={option}
            selected={selectedOptions.includes(index)}
            onPress={() => {
              onPressOption(index);
            }}
          />
        );
      })}
    </>
  );
}

function VoteButton() {
  return (
    <VoteButton__Container disabled={false}>
      <VoteButton__Content disabled={false}>투표하기</VoteButton__Content>
    </VoteButton__Container>
  );
}

function VotedUserNum({ participantsNum }: { participantsNum: number }) {
  return <VotedUserNum__Text>{`${participantsNum}명 투표`}</VotedUserNum__Text>;
}

function CommentsScrapNum() {
  return (
    <CommentsScrapNum__Container>
      <CommentsScrapNum__Text>{`댓글 10 · 스크랩 6`}</CommentsScrapNum__Text>
    </CommentsScrapNum__Container>
  );
}

const Container = styled.View`
  margin-bottom: 28px;
`;

const InnerContainer = styled.View`
  padding: 10px 6px;
  margin-bottom: 20px;
  //TODO: #DESIGN-SYSTEM
  border: 1px solid #f5f5f5;
  border-radius: 12px;
`;

const VoteButton__Container = styled.TouchableOpacity<{ disabled: boolean }>`
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.color.purple.mild : theme.color.purple.main};
  padding: 16px;
  margin-top: 18px;
  margin-bottom: 4px;
  border-radius: 12px;
`;

const VoteButton__Content = styled(H3)<{ disabled: boolean }>`
  color: ${({ disabled, theme }) =>
    disabled ? theme.color.purple.text : theme.color.grey.white};
  font-weight: bold;
`;

const VotedUserNum__Text = styled(BodyText)`
  color: ${({ theme }) => theme.color.grey.mild};
  margin-left: 2px;
  margin-bottom: 10px;
`;

const CommentsScrapNum__Container = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

const CommentsScrapNum__Text = styled(BodyText)`
  //TODO: #DESIGN-SYSTEM
  color: #8f8f8f;
  font-weight: bold;
`;
