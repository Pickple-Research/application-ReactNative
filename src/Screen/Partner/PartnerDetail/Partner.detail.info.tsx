import React from "react";
import styled from "styled-components/native";
import { SectionHeaderTitle } from "@Component/Text";
import { SectionHeader__Container } from "../../../StyledComponents/View";
import { globalStyles } from "../../../Style";

/**
 * 파트너 상세정보 페이지 최하단 파트너 정보 섹션
 * @author 현웅
 */
export function PartnerDetailInfo() {
  return (
    <Container>
      <SectionHeader />
      <Infos />
    </Container>
  );
}

function SectionHeader() {
  return (
    <SectionHeader__Container>
      <SectionHeaderTitle title="스타트업 정보" />
    </SectionHeader__Container>
  );
}

function Infos() {
  return (
    <Info__Container style={{ ...globalStyles.screen__horizontalPadding }}>
      <Info__Title>홈페이지</Info__Title>
      <Info__UrlContainer>
        <Info__Url>https://www.notion.so/R2Cpickplereserach.com</Info__Url>
      </Info__UrlContainer>
    </Info__Container>
  );
}

const Container = styled.View``;

const Info__Container = styled.View`
  flex-direction: row;
`;

const Info__Title = styled.Text`
  width: 100px;
  font-size: 13px;
`;

const Info__UrlContainer = styled.View`
  flex: 1;
`;

const Info__Url = styled.Text`
  font-size: 12px;
`;
