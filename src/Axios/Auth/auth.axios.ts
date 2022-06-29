import customAxios from "../axios.core";
import {
  UserSchema,
  UserCreditSchema,
  UserPropertySchema,
  UserResearchSchema,
  UserVoteSchema,
} from "src/Schema";
import { handleAxiosError } from "src/Util";

/**
 * 로그인이 정상적으로 이루어졌을 때 서버가 주는 유저 정보입니다.
 * @author 현웅
 */
export type UserInfoResponse = {
  jwt: string;
  user: UserSchema;
  userCredit: UserCreditSchema;
  userProperty: UserPropertySchema;
  userResearch: UserResearchSchema;
  userVote: UserVoteSchema;
};

/**
 * 이메일과 비밀번호를 이용해 로그인합니다.
 * @return JWT, 유저 정보
 * @author 현웅
 */
export const axiosLoginWithEmailPassword = async (auth: {
  email: string;
  password: string;
}) => {
  return await customAxios
    .request<UserInfoResponse>({
      method: "POST",
      url: "/auth/login",
      data: auth,
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      handleAxiosError({ error, errorMessage: "로그인에 실패하였습니다" });
      return null;
    });
};

/**
 * SurBay DB 의 유저 정보에 로그인합니다.
 * @author 현웅
 */
export const axiosSurBayLogin = async (auth: {
  email: string;
  password: string;
}) => {
  return await customAxios
    .request<UserInfoResponse>({
      method: "POST",
      url: "/auth/login/surbay",
      data: auth,
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      handleAxiosError({ error, errorMessage: "로그인에 실패하였습니다" });
      return null;
    });
};

/**
 * 저장된 JWT를 이용하여 로그인합니다.
 * JWT 헤더는 인터셉터에서 지정해주므로 여기서는 따로 Header 설정을 하지 않아도 됩니다.
 * @author 현웅
 */
export const axiosLoginWithJWT = async () => {
  return await customAxios
    .request<UserInfoResponse>({
      method: "POST",
      url: "/auth/login/jwt",
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      handleAxiosError({
        error,
        errorMessage: "자동 로그인에 실패하였습니다\n다시 로그인 해 주세요",
      });
      return null;
    });
};

/**
 * 이메일과 인증코드를 받아 이메일을 인증합니다.
 * @author 현웅
 */
export const axiosVerifyEmail = async (param: {
  email: string;
  code: string;
}) => {
  return await customAxios
    .request<void>({
      method: "POST",
      url: "/auth/verify",
      data: param,
    })
    .then(response => {
      return true;
    })
    .catch(error => {
      handleAxiosError({
        error,
        errorMessage: "이메일 인증에 실패했습니다",
      });
      return false;
    });
};
