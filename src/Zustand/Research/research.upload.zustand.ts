import create from "zustand";
import { uploadResearch } from "src/Axios";
import { ResearchPurpose } from "src/Object/Enum";
import { ResearchUploadGiftProps } from "src/Object/Type";
import { getGalleryPhotoFromAndroid } from "src/Util";

import axios from "axios";

type ResearchUploadStoreProps = {
  /** 리서치 업로드 단계: 0/1/2/3 단계 */
  step: number;
  goNextStop: () => void;
  goPreviousStep: () => void;

  /** 리서치 제목 */
  titleInput: string;
  setTitleInput: (input: string) => void;

  /** 리서치 링크 */
  linkInput: string;
  setLinkInput: (input: string) => void;

  /** 리서치 내용 */
  contentInput: string;
  setContentInput: (input: string) => void;

  /** 리서치 목적 */
  purposeInput: ResearchPurpose | undefined;
  setPurposeInput: (input: ResearchPurpose) => void;

  /** 리서치 기업/단체/수업 */
  organizationInput: string;
  setOrganizationInput: (input: string) => void;

  /** 리서치 참여 대상 */
  targetInput: string;
  setTargetInput: (input: string) => void;

  /** 리서치 예상 소요 시간 */
  estimatedTimeInput: number;
  setEstimatedTimeInput: (input: number) => void;

  /** 업로드할 리서치 경품의 index. 경품이 추가될 때마다 1씩 증가. */
  giftIndex: number;
  /** 업로드할 리서치에 걸 경품 */
  gifts: ResearchUploadGiftProps[];
  /** 경품 추가 */
  addNewGift: () => void;
  /** 경품 삭제 */
  removeGift: (index: number) => void;
  /** 경품 이름 수정 함수. 경품의 index와 경품 이름을 인자로 받고 전체 경품을 재설정합니다. */
  updateGiftName: (index: number, giftName: string) => void;

  /** 경품 사진 추가 함수. 경품의 index를 인자로 받고 전체 경품을 재설정합니다. */
  uploadGiftPhoto: (index: number) => void;

  /** 추가 크레딧 수령 인원 수 */
  creditReceiverNum: number;
  setCreditReceiverNum: (receiverNum: number) => void;

  /** 추가 크레딧 */
  extraCredit: number;
  setExtraCredit: (credit: number) => void;

  /** 스크리닝: 성별 선택 */
  screeningSexInput: string | undefined;
  setScreeningSexInput: (input: string | undefined) => void;

  /** 스크리닝: 연령 선택 */
  screeningAgeInputs: string[];
  toggleScreeningAgeInputs: (input: string | undefined) => void;

  /** 작성 도중 나가려고 할 때 모달 */
  blockExitModalVisible: boolean;
  setBlockExitModalVisible: (status: boolean) => void;

  /** 리서치 업로드 중인지 여부 */
  uploading: boolean;

  /** 리서치 업로드 화면에 입력한 모든 값을 초기화합니다. */
  clearInputs: () => void;

  /**
   * 리서치 업로드:
   * 입력된 모든 리서치 정보를 formData에 담아 업로드합니다.
   */
  uploadResearch: () => Promise<string | null>;
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
      {
        index: 0,
        deleted: false,
        giftName: "",
        giftImage: {},
        giftImageRatio: 0,
      },
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
            giftImage: {},
            giftImageRatio: 1,
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
      const image = await getGalleryPhotoFromAndroid();

      if (image) {
        const updatedGifts = [...get().gifts];
        updatedGifts[index].giftImage = image;
        updatedGifts[index].giftImageRatio =
          (image.height || 1) / (image.width || 1);

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

    blockExitModalVisible: false,
    setBlockExitModalVisible: (status: boolean) => {
      set({ blockExitModalVisible: status });
    },

    uploading: false,

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
            giftImage: {},
            giftImageRatio: 0,
          },
        ],
        creditReceiverNum: 0,
        extraCredit: 0,
        screeningSexInput: undefined,
        screeningAgeInputs: [],
        blockExitModalVisible: false,
        uploading: false,
      });
    },

    uploadResearch: async () => {
      set({ uploading: true });

      //! formData를 Zustand 내부에서 생성해서 넘겨주면 동작하지 않습니다.
      //! 이유는.. 아직 잘 모르겠습니다.
      const result = await uploadResearch({
        title: get().titleInput,
        link: get().linkInput,
        content: get().contentInput,
        purpose: get().purposeInput,
        organization: get().organizationInput,
        target: get().targetInput,
        estimatedTime: get().estimatedTimeInput,
        creditReceiverNum: get().creditReceiverNum,
        extraCredit: get().extraCredit,
        screeningSexInput: get().screeningSexInput,
        screeningAgeInputs: get().screeningAgeInputs,
        gifts: get().gifts,
      });

      set({ uploading: false });
      return result;
    },
  }),
);
