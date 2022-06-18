import create from "zustand";

type ResearchLandingScreenStoreProps = {
  /** 리서치 정렬 팝업 메뉴 표시 여부 */
  researchSortPopupMenuVisible: boolean;
  setResearchSortPopupMenuVisible: (status: boolean) => void;

  clearState: () => void;
};

/**
 * 리서치 랜딩 페이지에서 사용되는 상태값들입니다.
 * @author 현웅
 */
export const useResearchLandingScreenStore =
  create<ResearchLandingScreenStoreProps>((set, get) => ({
    researchSortPopupMenuVisible: false,
    setResearchSortPopupMenuVisible: (status: boolean) => {
      set({ researchSortPopupMenuVisible: status });
    },

    clearState: () => {
      set({ researchSortPopupMenuVisible: false });
    },
  }));
