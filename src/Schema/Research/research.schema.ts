import { ResearchUser } from "./researchUser.schema";

/**
 * 리서치 정보
 * @author 현웅
 */
export type ResearchSchema = {
  /** 리서치 _id */
  _id: string;

  /** 작성자 정보 */
  author?: ResearchUser | null;

  /** 리서치 업로더 _id */
  authorId: string;

  /** 리서치 제목 */
  title: string;

  /** 설문지 폼 url */
  link: string;

  /** 리서치 내용 */
  content: string;

  /** 리서치 목적 */
  purpose: string;

  /** 리서치 유형 */
  type: string;

  /** 리서치 카테고리 */
  // categories?: Category[];

  /** 리서치 진행 단체 */
  organization: string;

  /** 참여 대상 (줄글 작성) */
  target: string;

  /** 참여 성별 조건 */
  targetGenders: string[];

  /** 참여 나이 조건 */
  targetAges: number[];

  /** 참여 나이대 조건 */
  targetAgeGroups: string[];

  /** 예상 소요시간 (분) */
  estimatedTime: number;

  /** 참여시 제공 크레딧 */
  credit: number;

  /** 참여시 추가 제공 크레딧 (추첨자에게만 제공) */
  extraCredit?: number;

  /** 추가 제공 크레딧 추첨 수령자 수 */
  extraCreditRecieverNum?: number;

  /** 마감일 */
  deadline: string | Date;

  /** 끌올한 날짜 (노출 기준일) */
  pulledupAt: string | Date;

  /** 생성일 */
  createdAt: string;

  /** 조회 수 */
  viewsNum: number;

  /** 스크랩 수 */
  scrapsNum: number;

  /** 참여자 수 */
  participantsNum: number;

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

export const BlankResearch: ResearchSchema = {
  _id: "",
  authorId: "",
  title: "",
  link: "",
  content: "",
  purpose: "",
  type: "",
  // categories: [],
  organization: "",
  target: "",
  targetGenders: [],
  targetAges: [],
  targetAgeGroups: [],
  estimatedTime: 0,
  credit: 0,
  extraCredit: 0,
  extraCreditRecieverNum: 0,
  deadline: "",
  pulledupAt: "",
  createdAt: "",
  viewsNum: 0,
  scrapsNum: 0,
  participantsNum: 0,
  commentsNum: 0,
  closed: false,
  hidden: false,
  deleted: false,
  blocked: false,
};
