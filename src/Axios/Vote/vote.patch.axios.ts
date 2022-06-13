import customAxios from "../axios.core";

/**
 * 투표를 조회합니다.
 * @author 현웅
 */
export const axiosViewVote = async (voteId: string) => {
  return await customAxios.request<void>({
    method: "PATCH",
    url: `votes/view/${voteId}`,
  });
};

/**
 * 투표를 스크랩합니다.
 * @author 현웅
 */
export const axiosScrapVote = async (voteId: string) => {
  return await customAxios.request<void>({
    method: "PATCH",
    url: `votes/scrap/${voteId}`,
  });
};

/**
 * 투표 스크랩을 취소합니다.
 * @author 현웅
 */
export const axiosUnscrapVote = async (voteId: string) => {
  return await customAxios.request<void>({
    method: "PATCH",
    url: `votes/unscrap/${voteId}`,
  });
};

/**
 * 투표 참여 요청을 보냅니다.
 *
 * @param voteId 투표 _id
 * @param selectedOptionIndexes 선택한 옵션 인덱스
 *
 * @author 현웅
 */
export const axiosParticipateVote = async (
  voteId: string,
  selectedOptionIndexes: number[],
) => {
  return await customAxios
    .request<void>({
      method: "PATCH",
      url: `/votes/participate/${voteId}`,
      data: {
        selectedOptionIndexes,
      },
    })
    .then(response => {
      return;
    })
    .catch(error => {
      //TODO: '투표 참여가 정상적으로 이루어지지 않은 것 같습니다' 처리
      return null;
    });
};

/**
 * 투표를 마감합니다.
 * @author 현웅
 */
export const axiosCloseVote = async (voteId: string) => {
  return await customAxios.request<void>({
    method: "PATCH",
    url: `votes/close/${voteId}`,
  });
};
