import create from "zustand";
import { VoteUploadOptionProps } from "src/Object/Type";

type VoteUploadStoreProps = {
  titleInput: string;
  setTitleInput: (input: string) => void;

  contentInput: string;
  setContentInput: (input: string) => void;

  /** 새로 추가될 선택지 index */
  optionIndex: number;
  options: VoteUploadOptionProps[];
  /** 선택지 추가 */
  addOption: () => void;
  /** 선택지 내용 변경 */
  updateOptionContent: (index: number, content: string) => void;

  allowMultiChoice: boolean;
  toggleAllowMultiChoice: () => void;

  /** 모든 상태값 초기화 */
  clearInput: () => void;
  /** 투표 업로드 */
  uploadVote: () => void;
};

/**
 * 투표 업로드 페이지에서 사용되는 상태/상태관리 함수들을 정의합니다.
 * @author 현웅
 */
export const useVoteUploadStore = create<VoteUploadStoreProps>((set, get) => ({
  titleInput: "",
  setTitleInput: (input: string) => {
    set({ titleInput: input });
  },

  contentInput: "",
  setContentInput: (input: string) => {
    set({ contentInput: input });
  },

  optionIndex: 2,
  options: [
    { index: 0, content: "" },
    { index: 1, content: "" },
  ],
  addOption: () => {
    set({
      options: [...get().options, { index: get().optionIndex, content: "" }],
    });

    set(state => {
      state.optionIndex += 1;
    });
  },
  updateOptionContent: (index: number, content: string) => {
    set(state => {
      state.options[index].content = content;
    });
  },

  allowMultiChoice: false,
  toggleAllowMultiChoice: () => {
    set(state => ({ allowMultiChoice: !state.allowMultiChoice }));
  },

  clearInput: () => {},
  uploadVote: () => {},
}));
