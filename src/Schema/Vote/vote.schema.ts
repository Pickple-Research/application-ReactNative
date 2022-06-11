import { VoteOptionSchema } from "./voteOption.schema";

/**
 * 투표 정보
 * @author 현웅
 */
export type VoteSchema = {
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

  /** 조회 수 */
  viewsNum: number;

  /** 스크랩 수 */
  scrapsNum: number;

  /** 참여자 수 */
  participantsNum: number;

  /** 투표 결과. 각 인덱스의 값은 투표 선택지가 얼마나 선택되었는지 알려줍니다. */
  result: number[];

  /** 댓글 수 */
  commentsNum: number;

  /** 종료 여부. deadline이 지나기 전일지라도 사용자가 종료 가능. */
  closed: boolean;

  /** 숨김 여부 */
  hidden: boolean;

  /** 삭제 여부 */
  deleted: boolean;

  /** (신고 등으로 인한) 블락 여부 */
  blocked: boolean;
};

export const BlankVote: VoteSchema = {
  authorId: "",
  title: "",
  content: "",
  options: [{ content: "" }, { content: "" }],
  allowMultiChoice: false,
  deadline: "",
  createdAt: "",
  viewsNum: 0,
  scrapsNum: 0,
  participantsNum: 0,
  result: [0, 0],
  commentsNum: 0,
  closed: false,
  hidden: false,
  deleted: false,
  blocked: false,
};
