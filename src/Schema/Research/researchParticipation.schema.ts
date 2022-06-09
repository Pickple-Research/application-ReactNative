/**
 * 리서치 참여 현황 정보.
 * 백엔드에선 조회/스크랩한 유저의 _id와 참여자들의 정보를 담고 있지만 앱단에서는 숫자만 받아옵니다.
 * @author 현웅
 */
export type ResearchParticipation = {
  /** 조회 수 */
  viewedNum: number;

  /** 스크랩 수 */
  scrappedNum: number;

  /** 참여자 수 */
  participantNum: number;
};
