import create from "zustand";
import { trimNonNumber } from "src/Util";

type AuthFunnelScreenStoreProps = {
  /** Funnel 업로드 0/1/2/3/4/5 단계 */
  step: number;
  goNextStep: () => void;
  goPreviousStep: () => void;

  /**
   * 유입경로 조사/프로필 입력 페이지에서
   * 뒤로 가기 버튼을 눌렀을 때 행동을 지정합니다.
   */
  handleBackPress: () => boolean;

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

  /** 재학 중 여부 */
  attending: boolean;
  setAttending: (status: boolean) => void;

  /** 전공 */
  majorInput: string;
  setMajorInput: (input: string) => void;

  /** 입학 연도 */
  admissionYearInput: string;
  handleAdmissionYearInput: (input: string) => void;

  /** 졸업 연도 */
  graduationYearInput: string;
  handleGraduationYearInput: (input: string) => void;

  //* 4 단계
  /** 거주 지역 */
  residenceInput: string;
  setResidenceInput: (input: string) => void;

  //* 5 단계
  /** 관심 분야 */
  interestsInput: string[];
  /** 관심 분야 버튼 토글 */
  toggleInterestsInput: (input: string) => void;

  //* 6 단계
  /** 유입 경로 */
  influxInput: string;
  setInfluxInput: (input: string) => void;

  /**
   * 수집한 데이터를 서버로 보냅니다.
   * 응답이 성공적인 경우, 유저 특성정보와 크레딧 사용내역을 업데이트 합니다.
   */
  sendFunnelData: () => Promise<void>;

  /** SKIP 버튼을 눌렀을 때 보여지는 모달 */
  showBlockExitModal: boolean;
  setShowBlockExitModal: (status: boolean) => void;

  /** 프로필 작성 및 유입경로 조사 완료 시 모달 */
  showFunnelCompleteModal: boolean;
  setShowFunnelCompleteModal: (status: boolean) => void;

  /** 작성 중인 Funnel 정보를 모두 초기화힙니다. */
  clearState: () => void;
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

    handleBackPress: () => {
      //* 뒤로 가기 버튼이 눌렸을 때 작성 완료 모달이 열려있다면
      //* 뒤로 가기 버튼 입력을 무시합니다.
      if (get().showFunnelCompleteModal) {
        return true;
      }
      //* 그렇지 않고 step이 1 이상인 경우 뒤로 돌아가고
      if (get().step > 0) {
        get().goPreviousStep();
        return true;
      }
      //* step이 0 인 경우 재확인 모달을 띄웁니다.
      get().setShowBlockExitModal(true);
      return true;
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

    attending: false,
    setAttending: (status: boolean) => {
      set({ attending: status });
    },

    majorInput: "",
    setMajorInput: (input: string) => {
      set({ majorInput: input });
    },

    admissionYearInput: "",
    handleAdmissionYearInput: (input: string) => {
      set({ admissionYearInput: trimNonNumber(input) });
    },

    graduationYearInput: "",
    handleGraduationYearInput: (input: string) => {
      set({ graduationYearInput: trimNonNumber(input) });
    },

    //* 4 단계
    residenceInput: "",
    setResidenceInput: (input: string) => {
      set({ residenceInput: input });
    },

    //* 5 단계
    interestsInput: [],
    toggleInterestsInput: (input: string) => {
      if (get().interestsInput.includes(input)) {
        set({ interestsInput: get().interestsInput.filter(i => i !== input) });
        return;
      }
      set(state => ({
        interestsInput: [...state.interestsInput, input],
      }));
    },

    //* 6 단계
    influxInput: "",
    setInfluxInput: (input: string) => {
      set({ influxInput: input });
    },

    sendFunnelData: async () => {
      get().setShowFunnelCompleteModal(true);
      return;
    },

    showBlockExitModal: false,
    setShowBlockExitModal: (status: boolean) => {
      set({ showBlockExitModal: status });
    },

    showFunnelCompleteModal: false,
    setShowFunnelCompleteModal: (status: boolean) => {
      set({ showFunnelCompleteModal: status });
    },

    clearState: () => {
      set({
        step: 0,
        jobInput: "",
        occupationInput: "",
        schoolInput: "",
        degreeInput: "",
        attending: false,
        majorInput: "",
        admissionYearInput: "",
        graduationYearInput: "",
        residenceInput: "",
        interestsInput: [],
        influxInput: "",
        showBlockExitModal: false,
        showFunnelCompleteModal: false,
      });
    },
  }),
);
