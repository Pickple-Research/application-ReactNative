import create from "zustand";
import { axiosUploadResearch, axiosUploadResearchWithImages } from "src/Axios";
import { ResearchPurpose } from "src/Object/Enum";
import { ResearchUploadGiftProps } from "src/Object/Type";
import { getGalleryPhotoFromAndroid } from "src/Util";
import { ResearchSchema } from "src/Schema";

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
   * 입력된 모든 리서치 정보를 업로드합니다.
   * 사진이 포함된 경우 FormData 형태로,
   * 그렇지 않다면 Body에 담아 보냅니다.
   * @return 생성된 리서치 정보 | null
   * @author 현웅
   */
  uploadResearch: () => Promise<ResearchSchema | null>;
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

      //* 삭제되지 않은 경품 추출
      const nonDeletedGifts = get().gifts.filter(gift => !gift.deleted);

      //* 그 중 경품명이 입력되었거나 경품 이미지가 등록된 것이 있는지 확인
      const giftExists = nonDeletedGifts.some(gift => {
        return Boolean(gift.giftName) || Boolean(gift.giftImage.uri);
      });

      //* 경품이 존재하는 경우 - formData를 생성하여 요청해야 합니다.
      if (giftExists) {
        const formData = new FormData();

        formData.append("title", get().titleInput.trim());
        formData.append("link", get().linkInput.trim());
        formData.append("content", get().contentInput.trim());
        // formData.append("purpose", get().purposeInput);
        formData.append("organization", get().organizationInput.trim());
        formData.append("target", get().targetInput.trim());
        formData.append("estimatedTime", get().estimatedTimeInput);
        // formData.append("", get().creditReceiverNum)
        // formData.append("", get().extraCredit)
        // formData.append("", get().screeningSexInput)
        // formData.append("", get().screeningAgeInputs)

        nonDeletedGifts.forEach(gift => {
          formData.append("images", {
            //! ReactNative 에서 이미지 파일을 포함한 FormData 를 전송할 땐
            //! 반드시 uri, type, name 속성을 가져야 합니다.
            //? @see https://github.com/facebook/react-native/blob/main/Libraries/Network/FormData.js
            uri: gift.giftImage.uri,
            type: gift.giftImage.type,
            name: gift.giftImage.fileName,
          });
        });

        const result = await axiosUploadResearchWithImages(formData);
        set({ uploading: false });
        return result;
      }

      //* 경품이 존재하지 않는 경우 - 일반적인 요청처럼 Body에 리서치 정보를 넣어 요청합니다.
      const result = await axiosUploadResearch({
        title: get().titleInput,
        link: get().linkInput,
        content: get().contentInput,
        // purpose: get().purposeInput,
        organization: get().organizationInput,
        target: get().targetInput,
        //! 서버단에서 estimatedTime을 @IsNumberString()으로 받기 때문에
        //! 여기서는 숫자로 변환하여 전송합니다.
        estimatedTime: get().estimatedTimeInput.toString(),
        // creditReceiverNum: get().creditReceiverNum,
        // extraCredit: get().extraCredit,
        // screeningSexInput: get().screeningSexInput,
        // screeningAgeInputs: get().screeningAgeInputs,
      });
      set({ uploading: false });
      return result;
    },
  }),
);
