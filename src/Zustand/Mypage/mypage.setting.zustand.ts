import create from "zustand";
import { useUserStore } from "../User/user.zustand";

type MypageSettingScreenProps = {
  logout: () => Promise<void>;

  resigning: boolean;
  resign: () => Promise<void>;

  /** 로그아웃 모달창 표시 여부 */
  logoutModalVisible: boolean;
  setLogoutModalVisible: (status: boolean) => void;

  /** 회원탈퇴 모달창 표시 여부 */
  resignModalVisible: boolean;
  setResignModalVisible: (status: boolean) => void;
};

/**
 * 마이페이지 - 설정 페이지 및 해당 하위 페이지에서 사용되는 상태값들입니다.
 * @author 현웅
 */
export const useMypageSettingScreenStore = create<MypageSettingScreenProps>(
  (set, get) => ({
    logout: async () => {
      await useUserStore.getState().logout();
    },

    resigning: false,
    resign: async () => {
      set({ resigning: true });
      await useUserStore.getState().resign();
      set({ resigning: false });
    },

    logoutModalVisible: false,
    setLogoutModalVisible: (status: boolean) => {
      set({ logoutModalVisible: status });
    },

    resignModalVisible: false,
    setResignModalVisible: (status: boolean) => {
      set({ resignModalVisible: status });
    },
  }),
);
