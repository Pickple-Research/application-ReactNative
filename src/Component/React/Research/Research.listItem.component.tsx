import React from "react";
import { StyleProp } from "react-native";
import styled from "styled-components/native";
import { ResearchTarget } from "./Research.target.component";
import { ResearchGift } from "./Research.gift.component";
import { HashTags } from "../Text.component";
import { ResearchProps } from "@Object/Type";

/**
 * 리서치 목록을 보여줄 때 사용하는 리스트 한 줄 디자인입니다.
 * @author 현웅
 */
export function ResearchListItem({
  research,
  style,
}: {
  research: ResearchProps;
  style?: StyleProp<any>;
}) {
  return (
    <Container style={style}>
      <Thumbnail />
      <ResearchInfo
        title={research.title}
        tags={research.tags}
        targets={research.targets}
      />
      <ResearchGift />
    </Container>
  );
}

function Thumbnail() {
  return <Thumbnail__Container>{/* <Thumbnail__Img/> */}</Thumbnail__Container>;
}

function ResearchInfo({
  title,
  tags,
  targets,
}: {
  title: string;
  tags: string[];
  targets: string[];
}) {
  return (
    <ResearchInfo__Container>
      <HashTags tags={tags} />
      <ResearchInfo__TitleText numberOfLines={2}>
        {title}
      </ResearchInfo__TitleText>
      <ResearchTarget targets={targets} />
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

const ResearchInfo__TitleText = styled.Text`
  width: 90%;
  height: 42px;
  color: black;
  font-size: 16px;
  font-weight: bold;
  line-height: 21px;
`;
