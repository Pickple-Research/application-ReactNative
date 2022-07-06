import create from "zustand";

type PartnerLandingScreenStoreProps = {
  handleBackPress: () => boolean;

  serviceGettingReadyModalVisible: boolean;
  setServiceGettingReadyModalVisible: (status: boolean) => void;

  clearState: () => void;
};

export const usePartnerLandingScreenStore =
  create<PartnerLandingScreenStoreProps>((set, get) => ({
    handleBackPress: () => {
      return true;
    },

    serviceGettingReadyModalVisible: true,
    setServiceGettingReadyModalVisible: (status: boolean) => {
      set({ serviceGettingReadyModalVisible: status });
    },

    clearState: () => {
      set({
        serviceGettingReadyModalVisible: true,
      });
    },
  }));
