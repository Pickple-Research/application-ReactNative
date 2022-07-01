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

type ChangeTarget = "SCRAP" | "PARTICIPATE" | "UPLOAD";

type MypageStoreProps = {
  creditHistories: CreditHistorySchema[];

  scrappedResearches: ResearchSchema[];
  participatedResearches: ResearchSchema[];
  uploadedResearches: ResearchSchema[];

  scrappedVotes: VoteSchema[];
  participatedVotes: VoteSchema[];
  uploadedVotes: VoteSchema[];

  /** 새로운 크레딧 사용내역을 추가합니다. */
  addCreditHistory: (creditHistory: CreditHistorySchema) => void;

  /** 유저가 리서치를 새로 스크랩/참여/업로드한 경우 해당 변경사항을 반영합니다. */
  addResearch: (param: {
    changeTarget: ChangeTarget;
    research: ResearchSchema;
  }) => void;
  /**
   * 리서치 정보에 변동이 생긴 경우
   * 해당 정보를 스크랩/참여/업로드한 리서치 정보에 모두 반영합니다
   */
  updateResearch: (research: ResearchSchema) => void;
  /** 리서치 스크랩을 취소하거나, 리서치가 삭제된 경우 해당 정보를 반영합니다. */
  deleteResearch: (param: { researchId: string; unscrap: boolean }) => void;

  /** 유저가 투표를 새로 스크랩/참여/업로드한 경우 해당 변경사항을 반영합니다. */
  addVote: (param: { changeTarget: ChangeTarget; vote: VoteSchema }) => void;
  /**
   * 투표 정보에 변동이 생긴 경우
   * 해당 정보를 스크랩/참여/업로드한 투표 정보에 모두 반영합니다
   */
  updateVote: (vote: VoteSchema) => void;
  /** 투표 스크랩을 취소하거나, 투표가 삭제된 경우 해당 정보를 반영합니다. */
  deleteVote: (param: { voteId: string; unscrap: boolean }) => void;

  /** 유저 활동 정보가 성공적으로 불러와졌는지 여부 */
  userActivityLoaded: boolean;
  /** 로그인 성공 이후, 유저 활동 정보를 불러옵니다 */
  getUserActivities: () => Promise<void>;

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

  addCreditHistory: (creditHistory: CreditHistorySchema) => {
    set({ creditHistories: [creditHistory, ...get().creditHistories] });
  },

  //* Research
  addResearch: (param: {
    changeTarget: ChangeTarget;
    research: ResearchSchema;
  }) => {
    switch (param.changeTarget) {
      case "SCRAP":
        set({
          scrappedResearches: addResearchListItem(
            param.research,
            get().scrappedResearches,
          ),
        });
        return;
      case "PARTICIPATE":
        set({
          participatedResearches: addResearchListItem(
            param.research,
            get().participatedResearches,
          ),
        });
        return;
      case "UPLOAD":
        set({
          uploadedResearches: addResearchListItem(
            param.research,
            get().uploadedResearches,
          ),
        });
        return;
    }
  },
  updateResearch: (research: ResearchSchema) => {
    set({
      scrappedResearches: updateResearchListItem(
        research,
        get().scrappedResearches,
      ),
      participatedResearches: updateResearchListItem(
        research,
        get().participatedResearches,
      ),
      uploadedResearches: updateResearchListItem(
        research,
        get().uploadedResearches,
      ),
    });
  },
  deleteResearch: (param: { researchId: string; unscrap: boolean }) => {
    set({
      scrappedResearches: removeResearchListItem(
        param.researchId,
        get().scrappedResearches,
      ),
    });
    //* 스크랩 취소를 위해 호출된 경우, 참여/업로드한 리서치 정보는 바꾸지 않고 반환
    if (param.unscrap) return;
    set({
      participatedResearches: removeResearchListItem(
        param.researchId,
        get().participatedResearches,
      ),
      uploadedResearches: removeResearchListItem(
        param.researchId,
        get().uploadedResearches,
      ),
    });
  },

  //* Vote
  addVote: (param: { changeTarget: ChangeTarget; vote: VoteSchema }) => {
    switch (param.changeTarget) {
      case "SCRAP":
        set({
          scrappedVotes: addVoteListItem(param.vote, get().scrappedVotes),
        });
        return;
      case "PARTICIPATE":
        set({
          participatedVotes: addVoteListItem(
            param.vote,
            get().participatedVotes,
          ),
        });
        return;
      case "UPLOAD":
        set({
          uploadedVotes: addVoteListItem(param.vote, get().uploadedVotes),
        });
        return;
    }
  },
  updateVote: (vote: VoteSchema) => {
    set({
      scrappedVotes: updateVoteListItem(vote, get().scrappedVotes),
      participatedVotes: updateVoteListItem(vote, get().participatedVotes),
      uploadedVotes: updateVoteListItem(vote, get().uploadedVotes),
    });
  },
  deleteVote: (param: { voteId: string; unscrap: boolean }) => {
    set({
      scrappedVotes: removeVoteListItem(param.voteId, get().scrappedVotes),
    });
    //* 스크랩 취소를 위해 호출된 경우, 참여/업로드한 투표 정보는 바꾸지 않고 반환
    if (param.unscrap) return;
    set({
      participatedVotes: removeVoteListItem(
        param.voteId,
        get().participatedVotes,
      ),
      uploadedVotes: removeVoteListItem(param.voteId, get().uploadedVotes),
    });
  },

  userActivityLoaded: false,
  getUserActivities: async () => {
    //* 유저가 로그인 한 상황이 아니거나
    //* 이미 활동 정보를 불러온 적 있다면, 바로 반환합니다.
    if (useUserStore.getState().user._id === "" || get().userActivityLoaded) {
      return;
    }

    const result = await axiosGetUserActivity({
      userCredit: useUserStore.getState().userCredit,
      userResearch: useUserStore.getState().userResearch,
      userVote: useUserStore.getState().userVote,
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

  clearState: () => {
    set({
      userActivityLoaded: false,

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
