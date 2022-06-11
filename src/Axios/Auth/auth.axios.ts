import customAxios from "../axios.core";
import {
  UserSchema,
  UserActivitySchema,
  UserCreditHistorySchema,
  UserPrivacySchema,
  UserPropertySchema,
} from "src/Schema";

/**
 * 이메일과 비밀번호를 이용해 로그인합니다.
 * @return JWT 토큰(TODO), 유저 정보
 * @author 현웅
 */
export const loginWithEmailPassword = async (auth: {
  email: string;
  password: string;
}) => {
  return await customAxios
    .request<{
      user: UserSchema;
      userActivity: UserActivitySchema;
      userCreditHistory: UserCreditHistorySchema;
      userPrivacy: UserPrivacySchema;
      userProperty: UserPropertySchema;
    }>({
      method: "POST",
      url: "/auth/login",
      data: {
        ...auth,
      },
    })
    .then(response => {
      return response.data;
    })
    .catch(() => {
      return null;
    });
};

/**
 * 이메일과 인증코드를 받아 이메일을 인증합니다.
 * @author 현웅
 */
export const verifyEmail = async (email: string, code: string) => {
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
