import create from "zustand";
import { VoteUploadOptionProps } from "src/Object/Type";
import { uploadVote } from "src/Axios";

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

  /** 작성 도중 나가려고 할 때 모달 */
  blockExitModalVisible: boolean;
  setBlockExitModalVisible: (status: boolean) => void;

  /** 업로드 중 여부 */
  uploading: boolean;

  /** 모든 상태값 초기화 */
  clearInput: () => void;

  /** 입력값이 유효한지 확인 */
  checkInputValidity: () => boolean;

  /** 투표 업로드 */
  uploadVote: () => Promise<string | null>;
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

  blockExitModalVisible: false,
  setBlockExitModalVisible: (status: boolean) => {
    set({ blockExitModalVisible: status });
  },

  uploading: false,

  clearInput: () => {
    set({
      titleInput: "",
      contentInput: "",
      optionIndex: 2,
      options: [
        { index: 0, content: "" },
        { index: 1, content: "" },
      ],
      allowMultiChoice: false,
      blockExitModalVisible: false,
      uploading: false,
    });
  },

  checkInputValidity: () => {
    if (get().titleInput.length === 0) {
      // "제목을 입력해주세요"
      return false;
    }
    if (get().contentInput.length === 0) {
      // "내용을 입력해주세요"
      return false;
    }

    //* 값이 있는 선택지만 필터링
    const options = get()
      .options.filter(option => {
        return option.content.length !== 0;
      })
      .map(option => {
        return option.content;
      });

    //* 선택지가 두 개 이하인 경우
    if (options.length < 2) {
      // "투표 항목을 2개 이상 입력해주세요"
      return false;
    }

    //* 중복된 선택지가 있는 경우
    if (options.length !== new Set(options).size) {
      // "투표 항목 내용이 중복되었습니다"
      return false;
    }

    return true;
  },

  uploadVote: async () => {
    set({ uploading: true });

    //* 선택지 내용을 적절한 형태로 변환
    const options = get()
      .options.filter(option => {
        return option.content.length !== 0;
      })
      .map(option => {
        return { content: option.content };
      });

    const result = await uploadVote({
      title: get().titleInput.trim(),
      content: get().contentInput.trim(),
      options: options,
      allowMultiChoice: get().allowMultiChoice,
    });
    set({ uploading: false });
    return result;
  },
}));
