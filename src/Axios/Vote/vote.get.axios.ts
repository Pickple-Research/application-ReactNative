import customAxios from "../axios.core";
import { VoteSchema, VoteCommentSchema } from "src/Schema";
import { handleAxiosError } from "src/Util";

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
      handleAxiosError({ error, errorMessage: "투표를 불러오지 못했습니다" });
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
      handleAxiosError({ error, errorMessage: "투표를 불러오지 못했습니다" });
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
      handleAxiosError({ error, errorMessage: "댓글을 불러오지 못했습니다" });
      return null;
    });
};

/**
 * 인자로 받은 voteId 을 기준으로 더 최신의 투표를 모두 찾고 가져옵니다.
 * @author 현웅
 */
export const axiosGetNewerVotes = async (voteId: string) => {
  return await customAxios
    .request<VoteSchema[]>({
      method: "GET",
      url: `/votes/newer/${voteId}`,
    })
    .then(({ data }) => {
      return data;
    })
    .catch(error => {
      handleAxiosError({ error, errorMessage: "투표를 불러오지 못했습니다" });
      return null;
    });
};

/**
 * 인자로 받은 voteId 을 기준으로 더 오래된 투표를 10개 찾고 가져옵니다.
 * @author 현웅
 */
export const axiosGetOlderVotes = async (voteId: string) => {
  return await customAxios
    .request<VoteSchema[]>({
      method: "GET",
      url: `/votes/older/${voteId}`,
    })
    .then(({ data }) => {
      return data;
    })
    .catch(error => {
      handleAxiosError({ error, errorMessage: "투표를 불러오지 못했습니다" });
      return null;
    });
};
