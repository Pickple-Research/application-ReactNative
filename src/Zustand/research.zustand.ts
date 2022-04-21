import create from "zustand";
import { ResearchProps } from "@Object/Type";

type ResearchStoreProps = {
  exampleResearch: ResearchProps;
  exampleResearches: ResearchProps[];
};

export const useResearchStore = create<ResearchStoreProps>(() => ({
  exampleResearch: {
    title:
      "MZ 세대 여성들의 피트니스와 웰니스에 대한 인식 조사를 행하는 것의 검토를 묻는 것에 대한 여부를 허락받아도 되는지에 대한 양해를 구해도 되는지 여쭙고 싶습니다",
    tags: ["마케팅", "스타트업"],
    targets: ["여성", "20대", "30대"],
  },
  exampleResearches: [
    {
      title:
        "MZ 세대 여성들의 피트니스와 웰니스에 대한 인식 조사를 행하는 것의 검토를 묻는 것에 대한 여부를 허락받아도 되는지에 대한 양해를 구해도 되는지 여쭙고 싶습니다",
      tags: ["마케팅", "스타트업"],
      targets: ["여성", "20대", "30대"],
    },
    { title: "", tags: ["디자인", "기획"], targets: ["20대 초반", "대학생"] },
    {
      title: "아날로그와 디자인 제품 사용에 대한 선호도 조사",
      tags: ["디자인", "제품"],
      targets: ["20대 초반", "대학생"],
    },
  ],
}));
