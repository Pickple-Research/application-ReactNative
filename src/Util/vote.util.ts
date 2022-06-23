import { VoteSchema } from "src/Schema";

/**
 * 새로운 투표(들)를 기존의 투표 리스트 맨 앞에 추가하고 반환합니다.
 * @author 현웅
 */
export function addVoteListItem(
  newVote: VoteSchema | VoteSchema[],
  voteList: VoteSchema[],
) {
  return [newVote, ...voteList].flat();
}

/**
 * 새로운 투표(들)를 기존의 투표 리스트 맨 뒤에 추가하고 반환합니다.
 * @author 현웅
 */
export function appendVoteListItem(
  newVote: VoteSchema | VoteSchema[],
  voteList: VoteSchema[],
) {
  return [...voteList, newVote].flat();
}

/**
 * 업데이트된 투표를 기존의 투표 리스트에서 찾고 교체한 후 반환합니다.
 * @author 현웅
 */
export function updateVoteListItem(
  updatedVote: VoteSchema,
  voteList: VoteSchema[],
) {
  const updatedVoteIndex = voteList.findIndex(vote => {
    vote._id === updatedVote._id;
  });
  if (updatedVoteIndex !== -1) {
    return voteList.splice(updatedVoteIndex, 1, updatedVote);
  }
  return voteList;
}

/**
 * 투표 리스트에서 특정 투표를 찾아 삭제하고 반환합니다.
 * @author 현웅
 */
export function removeVoteListItem(voteId: string, voteList: VoteSchema[]) {
  return voteList.filter(vote => {
    return vote._id !== voteId;
  });
}
