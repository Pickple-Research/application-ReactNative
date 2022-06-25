import { ResearchUser } from "./researchUser.schema";

/**
 * 리서치 대댓글 스키마
 * @author 현웅
 */
export type ResearchReplySchema = {
  _id: string;

  // 리서치 _id
  researchId: string;

  // 댓글 _id
  commentId: string;

  /** 작성자 정보 */
  author?: ResearchUser | null;

  // 작성자 _id
  authorId: string;

  // 대댓글 내용
  content: string;

  // 작성 날짜
  createdAt: string;
};
