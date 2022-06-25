import { VoteUser } from "./voteUser.schema";

/**
 * 투표 대댓글 스키마
 * @author 현웅
 */
export type VoteReplySchema = {
  _id: string;

  // 투표 _id
  voteId: string;

  // 댓글 _id
  commentId: string;

  // 작성자 정보
  author?: VoteUser | null;

  // 작성자 _id
  authorId: string;

  // 대댓글 내용
  content: string;

  // 작성 날짜
  createdAt: string;
};
