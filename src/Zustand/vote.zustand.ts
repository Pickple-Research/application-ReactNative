import create from "zustand";
import { VoteProps } from "@Object/Type";

type VoteStoreProps = {
  exampleVote: VoteProps;
  exampleVotes: VoteProps[];
};

export const useVoteStore = create<VoteStoreProps>(() => ({
  exampleVote: {
    id: "123",
    title: "진짜 변기 물 내릴 때 발로 눌러서 내리나요?",
    options: [
      { content: "당연히 손으로 눌러서 내리죠!" },
      { content: "세상에.. 발로 눌러서 내리는 거 아닌가요?" },
      { content: "저는 이 대화를 따라갈 수가 없네요" },
    ],
    tag: "일반",
  },

  exampleVotes: [
    {
      id: "123",
      title: "진짜 변기 물 내릴 때 발로 눌러서 내리나요?",
      options: [
        { content: "당연히 손으로 눌러서 내리죠!" },
        { content: "세상에.. 발로 눌러서 내리는 거 아닌가요?" },
        { content: "저는 이 대화를 따라갈 수가 없네요" },
      ],
      tag: "일반",
    },
    {
      id: "456",
      title: "자취 vs 통학 하나만 골라주세요 ㅠㅠ",
      options: [{ content: "자취" }, { content: "통학" }],
      tag: "대학생",
    },
    {
      id: "789",
      title: "여러분 이거 어떄요?",
      options: [
        { content: "스트랩" },
        { content: "분진" },
        { content: "파워그립" },
      ],
      tag: "헬스케어",
    },
    {
      id: "101",
      title: "여러분 이거 하나만 골라주세요 친구랑 논쟁 중인데",
      options: [
        { content: "아이유는 킹갓이다" },
        { content: "아이유는 여신이다" },
      ],
      tag: "뷰티",
    },
  ],
}));
