import { ParticipatedResearchInfo } from "./Embedded";

/**
 * 유저의 리서치 활동 내역 스키마
 * @author 현웅
 */
export type UserResearchSchema = {
  /** 조회한 리서치 _id */
  viewedResearchIds: string[];

  /** 스크랩한 리서치 _id */
  scrappedResearchIds: string[];

  /** 참여한 리서치 정보 */
  participatedResearchInfos: ParticipatedResearchInfo[];
};

export const BlankUserResearch: UserResearchSchema = {
  viewedResearchIds: [],
  scrappedResearchIds: [],
  participatedResearchInfos: [],
};
