import { ResearchUser } from "./researchUser.schema";
import { ResearchReplySchema } from "./researchReply.schema";

/**
 * 리서치 댓글 스키마
 * @author 현웅
 */
export type ResearchCommentSchema = {
  _id: string;

  // 리서치 _id
  researchId: string;

  /** 작성자 정보 */
  author?: ResearchUser | null;

  // 작성자 _id
  authorId: string;

  // 댓글 내용
  content: string;

  // 작성 날짜
  createdAt: string;

  // 대댓글 내용
  replies: ResearchReplySchema[];
};
