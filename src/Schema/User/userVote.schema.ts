import { ParticipatedVoteInfo } from "./Embedded";

/**
 * 유저의 투표 활동 내역 스키마
 * @author 현웅
 */
export type UserVoteSchema = {
  /** 조회한 투표 _id */
  viewedVoteIds: string[];

  /** 스크랩한 투표 _id */
  scrappedVoteIds: string[];

  /** 참여한 투표들 정보 */
  participatedVoteInfos: ParticipatedVoteInfo[];
};

export const BlankUserVote: UserVoteSchema = {
  viewedVoteIds: [],
  scrappedVoteIds: [],
  participatedVoteInfos: [],
};
