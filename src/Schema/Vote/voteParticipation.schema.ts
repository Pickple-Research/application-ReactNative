/**
 * 투표 참여 현황 정보.
 * 백엔드에선 조회/스크랩한 유저의 _id와 참여자들의 정보를 담고 있지만 앱단에서는 숫자만 받아옵니다.
 * @author 현웅
 */
export type VoteParticipation = {
  /** 조회 수 */
  viewed: number;

  /** 스크랩 수 */
  scrapped: number;

  /** 참여자 수 */
  participantNum: number;

  /** 투표 결과 (선택지 별 참여자 수 배열) */
  result: number[];
};
