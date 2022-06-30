import create from "zustand";

type Filter = "ALL" | "OPENED" | "CLOSED";

/**
 * 마이페이지 - 참여한 리서치 및 투표 페이지에서 사용되는 상태값과 함수들을 사용할 수 있습니다.
 * @author 현웅
 */
type MypageParticipatedScreenStoreProps = {
  /** 리서치 전체 | 진행중 | 마감 필터 */
  researchFilter: Filter;
  setResearchFilter: (filter: Filter) => void;
  /** 투표 전체 | 진행중 | 마감 필터 */
  voteFilter: Filter;
  setVoteFilter: (filter: Filter) => void;

  clearState: () => void;
};

/**
 * 마이페이지 내가 참여한 리서치, 투표한 글 페이지에서 사용하는 상태값들입니다.
 * @author 현웅
 */
export const useMypageParticipatedScreenStore =
  create<MypageParticipatedScreenStoreProps>((set, get) => ({
    researchFilter: "ALL",
    setResearchFilter: (filter: Filter) => {
      set({ researchFilter: filter });
    },
    voteFilter: "ALL",
    setVoteFilter: (filter: Filter) => {
      set({ voteFilter: filter });
    },

    clearState: () => {
      set({
        researchFilter: "ALL",
        voteFilter: "ALL",
      });
    },
  }));
