import customAxios from "../axios.core";
import { ResearchSchema } from "src/Schema";
import { ParticipatedResearchInfo } from "src/Schema/User/Embedded";

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
 * @return 업데이트 된 리서치 정보 | null
 * @author 현웅
 */
export const axiosScrapResearch = async (researchId: string) => {
  return await customAxios
    .request<ResearchSchema>({
      method: "PATCH",
      url: `researches/scrap/${researchId}`,
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return null;
    });
};

/**
 * 리서치 스크랩을 취소합니다.
 * @return 업데이트 된 리서치 정보 | null
 * @author 현웅
 */
export const axiosUnscrapResearch = async (researchId: string) => {
  return await customAxios
    .request<ResearchSchema>({
      method: "PATCH",
      url: `researches/unscrap/${researchId}`,
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return null;
    });
};

/**
 * 리서치에 참여합니다.
 * @return 리서치 참여 정보와 참여 정보가 반영된 최신 리서치 정보 | null
 * @author 현웅
 */
export const axiosParticipateResearch = async (
  researchId: string,
  consummedTime: number,
) => {
  return await customAxios
    .request<{
      participatedResearchInfo: ParticipatedResearchInfo;
      updatedResearch: ResearchSchema;
    }>({
      method: "PATCH",
      url: `researches/participate/${researchId}`,
      data: { consummedTime },
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return null;
    });
};

/**
 * 리서치를 연장합니다.
 * @return 업데이트된 리서치 정보 | null
 * @author 현웅
 */
export const axiosExtendResearch = async (researchId: string) => {
  return await customAxios
    .request<ResearchSchema>({
      method: "PATCH",
      url: `researches/extend/${researchId}`,
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return null;
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
