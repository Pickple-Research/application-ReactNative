import create from "zustand";
import {
  UserSchema,
  UserActivitySchema,
  UserCreditHistorySchema,
  UserPrivacySchema,
  UserPropertySchema,
  BlankUser,
  BlankUserActivity,
  BlankUserCreditHistory,
  BlankUserPrivacy,
  BlankUserProperty,
} from "src/Schema";
import {
  ParticipatedResearchInfo,
  ParticipatedVoteInfo,
} from "src/Schema/User/Embedded";

type UserStoreProps = {
  user: UserSchema;
  userActivity: UserActivitySchema;
  userCreditHistory: UserCreditHistorySchema;
  userPrivacy: UserPrivacySchema;
  userProperty: UserPropertySchema;

  /** 로그인하여 얻어온 유저 정보들을 userStore에 저장합니다 */
  setUserInfo: (userInfo: {
    user: UserSchema;
    userActivity: UserActivitySchema;
    userCreditHistory: UserCreditHistorySchema;
    userPrivacy: UserPrivacySchema;
    userProperty: UserPropertySchema;
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
  userActivity: BlankUserActivity,
  userCreditHistory: BlankUserCreditHistory,
  userPrivacy: BlankUserPrivacy,
  userProperty: BlankUserProperty,

  setUserInfo: (userInfo: {
    user: UserSchema;
    userActivity: UserActivitySchema;
    userCreditHistory: UserCreditHistorySchema;
    userPrivacy: UserPrivacySchema;
    userProperty: UserPropertySchema;
  }) => {
    set({
      user: userInfo.user,
      userActivity: userInfo.userActivity,
      userCreditHistory: userInfo.userCreditHistory,
      userPrivacy: userInfo.userPrivacy,
      userProperty: userInfo.userProperty,
    });
    return;
  },

  addViewedResearchId: (researchId: string) => {
    const userActivity = get().userActivity;
    set({
      userActivity: {
        ...userActivity,
        viewedResearchIds: [researchId, ...userActivity.viewedResearchIds],
      },
    });
  },
  addViewedVoteId: (voteId: string) => {
    const userActivity = get().userActivity;
    set({
      userActivity: {
        ...userActivity,
        viewedVoteIds: [voteId, ...userActivity.viewedVoteIds],
      },
    });
  },

  addScrappedResearchId: (researchId: string) => {
    const userActivity = get().userActivity;
    set({
      userActivity: {
        ...userActivity,
        scrappedResearchIds: [researchId, ...userActivity.scrappedResearchIds],
      },
    });
  },
  removeScrappedResearchId: (researchId: string) => {
    const userActivity = get().userActivity;
    const updatedScrappedResearchId = userActivity.scrappedResearchIds.filter(
      scrappedResearchId => {
        return scrappedResearchId !== researchId;
      },
    );
    set({
      userActivity: {
        ...userActivity,
        scrappedResearchIds: updatedScrappedResearchId,
      },
    });
  },

  addScrappedVoteId: (voteId: string) => {
    const userActivity = get().userActivity;
    set({
      userActivity: {
        ...userActivity,
        scrappedVoteIds: [voteId, ...userActivity.scrappedVoteIds],
      },
    });
  },
  removeScrappedVoteId: (voteId: string) => {
    const userActivity = get().userActivity;
    const updatedScrappedVoteId = userActivity.scrappedVoteIds.filter(
      scrappedVoteId => {
        return scrappedVoteId !== voteId;
      },
    );
    set({
      userActivity: {
        ...userActivity,
        scrappedVoteIds: updatedScrappedVoteId,
      },
    });
  },

  addParticipatedResearchInfo: async (
    researchInfo: ParticipatedResearchInfo,
  ) => {
    const userActivity = get().userActivity;
    const updatedUserActivity = {
      ...userActivity,
      participatedResearchInfos: [
        researchInfo,
        ...userActivity.participatedResearchInfos,
      ],
    };
    set({ userActivity: updatedUserActivity });
  },

  addParticipatedVoteInfo: async (voteInfo: ParticipatedVoteInfo) => {
    const userActivity = get().userActivity;
    const updatedUserActivity = {
      ...userActivity,
      participatedVoteInfos: [voteInfo, ...userActivity.participatedVoteInfos],
    };
    set({ userActivity: updatedUserActivity });
  },
}));
