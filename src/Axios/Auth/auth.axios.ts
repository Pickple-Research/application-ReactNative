import customAxios from "../axios.core";

/**
 * 이메일과 비밀번호를 이용해 로그인합니다.
 * @return JWT 토큰
 * @author 현웅
 */
export const loginWithEmailPassword = async (
  email: string,
  password: string,
) => {
  return await customAxios
    .request<string>({
      method: "POST",
      url: "/auth/login",
      data: {
        email,
        password,
      },
    })
    .catch(() => {
      return "";
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
