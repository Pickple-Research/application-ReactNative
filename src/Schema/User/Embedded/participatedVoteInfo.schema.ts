/**
 * 참여한 투표 정보
 * @author 현웅
 */
export type ParticipatedVoteInfo = {
  /** 참여한 투표의 _id */
  voteId: string;

  /** 고른 선택지 인덱스들 */
  selectedOptionIndexes: number[];

  /** 참여 시각 */
  participatedAt: string;
};
