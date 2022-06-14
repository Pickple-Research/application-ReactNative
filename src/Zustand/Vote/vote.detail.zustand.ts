import create from "zustand";
import { VoteSchema, BlankVote } from "src/Schema";
import { ParticipatedVoteInfo } from "src/Schema/User/Embedded";
import { axiosParticipateVote } from "src/Axios";

type VoteDetailStoreProps = {
  /** 투표 정보 */
  voteDetail: VoteSchema;
  setVoteDetail: (voteDetail: VoteSchema) => void;

  /** 사용자가 선택한 선택지 인덱스(들) */
  selectedOptionIndexes: number[];
  /** 선택지 터치 시 호출 함수 */
  onPressOption: (index: number) => void;

  loading: boolean;

  clearInfo: () => void;

  /**
   * 투표 참여요청을 보냅니다.
   * 응답이 성공적인 경우, 투표 참여 정보와 최신 투표 정보를 반환합니다.
   * 그렇지 않은 경우 null을 반환합니다.
   * @author 현웅
   */
  participateVote: () => Promise<{
    participatedVoteInfo: ParticipatedVoteInfo;
    updatedVote: VoteSchema;
  } | null>;
};

/**
 * 투표 상세 정보 페이지에서 사용되는 상태값입니다.
 * @author 현웅
 */
export const useVoteDetailStore = create<VoteDetailStoreProps>((set, get) => ({
  voteDetail: BlankVote,
  setVoteDetail: async (voteDetail: VoteSchema) => {
    set({ voteDetail });
  },

  selectedOptionIndexes: [],
  onPressOption: (index: number) => {
    //* 중복 선택 허용 투표가 아닌 경우
    if (!get().voteDetail.allowMultiChoice) {
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
      voteDetail: BlankVote,
      selectedOptionIndexes: [],
      loading: false,
    });
  },

  participateVote: async () => {
    set({ loading: true });
    //* 서버에 참여 요청을 보냅니다
    const result = await axiosParticipateVote(
      get().voteDetail._id,
      get().selectedOptionIndexes,
    );
    set({ loading: false });
    return result;
  },
}));
