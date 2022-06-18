import create from "zustand";

type MypageScrappedScreenStoreProps = {
  /** 리서치 스크랩 취소 모달 표시 여부 */
  researchUnscrapModalVisible: boolean;
  setResearchUnscrapModalVisible: (status: boolean) => void;

  /** 투표 스크랩 취소 모달 표시 여부 */
  voteUnscrapModalVisible: boolean;
  setVoteUnscrapModalVisible: (status: boolean) => void;

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
    researchUnscrapModalVisible: false,
    setResearchUnscrapModalVisible: (status: boolean) => {
      set({ researchUnscrapModalVisible: status });
    },

    voteUnscrapModalVisible: false,
    setVoteUnscrapModalVisible: (status: boolean) => {
      set({ voteUnscrapModalVisible: status });
    },

    unscrapResearch: async () => {
      return;
    },

    unscrapVote: async () => {
      return;
    },

    clearState: () => {
      set({
        researchUnscrapModalVisible: false,
        voteUnscrapModalVisible: false,
      });
    },
  }));
