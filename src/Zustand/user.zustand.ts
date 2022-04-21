import create from "zustand";

type UserStoreProps = {
  userInfo: { email: string };
};

/**
 * 유저 상태를 끌어다 쓸 수 있는 zustand 입니다.
 * @author 현웅
 */
export const useUserStore = create<UserStoreProps>(() => ({
  userInfo: {
    email: "tester@te.st",
  },
  someFunc: async (email: string) => {
    return email;
  },
}));
