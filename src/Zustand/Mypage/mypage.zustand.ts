import create from "zustand";
import { CreditHistorySchema, ResearchSchema, VoteSchema } from "src/Schema";
import { useUserStore } from "../User/user.zustand";
import { axiosGetUserActivity } from "src/Axios";
import {
  addResearchListItem,
  updateResearchListItem,
  removeResearchListItem,
  addVoteListItem,
  updateVoteListItem,
  removeVoteListItem,
} from "src/Util";

type SpreadType = "ADD" | "UPDATE" | "REMOVE";

type MypageStoreProps = {
  creditHistories: CreditHistorySchema[];
  scrappedResearches: ResearchSchema[];
  participatedResearches: ResearchSchema[];
  uploadedResearches: ResearchSchema[];
  scrappedVotes: VoteSchema[];
  participatedVotes: VoteSchema[];
  uploadedVotes: VoteSchema[];

  /** 유저 활동 정보가 성공적으로 불러와졌는지 여부 */
  userActivityLoaded: boolean;
  /** 로그인 성공 이후, 유저 활동 정보를 불러옵니다 */
  getUserActivities: () => Promise<void>;

  spreadResearchInfo: (research: ResearchSchema, type: SpreadType) => void;
  spreadVoteInfo: (vote: VoteSchema, type: SpreadType) => void;

  clearState: () => void;
};

/**
 * 마이페이지에서 사용되는 상태값들을 정의합니다.
 * 크레딧 사용내역, 스크랩/참여/업로드한 리서치와 투표 정보가 담겨있습니다
 * @author 현웅
 */
export const useMypageStore = create<MypageStoreProps>((set, get) => ({
  creditHistories: [],
  scrappedResearches: [],
  participatedResearches: [],
  uploadedResearches: [],
  scrappedVotes: [],
  participatedVotes: [],
  uploadedVotes: [],

  userActivityLoaded: false,
  getUserActivities: async () => {
    //* 이미 활동 정보를 불러온 적 있다면, 바로 반환합니다.
    if (get().userActivityLoaded) return;

    const result = await axiosGetUserActivity({
      creditHistoryIds: useUserStore
        .getState()
        .userCredit.creditHistoryIds.slice(0, 15),
      scrappedResearchIds: useUserStore
        .getState()
        .userResearch.scrappedResearchIds.slice(0, 15),
      participatedResearchIds: useUserStore
        .getState()
        .userResearch.participatedResearchInfos.slice(0, 15)
        .map(researchInfo => {
          return researchInfo.researchId;
        }),
      uploadedResearchIds: useUserStore
        .getState()
        .userResearch.uploadedResearchIds.slice(0, 15),
      scrappedVoteIds: useUserStore
        .getState()
        .userVote.scrappedVoteIds.slice(0, 15),
      participatedVoteIds: useUserStore
        .getState()
        .userVote.participatedVoteInfos.slice(0, 15)
        .map(voteInfo => {
          return voteInfo.voteId;
        }),
      uploadedVoteIds: useUserStore
        .getState()
        .userVote.uploadedVoteIds.slice(0, 15),
    });

    if (result === null) return;

    //* 요청이 성공적인 경우, userActivityLoaded 플래그를 true로 설정합니다.
    set({
      userActivityLoaded: true,

      creditHistories: result.creditHistories,
      scrappedResearches: result.scrappedResearches,
      participatedResearches: result.participatedResearches,
      uploadedResearches: result.uploadedResearches,
      scrappedVotes: result.scrappedVotes,
      participatedVotes: result.participatedVotes,
      uploadedVotes: result.uploadedVotes,
    });

    return;
  },

  spreadResearchInfo: (research: ResearchSchema, type: SpreadType) => {},
  spreadVoteInfo: (vote: VoteSchema, type: SpreadType) => {},

  clearState: () => {
    set({
      creditHistories: [],
      scrappedResearches: [],
      participatedResearches: [],
      uploadedResearches: [],
      scrappedVotes: [],
      participatedVotes: [],
      uploadedVotes: [],
    });
  },
}));
