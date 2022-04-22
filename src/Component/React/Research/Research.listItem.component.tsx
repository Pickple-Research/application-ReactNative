import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import styled from "styled-components/native";
import { ResearchTarget } from "./Research.target.component";
import { Chip, HashTags } from "../Text.component";
import { ResearchProps } from "@Object/Type";
import CheckIcon from "@Resource/svg/check-icon.svg";

/**
 * 리서치 목록을 보여줄 때 사용하는 리스트 한 줄 디자인입니다.
 * @author 현웅
 */
export function ResearchListItem({
  research,
  style,
}: {
  research: ResearchProps;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <Container style={style}>
      <Thumbnail />
      <ResearchInfo
        title={research.title}
        tags={research.tags}
        targets={research.targets}
      />
      <CheckIcon width={20} height={20} />
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
      <ResearchInfo__TagsContainer>
        <Chip content="기업" style={{ marginRight: 6 }} />
        <HashTags tags={tags} />
      </ResearchInfo__TagsContainer>
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
  padding: 12px 0px;
`;

// Thumbnail()
const Thumbnail__Container = styled.View`
  width: 60px;
  height: 60px;
  background-color: gray;
  margin-right: 16px;
  border-radius: 100px;
`;

const Thumbnail__Img = styled.Image``;

// ResearchInfo()
const ResearchInfo__Container = styled.View`
  flex: 1;
`;

const ResearchInfo__TagsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 6px;
`;

const ResearchInfo__TitleText = styled.Text`
  width: 90%;
  height: 42px;
  color: black;
  font-size: 16px;
  font-weight: bold;
  line-height: 21px;
  margin-bottom: 6px;
`;
