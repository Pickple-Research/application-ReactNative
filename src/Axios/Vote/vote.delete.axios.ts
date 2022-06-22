import customAxios from "../axios.core";
import { handleAxiosError } from "src/Util";

/**
 * 투표를 삭제합니다.
 * @return 성공시 true, 실패시 false
 * @author 현웅
 */
export const axiosDeleteVote = async (voteId: string) => {
  return await customAxios
    .request<void>({
      method: "DELETE",
      url: `/votes`,
      headers: { vote_id: voteId },
    })
    .then(response => {
      return true;
    })
    .catch(error => {
      handleAxiosError({ error, errorMessage: "투표 삭제에 실패하였습니다" });
      return false;
    });
};
