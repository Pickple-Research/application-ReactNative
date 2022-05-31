import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import styled from "styled-components/native";
import { ResearchDday } from "./Research.dday.component";
import { ResearchTarget } from "./Research.target.component";
import { Chip, HashTags } from "@Component/Text";
import { ResearchProps } from "@Object/Type";
import { H1 } from "src/StyledComponents/Text";

/**
 * 리서치 목록을 보여줄 때 사용하는 리스트 한 줄 디자인입니다.
 * onPress에는 Navigator를 이용한 이동 방식을 정의하여 넘겨주어야 합니다.
 * @author 현웅
 */
export function ResearchListItem({
  research,
  style,
  onPress,
}: {
  research: ResearchProps;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}) {
  return (
    <Container style={style} activeOpacity={1} onPress={onPress}>
      <Thumbnail />
      <ResearchInfo
        title={research.title}
        tags={research.tags}
        targets={research.targets}
      />
      <Credit />
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
        <ResearchDday content="D-6" style={{ marginRight: 6 }} />
        <HashTags tags={tags} />
      </ResearchInfo__TagsContainer>
      <ResearchInfo__TitleText numberOfLines={2}>
        {title}
      </ResearchInfo__TitleText>
      <ResearchTarget targets={targets} />
    </ResearchInfo__Container>
  );
}

function Credit() {
  return <Chip content="100C" type="CREDIT_AVAILABLE" />;
}

const Container = styled.TouchableOpacity`
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
  margin-bottom: 8px;
`;

const ResearchInfo__TitleText = styled(H1)`
  width: 90%;
  height: 28px;
  color: black;
  font-weight: bold;
  line-height: 14px;
  margin-bottom: 6px;
`;
