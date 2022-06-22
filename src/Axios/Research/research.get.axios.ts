import customAxios from "../axios.core";
import { ResearchSchema, ResearchCommentSchema } from "src/Schema";
import { handleAxiosError } from "src/Util";

/**
 * 최신 리서치를 가져옵니다
 * @author 현웅
 */
export const axiosGetRecentResearches = async () => {
  return await customAxios
    .request<ResearchSchema[]>({
      method: "GET",
      url: "/researches",
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      handleAxiosError({ error, errorMessage: "리서치를 불러오지 못했습니다" });
      return null;
    });
};

/**
 * 리서치 _id 로 리서치를 찾고 가져옵니다
 * @author 현웅
 */
export const axiosGetResearchById = async (researchId: string) => {
  return await customAxios
    .request<ResearchSchema>({
      method: "GET",
      url: `/researches/${researchId}`,
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      handleAxiosError({ error, errorMessage: "리서치를 불러오지 못했습니다" });
      return null;
    });
};

/**
 * 리서치 _id 로 리서치 모든 (대)댓글을 가져옵니다
 * @author 현웅
 */
export const axiosGetResearchComments = async (researchId: string) => {
  return await customAxios
    .request<ResearchCommentSchema[]>({
      method: "GET",
      url: `/researches/${researchId}/comments`,
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      handleAxiosError({ error, errorMessage: "댓글을 불러오지 못했습니다" });
      return null;
    });
};
