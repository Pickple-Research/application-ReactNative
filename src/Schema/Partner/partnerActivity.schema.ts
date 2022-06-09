/**
 * 파트너 활동 정보
 * @author 현웅
 */
export type PartnerActivity = {
  /** 파트너 게시글/이벤트 _id */
  postIds: string[];

  /** 파트너 제품/서비스 _id */
  productIds: string[];

  /** 파트너가 진행한 리서치 _id */
  researchIds: string[];

  /** 파트너 팔로워 _id */
  followerIds: string[];
};
