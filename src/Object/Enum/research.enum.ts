/**
 * 리서치 목적
 * @author 현웅
 */
export enum ResearchPurpose {
  ACADEMIC = "학술",
  ETC = "기타",
}

/**
 * 리서치 유형
 * @author 현웅
 */
export enum ResearchType {
  ALL = "전체",
  SURVEY = "설문조사",
  INTERVIEW = "인터뷰",
  EXPERIMENT = "실험 참여",
  UIUX = "UIUX 리서치",
}

/**
 * 모든 리서치 유형 리스트입니다
 * @author 현웅
 */
export const allResearchTypes = [
  ResearchType.ALL,
  ResearchType.SURVEY,
  ResearchType.INTERVIEW,
  ResearchType.EXPERIMENT,
  ResearchType.UIUX,
];
