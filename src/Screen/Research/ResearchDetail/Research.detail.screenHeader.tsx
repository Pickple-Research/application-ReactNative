import React from "react";
import styled from "styled-components/native";
import { BackButtonAndFunctionScreenHeader } from "src/Component/View";

/**
 * 리서치 상세정보 페이지 스크린 헤더
 * @author 현웅
 */
export function ResearchDetailScreenHeader() {
  return (
    <BackButtonAndFunctionScreenHeader
      rightComponents={<Components__Container />}
    />
  );
}

const Components__Container = styled.View``;
