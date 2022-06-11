import create from "zustand";
import { Vote, VoteParticipation, BlankVote } from "src/Schema";
import { getVoteById } from "src/Axios";

type VoteDetailStoreProps = {
  /** 투표 정보 */
  vote: Vote;
  /** 투표 참여 현황 정보 */
  voteParticipation: VoteParticipation;

  /** 사용자가 선택한 선택지 인덱스(들) */
  selectedOptions: number[];
  /** 선택지 터치 시 호출 함수 */
  onPressOption: (index: number) => void;

  loading: boolean;

  clearInfo: () => void;

  /** 투표에 참여합니다. */
  participateVote: () => Promise<void>;

  getVote: (voteId: string) => void;
};

/**
 * 투표 상세 정보 페이지에서 사용되는 상태값입니다.
 * @author 현웅
 */
export const useVoteDetailStore = create<VoteDetailStoreProps>((set, get) => ({
  vote: BlankVote,
  voteParticipation: {
    viewedNum: 0,
    scrappedNum: 0,
    participantNum: 0,
    result: [0, 0],
  },

  selectedOptions: [],
  onPressOption: (index: number) => {
    //* 중복 선택 허용 투표가 아닌 경우
    if (!get().vote.allowMultiChoice) {
      set({ selectedOptions: [index] });
      return;
    }

    //* 중복 선택 허용 투표인 경우
    if (get().selectedOptions.includes(index)) {
      set({ selectedOptions: get().selectedOptions.filter(i => i !== index) });
      return;
    }

    set({ selectedOptions: [...get().selectedOptions, index] });
  },

  loading: false,

  clearInfo: () => {
    set({
      vote: BlankVote,
      voteParticipation: {
        viewedNum: 0,
        scrappedNum: 0,
        participantNum: 0,
        result: [0, 0],
      },
      selectedOptions: [],
      loading: false,
    });
  },

  participateVote: async () => {},

  getVote: async (voteId: string) => {
    set({ loading: true });
    const result = await getVoteById(voteId);
    if (result) {
      set({
        vote: result.vote,
        voteParticipation: result.voteParticipation,
        loading: false,
      });
    }
    set({ loading: false });
  },
}));
