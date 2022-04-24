import React from "react";
import styled from "styled-components/native";
import { RadiusButton } from "@Component/Button";
import { SectionHeaderTitle } from "@Component/Text";
import { SectionHeader__Container } from "../../../StyledComponents/View";
import { globalStyles } from "../../../Style";

/**
 * 파트너 상세정보 페이지 파트너 이벤트/게시글 섹션
 * @author 현웅
 */
export function PartnerDetailEvent() {
  return (
    <Container>
      <SectionHeader />
      <EventPostsList />
    </Container>
  );
}

function SectionHeader() {
  return (
    <SectionHeader__Container>
      <SectionHeader__TitleContainer>
        <SectionHeaderTitle title="이벤트/게시글" style={{ marginRight: 6 }} />
        <SectionHeader__TitleNum>10</SectionHeader__TitleNum>
      </SectionHeader__TitleContainer>
    </SectionHeader__Container>
  );
}

function EventPostsList() {
  return (
    <EventPostsList__Container
      style={{ ...globalStyles.screen__horizontalPadding }}>
      <EventPost />
    </EventPostsList__Container>
  );
}

function EventPost() {
  return (
    <EventPost__Container>
      <EventPost__Thumbnail />
      <EventPost__InfoContainer>
        <EventPost__TitleDateContainer>
          <EventPost__TitleContainer>
            <EventPost__Title>게시글 제목</EventPost__Title>
          </EventPost__TitleContainer>
          <EventPost__Date>22.04.03</EventPost__Date>
        </EventPost__TitleDateContainer>
        <EventPost__ContentContainer>
          <EventPost__Content numberOfLines={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </EventPost__Content>
        </EventPost__ContentContainer>
      </EventPost__InfoContainer>
    </EventPost__Container>
  );
}

const Container = styled.View`
  margin-bottom: 50px;
`;

const SectionHeader__TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SectionHeader__TitleNum = styled.Text`
  color: ${({ theme }) => theme.color.main_skyblue};
  font-size: 14px;
  font-weight: bold;
`;

const EventPostsList__Container = styled.View``;

// EventPost()
const EventPost__Container = styled.View`
  flex-direction: row;
  padding: 5px 0px;
`;

const EventPost__Thumbnail = styled.View`
  width: 80px;
  height: 80px;
  background-color: gray;
  margin-right: 12px;
  border-radius: 12px;
`;

const EventPost__InfoContainer = styled.View`
  flex: 1;
  justify-content: center;
  padding: 6px 0px;
`;

const EventPost__TitleDateContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const EventPost__TitleContainer = styled.View``;

const EventPost__Title = styled.Text`
  color: black;
  font-size: 15px;
`;

const EventPost__Date = styled.Text`
  font-size: 13px;
`;

const EventPost__ContentContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

const EventPost__Content = styled.Text`
  font-size: 13px;
`;