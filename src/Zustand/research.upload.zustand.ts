import create from "zustand";
import { ResearchPurpose } from "src/Object/Enum";
import { ResearchUploadGiftProps } from "src/Object/Type";
import { getGalleryPhotoFromAndroid } from "src/Util";

type ResearchUploadStoreProps = {
  /** 리서치 업로드 단계 */
  step: number;
  goNextStop: () => void;
  goPreviousStep: () => void;

  titleInput: string;
  setTitleInput: (input: string) => void;

  linkInput: string;
  setLinkInput: (input: string) => void;

  contentInput: string;
  setContentInput: (input: string) => void;

  purposeInput: ResearchPurpose | undefined;
  setPurposeInput: (input: ResearchPurpose) => void;

  organizationInput: string;
  setOrganizationInput: (input: string) => void;

  targetInput: string;
  setTargetInput: (input: string) => void;

  estimatedTimeInput: number;
  setEstimatedTimeInput: (input: number) => void;

  /** 업로드할 리서치 경품의 index. 경품이 추가될 때마다 1씩 증가. */
  giftIndex: number;
  /** 업로드할 리서치에 걸 경품 */
  gifts: ResearchUploadGiftProps[];
  /** 경품 추가 함수 */
  addNewGift: () => void;
  /** 경품 삭제 함수 */
  removeGift: (index: number) => void;
  /** 경품 이름 수정 함수. index와 경품 이름을 인자로 받아 전체 경품을 재설정합니다. */
  updateGiftName: (index: number, giftName: string) => void;

  /** 추가 크레딧 수령 인원 수 */
  creditReceiverNum: number;
  setCreditReceiverNum: (receiverNum: number) => void;

  /** 추가 크레딧 */
  extraCredit: number;
  setExtraCredit: (credit: number) => void;

  screeningSexInput: string | undefined;
  setScreeningSexInput: (input: string | undefined) => void;

  screeningAgeInputs: string[];
  toggleScreeningAgeInputs: (input: string | undefined) => void;

  uploadGiftPhoto: (index: number) => void;

  /** 입력값 초기화 */
  clearInputs: () => void;
  /** 리서치 업로드 */
  uploadResearch: () => void;
};

/**
 * 리서치 업로드 페이지에서 사용되는 상태/상태관리 함수들을 정의합니다.
 * @author 현웅
 */
export const useResearchUploadStore = create<ResearchUploadStoreProps>(
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

    purposeInput: undefined,
    setPurposeInput: (input: ResearchPurpose) => {
      set({ purposeInput: input });
    },

    organizationInput: "",
    setOrganizationInput: (input: string) => {
      set({ organizationInput: input });
    },

    targetInput: "",
    setTargetInput: (input: string) => {
      set({ targetInput: input });
    },

    estimatedTimeInput: 0,
    setEstimatedTimeInput: (input: number) => {
      set({ estimatedTimeInput: input });
    },

    giftIndex: 1,
    gifts: [
      { index: 0, deleted: false, giftName: "", photoUri: "", photoRatio: 0 },
    ],
    addNewGift: () => {
      //* 기존 gifts에 새로운 gift 요소를 추가하고
      set({
        gifts: [
          ...get().gifts,
          {
            index: get().giftIndex,
            deleted: false,
            giftName: "",
            photoUri: "",
            photoRatio: 0,
          },
        ],
      });

      //* giftIndex를 증가시킵니다
      set(state => {
        state.giftIndex += 1;
      });
    },
    removeGift: (index: number) => {
      const updatedGifts = [...get().gifts];
      updatedGifts[index].deleted = true;

      set({ gifts: updatedGifts });
    },
    updateGiftName: (index: number, giftName: string) => {
      const updatedGifts = [...get().gifts];
      updatedGifts[index].giftName = giftName;

      set({ gifts: updatedGifts });
    },

    uploadGiftPhoto: async (index: number) => {
      const result = await getGalleryPhotoFromAndroid();

      if (
        result &&
        result.assets &&
        result.assets[0].uri &&
        result.assets[0].width &&
        result.assets[0].height
      ) {
        const updatedGifts = [...get().gifts];
        updatedGifts[index].photoUri = result.assets[0].uri;
        updatedGifts[index].photoRatio =
          result.assets[0].height / result.assets[0].width;

        set({ gifts: updatedGifts });
      }
    },

    creditReceiverNum: 0,
    setCreditReceiverNum: (receiverNum: number) => {
      set({ creditReceiverNum: receiverNum });
    },

    extraCredit: 0,
    setExtraCredit: (credit: number) => {
      set({ extraCredit: credit });
    },

    screeningSexInput: undefined,
    setScreeningSexInput: (input: string | undefined) => {
      set({ screeningSexInput: input });
    },

    screeningAgeInputs: [],
    toggleScreeningAgeInputs: (input: string | undefined) => {
      //* '상관없음' 선택한 경우
      if (!input) {
        set({ screeningAgeInputs: [] });
        return;
      }

      const index = get().screeningAgeInputs!.indexOf(input);
      if (index === -1) {
        set({ screeningAgeInputs: [...get().screeningAgeInputs!, input] });
      } else {
        set({
          screeningAgeInputs: get().screeningAgeInputs!.filter(
            age => age !== input,
          ),
        });
      }
    },

    clearInputs: () => {
      set({
        step: 0,
        titleInput: "",
        linkInput: "",
        contentInput: "",
        purposeInput: undefined,
        organizationInput: "",
        targetInput: "",
        estimatedTimeInput: 0,
        gifts: [
          {
            index: 0,
            deleted: false,
            giftName: "",
            photoUri: "",
            photoRatio: 0,
          },
        ],
        creditReceiverNum: 0,
        extraCredit: 0,
        screeningSexInput: undefined,
        screeningAgeInputs: [],
      });
    },
    uploadResearch: () => {},
  }),
);
