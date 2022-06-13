import customAxios from "../axios.core";

/**
 * 리서치를 조회합니다.
 * @author 현웅
 */
export const axiosViewResearch = async (researchId: string) => {
  return await customAxios.request<void>({
    method: "PATCH",
    url: `researches/view/${researchId}`,
  });
};

/**
 * 리서치를 스크랩합니다.
 * @author 현웅
 */
export const axiosScrapResearch = async (researchId: string) => {
  return await customAxios.request<void>({
    method: "PATCH",
    url: `researches/scrap/${researchId}`,
  });
};

/**
 * 리서치 스크랩을 취소합니다.
 * @author 현웅
 */
export const axiosUnscrapResearch = async (researchId: string) => {
  return await customAxios.request<void>({
    method: "PATCH",
    url: `researches/unscrap/${researchId}`,
  });
};

/**
 * 리서치에 참여합니다.
 * @author 현웅
 */
export const axiosParticipateResearch = async (researchId: string) => {
  return await customAxios.request<void>({
    method: "PATCH",
    url: `researches/participate/${researchId}`,
  });
};

/**
 * 리서치를 연장합니다.
 * @author 현웅
 */
export const axiosExtendResearch = async (researchId: string) => {
  return await customAxios.request<void>({
    method: "PATCH",
    url: `researches/extend/${researchId}`,
  });
};

/**
 * 리서치를 종료합니다.
 * @author 현웅
 */
export const axiosCloseResearch = async (researchId: string) => {
  return await customAxios.request<void>({
    method: "PATCH",
    url: `researches/close/${researchId}`,
  });
};
