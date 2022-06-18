import React from "react";
import styled from "styled-components/native";
import { BodyText } from "src/StyledComponents/Text";
import { globalStyles } from "src/Style/globalStyles";

/**
 * 마이페이지 '투표한 글' 필터 부분입니다.
 * (전체 / 진행중 / 마감)
 * @author 현웅
 */
export function MypageVotedFilter() {
  return (
    <Container style={globalStyles.screen__horizontalPadding}>
      <FilterButton content={`전체`} />
      <FilterButton content={`진행중`} />
      <FilterButton content={`마감`} />
    </Container>
  );
}

function FilterButton({ content }: { content: string }) {
  return (
    <FilterButton__Container>
      <FilterButton__Content>{content}</FilterButton__Content>
    </FilterButton__Container>
  );
}

const Container = styled.View`
  position: absolute;
  top: 0px;
  flex-direction: row;
  width: 100%;
  //? VotedItemsList의 padding-top 값과 같거나 작아야합니다.
  height: 40px;
  padding: 8px 0px;
`;

//TODO: #RADIUS-BUTTON
const FilterButton__Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 3px 5px;
  margin-right: 8px;
  border-radius: 8px;
  border: 1px solid black;
`;

const FilterButton__Content = styled(BodyText)``;
