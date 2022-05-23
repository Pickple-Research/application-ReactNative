import create from "zustand";
import { PartnerProps, PartnerProductServiceProps } from "@Object/Type";

type PartnerStoreProps = {
  examplePartner: PartnerProps;
  examplePartners: PartnerProps[];
  exampleProductServices: PartnerProductServiceProps[];
};

export const usePartnerStore = create<PartnerStoreProps>(() => ({
  examplePartner: {
    id: "part1",
    name: "파트너1",
    type: "스타트업",
    tags: ["마케팅", "기획"],
  },

  examplePartners: [
    {
      id: "part1",
      name: "파트너 1",
      type: "스타트업",
      tags: ["마케팅", "기획"],
    },
    { id: "part2", name: "파트너 2", type: "랩실", tags: ["기획", "개발"] },
    {
      id: "part3",
      name: "파트너 3",
      type: "스타트업",
      tags: ["기획", "개발", "마케팅"],
    },
    { id: "part4", name: "파트너 4", type: "학회", tags: ["개발"] },
    {
      id: "part5",
      name: "파트너 5",
      type: "스타트업",
      tags: ["마케팅", "기획"],
    },
    {
      id: "part6",
      name: "파트너 6",
      type: "랩실",
      tags: ["기획"],
    },
  ],

  exampleProductServices: [
    { name: "스타트업 제품" },
    { name: "조금 길어보이는 스타트업 제품 이름" },
    { name: "간략한 제품" },
    { name: "혁신적인 제품 이름" },
    { name: "사업 서비스 이름" },
  ],
}));
