import customAxios from "../axios.core";
import {
  CreditHistorySchema,
  UserSchema,
  ResearchSchema,
  VoteSchema,
  UserCreditSchema,
  UserResearchSchema,
  UserVoteSchema,
} from "src/Schema";
import { handleAxiosError } from "src/Util";

/**
 * 주어진 이메일로 인증번호를 (재)전송합니다.
 * @author 현웅
 */
export const axiosTransmitAuthCode = async (email: string) => {
  return await customAxios
    .request<void>({
      method: "POST",
      url: "/users/email/unauthorized",
      data: { email },
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      handleAxiosError({
        error,
        errorMessage: "인증번호 전송에 실패하였습니다",
      });
      return null;
    });
};

/**
 * 이메일 인증이 완료된 이메일 사용자를 생성합니다.
 * @return 생성된 사용자 정보가 담긴 JWT
 * @author 현웅
 */
export const axiosSignupAsEmailUser = async (param: {
  email: string;
  password: string;
  lastName: string;
  name: string;
  nickname: string;
  birthday?: string;
  gender?: string;
}) => {
  return await customAxios
    .request<{ user: UserSchema; jwt: string }>({
      method: "POST",
      url: "/users/email",
      data: param,
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      handleAxiosError({ error, errorMessage: "회원가입에 실패했습니다" });
      return null;
    });
};

/**
 * 로그인 완료 후, 유저 활동 정보를 1차적으로 가져옵니다.
 * (참여한/스크랩한/업로드한 리서치 와 투표 정보 + 크레딧 사용내역)
 * @author 현웅
 */
export const axiosGetUserActivity = async (param: {
  userCredit: UserCreditSchema;
  userResearch: UserResearchSchema;
  userVote: UserVoteSchema;
}) => {
  return await customAxios
    .request<{
      creditHistories: CreditHistorySchema[];
      scrappedResearches: ResearchSchema[];
      participatedResearches: ResearchSchema[];
      uploadedResearches: ResearchSchema[];
      scrappedVotes: VoteSchema[];
      participatedVotes: VoteSchema[];
      uploadedVotes: VoteSchema[];
    }>({
      method: "POST",
      url: "/users/activity",
      data: {
        creditHistoryIds: param.userCredit.creditHistoryIds.slice(0, 15),
        scrappedResearchIds: param.userResearch.scrappedResearchIds.slice(
          0,
          15,
        ),
        participatedResearchIds: param.userResearch.participatedResearchInfos
          .slice(0, 15)
          .map(info => info.researchId),
        scrappedVoteIds: param.userVote.scrappedVoteIds.slice(0, 15),
        participatedVoteIds: param.userVote.participatedVoteInfos
          .slice(0, 15)
          .map(info => info.voteId),
      },
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      // handleAxiosError({
      //   error,
      //   errorMessage: "유저 활동 정보를 가져오는데 실패했습니다",
      // });
      return null;
    });
};
