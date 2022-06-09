import create from "zustand";
import { loginWithEmailPassword } from "src/Axios";

type AuthLoginStoreProps = {
  emailInput: string;
  setEmailInput: (emailInput: string) => void;

  passwordInput: string;
  setPasswordInput: (passwordInput: string) => void;

  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;

  /** 이메일과 비밀번호를 이용해 로그인합니다 */
  loginWithEmailPassword: () => void;
};

/**
 * 로그인 페이지에서 사용되는 값과 함수들을 정의하는 zustand 입니다.
 * @author 현웅
 */
export const useAuthLoginStore = create<AuthLoginStoreProps>((set, get) => ({
  emailInput: "",
  setEmailInput: (emailInput: string) => {
    if (emailInput.length < 36) {
      set({ emailInput });
    }
  },

  passwordInput: "",
  setPasswordInput: (passwordInput: string) => {
    if (passwordInput.length < 36) {
      set({ passwordInput });
    }
  },

  isLoading: false,
  setIsLoading: (isLoading: boolean) => {
    set({ isLoading });
  },

  loginWithEmailPassword: async () => {
    const jwt = await loginWithEmailPassword(
      get().emailInput,
      get().passwordInput,
    );
    //TODO: JWT 토큰 정보 저장
  },
}));
