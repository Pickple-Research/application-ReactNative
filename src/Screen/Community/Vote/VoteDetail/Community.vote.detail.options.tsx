import React from "react";
import styled from "styled-components/native";
import { VoteOptionsBox, VoteOptionResultsBox } from "src/Component/Vote";
import { H3, BodyText } from "src/StyledComponents/Text";
import shallow from "zustand/shallow";
import { useUserStore, useVoteStore, useVoteDetailStore } from "src/Zustand";
import { getUpdatedVote, getCurrentISOTime, didDatePassed } from "src/Util";
import { globalStyles } from "src/Style/globalStyles";

/**
 * 투표 상세 화면 선택지/투표 및 마감 버튼/댓글, 스크랩 수 정보 항목입니다.
 * @author 현웅
 */
export function CommunityVoteDetailOptions() {
  const vote = useVoteDetailStore(state => state.vote);

  return (
    <Container style={globalStyles.screen__horizontalPadding}>
      <InnerContainer>
        <Options />
        <VoteButton />
        <VotedUserNum participantsNum={vote.participantsNum} />
      </InnerContainer>
      <CommentsScrapNum
        commentsNum={vote.commentsNum}
        scrapsNum={vote.scrapsNum}
      />
    </Container>
  );
}

/**
 * 투표 선택지 (혹은 결과) 줄
 * @author 현웅
 */
function Options() {
  const userActivity = useUserStore(state => state.userActivity);
  const { vote, selectedOptionIndexes, onPressOption } = useVoteDetailStore(
    state => ({
      vote: state.vote,
      selectedOptionIndexes: state.selectedOptionIndexes,
      onPressOption: state.onPressOption,
    }),
    shallow,
  );

  //* 유저 활동 정보에서 해당 투표 참여 정보를 추출
  const participatedInfo = userActivity.participatedVoteInfos.find(voteInfo => {
    return voteInfo.voteId === vote._id;
  });

  //* 참여했다면 결과를 보여줌
  if (participatedInfo) {
    return (
      <VoteOptionResultsBox
        voteOptions={vote.options}
        selectedOptionIndexes={participatedInfo.selectedOptionIndexes}
        participantsNum={vote.participantsNum}
        result={vote.result}
      />
    );
  }

  //* 마감된 경우, 혹은 날짜가 지난 경우 결과를 보여줌
  if (vote.closed || didDatePassed(vote.deadline)) {
    return (
      <VoteOptionResultsBox
        voteOptions={vote.options}
        selectedOptionIndexes={[]}
        participantsNum={vote.participantsNum}
        result={vote.result}
      />
    );
  }

  //* 그렇지 않은 경우,
  return (
    <VoteOptionsBox
      voteOptions={vote.options}
      selectedOptionIndexes={selectedOptionIndexes}
      onPress={onPressOption}
    />
  );
}

/**
 * 투표 참여 버튼
 * @author 현웅
 */
function VoteButton() {
  const { userActivity, addParticipateVoteInfo } = useUserStore(state => ({
    userActivity: state.userActivity,
    addParticipateVoteInfo: state.addParticipateVoteInfo,
  }));
  const updateVotes = useVoteStore(state => state.updateVotes);
  const { vote, setVote, selectedOptionIndexes, participateVote } =
    useVoteDetailStore(
      state => ({
        vote: state.vote,
        setVote: state.setVote,
        selectedOptionIndexes: state.selectedOptionIndexes,
        participateVote: state.participateVote,
      }),
      shallow,
    );

  /**
   * 투표 참여 버튼을 클릭했을 때 실행되는 함수입니다.
   * @author 현웅
   */
  async function tryParticipateVote() {
    //* 먼저 투표에 참여한 후의 투표 정보를 만들고 (참여자 수 +1, 결과값 반영)
    const updatedVote = getUpdatedVote(vote, selectedOptionIndexes);
    //* 해당 투표 정보를 투표 상세 페이지의 vote 상태와 투표 리스트 상태에 반영합니다.
    setVote(updatedVote);
    updateVotes(updatedVote);
    //* 사용자 활동 정보에 해당 투표 참여 정보를 추가합니다.
    addParticipateVoteInfo({
      voteId: vote._id,
      selectedOptionIndexes,
      participatedAt: getCurrentISOTime(),
    });
    //* 최종적으로 서버에 투표 참여 요청을 보냅니다.
    await participateVote();
  }

  //* 마감/종료된 투표인 경우
  if (vote.closed || didDatePassed(vote.deadline)) {
    return (
      <VoteButton__DisabledContainer>
        <VoteButton__DisabledText>종료된 투표입니다</VoteButton__DisabledText>
      </VoteButton__DisabledContainer>
    );
  }

  //* 이미 참여한 투표인 경우
  if (
    userActivity.participatedVoteInfos.some(voteInfo => {
      return voteInfo.voteId === vote._id;
    })
  ) {
    return (
      <VoteButton__DisabledContainer>
        <VoteButton__DisabledText>
          이미 참여한 투표입니다
        </VoteButton__DisabledText>
      </VoteButton__DisabledContainer>
    );
  }

  const votable = vote.options.length > 0;

  return (
    <VoteButton__Container
      available={votable}
      activeOpacity={votable ? 0.8 : 1}
      onPress={votable ? tryParticipateVote : undefined}>
      <VoteButton__Text available={votable}>투표하기</VoteButton__Text>
    </VoteButton__Container>
  );
}

/**
 * '?명 투표' 표시 구간
 * @author 현웅
 */
function VotedUserNum({ participantsNum }: { participantsNum: number }) {
  return <VotedUserNum__Text>{`${participantsNum}명 투표`}</VotedUserNum__Text>;
}

/**
 * 댓글, 스크랩 수 표시 구간
 * @author 현웅
 */
function CommentsScrapNum({
  commentsNum,
  scrapsNum,
}: {
  commentsNum: number;
  scrapsNum: number;
}) {
  return (
    <CommentsScrapNum__Container>
      <CommentsScrapNum__Text>{`댓글 ${commentsNum} · 스크랩 ${scrapsNum}`}</CommentsScrapNum__Text>
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

// VoteButton()
const VoteButton__Container = styled.TouchableOpacity<{ available: boolean }>`
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${({ available, theme }) =>
    available ? theme.color.purple.main : theme.color.purple.mild};
  padding: 16px;
  margin-top: 18px;
  margin-bottom: 4px;
  border-radius: 12px;
`;

const VoteButton__Text = styled(H3)<{ available: boolean }>`
  color: ${({ available, theme }) =>
    available ? theme.color.grey.white : theme.color.purple.text};
  font-weight: bold;
`;

const VoteButton__DisabledContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.color.grey.mild};
  padding: 16px;
  margin-top: 18px;
  margin-bottom: 4px;
  border-radius: 12px;
`;

const VoteButton__DisabledText = styled(H3)`
  color: ${({ theme }) => theme.color.grey.white};
  font-weight: bold;
`;

// VotedUserNum()
const VotedUserNum__Text = styled(BodyText)`
  color: ${({ theme }) => theme.color.grey.mild};
  margin-left: 2px;
  margin-bottom: 10px;
`;

// CommentsScrapNum()
const CommentsScrapNum__Container = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

const CommentsScrapNum__Text = styled(BodyText)`
  //TODO: #DESIGN-SYSTEM
  color: #8f8f8f;
  font-weight: bold;
`;
