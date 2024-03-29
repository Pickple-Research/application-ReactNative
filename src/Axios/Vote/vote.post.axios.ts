import customAxios from "../axios.core";
import {
  VoteSchema,
  VoteOptionSchema,
  VoteCommentSchema,
  VoteReplySchema,
} from "src/Schema";
import { handleAxiosError } from "src/Util";

/**
 * 투표를 업로드합니다.
 * @return 생성된 투표 정보
 * @author 현웅
 */
export const axiosUploadVote = async (vote: {
  title: string;
  content: string;
  options: VoteOptionSchema[];
  allowMultiChoice: boolean;
}) => {
  return await customAxios
    .request<VoteSchema>({
      method: "POST",
      url: "/votes",
      data: vote,
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      handleAxiosError({ error, errorMessage: "투표 업로드에 실패했습니다" });
      return null;
    });
};

/**
 * 투표 댓글을 업로드합니다.
 * @return 업데이트 된 투표 정보와 생성된 댓글 정보
 * @author 현웅
 */
export const axiosUploadVoteComment = async (param: {
  voteId: string;
  content: string;
}) => {
  return await customAxios
    .request<{
      updatedVote: VoteSchema;
      newComment: VoteCommentSchema;
    }>({
      method: "POST",
      url: "votes/comments",
      data: { ...param },
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      handleAxiosError({
        error,
        errorMessage: "투표 댓글 등록에 실패했습니다",
      });
      return null;
    });
};

/**
 * 투표 대댓글을 업로드합니다.
 * @return 업데이트 된 투표 정보와 생성된 대댓글 정보
 * @author 현웅
 */
export const axiosUploadVoteReply = async (param: {
  voteId: string;
  commentId: string;
  content: string;
}) => {
  return await customAxios
    .request<{
      updatedVote: VoteSchema;
      newReply: VoteReplySchema;
    }>({
      method: "POST",
      url: "votes/replies",
      data: { ...param },
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      handleAxiosError({
        error,
        errorMessage: "투표 대댓글 등록에 실패했습니다",
      });
      return null;
    });
};

/**
 * 투표를 신고합니다.
 * @return 성공 시 true | 실패 시 false
 * @author 현웅
 */
export const axiosReportVote = async (param: {
  voteId: string;
  reportContent: string;
}) => {
  return await customAxios
    .request<void>({
      method: "POST",
      url: "/votes/report",
      data: {
        voteId: param.voteId,
        content: param.reportContent,
      },
    })
    .then(response => {
      return true;
    })
    .catch(error => {
      handleAxiosError({
        error,
        errorMessage: "투표 신고가 정상적으로 처리되지 못했습니다",
      });
      return false;
    });
};
