import customAxios from "../axios.core";
import { UserSchema } from "src/Schema";
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
