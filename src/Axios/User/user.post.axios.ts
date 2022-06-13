import customAxios from "../axios.core";

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
      url: "/users/email",
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
      return false;
    });
};
