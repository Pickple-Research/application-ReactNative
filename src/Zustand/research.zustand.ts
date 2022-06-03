import create from "zustand";
import { ResearchType } from "src/Object/Enum";
import { ResearchProps } from "src/Object/Type";

type ResearchStoreProps = {
  /** 리서치 랜딩 페이지에서 보여줄 리서치 타입 */
  selectedType: ResearchType;
  setSelectedType: (type: ResearchType) => void;
  exampleResearch: ResearchProps;
  exampleResearches: ResearchProps[];
};

/**
 * 리서치 데이터를 불러오거나 수정하는 zustand store 입니다.
 * @author 현웅
 */
export const useResearchStore = create<ResearchStoreProps>((set, get) => ({
  selectedType: ResearchType.ALL,
  setSelectedType: (type: ResearchType) => {
    set({ selectedType: type });
  },

  exampleResearch: {
    id: "res1",
    title:
      "MZ 세대 여성들의 피트니스와 웰니스에 대한 인식 조사를 행하는 것의 검토를 묻는 것에 대한 여부를 허락받아도 되는지에 대한 양해를 구해도 되는지 여쭙고 싶습니다",
    tags: ["마케팅", "스타트업"],
    targets: ["여성", "20대", "30대"],
    type: "기업",
  },
  exampleResearches: [
    {
      id: "res1",
      title:
        "MZ 세대 여성들의 피트니스와 웰니스에 대한 인식 조사를 행하는 것의 검토를 묻는 것에 대한 여부를 허락받아도 되는지에 대한 양해를 구해도 되는지 여쭙고 싶습니다",
      tags: ["마케팅", "스타트업"],
      targets: ["여성", "20대", "30대"],
      type: "기업",
    },
    {
      id: "res2",
      title: "",
      tags: ["디자인", "기획"],
      targets: ["20대 초반", "대학생"],
      type: "기업",
    },
    {
      id: "res3",
      title: "아날로그와 디자인 제품 사용에 대한 선호도 조사",
      tags: ["디자인", "제품"],
      targets: ["20대 초반", "대학생"],
      type: "기업",
    },
    {
      id: "res4",
      title:
        "MZ 세대 여성들의 피트니스와 웰니스에 대한 인식 조사를 행하는 것의 검토를 묻는 것에 대한 여부를 허락받아도 되는지에 대한 양해를 구해도 되는지 여쭙고 싶습니다",
      tags: ["마케팅", "스타트업"],
      targets: ["여성", "20대", "30대"],
      type: "기업",
    },
    {
      id: "res5",
      title: "",
      tags: ["디자인", "기획"],
      targets: ["20대 초반", "대학생"],
      type: "기업",
    },
    {
      id: "res6",
      title: "아날로그와 디자인 제품 사용에 대한 선호도 조사",
      tags: ["디자인", "제품"],
      targets: ["20대 초반", "대학생"],
      type: "기업",
    },
    {
      id: "res7",
      title:
        "MZ 세대 여성들의 피트니스와 웰니스에 대한 인식 조사를 행하는 것의 검토를 묻는 것에 대한 여부를 허락받아도 되는지에 대한 양해를 구해도 되는지 여쭙고 싶습니다",
      tags: ["마케팅", "스타트업"],
      targets: ["여성", "20대", "30대"],
      type: "기업",
    },
    {
      id: "res8",
      title: "",
      tags: ["디자인", "기획"],
      targets: ["20대 초반", "대학생"],
      type: "기업",
    },
    {
      id: "res9",
      title: "아날로그와 디자인 제품 사용에 대한 선호도 조사",
      tags: ["디자인", "제품"],
      targets: ["20대 초반", "대학생"],
      type: "기업",
    },
  ],
}));
