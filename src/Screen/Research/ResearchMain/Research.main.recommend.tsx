import React from "react";
import styled from "styled-components/native";
import { ResearchRecommendCarousel } from "@Component/Research";
import { useResearchStore } from "@Zustand/index";
import { H1 } from "src/StyledComponents/Text";

/**
 * 리서치 랜딩 페이지 리서치 추천 섹션
 * @author 현웅
 */
export function ResearchMainRecommend() {
  const exampleResearches = useResearchStore(state => state.exampleResearches);

  return (
    <Container>
      <Greeting username="픽플리" />
      <ResearchRecommendCarousel researches={exampleResearches} />
    </Container>
  );
}

function Greeting({ username }: { username: string }) {
  return (
    <Greeting__Container>
      <Greeting__Text>
        {`안녕하세요, ${username}님!\n이 리서치 어떠세요?`}
      </Greeting__Text>
      <Greeting__ProfileIcon />
    </Greeting__Container>
  );
}

const Container = styled.View`
  margin-bottom: 40px;
`;

// Greeting()
const Greeting__Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  margin-bottom: 25px;
`;

const Greeting__Text = styled(H1)`
  color: black;
  font-weight: bold;
  line-height: 27px;
`;

const Greeting__ProfileIcon = styled.View`
  width: 64px;
  height: 64px;
  border-radius: 100px;
  background-color: pink;
`;
