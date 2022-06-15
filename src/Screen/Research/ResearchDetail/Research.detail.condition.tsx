import React from "react";
import styled from "styled-components/native";
import { useResearchDetailScreenStore } from "src/Zustand";
import { BodyText } from "src/StyledComponents/Text";
import { globalStyles } from "src/Style";

/**
 * 리서치 상세정보 페이지 소요시간/마감일/대상/최소 참여 요건 섹션
 * @author 현웅
 */
export function ResearchDetailCondition() {
  return (
    <Container style={{ ...globalStyles.screen__horizontalPadding }}>
      <ConditionsList />
    </Container>
  );
}

function ConditionsList() {
  const researchDetail = useResearchDetailScreenStore(
    state => state.researchDetail,
  );

  return (
    <ConditionsList__Container>
      <Condition
        title="소요시간"
        content={`${researchDetail.estimatedTime}분`}
      />
      <Condition title="마감일" content={`researchDetail.deadline`} />
      <Condition title="대상" content={researchDetail.target} />
      <Condition
        title="최소 참여 요건"
        content={`researchDetail.eligibility`}
      />
    </ConditionsList__Container>
  );
}

function Condition({ title, content }: { title: string; content: string }) {
  return (
    <Condition__Container>
      <Condition__Title>{title}</Condition__Title>
      <Condition__Spliter>|</Condition__Spliter>
      <Condition__Content>{content}</Condition__Content>
    </Condition__Container>
  );
}

const Container = styled.View`
  margin-bottom: 18px;
`;

//TODO: #shadow
const ConditionsList__Container = styled.View`
  padding: 15px 18px;
  //TODO: #DESIGN-SYSTEM
  border: 1px solid #f5f5f5;
  border-radius: 12px; ;
`;

const Condition__Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0px;
`;

const Condition__Title = styled(BodyText)`
  width: 90px;
  color: ${({ theme }) => theme.color.blue.text};
`;

const Condition__Spliter = styled.Text`
  width: 16px;
  color: ${({ theme }) => theme.color.blue.text};
  font-size: 4px;
  font-weight: bold;
`;

const Condition__Content = styled(BodyText)`
  flex: 1;
  font-weight: bold;
`;
