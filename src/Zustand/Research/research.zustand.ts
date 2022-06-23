import create from "zustand";
import { ResearchType } from "src/Object/Enum";
import { ResearchSchema, BlankResearch } from "src/Schema";
import { axiosGetNewerResearches, axiosGetOlderResearches } from "src/Axios";
import { showBlackToast } from "src/Util";
import {
  addResearchListItem,
  appendResearchListItem,
  updateResearchListItem,
  removeResearchListItem,
} from "src/Util";

type ResearchStoreProps = {
  researches: ResearchSchema[];
  setResearches: (researches: ResearchSchema[]) => void;

  /** 새로운 리서치를 리서치 리스트 맨 앞에 추가합니다. */
  addResearchListItem: (newResearch: ResearchSchema | ResearchSchema[]) => void;

  /** 인자로 받은 리서치(들)를 리서치 리스트 맨 뒤에 추가합니다. */
  appendResearchListItem: (
    newResearch: ResearchSchema | ResearchSchema[],
  ) => void;

  /** 리서치 리스트에 있는 리서치 중 하나를 업데이트합니다 */
  updateResearchListItem: (updatedResearch: ResearchSchema) => void;

  /** 리서치 리스트에 있는 리서치 중 하나를 삭제합니다 */
  removeResearchListItem: (researchId: string) => void;

  /** 추가된 리서치를 모든 리서치 관련 Zustand store에 전파합니다  */
  spreadAddedResearch: (research: ResearchSchema) => void;
  /** 리서치 변경 사항을 모든 리서치 관련 Zustand store에 전파합니다  */
  spreadUpatedResearch: (updatedResearch: ResearchSchema) => void;
  /** 리서치 삭제 내용을 모든 리서치 관련 Zustand store에 전파합니다  */
  spreadRemovedResearch: (researchId: string) => void;

  /** 기존에 가지고 있던 리서치보다 최신의 리서치를 모두 가져옵니다 */
  getNewerResearches: () => Promise<void>;

  /** 서버에 존재하는 모든 리서치를 가져왔는지 여부 */
  noMoreOlderResearches: boolean;
  /** 기존에 가지고 있던 리서치보다 더 예전의 리서치를 가져옵니다 */
  getOlderResearches: () => Promise<void>;

  clearState: () => void;
};

/**
 * 전체 리서치 데이터를 불러오거나 수정하는 zustand store 입니다.
 * @author 현웅
 */
export const useResearchStore = create<ResearchStoreProps>((set, get) => ({
  researches: [BlankResearch],
  setResearches: (researches: ResearchSchema[]) => {
    set({ researches });
  },

  addResearchListItem: (newResearch: ResearchSchema | ResearchSchema[]) => {
    set({ researches: addResearchListItem(newResearch, get().researches) });
  },

  appendResearchListItem: (newResearch: ResearchSchema | ResearchSchema[]) => {
    set({ researches: appendResearchListItem(newResearch, get().researches) });
  },

  updateResearchListItem: (updatedResearch: ResearchSchema) => {
    set({
      researches: updateResearchListItem(updatedResearch, get().researches),
    });
  },

  removeResearchListItem: (researchId: string) => {
    set({ researches: removeResearchListItem(researchId, get().researches) });
  },

  spreadAddedResearch: (research: ResearchSchema) => {},
  spreadUpatedResearch: (updatedResearch: ResearchSchema) => {},
  spreadRemovedResearch: (researchId: string) => {},

  getNewerResearches: async () => {
    const newerResearches = await axiosGetNewerResearches(
      get().researches[0].pulledupAt,
    );
    return;
  },

  noMoreOlderResearches: false,

  getOlderResearches: async () => {
    //* 이미 모든 리서치를 가져온 상태라면 토스트 메세지를 띄우고 반환합니다.
    if (get().noMoreOlderResearches) {
      showBlackToast({ text1: "더 가져올 리서치가 없습니다" });
      return;
    }

    const olderResearches = await axiosGetOlderResearches(
      get().researches[get().researches.length - 1].pulledupAt,
    );

    //* 에러가 난 경우 반환합니다.
    if (olderResearches === null) return;

    //* 가져온 리서치 개수가 0개인 경우, noMoreOlderResearches 플래그를 true 로 설정합니다.
    if (olderResearches.length === 0) {
      set({ noMoreOlderResearches: true });
      return;
    }

    //* 가져온 리서치가 있는 경우, 리스트 뒤에 추가합니다.
    get().appendResearchListItem(olderResearches);
    return;
  },

  clearState: () => {
    set({
      researches: [],
      noMoreOlderResearches: false,
    });
  },
}));
