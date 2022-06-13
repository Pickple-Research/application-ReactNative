import customAxios from "../axios.core";

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
