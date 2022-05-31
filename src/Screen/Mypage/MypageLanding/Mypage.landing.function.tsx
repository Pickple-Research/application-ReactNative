import React from "react";
import styled from "styled-components/native";
import { screenStyles } from "./Mypage.landing.screen";
import { globalStyles } from "src/Style";
import { H3, H4 } from "src/StyledComponents/Text";

/**
 * 마이페이지 랜딩 페이지 고객기능 섹션
 * @author 현웅
 */
export function MypageLandingFunction() {
  return (
    <Container
      style={{
        ...globalStyles.screen__horizontalPadding,
        ...screenStyles.border,
      }}>
      <SectionHeader />
      <FunctionsList />
    </Container>
  );
}

function SectionHeader() {
  return (
    <SectionHeader__Container style={{ ...screenStyles.header__margin }}>
      <SectionHeader__Title>고객기능</SectionHeader__Title>
    </SectionHeader__Container>
  );
}

function FunctionsList() {
  return (
    <FunctionsList__Container>
      <NoticeFunction />
      <FAQFunction />
      <CustomerServiceFunction />
      <ContactUsFunction />
    </FunctionsList__Container>
  );
}

function NoticeFunction() {
  return (
    <FunctionRow__Container>
      <FunctionRow__Text>공지사항</FunctionRow__Text>
    </FunctionRow__Container>
  );
}

function FAQFunction() {
  return (
    <FunctionRow__Container>
      <FunctionRow__Text>자주 묻는 질문</FunctionRow__Text>
    </FunctionRow__Container>
  );
}

function CustomerServiceFunction() {
  return (
    <FunctionRow__Container>
      <FunctionRow__Text>고객센터</FunctionRow__Text>
    </FunctionRow__Container>
  );
}

function ContactUsFunction() {
  return (
    <FunctionRow__Container>
      <FunctionRow__Text>Contact Us</FunctionRow__Text>
    </FunctionRow__Container>
  );
}

const Container = styled.View`
  padding-bottom: 30px;
  margin-bottom: 25px;
`;

const SectionHeader__Container = styled.View``;

const SectionHeader__Title = styled(H4)``;

const FunctionsList__Container = styled.View``;

// 각 기능 한 줄
const FunctionRow__Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px;
`;

const FunctionRow__Text = styled(H3)`
  color: ${({ theme }) => theme.color.grey.deep};
`;
