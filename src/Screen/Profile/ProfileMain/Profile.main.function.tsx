import React from "react";
import styled from "styled-components/native";
import { screenStyles } from "./Profile.main.screen";

/**
 * 프로필 랜딩 페이지 고객기능 섹션
 * @author 현웅
 */
export function ProfileMainFunction() {
  return (
    <Container style={{ ...screenStyles.padding, ...screenStyles.border }}>
      <Header />
      <FunctionsList />
    </Container>
  );
}

function Header() {
  return (
    <Header__Container style={{ ...screenStyles.header__margin }}>
      <Header__Title>고객기능</Header__Title>
    </Header__Container>
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

const Header__Container = styled.View``;

const Header__Title = styled.Text``;

const FunctionsList__Container = styled.View``;

// 각 기능 한 줄
const FunctionRow__Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px;
`;

const FunctionRow__Text = styled.Text`
  color: ${({ theme }) => theme.color.text_color_333};
`;
