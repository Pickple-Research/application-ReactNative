import create from "zustand";

type Filter = "ALL" | "OPENED" | "CLOSED";

/**
 * 마이페이지 - 스크랩한 리서치 및 투표 페이지에서 사용되는 상태값과 함수들을 사용할 수 있습니다.
 * @author 현웅
 */
type MypageScrappedScreenStoreProps = {
  /** 리서치 전체 | 진행중 | 마감 필터 */
  researchFilter: Filter;
  setResearchFilter: (filter: Filter) => void;
  /** 투표 전체 | 진행중 | 마감 필터 */
  voteFilter: Filter;
  setVoteFilter: (filter: Filter) => void;

  /** 리서치 스크랩 취소 모달 표시 여부 */
  researchUnscrapModalVisible: boolean;
  setResearchUnscrapModalVisible: (status: boolean) => void;

  /** 투표 스크랩 취소 모달 표시 여부 */
  voteUnscrapModalVisible: boolean;
  setVoteUnscrapModalVisible: (status: boolean) => void;

  /** 리서치 및 투표 스크랩 취소 처리 중 여부 */
  scrapping: boolean;

  /** 리서치 스크랩을 취소합니다 */
  unscrapResearch: () => Promise<void>;
  /** 투표 스크랩을 취소합니다 */
  unscrapVote: () => Promise<void>;

  clearState: () => void;
};

/**
 * 마이페이지 내가 스크랩한 글 페이지에서 사용하는 상태값들입니다.
 * @author 현웅
 */
export const useMypageScrappedScreenStore =
  create<MypageScrappedScreenStoreProps>((set, get) => ({
    researchFilter: "ALL",
    setResearchFilter: (filter: Filter) => {
      set({ researchFilter: filter });
    },
    voteFilter: "ALL",
    setVoteFilter: (filter: Filter) => {
      set({ voteFilter: filter });
    },

    researchUnscrapModalVisible: false,
    setResearchUnscrapModalVisible: (status: boolean) => {
      set({ researchUnscrapModalVisible: status });
    },

    voteUnscrapModalVisible: false,
    setVoteUnscrapModalVisible: (status: boolean) => {
      set({ voteUnscrapModalVisible: status });
    },

    scrapping: false,

    unscrapResearch: async () => {
      return;
    },

    unscrapVote: async () => {
      return;
    },

    clearState: () => {
      set({
        researchFilter: "ALL",
        voteFilter: "ALL",
        researchUnscrapModalVisible: false,
        voteUnscrapModalVisible: false,
        scrapping: false,
      });
    },
  }));
