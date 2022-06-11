import customAxios from "../axios.core";
import { VoteSchema } from "src/Schema";

/**
 * 최신 투표를 가져옵니다
 * @author 현웅
 */
export const getRecentVotes = async () => {
  return await customAxios
    .request<VoteSchema[]>({
      method: "GET",
      url: "/votes",
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return null;
    });
};

/**
 * 투표 _id 로 특정 투표를 찾고 가져옵니다
 * @author 현웅
 */
export const getVoteById = async (voteId: string) => {
  return await customAxios
    .request<VoteSchema>({
      method: "GET",
      url: `/votes/${voteId}`,
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return null;
    });
};
