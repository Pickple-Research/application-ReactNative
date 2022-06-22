import { ResearchSchema } from "src/Schema";

/**
 * 새로운 리서치(들)를 기존의 리서치 리스트 맨 앞에 추가하고 반환합니다.
 * @author 현웅
 */
export function addResearchListItem(
  newResearch: ResearchSchema | ResearchSchema[],
  researchList: ResearchSchema[],
) {
  return [newResearch, ...researchList].flat();
}

/**
 * 업데이트된 리서치를 기존의 리서치 리스트에서 찾고 교체한 후 반환합니다.
 * @author 현웅
 */
export function updateResearchListItem(
  updatedResearch: ResearchSchema,
  researchList: ResearchSchema[],
) {
  const updatedResearchIndex = researchList.findIndex(research => {
    research._id === updatedResearch._id;
  });
  if (updatedResearchIndex !== -1) {
    return researchList.splice(updatedResearchIndex, 1, updatedResearch);
  }
  return researchList;
}

/**
 * 리서치 리스트에서 특정 리서치를 찾아 삭제하고 반환합니다.
 * @author 현웅
 */
export function removeResearchListItem(
  researchId: string,
  researchList: ResearchSchema[],
) {
  return researchList.filter(research => {
    return research._id !== researchId;
  });
}
