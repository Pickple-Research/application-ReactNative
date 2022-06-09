import create from "zustand";
import {
  User,
  UserActivity,
  UserCreditHistory,
  UserPrivacy,
  UserProperty,
} from "src/Schema";

type UserStoreProps = {
  user: User;
  userActivity: UserActivity;
  userCreditHistory: UserCreditHistory;
  userPrivacy: UserPrivacy;
  userProperty: UserProperty;

  /** 로그인하여 얻어온 유저 정보들을 userStore에 저장합니다 */
  setUserInfo: (userInfo: {
    user: User;
    userActivity: UserActivity;
    userCreditHistory: UserCreditHistory;
    userPrivacy: UserPrivacy;
    userProperty: UserProperty;
  }) => void;
};

/**
 * 유저 상태를 끌어다 쓸 수 있는 zustand 입니다.
 * @author 현웅
 */
export const useUserStore = create<UserStoreProps>((set, get) => ({
  user: {
    email: "",
    nickname: "",
    grade: 0,
    createdAt: "",
  },

  userActivity: {
    viewedResearchIds: [],
    viewedVoteIds: [],
    scrappedResearchIds: [],
    scrappedVoteIds: [],
    participatedResearchIds: [],
    participatedVoteInfos: [],
    uploadedResearchIds: [],
    uploadedVoteIds: [],
  },

  userPrivacy: {},

  userCreditHistory: { history: [] },

  userProperty: {},

  setUserInfo: (userInfo: {
    user: User;
    userActivity: UserActivity;
    userCreditHistory: UserCreditHistory;
    userPrivacy: UserPrivacy;
    userProperty: UserProperty;
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
}));
