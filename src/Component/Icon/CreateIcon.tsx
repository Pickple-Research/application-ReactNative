import React from "react";
import styled from "styled-components/native";
import PencilIcon from "src/Resource/svg/pencil-icon.svg";

/**
 * 리서치 랜딩 페이지, 커뮤니티 랜딩 페이지 우측 하단에 사용되는 리서치 작성 아이콘입니다.
 * 원 안에 연필이 있는 형태입니다.
 * @author 현웅
 */
export function CreateIcon({ onPress }: { onPress?: () => void }) {
  return (
    <Container onPress={onPress}>
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
  width: 48px;
  height: 48px;
  background-color: #444444;
  border-radius: 100px;
`;
