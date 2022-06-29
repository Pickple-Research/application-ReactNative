import customAxios from "../axios.core";
import { handleAxiosError } from "src/Util";
import { UserInfoResponse } from "../Auth/auth.axios";

/**
 * 이름 / 이메일 / 비밀번호를 이용해 미인증 사용자를 생성합니다.
 * @return 성공시 true, 실패시 false + Error
 * @author 현웅
 */
export const axiosSignupAsUnauthorizedUser = async (
  lastName: string,
  name: string,
  email: string,
  password: string,
) => {
  return await customAxios
    .request<boolean>({
      method: "POST",
      url: "/users/email/unauthorized",
      data: {
        lastName,
        name,
        email,
        password,
      },
    })
    .then(response => {
      return true;
    })
    .catch(error => {
      handleAxiosError({ error, errorMessage: "회원가입에 실패했습니다" });
      return false;
    });
};

/**
 * 이메일 인증이 완료된 이메일 사용자를 생성합니다.
 * @author 현웅
 */
export const axiosSignupAsEmailUser = async () => {
  return await customAxios
    .request<UserInfoResponse>({
      method: "POST",
      url: "/users/email",
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
  scrappedResearchIds: string[];
  participatedResearchIds: string[];
  uploadedResearchIds: string[];
  scrappedVoteIds: string[];
  participatedVoteIds: string[];
  uploadedVoteIds: string[];
  creditHistoryIds: string[];
}) => {
  return await customAxios
    .request<void>({
      method: "GET",
      url: "/users/activity",
      data: param,
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      handleAxiosError({
        error,
        errorMessage: "유저 활동 정보를 가져오는데 실패했습니다",
      });
      return null;
    });
};
