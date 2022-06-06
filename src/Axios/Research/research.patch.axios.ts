import customAxios from "../axios.core";

/**
 * 리서치를 조회합니다.
 * @author 현웅
 */
export const viewResearch = async (researchId: string) => {
  return await customAxios.request<void>({
    method: "PATCH",
    url: `view/${researchId}`,
  });
};

/**
 * 리서치를 스크랩합니다.
 * @author 현웅
 */
export const scrapResearch = async (researchId: string) => {
  return await customAxios.request<void>({
    method: "PATCH",
    url: `scrap/${researchId}`,
  });
};

/**
 * 리서치 스크랩을 취소합니다.
 * @author 현웅
 */
export const unscrapResearch = async (researchId: string) => {
  return await customAxios.request<void>({
    method: "PATCH",
    url: `unscrap/${researchId}`,
  });
};

/**
 * 리서치에 참여합니다.
 * @author 현웅
 */
export const participateResearch = async (researchId: string) => {
  return await customAxios.request<void>({
    method: "PATCH",
    url: `participate/${researchId}`,
  });
};

/**
 * 리서치를 연장합니다.
 * @author 현웅
 */
export const extendResearch = async (researchId: string) => {
  return await customAxios.request<void>({
    method: "PATCH",
    url: `extend/${researchId}`,
  });
};

/**
 * 리서치를 종료합니다.
 * @author 현웅
 */
export const closeResearch = async (researchId: string) => {
  return await customAxios.request<void>({
    method: "PATCH",
    url: `close/${researchId}`,
  });
};
