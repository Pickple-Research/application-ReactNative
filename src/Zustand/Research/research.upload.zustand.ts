import create from "zustand";
import { axiosUploadResearch, axiosUploadResearchWithImages } from "src/Axios";
import { useUserStore } from "../User/user.zustand";
import { useResearchStore } from "./research.zustand";
import { ResearchSchema } from "src/Schema";
import { CREDIT_PER_MINUTE } from "src/Constant";
import { ResearchUploadGiftProps } from "src/Object/Type";
import {
  ResearchPurpose,
  ResearchType,
  Gender,
  AgeGroup,
} from "src/Object/Enum";
import { getGalleryPhotoFromAndroid, showBlackToast } from "src/Util";

type ResearchUploadScreenStoreProps = {
  /** 리서치 업로드 단계: 0/1/2/3 단계 */
  step: number;
  goNextStep: () => void;
  goPreviousStep: () => void;

  //* 0 단계
  /** 리서치 제목 */
  titleInput: string;
  setTitleInput: (input: string) => void;

  /** 리서치 링크 */
  linkInput: string;
  setLinkInput: (input: string) => void;

  /** 리서치 내용 */
  contentInput: string;
  setContentInput: (input: string) => void;

  //* 1 단계
  /** 리서치 목적 */
  purposeInput: ResearchPurpose | undefined;
  setPurposeInput: (input: ResearchPurpose) => void;

  /** 리서치 유형 */
  typeInput: ResearchType | undefined;
  setTypeInput: (input: ResearchType) => void;

  /** 리서치 기업/단체/수업 */
  organizationInput: string;
  setOrganizationInput: (input: string) => void;

  /** 리서치 참여 대상 */
  targetInput: string;
  setTargetInput: (input: string) => void;

  /** 리서치 예상 소요 시간 */
  estimatedTimeInput: number;
  setEstimatedTimeInput: (input: number) => void;

  /** 리서치 마감일 */
  deadlineInput: string;
  setDeadlineInput: (input: string) => void;

  //* 2 단계
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
  extraCreditReceiverNumInput: number;
  setExtraCreditReceiverNumInput: (receiverNum: number) => void;

  /** 추가 크레딧 */
  extraCreditInput: number;
  setExtraCreditInput: (credit: number) => void;

  /** 추가 크레딧 기능 사용 여부 */
  giveExtraCredit: boolean;
  toggleGiveExtraCredit: () => void;

  //* 3 단계
  /** 스크리닝: 성별 선택 */
  targetGendersInput: Gender[];
  setTargetGendersInput: (input: Gender | undefined) => void;

  /** 스크리닝: 연령대 선택 */
  targetAgeGroupsInput: AgeGroup[];
  toggleTargetAgeGroupsInput: (input: AgeGroup | undefined) => void;

  /** 작성 도중 나가려고 할 때 모달 */
  blockExitModalVisible: boolean;
  setBlockExitModalVisible: (status: boolean) => void;

  /** 업로드 전 재확인 모달 */
  confirmModalVisible: boolean;
  setConfirmModalVisible: (status: boolean) => void;

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
export const useResearchUploadScreenStore =
  create<ResearchUploadScreenStoreProps>((set, get) => ({
    step: 0,
    goNextStep: () => {
      set(state => ({ step: state.step + 1 }));
    },
    goPreviousStep: () => {
      set(state => ({ step: state.step - 1 }));
    },

    //* 0 단계
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

    //* 1 단계
    purposeInput: undefined,
    setPurposeInput: (input: ResearchPurpose) => {
      set({ purposeInput: input });
    },

    typeInput: undefined,
    setTypeInput: (input: ResearchType) => {
      set({ typeInput: input });
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

    deadlineInput: new Date().toISOString(),
    setDeadlineInput: (input: string) => {
      set({ deadlineInput: input });
    },

    //* 2 단계
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

    extraCreditReceiverNumInput: 5,
    setExtraCreditReceiverNumInput: (receiverNum: number) => {
      set({ extraCreditReceiverNumInput: receiverNum });
    },

    extraCreditInput: 1,
    setExtraCreditInput: (credit: number) => {
      set({ extraCreditInput: credit });
    },

    giveExtraCredit: true,
    toggleGiveExtraCredit: () => {
      set({ giveExtraCredit: !get().giveExtraCredit });
    },

    //* 3 단계
    targetGendersInput: [],
    setTargetGendersInput: (input: Gender | undefined) => {
      //* '상관없음' 선택한 경우
      if (!input) {
        set({ targetGendersInput: [] });
        return;
      }
      set({ targetGendersInput: [input] });
    },

    targetAgeGroupsInput: [],
    toggleTargetAgeGroupsInput: (input: AgeGroup | undefined) => {
      //* '상관없음' 선택한 경우
      if (!input) {
        set({ targetAgeGroupsInput: [] });
        return;
      }

      const index = get().targetAgeGroupsInput!.indexOf(input);
      if (index === -1) {
        set({ targetAgeGroupsInput: [...get().targetAgeGroupsInput!, input] });
      } else {
        set({
          targetAgeGroupsInput: get().targetAgeGroupsInput!.filter(
            ageGroup => ageGroup !== input,
          ),
        });
      }
    },

    blockExitModalVisible: false,
    setBlockExitModalVisible: (status: boolean) => {
      set({ blockExitModalVisible: status });
    },

    confirmModalVisible: false,
    setConfirmModalVisible: (status: boolean) => {
      set({ confirmModalVisible: status });
    },

    uploading: false,

    clearInputs: () => {
      set({
        step: 0,
        titleInput: "",
        linkInput: "",
        contentInput: "",
        purposeInput: undefined,
        typeInput: undefined,
        organizationInput: "",
        targetInput: "",
        estimatedTimeInput: 0,
        deadlineInput: "",
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
        extraCreditReceiverNumInput: 5,
        extraCreditInput: 1,
        giveExtraCredit: true,
        targetGendersInput: [],
        targetAgeGroupsInput: [],
        blockExitModalVisible: false,
        confirmModalVisible: false,
        uploading: false,
      });
    },

    uploadResearch: async () => {
      set({ uploading: true });

      //* 리서치 업로드에 필요한 크레딧 계산
      const requiredCredit =
        get().estimatedTimeInput * CREDIT_PER_MINUTE +
        (get().giveExtraCredit
          ? get().extraCreditReceiverNumInput * get().extraCreditInput
          : 0) +
        (get().targetGendersInput.length !== 0 ? 5 : 0);

      //* 크레딧이 부족한 경우
      if (useUserStore.getState().user.credit < requiredCredit) {
        showBlackToast({ text1: "크레딧이 부족합니다" });
        set({ uploading: false });
        return null;
      }

      //* 유효한 경품들만 추출합니다.
      //* (삭제되지 않았고, 경품 이름과 이미지가 모두 입력된 경품들)
      const validGifts = get().gifts.filter(gift => {
        if (
          !gift.deleted &&
          Boolean(gift.giftName.length) &&
          Boolean(gift.giftImage.uri)
        ) {
          return gift;
        }
      });

      //* 유효한 경품이 존재하는 경우 - formData를 생성하여 요청해야 합니다.
      if (validGifts.length > 0) {
        const formData = new FormData();

        formData.append("title", get().titleInput.trim());
        formData.append("link", get().linkInput.trim());
        formData.append("content", get().contentInput.trim());
        formData.append("purpose", get().purposeInput);
        formData.append("type", get().typeInput);
        formData.append("organization", get().organizationInput.trim());
        formData.append("target", get().targetInput.trim());
        formData.append("targetGenders", get().targetGendersInput);
        // formData.append("targetAges", get().targetAgesInput);
        formData.append("targetAgeGroups", get().targetAgeGroupsInput);
        formData.append("estimatedTime", get().estimatedTimeInput);
        formData.append(
          "extraCredit",
          get().giveExtraCredit ? get().extraCreditInput : 0,
        );
        formData.append(
          "extraCreditRecieverNum",
          get().giveExtraCredit ? get().extraCreditReceiverNumInput : 0,
        );
        formData.append("deadline", get().deadlineInput);

        validGifts.forEach(gift => {
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

        //* 응답이 성공적인 경우,
        //* 업로드된 리서치 내용을 전파하고 새로운 리서치를 반환합니다.
        if (result !== null) {
          useResearchStore.getState().spreadResearchUploaded({
            research: result.newResearch,
            creditHistory: result.newCreditHistory,
          });
          return result.newResearch;
        }

        set({ uploading: false });
        return null;
      }

      //* 경품이 존재하지 않는 경우 - 일반적인 요청처럼 Body에 리서치 정보를 넣어 요청합니다.
      const result = await axiosUploadResearch({
        title: get().titleInput,
        link: get().linkInput,
        content: get().contentInput,
        purpose: get().purposeInput,
        type: get().typeInput,
        organization: get().organizationInput,
        target: get().targetInput,
        targetGenders: get().targetGendersInput,
        // targetAges: get().targetAgesInput,
        targetAgeGroups: get().targetAgeGroupsInput,
        //! formData 를 통해 숫자를 보낼 때는 숫자가 string 타입으로 바뀌게 되어,
        //! 서버단에서 estimatedTime, extraCredit, extraCreditRecieverNum 은 @IsNumberString() 으로 받도록 설정되어 있습니다.
        //! 때문에 숫자 입력값을 string으로 변환하여 전송합니다.
        estimatedTime: get().estimatedTimeInput.toString(),
        extraCredit: get().giveExtraCredit
          ? get().extraCreditInput.toString()
          : "0",
        extraCreditRecieverNum: get().giveExtraCredit
          ? get().extraCreditReceiverNumInput.toString()
          : "0",
        deadline: get().deadlineInput,
      });

      //* 응답이 성공적인 경우,
      //* 업로드된 리서치 내용을 전파하고 새로운 리서치를 반환합니다.
      //* (반환된 리서치를 통해 업로드된 리서치의 상세 페이지로 이동합니다.)
      if (result !== null) {
        useResearchStore.getState().spreadResearchUploaded({
          research: result.newResearch,
          creditHistory: result.newCreditHistory,
        });
        return result.newResearch;
      }

      set({ uploading: false });
      return null;
    },
  }));
