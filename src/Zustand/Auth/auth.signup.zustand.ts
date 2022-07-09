import create from "zustand";
import {
  axiosTransmitAuthCode,
  axiosVerifyEmail,
  axiosSignupAsEmailUser,
} from "src/Axios";
import { Gender } from "src/Object/Enum";
import { showBlackToast } from "@Util/toast.util";

type SignupScreenStoreProps = {
  /** 회원가입 단계: 0/1/2 단계 */
  step: number;
  goNextStep: () => void;

  //* 0단계
  /** 이메일 앞자리 입력값 */
  emailInput: string;
  setEmailInput: (emailInput: string) => void;

  /** 이메일 뒷자리 (직접입력) 입력값 */
  emailDomainInput: string;
  setEmailDomainInput: (input: string) => void;

  /** 이메일 뒷자리 드롭다운으로 선택한 입력값 */
  emailDomainDropdownInput: string;
  setEmailDomainDropdownInput: (input: string) => void;

  /** 입력된 이메일 전체 주소를 연산하고 반환 */
  getFullEmail: () => string;

  /** 인증번호 입력값 */
  authCodeInput: string;
  setAuthCodeInput: (authCodeInput: string) => void;

  /** 인증번호 전송 중 여부 */
  authCodeTransmitting: boolean;
  /** 이메일 중복 여부 */
  emailDuplicated: boolean;
  /** 인증번호 전송 여부 */
  authCodeTransmitted: boolean;
  /** 이메일 인증 중 여부 */
  emailVerifing: boolean;
  /** 이메일 인증 시도를 1회 이상 했는지 여부 */
  emailVerifyTried: boolean;
  /** 이메일 인증 여부 */
  emailVerified: boolean;

  /** 인증번호를 (재)전송합니다 */
  transmitAuthCode: () => Promise<void>;
  /** 이메일과 인증번호를 입력받아 이메일을 인증합니다 */
  verifyEmail: () => Promise<void>;

  //* 1단계
  /** 성 */
  lastNameInput: string;
  setLastNameInput: (lastNameInput: string) => void;

  /** 이름 */
  nameInput: string;
  setNameInput: (nameInput: string) => void;

  passwordInput: string;
  setPasswordInput: (passwordInput: string) => void;

  passwordConfirmInput: string;
  setPasswordConfirmInput: (passwordConfirmInput: string) => void;

  /** 이용약관/개인정보 처리방침 동의 */
  agreeTerms: boolean;
  toggleAgreeTerms: () => void;

  /** 서비스 정보 수신 동의 */
  agreeMarketing: boolean;
  toggleAgreeMarketing: () => void;

  //* 2단계
  nicknameInput: string;
  setNicknameInput: (nicknameInput: string) => void;

  /** 생년월일 */
  birthInput: string;

  /** 성별 */
  genderInput: Gender | undefined;
  setGenderInput: (input: Gender) => void;

  clearState: () => void;

  signup: () => void;
};

/**
 * 회원가입 페이지에서 사용되는 값과 함수들을 정의하는 zustand 입니다.
 * @author 현웅
 */
export const useSignupScreenStore = create<SignupScreenStoreProps>(
  (set, get) => ({
    step: 0,
    goNextStep: () => {
      set(state => ({ step: state.step + 1 }));
    },

    //* 0단계
    emailInput: "",
    setEmailInput: (emailInput: string) => {
      set({ emailInput });
    },

    emailDomainInput: "",
    setEmailDomainInput: (input: string) => {
      set({ emailDomainInput: input });
    },

    emailDomainDropdownInput: "",
    setEmailDomainDropdownInput: (input: string) => {
      set({ emailDomainDropdownInput: input });
    },

    getFullEmail: () => {
      if (get().emailDomainDropdownInput === "") {
        return `${get().emailInput}@${get().emailDomainInput}`;
      }
      return `${get().emailInput}@${get().emailDomainDropdownInput}`;
    },

    authCodeInput: "",
    setAuthCodeInput: (authCodeInput: string) => {
      set({ authCodeInput });
    },

    authCodeTransmitting: false,
    emailDuplicated: false,
    authCodeTransmitted: false,
    emailVerifing: false,
    emailVerifyTried: false,
    emailVerified: false,

    transmitAuthCode: async () => {
      set({
        authCodeTransmitting: true,
        emailVerifyTried: false,
        emailVerified: false,
      });
      const result = await axiosTransmitAuthCode(get().getFullEmail());
      if (result !== null) {
        showBlackToast({ text1: "인증번호가 전송되었습니다." });
        set({ authCodeTransmitted: true });
      }
      set({ authCodeTransmitting: false });
    },

    verifyEmail: async () => {
      set({ emailVerifing: true });
      const result = await axiosVerifyEmail({
        email: get().getFullEmail(),
        code: get().authCodeInput,
      });
      if (result) {
        set({ emailVerifyTried: true, emailVerified: true });
      }
      set({ emailVerifing: false });
    },

    //* 1단계
    lastNameInput: "",
    setLastNameInput: (lastNameInput: string) => {
      if (lastNameInput.length < 3) {
        set({ lastNameInput });
      }
    },

    nameInput: "",
    setNameInput: (nameInput: string) => {
      if (nameInput.length < 7) {
        set({ nameInput });
      }
    },

    passwordInput: "",
    setPasswordInput: (passwordInput: string) => {
      set({ passwordInput });
    },

    passwordConfirmInput: "",
    setPasswordConfirmInput: (passwordConfirmInput: string) => {
      set({ passwordConfirmInput });
    },

    agreeTerms: false,
    toggleAgreeTerms: () => {
      set({ agreeTerms: !get().agreeTerms });
    },
    agreeMarketing: false,
    toggleAgreeMarketing: () => {
      set({ agreeMarketing: !get().agreeMarketing });
    },

    //* 2단계
    nicknameInput: "",
    setNicknameInput: (nicknameInput: string) => {
      set({ nicknameInput });
    },

    /** 생년월일 */
    birthInput: "",

    /** 성별 */
    genderInput: undefined,
    setGenderInput: (genderInput: Gender) => {
      set({ genderInput });
    },

    clearState: () => {
      set({
        step: 0,
        emailInput: "",
        emailDomainInput: "",
        emailDomainDropdownInput: "",
        authCodeInput: "",
        authCodeTransmitting: false,
        emailDuplicated: false,
        authCodeTransmitted: false,
        emailVerifing: false,
        emailVerifyTried: false,
        emailVerified: false,
        lastNameInput: "",
        nameInput: "",
        passwordInput: "",
        passwordConfirmInput: "",
        agreeTerms: false,
        agreeMarketing: false,
        birthInput: "",
        genderInput: undefined,
      });
    },

    signup: async () => {
      await axiosSignupAsEmailUser({
        email: get().getFullEmail(),
        password: get().passwordInput,
        lastName: get().lastNameInput,
        name: get().nameInput,
        nickname: get().passwordInput,
      });
    },
  }),
);
