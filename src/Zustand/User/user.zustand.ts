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
import { ParticipatedVoteInfo } from "src/Schema/User/Embedded";

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

  /** 리서치에 참여합니다 (서버 응답이 성공적일 때 로컬 데이터를 업데이트 합니다) */
  participateResearch: (researchId: string) => Promise<void>;
  /** 투표에 참여합니다 (로컬 데이터를 먼저 바꿉니다) */
  participateVote: (voteInfo: ParticipatedVoteInfo) => Promise<void>;
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

  participateResearch: async (researchId: string) => {
    const userActivity = get().userActivity;
    const updatedUserActivity = {
      ...userActivity,
      participatedResearchIds: [
        researchId,
        ...userActivity.participatedResearchIds,
      ],
    };
    set({ userActivity: updatedUserActivity });
  },

  participateVote: async (voteInfo: ParticipatedVoteInfo) => {
    const userActivity = get().userActivity;
    const updatedUserActivity = {
      ...userActivity,
      participatedVoteInfos: [voteInfo, ...userActivity.participatedVoteInfos],
    };
    set({ userActivity: updatedUserActivity });
  },
}));
