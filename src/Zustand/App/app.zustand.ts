import create from "zustand";

type AppStoreProps = {
  backButtonPressedTime: Date;
  setBackButtonPressedTime: (time: Date) => void;
};

/**
 * 앱 전체에서 사용되거나, 하나의 페이지에 지정하기 어려운 상태값들입니다.
 * @author 현웅
 */
export const useAppStore = create<AppStoreProps>((set, get) => ({
  backButtonPressedTime: new Date(),
  setBackButtonPressedTime: (time: Date) => {
    set({ backButtonPressedTime: time });
  },
}));
