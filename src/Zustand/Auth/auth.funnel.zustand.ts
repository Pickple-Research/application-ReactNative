import create from "zustand";

type AuthFunnelScreenStoreProps = {
  /** Funnel 업로드 0/1/2/3/4/5 단계 */
  step: number;
  goNextStep: () => void;
  goPreviousStep?: () => void;

  //* 1 단계
  /** 사용자 직업 */
  jobInput: string;
  setJobInput: (input: string) => void;

  //* 2 단계
  /** 사용자 직종 */
  occupationInput: string;
  setOccupationInput: (input: string) => void;

  //* 3 단계
  /** 학교 */
  schoolInput: string;
  setSchoolInput: (input: string) => void;

  /** 학위 */
  degreeInput: string;
  setDegreeInput: (input: string) => void;

  /** 전공 */
  majorInput: string;
  setMajorInput: (input: string) => void;

  /** 입학 연도 */
  admissionYearInput: number;
  setAdmissionYearInput: (input: number) => void;

  /** 졸업 연도 */
  graduationYearInput: number;
  setGraduationYearInput: (input: number) => void;

  //* 4 단계
  /** 거주 지역 */
  residenceInput: string;
  setResidenceInput: (input: string) => void;

  //* 5 단계
  /** 관심 분야 */
  interestsInput: string[];
  /** 관심 분야 1개 추가 */
  addInterestsInput: (input: string) => void;
  /** 관심 분야 리스트 교체 */
  setInterestsInput: (input: string[]) => void;

  //* 6 단계
  /** 유입 경로 */
  influxInput: string;
  setInfluxInput: (input: string) => void;

  /** 작성 중인 Funnel 정보를 모두 초기화힙니다. */
  clearInputs: () => void;
};

export const useAuthFunnelScreenStore = create<AuthFunnelScreenStoreProps>(
  (set, get) => ({
    step: 0,
    goNextStep: () => {
      set(state => ({ step: state.step + 1 }));
    },
    goPreviousStep: () => {
      set(state => ({ step: state.step - 1 }));
    },

    //* 1 단계
    jobInput: "",
    setJobInput: (input: string) => {
      set({ jobInput: input });
    },

    //* 2 단계
    occupationInput: "",
    setOccupationInput: (input: string) => {
      set({ occupationInput: input });
    },

    //* 3 단계
    schoolInput: "",
    setSchoolInput: (input: string) => {
      set({ schoolInput: input });
    },

    degreeInput: "",
    setDegreeInput: (input: string) => {
      set({ degreeInput: input });
    },

    majorInput: "",
    setMajorInput: (input: string) => {
      set({ majorInput: input });
    },

    admissionYearInput: 0,
    setAdmissionYearInput: (input: number) => {
      set({ admissionYearInput: input });
    },

    graduationYearInput: 0,
    setGraduationYearInput: (input: number) => {
      set({ graduationYearInput: input });
    },

    //* 4 단계
    residenceInput: "",
    setResidenceInput: (input: string) => {
      set({ residenceInput: input });
    },

    //* 5 단계
    interestsInput: [],
    addInterestsInput: (input: string) => {
      set(state => ({
        interestsInput: [...state.interestsInput, input],
      }));
    },
    setInterestsInput: (input: string[]) => {
      set({ interestsInput: input });
    },

    //* 6 단계
    influxInput: "",
    setInfluxInput: (input: string) => {
      set({ influxInput: input });
    },

    clearInputs: () => {
      set({
        step: 0,
        jobInput: "",
        occupationInput: "",
        schoolInput: "",
        degreeInput: "",
        majorInput: "",
        admissionYearInput: 0,
        graduationYearInput: 0,
        residenceInput: "",
        interestsInput: [],
      });
    },
  }),
);
