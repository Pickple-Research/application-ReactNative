import { VoteOptionSchema } from "./Embedded";

/**
 * 투표 정보
 * @author 현웅
 */
export type Vote = {
  /** 업로더 _id */
  authorId: string;

  /** 업로더 닉네임 */
  authorNickname?: string;

  /** 투표 제목 */
  title: string;

  /** 투표 내용 */
  content: string;

  /** 선택지들 */
  options: VoteOptionSchema[];

  /** 중복 선택 허용 여부 */
  allowMultiChoice: boolean;

  /** 마감일 */
  deadline: string;

  /** 생성 날짜 */
  createdAt: string;

  /** 종료 여부. deadline이 지나기 전일지라도 사용자가 종료 가능. */
  closed: boolean;

  /** 숨김 여부 */
  hidden: boolean;

  /** 삭제 여부 */
  deleted: boolean;

  /** (신고 등으로 인한) 블락 여부 */
  blocked: boolean;
};

export const BlankVote: Vote = {
  authorId: "",
  title: "",
  content: "",
  options: [{ content: "" }, { content: "" }],
  allowMultiChoice: false,
  deadline: "",
  createdAt: "",
  closed: false,
  hidden: false,
  deleted: false,
  blocked: false,
};
