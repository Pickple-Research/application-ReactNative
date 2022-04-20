import React from "react";
import { StyleProp } from "react-native";
import styled from "styled-components/native";
import { ResearchTag } from "./Research.tag.component";
import { ResearchTarget } from "./Research.target.component";
import { ResearchGift } from "./Research.gift.component";

/**
 * 리서치 리스트 한 줄의 컴포넌트입니다.
 * @author 현웅
 */
export function ResearchListItem({
  item,
  style,
}: {
  item?: any;
  style?: StyleProp<any>;
}) {
  return (
    <Container>
      <ResearchThumbnail />
      <ResearchInfo />
      <ResearchGift />
    </Container>
  );
}

function ResearchThumbnail() {
  return <Thumbnail__Container>{/* <Thumbnail__Img/> */}</Thumbnail__Container>;
}

function ResearchInfo() {
  return (
    <ResearchInfo__Container>
      <ResearchTag tags={["마케팅"]} />
      <ResearchInfo__TitleContainer>
        <ResearchInfo__TitleText numberOfLines={2}>
          디자인/기획 관련
        </ResearchInfo__TitleText>
      </ResearchInfo__TitleContainer>
      <ResearchTarget targets={["여성"]} />
    </ResearchInfo__Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

// Thumbnail()
const Thumbnail__Container = styled.View`
  width: 60px;
  height: 60px;
  background-color: gray;
  margin-right: 10px;
  border-radius: 100px;
`;

const Thumbnail__Img = styled.Image``;

// ResearchInfo()
const ResearchInfo__Container = styled.View`
  flex: 1;
`;

const ResearchInfo__TitleContainer = styled.View`
  justify-content: center;
  height: 42px; // TitleText의 line-height*2
`;

const ResearchInfo__TitleText = styled.Text`
  width: 90%;
  color: black;
  font-size: 16px;
  font-weight: bold;
  line-height: 21px;
`;
