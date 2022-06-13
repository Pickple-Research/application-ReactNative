import customAxios from "../axios.core";
import {
  UserSchema,
  UserActivitySchema,
  UserCreditHistorySchema,
  UserPrivacySchema,
  UserPropertySchema,
} from "src/Schema";

/**
 * 로그인이 정상적으로 이루어졌을 때 서버가 주는 유저 정보입니다.
 * @author 현웅
 */
export type UserInfoResponse = {
  jwt: string;
  user: UserSchema;
  userActivity: UserActivitySchema;
  userCreditHistory: UserCreditHistorySchema;
  userPrivacy: UserPrivacySchema;
  userProperty: UserPropertySchema;
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
      return null;
    });
};

/**
 * 이메일과 인증코드를 받아 이메일을 인증합니다.
 * @author 현웅
 */
export const axiosVerifyEmail = async (email: string, code: string) => {
  return await customAxios
    .request<boolean>({
      method: "POST",
      url: "/auth/verify",
      data: {
        email,
        code,
      },
    })
    .catch(() => {
      return false;
    });
};
