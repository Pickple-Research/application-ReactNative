import customAxios from "../axios.core";

/**
 * 비밀번호를 변경합니다.
 * @return 성공시 true, 실패시 false
 * @author 현웅
 */
export const axiosChangePassword = async (password: string) => {
  return await customAxios
    .request<void>({
      method: "PATCH",
      url: `/users`,
      data: { password },
    })
    .then(response => {
      return true;
    })
    .catch(error => {
      return false;
    });
};
