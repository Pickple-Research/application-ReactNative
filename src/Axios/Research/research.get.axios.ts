import customAxios from "../axios.core";
import { ResearchSchema } from "src/Schema";

/**
 * 최신 리서치를 가져옵니다
 * @author 현웅
 */
export const getRecentResearches = async () => {
  return await customAxios
    .request<ResearchSchema[]>({
      method: "GET",
      url: "/researches",
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return null;
    });
};

/**
 * 리서치 _id 로 리서치를 찾고 가져옵니다
 * @author 현웅
 */
export const getResearchById = async (researchId: string) => {
  return await customAxios
    .request<ResearchSchema>({
      method: "GET",
      url: `/researches/${researchId}`,
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return null;
    });
};
