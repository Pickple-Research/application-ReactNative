import create from "zustand";
import { VoteSchema, BlankVote } from "src/Schema";
import { axiosGetNewerVotes, axiosGetOlderVotes } from "src/Axios";
import { showBlackToast } from "src/Util";
import {
  addVoteListItem,
  appendVoteListItem,
  updateVoteListItem,
  removeVoteListItem,
} from "src/Util";

type VoteStoreProps = {
  votes: VoteSchema[];
  setVotes: (votes: VoteSchema[]) => void;

  /** 새로운 투표를 투표 리스트 맨 앞에 추가합니다. */
  addVoteListItem: (newVote: VoteSchema | VoteSchema[]) => void;

  /** 인자로 받은 투표(들)를 투표 리스트 맨 뒤에 추가합니다. */
  appendVoteListItem: (newVote: VoteSchema | VoteSchema[]) => void;

  /**
   * 투표 리스트에 있는 투표 중 하나를 업데이트합니다.
   * @author 현웅
   */
  updateVoteListItem: (vote: VoteSchema) => void;

  /**
   * 투표 리스트에 있는 투표 중 하나를 삭제합니다.
   */
  removeVoteListItem: (voteId: string) => void;

  /** 추가된 투표를 모든 투표 관련 Zustand store에 전파합니다  */
  spreadAddedVote: (vote: VoteSchema) => void;
  /** 투표 변경 사항을 모든 투표 관련 Zustand store에 전파합니다  */
  spreadUpatedVote: (updatedVote: VoteSchema) => void;
  /** 투표 삭제 내용을 모든 투표 관련 Zustand store에 전파합니다  */
  spreadRemovedVote: (voteId: string) => void;

  /** 기존에 가지고 있던 투표보다 최신의 투표를 모두 가져옵니다 */
  getNewerVotes: () => Promise<void>;

  /** 서버에 존재하는 모든 투표를 가져왔는지 여부 */
  noMoreOlderVotes: boolean;
  /** 기존에 가지고 있던 투표보다 더 예전의 투표를 가져옵니다 */
  getOlderVotes: () => Promise<void>;

  clearState: () => void;
};

export const useVoteStore = create<VoteStoreProps>((set, get) => ({
  votes: [BlankVote],
  setVotes: (votes: VoteSchema[]) => set({ votes }),

  addVoteListItem: (newVote: VoteSchema | VoteSchema[]) => {
    set({ votes: addVoteListItem(newVote, get().votes) });
  },

  appendVoteListItem: (newVote: VoteSchema | VoteSchema[]) => {
    set({ votes: appendVoteListItem(newVote, get().votes) });
  },

  updateVoteListItem: (updatedVote: VoteSchema) => {
    set({ votes: updateVoteListItem(updatedVote, get().votes) });
  },

  removeVoteListItem: (voteId: string) => {
    set({ votes: removeVoteListItem(voteId, get().votes) });
  },

  spreadAddedVote: (vote: VoteSchema) => {},
  spreadUpatedVote: (updatedVote: VoteSchema) => {},
  spreadRemovedVote: (voteId: string) => {},

  getNewerVotes: async () => {
    const newerVotes = await axiosGetNewerVotes(get().votes[0]._id);
    if (newerVotes !== null) {
      get().addVoteListItem(newerVotes);
    }
    return;
  },

  noMoreOlderVotes: false,

  getOlderVotes: async () => {
    //* 이미 모든 투표를 가져온 상태라면 토스트 메세지를 띄우고 반환합니다.
    if (get().noMoreOlderVotes) {
      showBlackToast({ text1: "더 가져올 투표가 없습니다" });
      return;
    }

    const olderVotes = await axiosGetOlderVotes(
      get().votes[get().votes.length - 1]._id,
    );

    //* 에러가 난 경우 반환합니다.
    if (olderVotes === null) return;

    //* 가져온 투표 개수가 0개인 경우, noMoreOlderVotes 플래그를 true 로 설정합니다.
    if (olderVotes.length === 0) {
      set({ noMoreOlderVotes: true });
      return;
    }

    //* 가져온 투표가 있는 경우, 리스트 뒤에 추가합니다.
    get().appendVoteListItem(olderVotes);
    return;
  },

  clearState: () => {
    set({
      votes: [BlankVote],
      noMoreOlderVotes: false,
    });
  },
}));
