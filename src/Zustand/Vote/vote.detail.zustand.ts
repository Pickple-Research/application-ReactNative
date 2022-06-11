import create from "zustand";
import { VoteSchema, BlankVote } from "src/Schema";

type VoteDetailStoreProps = {
  /** 투표 정보 */
  vote: VoteSchema;

  /** 사용자가 선택한 선택지 인덱스(들) */
  selectedOptions: number[];
  /** 선택지 터치 시 호출 함수 */
  onPressOption: (index: number) => void;

  loading: boolean;

  clearInfo: () => void;

  /** 투표에 참여합니다. */
  participateVote: () => Promise<void>;

  setVote: (vote: VoteSchema) => void;
};

/**
 * 투표 상세 정보 페이지에서 사용되는 상태값입니다.
 * @author 현웅
 */
export const useVoteDetailStore = create<VoteDetailStoreProps>((set, get) => ({
  vote: BlankVote,

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
      selectedOptions: [],
      loading: false,
    });
  },

  participateVote: async () => {},

  setVote: async (vote: VoteSchema) => {
    set({ vote });
  },
}));
