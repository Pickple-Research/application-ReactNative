import React from "react";
import styled from "styled-components/native";
import { SectionHeaderText } from "@Component/Text";
import { SectionHeader__Container } from "src/StyledComponents/View";
import { H3 } from "src/StyledComponents/Text";
import { globalStyles } from "src/Style";

/**
 * 리서치 상세정보 페이지 내용 섹션
 * @author 현웅
 */
export function ResearchDetailContent() {
  return (
    <Container>
      <SectionHeader />
      <Content />
    </Container>
  );
}

function SectionHeader() {
  return (
    <SectionHeader__Container>
      <SectionHeaderText title="내용" />
    </SectionHeader__Container>
  );
}

function Content() {
  return (
    <Content__Container style={{ ...globalStyles.screen__horizontalPadding }}>
      <Content__Text>
        {`안녕하세요 스타트업 마케팅팀에서 일하고 있는 직장인입니다.\n\n내일 오전에 PT해야 하는 자료에 사용할 데이터가 필요한데 리서치 참여 좀 부탁드립니다 ㅠ.ㅜ`}
      </Content__Text>
    </Content__Container>
  );
}

const Container = styled.View`
  margin-bottom: 80px;
`;

const Content__Container = styled.View``;

const Content__Text = styled(H3)``;
