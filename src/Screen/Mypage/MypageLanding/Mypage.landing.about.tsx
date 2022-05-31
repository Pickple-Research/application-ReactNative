import React from "react";
import styled from "styled-components/native";
import { globalStyles } from "src/Style";
import { H1, H4 } from "src/StyledComponents/Text";

/**
 * 마이페이지 랜딩 페이지 최하단 'about 픽플리' 섹션
 * @author 현웅
 */
export function MypageLandingAbout() {
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
  border: 1px solid ${({ theme }) => theme.color.purple.mild};
  border-radius: 10px;
`;

const About__FormerText = styled(H4)`
  color: ${({ theme }) => theme.color.purple.main};
  margin-right: 10px;
`;

const About__LatterText = styled(H1)`
  color: ${({ theme }) => theme.color.purple.text};
  font-weight: bold;
`;
