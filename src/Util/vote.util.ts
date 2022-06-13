import { VoteSchema } from "src/Schema";

/**
 * 주어진 투표에 참여한 후의 투표 정보를 반환합니다.
 * 투표 리스트 정보와 투표 상세 페이지 정보를 모두 같은 값으로 바꿔야하기 때문에 사용합니다.
 * @author 현웅
 */
export function getUpdatedVote(
  vote: VoteSchema,
  selectedOptionIndexes: number[],
) {
  const updatedVote = { ...vote };
  updatedVote.participantsNum += 1; // 참여자 수 증가
  selectedOptionIndexes.forEach(index => {
    updatedVote.result[index] += 1; // 결과값 증가
  });
  return updatedVote;
}
