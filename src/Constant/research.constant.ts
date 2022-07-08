import { SimpleDropDownDataType } from "src/Component/DropDown";
import { ResearchPurpose, ResearchType } from "src/Object/Enum";

/**
 * 리서치 소요시간 1분당 차감 크레딧
 * @author 현웅
 */
export const CREDIT_PER_MINUTE = 1;

/**
 * 리서치 신고 항목
 * @author 현웅
 */
export const ResearchReportOptions = [
  "기재된 리서치 소요시간과 실제 소요시간의 격차가 심해서",
  "리서치 마감 후 보상을 받지 못해서",
  "연구 윤리에 어긋나는 리서치를 진행해서",
  "개인정보를 악용하는 것을 발견해서",
  "기타",
];

/**
 * 리서치 업로드 시 리서치 목적 선택 드롭다운 메뉴에서 사용하는 데이터 목록
 * @author 현웅
 */
export const ResearchPurposeDropDownData: SimpleDropDownDataType[] = [
  { value: ResearchPurpose.ACADEMIC, displayName: "학술" },
  { value: ResearchPurpose.ETC, displayName: "기타" },
];

/**
 * 리서치 업로드 시 리서치 유형 선택 드롭다운 메뉴에서 사용하는 데이터 목록
 * @author 현웅
 */
export const ResearchTypeDropDownData: SimpleDropDownDataType[] = [
  { value: ResearchType.SURVEY, displayName: "설문조사" },
  { value: ResearchType.INTERVIEW, displayName: "인터뷰" },
  { value: ResearchType.EXPERIMENT, displayName: "실험 참여" },
  { value: ResearchType.UIUX, displayName: "UIUX 리서치" },
];

/**
 * 리서치 업로드 시 리서치 예상소요 시간 선택 드롭다운 메뉴에서 사용하는 데이터 목록
 * @author 현웅
 */
export const ResearchEstimatedTimeDropDownData: SimpleDropDownDataType[] = [
  { value: 1, displayName: "1" },
  { value: 2, displayName: "2" },
  { value: 3, displayName: "3" },
  { value: 4, displayName: "4" },
  { value: 5, displayName: "5" },
  { value: 6, displayName: "6" },
  { value: 7, displayName: "7" },
  { value: 8, displayName: "8" },
  { value: 9, displayName: "9" },
  { value: 10, displayName: "10" },
  { value: 11, displayName: "11" },
  { value: 12, displayName: "12" },
  { value: 13, displayName: "13" },
  { value: 14, displayName: "14" },
  { value: 15, displayName: "15" },
];

/**
 * 리서치 업로드 시 추가 크레딧 수령 인원 드롭다운 메뉴에서 사용하는 데이터 목록
 * @author 현웅
 */
export const ResearchExtraCreditReceiverDropDownData: SimpleDropDownDataType[] =
  [
    { value: 1, displayName: "1" },
    { value: 5, displayName: "5" },
    { value: 10, displayName: "10" },
    { value: 15, displayName: "15" },
    { value: 20, displayName: "20" },
    { value: 25, displayName: "25" },
    { value: 30, displayName: "30" },
    { value: 35, displayName: "35" },
    { value: 40, displayName: "40" },
  ];

/**
 * 리서치 업로드 시 추가 크레딧 드롭다운 메뉴에서 사용하는 데이터 목록
 * @author 현웅
 */
export const ResearchExtraCreditDropDownData: SimpleDropDownDataType[] = [
  { value: 1, displayName: "1" },
  { value: 2, displayName: "2" },
  { value: 3, displayName: "3" },
  { value: 4, displayName: "4" },
  { value: 5, displayName: "5" },
  { value: 6, displayName: "6" },
  { value: 7, displayName: "7" },
  { value: 8, displayName: "8" },
  { value: 9, displayName: "9" },
  { value: 10, displayName: "10" },
];
