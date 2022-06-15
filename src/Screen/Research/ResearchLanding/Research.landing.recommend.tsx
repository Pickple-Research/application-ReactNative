import React from "react";
import { Animated, LayoutChangeEvent } from "react-native";
import styled from "styled-components/native";
import { ResearchRecommendCarousel } from "src/Component/Research";
import { useUserStore, useResearchStore } from "src/Zustand";
import { H1 } from "src/StyledComponents/Text";

/**
 * 리서치 랜딩 페이지 리서치 추천 섹션
 * @author 현웅
 */
export function ResearchLandingRecommend({
  onLayout,
  translateY,
}: {
  onLayout: (event: LayoutChangeEvent) => void;
  translateY: Animated.AnimatedInterpolation;
}) {
  const user = useUserStore(state => state.user);
  const researches = useResearchStore(state => state.researches);

  return (
    <Container onLayout={onLayout} style={{ transform: [{ translateY }] }}>
      <Greeting nickname={user.nickname} />
      <ResearchRecommendCarousel researches={researches} />
    </Container>
  );
}

function Greeting({ nickname }: { nickname: string }) {
  return (
    <Greeting__Container>
      <Greeting__Text>
        {`안녕하세요, ${nickname}님!\n이 리서치 어떠세요?`}
      </Greeting__Text>
      <Greeting__ProfileIcon />
    </Greeting__Container>
  );
}

const Container = styled(Animated.View)`
  position: absolute;
  top: 0px;
  background-color: white;
  padding-top: 30px;
  padding-bottom: 20px;
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
  font-weight: bold;
  line-height: 27px;
`;

const Greeting__ProfileIcon = styled.View`
  width: 64px;
  height: 64px;
  border-radius: 100px;
  background-color: pink;
`;
