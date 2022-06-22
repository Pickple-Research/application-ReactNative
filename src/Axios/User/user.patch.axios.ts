import customAxios from "../axios.core";
import { handleAxiosError } from "src/Util";

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
      handleAxiosError({ error, errorMessage: "비밀번호 변경에 실패했습니다" });
      return false;
    });
};
