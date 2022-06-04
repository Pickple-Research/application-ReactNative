import create from "zustand";

type AuthLoginStoreProps = {
  emailInput: string;
  setEmailInput: (emailInput: string) => void;

  passwordInput: string;
  setPasswordInput: (passwordInput: string) => void;

  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;

  login: () => void;
};

/**
 * 로그인 페이지에서 사용되는 값과 함수들을 정의하는 zustand 입니다.
 * @author 현웅
 */
export const useAuthLoginStore = create<AuthLoginStoreProps>((set, get) => ({
  emailInput: "",
  setEmailInput: (emailInput: string) => {
    set({ emailInput });
  },

  passwordInput: "",
  setPasswordInput: (passwordInput: string) => {
    set({ passwordInput });
  },

  isLoading: false,
  setIsLoading: (isLoading: boolean) => {
    set({ isLoading });
  },

  login: () => {},
}));
