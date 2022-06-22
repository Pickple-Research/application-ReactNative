import customAxios from "../axios.core";
import { handleAxiosError } from "src/Util";

/**
 * 회원을 탈퇴합니다.
 * @return 성공시 true, 실패시 false
 * @author 현웅
 */
export const axiosDeleteUser = async (userId: string) => {
  return await customAxios
    .request<void>({
      method: "DELETE",
      url: `/users`,
      headers: { user_id: userId },
    })
    .then(response => {
      return true;
    })
    .catch(error => {
      handleAxiosError({ error, errorMessage: "회원 탈퇴에 실패했습니다" });
      return false;
    });
};
