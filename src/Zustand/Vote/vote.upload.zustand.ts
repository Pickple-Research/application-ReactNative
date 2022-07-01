import create from "zustand";
import { useVoteStore } from "./vote.zustand";
import { VoteSchema } from "src/Schema";
import { axiosUploadVote } from "src/Axios";
import { VoteUploadOptionProps } from "src/Object/Type";
import { showBlackToast } from "src/Util";

type VoteUploadScreenStoreProps = {
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
  uploadVote: () => Promise<VoteSchema | null>;
};

/**
 * 투표 업로드 페이지에서 사용되는 상태/상태관리 함수들을 정의합니다.
 * @author 현웅
 */
export const useVoteUploadScreenStore = create<VoteUploadScreenStoreProps>(
  (set, get) => ({
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
      //* 투표 선지는 최대 20개 까지
      if (get().optionIndex >= 20) {
        showBlackToast({ text1: "선택지는 20개까지 가능합니다" });
        return;
      }

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
        showBlackToast({ text1: "제목을 입력해주세요" });
        return false;
      }
      if (get().contentInput.length === 0) {
        showBlackToast({ text1: "내용을 입력해주세요" });
        return false;
      }

      //* 값이 있는 선택지만 필터링
      const options = get()
        .options.filter(option => {
          return option.content.trim().length !== 0;
        })
        .map(option => {
          return option.content.trim();
        });

      //* 선택지가 두 개 이하인 경우
      if (options.length < 2) {
        showBlackToast({ text1: "투표 항목을 2개 이상 입력해주세요" });
        return false;
      }

      //* 중복된 선택지가 있는 경우
      if (options.length !== new Set(options).size) {
        showBlackToast({ text1: "투표 항목 내용이 중복되었습니다" });
        return false;
      }

      return true;
    },

    uploadVote: async () => {
      //* 선택지들이 유효한지 확인
      if (!get().checkInputValidity()) return null;

      set({ uploading: true });

      //* 선택지 내용들을 trim
      const options = get()
        .options.filter(option => {
          return option.content.trim().length !== 0;
        })
        .map(option => {
          return { content: option.content.trim() };
        });

      const newVote = await axiosUploadVote({
        title: get().titleInput.trim(),
        content: get().contentInput.trim(),
        options: options,
        allowMultiChoice: get().allowMultiChoice,
      });
      //* 성공적으로 업로드 된 경우, 업로드 된 투표 정보 전파
      if (newVote !== null) {
        useVoteStore.getState().spreadVoteUploaded({ vote: newVote });
      }
      set({ uploading: false });
      return newVote;
    },
  }),
);
