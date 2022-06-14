import create from "zustand";
import { VoteSchema, BlankVote } from "src/Schema";

type VoteStoreProps = {
  votes: VoteSchema[];
  setVotes: (votes: VoteSchema[]) => void;

  /**
   * 투표 리스트에 있는 투표 중 하나를 업데이트합니다.
   * @author 현웅
   */
  updateVoteListItem: (vote: VoteSchema) => void;
};

export const useVoteStore = create<VoteStoreProps>((set, get) => ({
  votes: [BlankVote],
  setVotes: (votes: VoteSchema[]) => set({ votes }),

  updateVoteListItem: (updatedVote: VoteSchema) => {
    const updatedVoteIndex = get().votes.findIndex(
      vote => vote._id === updatedVote._id,
    );
    if (updatedVoteIndex !== -1) {
      const updatedVotes = [...get().votes];
      updatedVotes[updatedVoteIndex] = updatedVote;
      set({ votes: updatedVotes });
    }
    return;
  },
}));
