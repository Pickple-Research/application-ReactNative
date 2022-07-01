import customAxios from "../axios.core";
import { ResearchSchema, ResearchCommentSchema } from "src/Schema";
import { handleAxiosError } from "src/Util";

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

/**
 * 인자로 받은 pulledupAt 을 기준으로 더 최신의 리서치를 모두 찾고 가져옵니다.
 * @author 현웅
 */
export const axiosGetNewerResearches = async (pulledupAt: string | Date) => {
  return await customAxios
    .request<ResearchSchema[]>({
      method: "GET",
      url: `/researches/newer/${pulledupAt}`,
    })
    .then(({ data }) => {
      return data;
    })
    .catch(error => {
      handleAxiosError({ error, errorMessage: "리서치를 불러오지 못했습니다" });
      return null;
    });
};

/**
 * 인자로 받은 pulledupAt 을 기준으로 더 오래된 리서치를 10개 찾고 가져옵니다.
 * @author 현웅
 */
export const axiosGetOlderResearches = async (pulledupAt: string | Date) => {
  return await customAxios
    .request<ResearchSchema[]>({
      method: "GET",
      url: `/researches/older/${pulledupAt}`,
    })
    .then(({ data }) => {
      return data;
    })
    .catch(error => {
      handleAxiosError({ error, errorMessage: "리서치를 불러오지 못했습니다" });
      return null;
    });
};
