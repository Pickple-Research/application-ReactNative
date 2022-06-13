import create from "zustand";
import { VoteSchema, BlankVote } from "src/Schema";
import { axiosParticipateVote } from "src/Axios";

type VoteDetailStoreProps = {
  /** 투표 정보 */
  vote: VoteSchema;
  setVote: (vote: VoteSchema) => void;

  /** 사용자가 선택한 선택지 인덱스(들) */
  selectedOptionIndexes: number[];
  /** 선택지 터치 시 호출 함수 */
  onPressOption: (index: number) => void;

  loading: boolean;

  clearInfo: () => void;

  /** 투표에 참여합니다. */
  participateVote: () => Promise<void>;
};

/**
 * 투표 상세 정보 페이지에서 사용되는 상태값입니다.
 * @author 현웅
 */
export const useVoteDetailStore = create<VoteDetailStoreProps>((set, get) => ({
  vote: BlankVote,
  setVote: async (vote: VoteSchema) => {
    set({ vote });
  },

  selectedOptionIndexes: [],
  onPressOption: (index: number) => {
    //* 중복 선택 허용 투표가 아닌 경우
    if (!get().vote.allowMultiChoice) {
      set({ selectedOptionIndexes: [index] });
      return;
    }

    //* 중복 선택 허용 투표인 경우
    if (get().selectedOptionIndexes.includes(index)) {
      set({
        selectedOptionIndexes: get().selectedOptionIndexes.filter(
          i => i !== index,
        ),
      });
      return;
    }

    set({ selectedOptionIndexes: [...get().selectedOptionIndexes, index] });
  },

  loading: false,

  clearInfo: () => {
    set({
      vote: BlankVote,
      selectedOptionIndexes: [],
      loading: false,
    });
  },

  participateVote: async () => {
    //* 서버에 참여 요청을 보냅니다
    await axiosParticipateVote(get().vote._id, get().selectedOptionIndexes);
  },
}));
