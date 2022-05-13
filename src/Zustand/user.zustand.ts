import create from "zustand";
import { getUserInfo } from "@Axios/index";

type UserStoreProps = {
  test: string;
  userInfo: { email: string };
  getUserInfo: () => void;
  setTest: (test: string) => void;
};

/**
 * 유저 상태를 끌어다 쓸 수 있는 zustand 입니다.
 * @author 현웅
 */
export const useUserStore = create<UserStoreProps>((set, get) => ({
  test: "",
  userInfo: {
    email: "tester@te.st",
  },
  getUserInfo: async () => {
    const response = await getUserInfo();
    console.log(`response: ${response}`);
    // if (data) {
    //   set({ test: data });
    // }
  },
  setTest: (test: string) => {},
}));
