import create from "zustand";
import { loginWithEmailPassword } from "src/Axios";
import {
  UserSchema,
  UserActivitySchema,
  UserCreditHistorySchema,
  UserPrivacySchema,
  UserPropertySchema,
} from "src/Schema";

type AuthLoginStoreProps = {
  emailInput: string;
  setEmailInput: (emailInput: string) => void;

  passwordInput: string;
  setPasswordInput: (passwordInput: string) => void;

  /** 로그인 시도중 여부 */
  isLoading: boolean;

  /** 이메일과 비밀번호를 이용해 로그인 */
  login: () => Promise<{
    user: UserSchema;
    userActivity: UserActivitySchema;
    userCreditHistory: UserCreditHistorySchema;
    userPrivacy: UserPrivacySchema;
    userProperty: UserPropertySchema;
  } | null>;

  clearInputs: () => void;
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

  login: async () => {
    set({ isLoading: true });

    const result = await loginWithEmailPassword({
      email: get().emailInput,
      password: get().passwordInput,
    });

    set({ isLoading: false });
    //TODO: JWT 토큰 정보 저장

    return result;
  },

  clearInputs: () => {
    set({
      emailInput: "",
      passwordInput: "",
      isLoading: false,
    });
  },
}));
