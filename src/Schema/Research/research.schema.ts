/**
 * 리서치 정보
 * @author 현웅
 */
export type Research = {
  /** 리서치 진행자 타입 (일반 유저 or 파트너) */
  // authorType: string;

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

  /** 리서치 진행 단체 */
  organization: string;

  /** 참여 대상 (줄글 작성) */
  target: string;

  /** 예상 소요시간 */
  estimatedTime: number;

  /** 마감일 */
  deadline: string;

  /** 생성일 */
  createdAt: string;

  /** 최소 참여조건 */
  eligibility: string;

  /** 리서치 카테고리 */
  // categories: Category[];

  /** 종료 여부. deadline이 지나기 전일지라도 사용자가 종료 가능. */
  closed: boolean;

  /** 숨김 여부 */
  hidden: boolean;

  /** 삭제 여부 */
  deleted: boolean;

  /** (신고 등으로 인한) 블락 여부 */
  blocked: boolean;
};
