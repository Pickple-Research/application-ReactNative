import create from "zustand";

type AuthSignupStoreProps = {
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
};

/**
 * 회원가입 페이지에서 사용되는 값과 함수들을 정의하는 zustand 입니다.
 * @author 현웅
 */
export const useAuthSignupStore = create<AuthSignupStoreProps>((set, get) => ({
  lastNameInput: "",
  setLastNameInput: (lastNameInput: string) => {
    set({ lastNameInput });
  },

  nameInput: "",
  setNameInput: (nameInput: string) => {
    set({ nameInput });
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
}));
