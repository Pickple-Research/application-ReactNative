export type PartnerProps = {
  name: string;
  type: string;
  tags: string[];
};

export const examplePartner: PartnerProps = {
  name: "스타트업 1",
  type: "스타트업",
  tags: ["디자인", "기획"],
};

export const examplePartnersList: PartnerProps[] = [
  examplePartner,
  { name: "스타트업 2", type: "랩실", tags: ["기획", "개발"] },
  { name: "스타트업 3", type: "스타트업", tags: ["기획", "개발", "마케팅"] },
  { name: "스타트업 4", type: "학회", tags: ["개발"] },
  { name: "스타트업 5", type: "스타트업", tags: ["마케팅", "기획"] },
];
