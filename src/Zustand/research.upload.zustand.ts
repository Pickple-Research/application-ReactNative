import create from "zustand";

type ResearchUploadProps = {
  /** 업로드 단계 */
  step: number;
  goNextStop: () => void;
  goPreviousStep: () => void;

  titleInput: string;
  setTitleInput: (input: string) => void;

  linkInput: string;
  setLinkInput: (input: string) => void;

  contentInput: string;
  setContentInput: (input: string) => void;
};

/**
 * 리서치 업로드 페이지에서 사용되는 값과 함수들을 정의합니다.
 * @author 현웅
 */
export const useResearchUploadStore = create<ResearchUploadProps>(
  (set, get) => ({
    step: 0,
    goNextStop: () => {
      set(state => ({ step: state.step + 1 }));
    },
    goPreviousStep: () => {
      set(state => ({ step: state.step - 1 }));
    },

    titleInput: "",
    setTitleInput: (input: string) => {
      set({ titleInput: input });
    },

    linkInput: "",
    setLinkInput: (input: string) => {
      set({ linkInput: input });
    },

    contentInput: "",
    setContentInput: (input: string) => {
      set({ contentInput: input });
    },
  }),
);
