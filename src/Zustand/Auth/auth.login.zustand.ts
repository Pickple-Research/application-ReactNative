import create from "zustand";
import { useUserStore } from "../User/user.zustand";
import { axiosLoginWithEmailPassword } from "src/Axios";
import { setStorage } from "src/Util";

type LoginScreenStoreProps = {
  emailInput: string;
  setEmailInput: (emailInput: string) => void;

  passwordInput: string;
  setPasswordInput: (passwordInput: string) => void;

  /** 로그인 시도중 여부 */
  isLoading: boolean;

  /** 이메일과 비밀번호를 이용해 로그인 */
  login: () => Promise<boolean>;

  clearInputs: () => void;
};

/**
 * 로그인 페이지에서 사용되는 값과 함수들을 정의하는 zustand 입니다.
 * @author 현웅
 */
export const useLoginScreenStore = create<LoginScreenStoreProps>(
  (set, get) => ({
    emailInput: "",
    setEmailInput: (emailInput: string) => {
      set({ emailInput });
    },

    passwordInput: "",
    setPasswordInput: (passwordInput: string) => {
      set({ passwordInput });
    },

    isLoading: false,

    login: async () => {
      set({ isLoading: true });

      const result = await axiosLoginWithEmailPassword({
        email: get().emailInput,
        password: get().passwordInput,
      });

      if (result === null) {
        set({ isLoading: false });
        return false;
      }

      const { jwt, ...userInfo } = result;

      useUserStore.getState().setUserInfo(userInfo);
      await setStorage("JWT", jwt);
      await setStorage("PASSWORD", get().passwordInput);
      await setStorage("EMAIL", userInfo.user.email);

      set({ isLoading: false });
      return true;
    },

    clearInputs: () => {
      set({
        emailInput: "",
        passwordInput: "",
        isLoading: false,
      });
    },
  }),
);
