import create from "zustand";
import { axiosSignupAsUnauthorizedUser } from "src/Axios";

type SignupScreenStoreProps = {
  /** 성 */
  lastNameInput: string;
  setLastNameInput: (lastNameInput: string) => void;

  /** 이름 */
  nameInput: string;
  setNameInput: (nameInput: string) => void;

  emailInput: string;
  setEmailInput: (emailInput: string) => void;

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

  signup: () => void;
};

/**
 * 회원가입 페이지에서 사용되는 값과 함수들을 정의하는 zustand 입니다.
 * @author 현웅
 */
export const useSignupScreenStore = create<SignupScreenStoreProps>(
  (set, get) => ({
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

    emailInput: "",
    setEmailInput: (emailInput: string) => {
      set({ emailInput });
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

    signup: async () => {
      await axiosSignupAsUnauthorizedUser(
        get().lastNameInput,
        get().nameInput,
        get().emailInput,
        get().passwordInput,
      );
    },
  }),
);
