/**
 * 투표 정보 타입
 * @author 현웅
 */
export type VoteProps = {
  title: string;
  options: VoteOptionProps[];
  tag: string;
};

/**
 * 투표 선택지 정보 타입
 * @author 현웅
 */
export type VoteOptionProps = {
  content: string;
};
