import create from "zustand";
import { ResearchUploadGiftProps } from "src/Object/Type";

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

  organizationInput: string;
  setOrganizationInput: (input: string) => void;

  targetInput: string;
  setTargetInput: (input: string) => void;

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

    organizationInput: "",
    setOrganizationInput: (input: string) => {
      set({ organizationInput: input });
    },

    targetInput: "",
    setTargetInput: (input: string) => {
      set({ targetInput: input });
    },

    giftIndex: 1,
    gifts: [{ giftName: "", index: 0 }],
    addNewGift: () => {
      //* 기존 gifts에 새로운 gift 요소를 추가하고
      set({
        gifts: [...get().gifts, { giftName: "", index: get().giftIndex }],
      });
      //! 아래와 같이 .push를 통해 인자를 추가하면 state가 즉각 반영이 되지 않습니다.
      // set(state => { state.gifts.push({ giftName: "", index: state.giftIndex }) })

      //* giftIndex를 증가시킵니다
      set(state => {
        state.giftIndex += 1;
      });
    },
    removeGift: (index: number) => {
      const updatedGifts = get().gifts.filter(gift => {
        return gift.index !== index;
      });
      set({ gifts: updatedGifts });
    },
    //TODO: 경품 이름/사진 바꾸는 방식 고민
    updateGiftName: (index: number, giftName: string) => {
      // 리서치 경품은 삭제가 가능하므로 최초에 부여된 index와 실제 index가 다를 수 있음.
      // 때문에 gifts 내에서 실제 index를 찾은 후 경품 이름을 수정해야 함.
      const arrayIndex = get().gifts.findIndex(gift => gift.index === index);
      if (arrayIndex === -1) return;

      set(state => {
        state.gifts[arrayIndex].giftName = giftName;
      });

      // const updatedGift: ResearchUploadGiftProps = { index, giftName };
      // const updatedGifts = get().gifts.map(gift => {
      //   if (gift.index === index) {
      //     return updatedGift;
      //   }
      //   return gift;
      // });
      // set({ gifts: updatedGifts });
    },

    creditReceiverNum: 0,
    setCreditReceiverNum: (receiverNum: number) => {
      set({ creditReceiverNum: receiverNum });
    },

    extraCredit: 0,
    setExtraCredit: (credit: number) => {
      set({ extraCredit: credit });
    },

    uploadResearch: () => {},
  }),
);
