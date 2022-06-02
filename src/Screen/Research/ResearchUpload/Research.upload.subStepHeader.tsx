import React from "react";
import styled from "styled-components/native";
import { globalStyles } from "src/Style/globalStyles";

/**
 * 리서치 업로드 페이지 단계 중 하위 단계 헤더입니다.
 *
 * ex. 기프티콘 추가, 추가 크레딧 입력, 스크리닝 시 성별 및 연령 선택
 * @author 현웅
 */
export function ResearchUploadSubStepHeader({
  children,
  onPress,
}: {
  children: any;
  onPress?: () => void;
}) {
  return (
    <Container
      activeOpacity={onPress ? 0.8 : 1}
      onPress={onPress}
      style={globalStyles.screen__horizontalPadding}>
      {children}
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  //TODO: DESIGN-SYSTEM
  background-color: #f2f2f2;
  padding-top: 12px;
  padding-bottom: 12px;
`;
