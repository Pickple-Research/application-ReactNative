import React from "react";
import styled from "styled-components/native";
import { BackButtonAndFunctionScreenHeader } from "src/Component/View";

/**
 * 투표 상세 페이지 스크린 헤더입니다.
 * @author 현웅
 */
export function CommunityVoteDetailScreenHeader() {
  return (
    <BackButtonAndFunctionScreenHeader rightComponents={<RightComponents />} />
  );
}

function RightComponents() {
  return <RightComponents__Container />;
}

const RightComponents__Container = styled.View``;
