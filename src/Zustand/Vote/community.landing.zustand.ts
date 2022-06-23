import create from "zustand";
import { useVoteStore } from "./vote.zustand";
import { VoteSchema } from "src/Schema";

export type VoteSortStandard = "RECENT";

type CommunityLandingScreenStoreProps = {
  /** 커뮤니티 랜딩 페이지 투표 리스트 정렬 기준 */
  voteSortStandard: VoteSortStandard;
  setVoteSortStandard: (standard: VoteSortStandard) => void;

  /** 커뮤니티 랜딩 페이지에서 보여줄 투표 타입 */
  // selectedType: VoteType;
  // setSelectedType: (type: VoteType) => void;

  /** 투표 로드 중 여부 */
  loading: boolean;
  /** 더 오래 전의 투표를 가져옵니다 */
  getOlderVotes: () => Promise<void>;

  clearState: () => void;
};

/**
 * 커뮤니티 랜딩 페이지에서 사용되는 상태값들입니다.
 * @author 현웅
 */
export const useCommunityLandingScreenStore =
  create<CommunityLandingScreenStoreProps>((set, get) => ({
    voteSortStandard: "RECENT",
    setVoteSortStandard: (standard: VoteSortStandard) => {
      set({ voteSortStandard: standard });
    },

    // selectedType: VoteType.ALL,
    // setSelectedType: (type: VoteType) => {
    //   set({ selectedType: type });
    // }

    loading: false,
    getOlderVotes: async () => {
      set({ loading: true });
      await useVoteStore.getState().getOlderVotes();
      set({ loading: false });
      return;
    },

    clearState: () => {
      set({
        voteSortStandard: "RECENT",
        // selectedType: VoteType.ALL,
        loading: false,
      });
    },
  }));
