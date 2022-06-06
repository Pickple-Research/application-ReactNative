import customAxios from "../axios.core";

/**
 * 리서치를 업로드합니다.
 * @return 성공시 true, 실패시 false + Error
 * @author 현웅
 */
export const uploadResearch = async () => {
  return await customAxios.request<string>({
    method: "POST",
    url: "/researches",
  });
};
