import create from "zustand";
import { ResearchType } from "src/Object/Enum";

type ResearchLandingScreenStoreProps = {
  /** 리서치 정렬 팝업 메뉴 표시 여부 */
  researchSortPopupMenuVisible: boolean;
  setResearchSortPopupMenuVisible: (status: boolean) => void;

  /** 리서치 랜딩 페이지에서 보여줄 리서치 타입 */
  selectedType: ResearchType;
  setSelectedType: (type: ResearchType) => void;

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

    selectedType: ResearchType.ALL,
    setSelectedType: (type: ResearchType) => {
      set({ selectedType: type });
    },

    clearState: () => {
      set({
        researchSortPopupMenuVisible: false,
        selectedType: ResearchType.ALL,
      });
    },
  }));
