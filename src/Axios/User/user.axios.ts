import { customAxios } from "../axios.core";

/**
 * TODO: 구현 필요
 * JWT를 사용해 사용자 정보를 가져옵니다.
 * @author 현웅
 */
export const getUserInfo = async () => {
  await customAxios.request<string>({
    method: "GET",
    url: "/users",
  });
};
