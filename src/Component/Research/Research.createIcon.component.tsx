import React from "react";
import styled from "styled-components/native";
import PencilIcon from "@Resource/svg/pencil-icon.svg";

/**
 * 리서치 랜딩 페이지, 카테고리별 리서치 페이지 우측 하단에 사용되는 리서치 작성 아이콘입니다.
 * @author 현웅
 */
export function ResearchCreateIcon() {
  return (
    <Container>
      <PencilIcon width={21} height={21} />
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  position: absolute;
  right: 18px;
  bottom: 15px;
  justify-content: center;
  align-items: center;
  width: 54px;
  height: 54px;
  background-color: #444444;
  border-radius: 100px;
`;
