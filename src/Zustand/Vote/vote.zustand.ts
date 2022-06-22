import create from "zustand";
import { VoteSchema, BlankVote } from "src/Schema";
import {
  addVoteListItem,
  updateVoteListItem,
  removeVoteListItem,
} from "src/Util";

type VoteStoreProps = {
  votes: VoteSchema[];
  setVotes: (votes: VoteSchema[]) => void;

  /** 새로운 투표를 투표 리스트에 추가합니다. */
  addVoteListItem: (newVote: VoteSchema | VoteSchema[]) => void;

  /**
   * 투표 리스트에 있는 투표 중 하나를 업데이트합니다.
   * @author 현웅
   */
  updateVoteListItem: (vote: VoteSchema) => void;

  /**
   * 투표 리스트에 있는 투표 중 하나를 삭제합니다.
   */
  removeVoteListItem: (voteId: string) => void;
};

export const useVoteStore = create<VoteStoreProps>((set, get) => ({
  votes: [BlankVote],
  setVotes: (votes: VoteSchema[]) => set({ votes }),

  addVoteListItem: (newVote: VoteSchema | VoteSchema[]) => {
    set({ votes: addVoteListItem(newVote, get().votes) });
  },

  updateVoteListItem: (updatedVote: VoteSchema) => {
    set({ votes: updateVoteListItem(updatedVote, get().votes) });
  },

  removeVoteListItem: (voteId: string) => {
    set({ votes: removeVoteListItem(voteId, get().votes) });
  },
}));
