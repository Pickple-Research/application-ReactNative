import customAxios from "../axios.core";
import { VoteSchema, VoteCommentSchema } from "src/Schema";

/**
 * 최신 투표를 가져옵니다
 * @author 현웅
 */
export const axiosGetRecentVotes = async () => {
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
export const axiosGetVoteById = async (voteId: string) => {
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

/**
 * 특정 투표의 모든 (대)댓글 내용을 가져옵니다
 * @author 현웅
 */
export const axiosGetVoteComments = async (voteId: string) => {
  return await customAxios
    .request<VoteCommentSchema[]>({
      method: "GET",
      url: `/votes/${voteId}/comments`,
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return null;
    });
};
