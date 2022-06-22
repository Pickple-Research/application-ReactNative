import create from "zustand";
import { ResearchType } from "src/Object/Enum";
import { ResearchSchema, BlankResearch } from "src/Schema";
import {
  addResearchListItem,
  updateResearchListItem,
  removeResearchListItem,
} from "src/Util";

type ResearchStoreProps = {
  researches: ResearchSchema[];
  setResearches: (researches: ResearchSchema[]) => void;

  /** 새로운 리서치를 리서치 리스트에 추가합니다. */
  addResearchListItem: (newResearch: ResearchSchema | ResearchSchema[]) => void;

  /** 리서치 리스트에 있는 리서치 중 하나를 업데이트합니다 */
  updateResearchListItem: (updatedResearch: ResearchSchema) => void;

  /** 리서치 리스트에 있는 리서치 중 하나를 삭제합니다 */
  removeResearchListItem: (researchId: string) => void;

  spreadAddedResearch: (research: ResearchSchema) => void;
  spreadUpatedResearch: (updatedResearch: ResearchSchema) => void;
  spreadRemovedResearch: (researchId: string) => void;

  /** 리서치 랜딩 페이지에서 보여줄 리서치 타입 */
  selectedType: ResearchType;
  setSelectedType: (type: ResearchType) => void;
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

  selectedType: ResearchType.ALL,
  setSelectedType: (type: ResearchType) => {
    set({ selectedType: type });
  },
}));
