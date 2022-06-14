import { ParticipatedResearchInfo, ParticipatedVoteInfo } from "./Embedded";

/**
 * 유저 활동(리서치나 투표 참여/조회/스크랩) 정보 스키마
 * @author 현웅
 */
export type UserActivitySchema = {
  /** 조회한 리서치 _id */
  viewedResearchIds: string[];

  /** 조회한 투표 _id */
  viewedVoteIds: string[];

  /** 스크랩한 리서치 _id */
  scrappedResearchIds: string[];

  /** 스크랩한 투표 _id */
  scrappedVoteIds: string[];

  /** 참여한 리서치 정보 */
  participatedResearchInfos: ParticipatedResearchInfo[];

  /** 참여한 투표들 정보 */
  participatedVoteInfos: ParticipatedVoteInfo[];

  /** 작성한 리서치들 _id */
  uploadedResearchIds: string[];

  /** 작성한 투표들 _id */
  uploadedVoteIds: string[];
};

export const BlankUserActivity: UserActivitySchema = {
  viewedResearchIds: [],
  viewedVoteIds: [],
  scrappedResearchIds: [],
  scrappedVoteIds: [],
  participatedResearchInfos: [],
  participatedVoteInfos: [],
  uploadedResearchIds: [],
  uploadedVoteIds: [],
};
