import React from "react";
import styled from "styled-components/native";
import { globalStyles } from "../../../Style";
import { H1, H3 } from "../../../StyledComponents/Text";

/**
 * 마이페이지 랜딩 페이지 최하단 'about 픽플리' 섹션
 * @author 현웅
 */
export function ProfileMainAbout() {
  return (
    <Container style={{ ...globalStyles.screen__horizontalPadding }}>
      <About__Container>
        <About__FormerText>픽플리를 알고 싶다면?</About__FormerText>
        <About__LatterText>ABOUT 픽플리</About__LatterText>
      </About__Container>
    </Container>
  );
}

const Container = styled.View``;

const About__Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.color.background_purple};
  border-radius: 10px;
`;

const About__FormerText = styled(H3)`
  color: ${({ theme }) => theme.color.main_purple};
  margin-right: 10px;
`;

const About__LatterText = styled(H1)`
  color: ${({ theme }) => theme.color.text_purple};
  font-weight: bold;
`;
