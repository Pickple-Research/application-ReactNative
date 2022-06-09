/**
 * 파트너 게시글/이벤트
 * @author 현웅
 */
export type PartnerPost = {
  /** 파트너 _id */
  partnerId: string;

  /** 게시글/이벤트 제목 */
  title: string;

  /** 내용 */
  content: string;

  /** 게시 일자 */
  createdAt: string;

  /** 사진 url */
  photoUrls?: string[];
};
