import customAxios from "../axios.core";
import { CreditHistorySchema, ResearchSchema } from "src/Schema";
import { ParticipatedResearchInfo } from "src/Schema/User/Embedded";
import { handleAxiosError } from "src/Util";

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
      handleAxiosError({
        error,
        errorMessage: "리서치 스크랩이 정상적으로 처리되지 못했습니다",
      });
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
      handleAxiosError({
        error,
        errorMessage: "리서치 스크랩 취소가 정상적으로 처리되지 못했습니다",
      });
      return null;
    });
};

/**
 * 리서치에 참여합니다.
 * @return 리서치 참여 정보, 크레딧 변경 내역 정보, 참여 정보가 반영된 최신 리서치 정보 | null
 * @author 현웅
 */
export const axiosParticipateResearch = async (
  researchId: string,
  consummedTime: number,
) => {
  return await customAxios
    .request<{
      participatedResearchInfo: ParticipatedResearchInfo;
      newCreditHitory: CreditHistorySchema;
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
      handleAxiosError({ error });
      return null;
    });
};

/**
 * 리서치를 끌올합니다.
 * @return 업데이트된 리서치 정보 | null
 * @author 현웅
 */
export const axiosPullupResearch = async (researchId: string) => {
  return await customAxios
    .request<ResearchSchema>({
      method: "PATCH",
      url: `researches/pullup/${researchId}`,
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      handleAxiosError({
        error,
        errorMessage: "리서치 끌올 처리가 정상적으로 처리되지 않았습니다",
      });
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
