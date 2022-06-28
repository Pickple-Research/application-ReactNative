import create from "zustand";
import {
  UserSchema,
  UserCreditSchema,
  UserPrivacySchema,
  UserPropertySchema,
  UserResearchSchema,
  UserVoteSchema,
  BlankUser,
  BlankUserCredit,
  BlankUserPrivacy,
  BlankUserProperty,
  BlankUserResearch,
  BlankUserVote,
} from "src/Schema";
import {
  ParticipatedResearchInfo,
  ParticipatedVoteInfo,
} from "src/Schema/User/Embedded";

type UserStoreProps = {
  user: UserSchema;
  userCredit: UserCreditSchema;
  userPrivacy: UserPrivacySchema;
  userProperty: UserPropertySchema;
  userResearch: UserResearchSchema;
  userVote: UserVoteSchema;

  /**
   * 로그인하여 얻어온 유저 정보들을 userStore에 저장합니다
   * @caution UserPrivacy는 얻어오지 않습니다!
   */
  setUserInfo: (userInfo: {
    user: UserSchema;
    userCredit: UserCreditSchema;
    userProperty: UserPropertySchema;
    userResearch: UserResearchSchema;
    userVote: UserVoteSchema;
  }) => void;

  /** 조회한 리서치 _id 를 유저 활동 정보에 추가합니다. */
  addViewedResearchId: (researchId: string) => void;
  /** 조회한 투표 _id 를 유저 활동 정보에 추가합니다. */
  addViewedVoteId: (voteId: string) => void;

  /** 스크랩한 리서치 _id 를 유저 활동 정보에 추가합니다. */
  addScrappedResearchId: (researchId: string) => void;
  /** 스크랩 취소한 리서치 _id 를 유저 활동 정보에서 제거합니다. */
  removeScrappedResearchId: (researchId: string) => void;

  /** 스크랩한 투표 _id 를 유저 활동 정보에 추가합니다. */
  addScrappedVoteId: (voteId: string) => void;
  /** 스크랩 취소한 투표 _id 를 유저 활동 정보에서 제거합니다. */
  removeScrappedVoteId: (voteId: string) => void;

  /** 참여한 리서치 정보를 유저 활동 정보에 추가합니다. */
  addParticipatedResearchInfo: (
    researchInfo: ParticipatedResearchInfo,
  ) => Promise<void>;

  /** 참여한 투표 정보를 유저 활동 정보에 추가합니다. */
  addParticipatedVoteInfo: (voteInfo: ParticipatedVoteInfo) => Promise<void>;
};

/**
 * 유저 상태를 끌어다 쓸 수 있는 zustand 입니다.
 * @author 현웅
 */
export const useUserStore = create<UserStoreProps>((set, get) => ({
  user: BlankUser,
  userCredit: BlankUserCredit,
  userPrivacy: BlankUserPrivacy,
  userProperty: BlankUserProperty,
  userResearch: BlankUserResearch,
  userVote: BlankUserVote,

  setUserInfo: (userInfo: {
    user: UserSchema;
    userCredit: UserCreditSchema;
    userProperty: UserPropertySchema;
    userResearch: UserResearchSchema;
    userVote: UserVoteSchema;
  }) => {
    set({
      user: userInfo.user,
      userCredit: userInfo.userCredit,
      userProperty: userInfo.userProperty,
      userResearch: userInfo.userResearch,
      userVote: userInfo.userVote,
    });
    return;
  },

  addViewedResearchId: (researchId: string) => {
    const userResearch = get().userResearch;
    set({
      userResearch: {
        ...userResearch,
        viewedResearchIds: [researchId, ...userResearch.viewedResearchIds],
      },
    });
  },
  addScrappedResearchId: (researchId: string) => {
    const userResearch = get().userResearch;
    set({
      userResearch: {
        ...userResearch,
        scrappedResearchIds: [researchId, ...userResearch.scrappedResearchIds],
      },
    });
  },
  removeScrappedResearchId: (researchId: string) => {
    const userResearch = get().userResearch;
    const updatedScrappedResearchId = userResearch.scrappedResearchIds.filter(
      scrappedResearchId => {
        return scrappedResearchId !== researchId;
      },
    );
    set({
      userResearch: {
        ...userResearch,
        scrappedResearchIds: updatedScrappedResearchId,
      },
    });
  },
  addParticipatedResearchInfo: async (
    researchInfo: ParticipatedResearchInfo,
  ) => {
    const userResearch = get().userResearch;
    const updatedUserResearch = {
      ...userResearch,
      participatedResearchInfos: [
        researchInfo,
        ...userResearch.participatedResearchInfos,
      ],
    };
    set({ userResearch: updatedUserResearch });
  },

  addViewedVoteId: (voteId: string) => {
    const userVote = get().userVote;
    set({
      userVote: {
        ...userVote,
        viewedVoteIds: [voteId, ...userVote.viewedVoteIds],
      },
    });
  },

  addScrappedVoteId: (voteId: string) => {
    const userVote = get().userVote;
    set({
      userVote: {
        ...userVote,
        scrappedVoteIds: [voteId, ...userVote.scrappedVoteIds],
      },
    });
  },
  removeScrappedVoteId: (voteId: string) => {
    const userVote = get().userVote;
    const updatedScrappedVoteId = userVote.scrappedVoteIds.filter(
      scrappedVoteId => {
        return scrappedVoteId !== voteId;
      },
    );
    set({
      userVote: {
        ...userVote,
        scrappedVoteIds: updatedScrappedVoteId,
      },
    });
  },

  addParticipatedVoteInfo: async (voteInfo: ParticipatedVoteInfo) => {
    const userVote = get().userVote;
    const updatedUserVote = {
      ...userVote,
      participatedVoteInfos: [voteInfo, ...userVote.participatedVoteInfos],
    };
    set({ userVote: updatedUserVote });
  },
}));
