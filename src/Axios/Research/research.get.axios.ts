import customAxios from "../axios.core";

/**
 * 최신 리서치를 가져옵니다
 * @author 현웅
 */
export const getRecentResearches = async () => {
  return await customAxios.request<string>({
    method: "GET",
    url: "/researches",
  });
};

/**
 * 리서치 _id 로 리서치를 찾고 가져옵니다
 * @author 현웅
 */
export const getResearchById = async (researchId: string) => {
  return await customAxios.request<string>({
    method: "GET",
    url: `/researches/${researchId}`,
  });
};
