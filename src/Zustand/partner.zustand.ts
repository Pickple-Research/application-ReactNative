import create from "zustand";
import { PartnerProps } from "@Object/Type";

type PartnerStoreProps = {
  examplePartner: PartnerProps;
  examplePartners: PartnerProps[];
};

export const usePartnerStore = create<PartnerStoreProps>(() => ({
  examplePartner: {
    name: "파트너1",
    type: "스타트업",
    tags: ["마케팅", "기획"],
  },

  examplePartners: [
    { name: "파트너1", type: "스타트업", tags: ["마케팅", "기획"] },
    { name: "파트너 2", type: "랩실", tags: ["기획", "개발"] },
    { name: "파트너 3", type: "스타트업", tags: ["기획", "개발", "마케팅"] },
    { name: "파트너 4", type: "학회", tags: ["개발"] },
    { name: "파트너 5", type: "스타트업", tags: ["마케팅", "기획"] },
  ],
}));
