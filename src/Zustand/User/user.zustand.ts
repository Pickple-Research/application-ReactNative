import create from "zustand";
import {
  UserSchema,
  UserNoticeSchema,
  UserPrivacySchema,
  UserPropertySchema,
  UserResearchSchema,
  UserVoteSchema,
  BlankUser,
  BlankUserNotice,
  BlankUserPrivacy,
  BlankUserProperty,
  BlankUserResearch,
  BlankUserVote,
  CreditHistorySchema,
  ResearchSchema,
  VoteSchema,
} from "src/Schema";
import { useResearchStore } from "../Research/research.zustand";
import { useVoteStore } from "../Vote/vote.zustand";
import { useMypageStore } from "../Mypage/mypage.zustand";
import {
  ParticipatedResearchInfo,
  ParticipatedVoteInfo,
} from "src/Schema/User/Embedded";
import { setStorage } from "src/Util";

type ChangeTarget = "VIEW" | "SCRAP";

type UserStoreProps = {
  user: UserSchema;
  userNotice: UserNoticeSchema;
  userPrivacy: UserPrivacySchema;
  userProperty: UserPropertySchema;
  userResearch: UserResearchSchema;
  userVote: UserVoteSchema;
  creditHistories: CreditHistorySchema[];

  logout: () => Promise<void>;
  resign: () => Promise<void>;

  setUser: (user: UserSchema) => void;

  /**
   * 로그인하여 얻어온 유저 정보들을 userStore에 저장합니다
   * @caution UserPrivacy 와 userSecurity 는 얻어오지 않습니다!
   */
  setUserInfo: (userInfo: {
    user: UserSchema;
    userNotice: UserNoticeSchema;
    userProperty: UserPropertySchema;
    userResearch: UserResearchSchema;
    userVote: UserVoteSchema;
  }) => void;

  /**
   * 로그인하여 얻어온 유저 활동 정보들(스크랩/참여/업로드한 리서치와 투표)을 저장합니다
   */
  setUserActivities: (userActivities: {
    creditHistories: CreditHistorySchema[];
    scrappedResearches: ResearchSchema[];
    participatedResearches: ResearchSchema[];
    uploadedResearches: ResearchSchema[];
    scrappedVotes: VoteSchema[];
    participatedVotes: VoteSchema[];
    uploadedVotes: VoteSchema[];
  }) => void;

  /**
   * 새로운 크레딧 사용내역 _id 를 creditHistories 에 추가하고,
   * credit 총액을 업데이트합니다.
   */
  updateCreditHistory: (creditHistory: CreditHistorySchema) => void;

  addResearchIdToUserResearch: (param: {
    changeTarget: ChangeTarget;
    researchId: string;
  }) => void;
  addParticipatedResearchInfo: (
    participatedResearchInfo: ParticipatedResearchInfo,
  ) => void;
  removeResearchIdFromUserResearch: (param: {
    researchId: string;
    unscrap: boolean;
  }) => void;

  addVoteIdToUserVote: (param: {
    changeTarget: ChangeTarget;
    voteId: string;
  }) => void;
  addParticipatedVoteInfo: (participatedVoteInfo: ParticipatedVoteInfo) => void;
  removeVoteIdFromUserVote: (param: {
    voteId: string;
    unscrap: boolean;
  }) => void;
};

/**
 * 유저 상태를 끌어다 쓸 수 있는 zustand 입니다.
 * @author 현웅
 */
export const useUserStore = create<UserStoreProps>((set, get) => ({
  user: BlankUser,
  userNotice: BlankUserNotice,
  userPrivacy: BlankUserPrivacy,
  userProperty: BlankUserProperty,
  userResearch: BlankUserResearch,
  userVote: BlankUserVote,
  creditHistories: [],

  logout: async () => {
    set({
      user: BlankUser,
      userNotice: BlankUserNotice,
      userPrivacy: BlankUserPrivacy,
      userProperty: BlankUserProperty,
      userResearch: BlankUserResearch,
      userVote: BlankUserVote,
    });
    await setStorage("JWT", null);
    useMypageStore.getState().clearState();
  },

  resign: async () => {},

  setUser: (user: UserSchema) => {
    set({ user });
  },

  setUserInfo: (userInfo: {
    user: UserSchema;
    userNotice: UserNoticeSchema;
    userProperty: UserPropertySchema;
    userResearch: UserResearchSchema;
    userVote: UserVoteSchema;
  }) => {
    set({
      user: userInfo.user,
      userNotice: userInfo.userNotice,
      userProperty: userInfo.userProperty,
      userResearch: userInfo.userResearch,
      userVote: userInfo.userVote,
    });
    return;
  },

  setUserActivities: (userActivities: {
    creditHistories: CreditHistorySchema[];
    scrappedResearches: ResearchSchema[];
    participatedResearches: ResearchSchema[];
    uploadedResearches: ResearchSchema[];
    scrappedVotes: VoteSchema[];
    participatedVotes: VoteSchema[];
    uploadedVotes: VoteSchema[];
  }) => {
    set({ creditHistories: userActivities.creditHistories });
    useResearchStore.getState().setResearchActivities({
      scrappedResearches: userActivities.scrappedResearches,
      participatedResearches: userActivities.participatedResearches,
      uploadedResearches: userActivities.uploadedResearches,
    });
    useVoteStore.getState().setVoteActivities({
      scrappedVotes: userActivities.scrappedVotes,
      participatedVotes: userActivities.participatedVotes,
      uploadedVotes: userActivities.uploadedVotes,
    });
  },

  //* Credit
  updateCreditHistory: (creditHistory: CreditHistorySchema) => {
    const user = get().user;
    set({
      user: {
        ...user,
        credit: user.credit + creditHistory.scale,
      },
      creditHistories: [creditHistory, ...get().creditHistories],
    });
  },

  //* Notice

  //* Research
  addResearchIdToUserResearch: (param: {
    changeTarget: ChangeTarget;
    researchId: string;
  }) => {
    const userResearch = get().userResearch;
    switch (param.changeTarget) {
      case "VIEW":
        userResearch.viewedResearchIds = [
          param.researchId,
          ...userResearch.viewedResearchIds,
        ];
        break;
      case "SCRAP":
        userResearch.scrappedResearchIds = [
          param.researchId,
          ...userResearch.scrappedResearchIds,
        ];
        break;
    }
    set({ userResearch });
  },
  addParticipatedResearchInfo: (
    participatedResearchInfo: ParticipatedResearchInfo,
  ) => {
    const userResearch = get().userResearch;
    userResearch.participatedResearchInfos = [
      participatedResearchInfo,
      ...userResearch.participatedResearchInfos,
    ];
    set({ userResearch });
  },
  removeResearchIdFromUserResearch: (param: {
    researchId: string;
    unscrap: boolean;
  }) => {
    const userResearch = get().userResearch;
    userResearch.scrappedResearchIds = userResearch.scrappedResearchIds.filter(
      id => id !== param.researchId,
    );
    //* 스크랩 취소가 아니라 리서치가 삭제된 경우
    if (!param.unscrap) {
      userResearch.viewedResearchIds = userResearch.viewedResearchIds.filter(
        id => id !== param.researchId,
      );
      userResearch.participatedResearchInfos =
        userResearch.participatedResearchInfos.filter(
          info => info.researchId !== param.researchId,
        );
    }
    set({ userResearch });
  },

  //* Vote
  addVoteIdToUserVote: (param: {
    changeTarget: ChangeTarget;
    voteId: string;
  }) => {
    const userVote = get().userVote;
    switch (param.changeTarget) {
      //TODO: . 으로 property 접근하지 말고 객체 정의해서 넣는 방식으로
      case "VIEW":
        userVote.viewedVoteIds = [param.voteId, ...userVote.viewedVoteIds];
        break;
      case "SCRAP":
        userVote.scrappedVoteIds = [param.voteId, ...userVote.scrappedVoteIds];
        break;
    }
    set({ userVote });
  },
  //TODO: . 으로 property 접근하지 말고 객체 정의해서 넣는 방식으로
  addParticipatedVoteInfo: (participatedVoteInfo: ParticipatedVoteInfo) => {
    const userVote = get().userVote;
    set({
      userVote: {
        ...userVote,
        participatedVoteInfos: [
          participatedVoteInfo,
          ...userVote.participatedVoteInfos,
        ],
      },
    });
  },
  //TODO: . 으로 property 접근하지 말고 객체 정의해서 넣는 방식으로
  removeVoteIdFromUserVote: (param: { voteId: string; unscrap: boolean }) => {
    const userVote = get().userVote;
    userVote.scrappedVoteIds = userVote.scrappedVoteIds.filter(
      id => id !== param.voteId,
    );
    //* 스크랩 취소가 아니라 투표가 삭제된 경우
    if (!param.unscrap) {
      userVote.viewedVoteIds = userVote.viewedVoteIds.filter(
        id => id !== param.voteId,
      );
      userVote.participatedVoteInfos = userVote.participatedVoteInfos.filter(
        info => info.voteId !== param.voteId,
      );
    }
    set({ userVote });
  },
}));
