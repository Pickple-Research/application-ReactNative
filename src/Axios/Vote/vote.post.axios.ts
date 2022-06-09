import customAxios from "../axios.core";

/**
 * 투표를 업로드합니다.
 * @author 현웅
 */
export const uploadVote = async () => {
  return await customAxios.request<string>({
    method: "POST",
    url: "/votes",
    data: {},
  });
};
