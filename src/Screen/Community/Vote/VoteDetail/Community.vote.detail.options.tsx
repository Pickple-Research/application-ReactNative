import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { VoteOptionsBox, VoteOptionResultsBox } from "src/Component/Vote";
import { RadiusButton } from "src/Component/Button";
import { BodyText } from "src/StyledComponents/Text";
import shallow from "zustand/shallow";
import { useUserStore, useVoteDetailScreenStore } from "src/Zustand";
import { didDatePassed } from "src/Util";
import { globalStyles } from "src/Style/globalStyles";

/**
 * 투표 상세 화면 선택지/투표 및 마감 버튼/댓글, 스크랩 수 정보 항목입니다.
 * @author 현웅
 */
export function CommunityVoteDetailOptions() {
  const voteDetail = useVoteDetailScreenStore(state => state.voteDetail);

  return (
    <Container style={globalStyles.screen__horizontalPadding}>
      <InnerContainer>
        <Options />
        <VoteButton />
        <VotedUserNum participantsNum={voteDetail.participantsNum} />
      </InnerContainer>
      <CommentsScrapNum
        commentsNum={voteDetail.commentsNum}
        scrapsNum={voteDetail.scrapsNum}
      />
    </Container>
  );
}

/**
 * 투표 선택지 (혹은 결과) 줄
 * @author 현웅
 */
function Options() {
  const { user, userActivity } = useUserStore(
    state => ({
      user: state.user,
      userActivity: state.userActivity,
    }),
    shallow,
  );
  const { voteDetail, selectedOptionIndexes, onPressOption } =
    useVoteDetailScreenStore(
      state => ({
        voteDetail: state.voteDetail,
        selectedOptionIndexes: state.selectedOptionIndexes,
        onPressOption: state.onPressOption,
      }),
      shallow,
    );

  //* 투표 작성자인지 확인
  const isAuthor = user._id === voteDetail.authorId;
  //* 유저 활동 정보에서 해당 투표 참여 정보를 추출. 참여했는지 여부를 확인함.
  const participatedInfo = userActivity.participatedVoteInfos.find(voteInfo => {
    return voteInfo.voteId === voteDetail._id;
  });

  //* 참여했다면 결과를 보여줌
  if (participatedInfo) {
    return (
      <VoteOptionResultsBox
        voteOptions={voteDetail.options}
        selectedOptionIndexes={participatedInfo.selectedOptionIndexes}
        participantsNum={voteDetail.participantsNum}
        result={voteDetail.result}
      />
    );
  }

  //* 참여하지는 않았지만 본인이 작성자이거나, 마감된 경우, 혹은 날짜가 지난 경우 결과를 보여줌
  if (isAuthor || voteDetail.closed || didDatePassed(voteDetail.deadline)) {
    return (
      <VoteOptionResultsBox
        voteOptions={voteDetail.options}
        selectedOptionIndexes={[]}
        participantsNum={voteDetail.participantsNum}
        result={voteDetail.result}
      />
    );
  }

  //* 참여하지 않았고, 마감되지도 않은 경우 투표 가능
  return (
    <VoteOptionsBox
      voteOptions={voteDetail.options}
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
  const { user, userActivity } = useUserStore(
    state => ({
      user: state.user,
      userActivity: state.userActivity,
    }),
    shallow,
  );
  const {
    voteDetail,
    selectedOptionIndexes,
    setVoteCloseModalVisible,
    loading,
    closing,
    participateVote,
  } = useVoteDetailScreenStore(
    state => ({
      voteDetail: state.voteDetail,
      selectedOptionIndexes: state.selectedOptionIndexes,
      setVoteCloseModalVisible: state.setVoteCloseModalVisible,
      loading: state.loading,
      closing: state.closing,
      participateVote: state.participateVote,
    }),
    shallow,
  );

  const isAuthor = user._id === voteDetail.authorId;

  //* 마감/종료된 투표인 경우
  if (voteDetail.closed || didDatePassed(voteDetail.deadline)) {
    return (
      <RadiusButton
        text="종료된 투표입니다"
        type="GREY"
        style={voteButtonStyles.container}
      />
    );
  }

  //* 마감되지 않은 투표에 대해 본인이 작성자인 경우
  if (isAuthor) {
    return (
      <RadiusButton
        text="마감하기"
        type="PURPLE_CONFIRM"
        style={voteButtonStyles.container}
        onPress={() => {
          setVoteCloseModalVisible(true);
        }}
      />
    );
  }

  //* 서버의 투표 마감 요청을 기다리고 있는 경우
  if (closing) {
    return (
      <RadiusButton
        text="마감 중..."
        type="PURPLE_INACTIVE"
        style={voteButtonStyles.container}
      />
    );
  }

  //* 이미 참여한 투표인 경우
  if (
    userActivity.participatedVoteInfos.some(voteInfo => {
      return voteInfo.voteId === voteDetail._id;
    })
  ) {
    return (
      <RadiusButton
        text="참여한 투표입니다"
        type="PURPLE_INACTIVE"
        style={voteButtonStyles.container}
      />
    );
  }

  //* 서버의 투표 참여 요청을 기다리고 있는 경우
  if (loading)
    return (
      <RadiusButton
        text="투표 중..."
        type="PURPLE_INACTIVE"
        style={voteButtonStyles.container}
      />
    );

  //* 아무런 선택지도 고르지 않은 경우
  if (selectedOptionIndexes.length === 0)
    return (
      <RadiusButton
        text="투표하기"
        type="PURPLE_INACTIVE"
        style={voteButtonStyles.container}
      />
    );

  //* 투표 요청 가능한 경우
  return (
    <RadiusButton
      text="투표하기"
      type="PURPLE_CONFIRM"
      onPress={participateVote}
      style={voteButtonStyles.container}
    />
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
const voteButtonStyles = StyleSheet.create({
  container: {
    marginTop: 18,
    marginBottom: 4,
  },
});

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
