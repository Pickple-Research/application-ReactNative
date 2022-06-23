import React from "react";
import { Animated, LayoutChangeEvent } from "react-native";
import styled from "styled-components/native";
import { H1 } from "src/StyledComponents/Text";

/**
 * 커뮤니티 랜딩 페이지 투표 추천 섹션
 * @author 현웅
 */
export function CommunityLandingRecommend({
  onLayout,
  translateY,
}: {
  onLayout: (event: LayoutChangeEvent) => void;
  translateY: Animated.AnimatedInterpolation;
}) {
  return (
    <Container onLayout={onLayout} style={{ transform: [{ translateY }] }}>
      <Greeting />
    </Container>
  );

  function Greeting() {
    return (
      <Greeting__Container>
        <Greeting__Text>
          {`지금 뜨거운 감자는 뭘까?\n핫한 투표는`}
        </Greeting__Text>
        <Greeting__ProfileIcon />
      </Greeting__Container>
    );
  }
}

const Container = styled(Animated.View)`
  position: absolute;
  top: 0px;
  width: 100%;
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
