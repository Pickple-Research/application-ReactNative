import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import styled from "styled-components/native";
import { ResearchDday } from "./Research.dday.component";
import { Chip, HashTags } from "src/Component/Text";
import { ResearchSchema } from "src/Schema";
import { H3, BodyText } from "src/StyledComponents/Text";

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
  research: ResearchSchema;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}) {
  return (
    <Container style={style} activeOpacity={1} onPress={onPress}>
      <Thumbnail />
      <ResearchInfo
        title={research.title}
        deadline={research.deadline}
        tags={[`research.tags`]}
        target={research.target}
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
  deadline,
  tags,
  target,
}: {
  title: string;
  deadline: string | Date;
  tags: string[];
  target: string;
}) {
  return (
    <ResearchInfo__Container>
      <ResearchInfo__TagsContainer>
        <ResearchDday deadline={deadline} style={{ marginRight: 6 }} />
        <HashTags tags={tags} />
      </ResearchInfo__TagsContainer>

      <ResearchInfo__TitleText numberOfLines={2}>
        {title}
      </ResearchInfo__TitleText>
      <ResearchInfo__TargetText>{target}</ResearchInfo__TargetText>
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
  padding-top: 12px;
  padding-bottom: 12px;
`;

// Thumbnail()
const Thumbnail__Container = styled.View`
  width: 60px;
  height: 60px;
  background-color: gray;
  margin-right: 16px;
  border-radius: 100px;
`;

// ResearchInfo()
const ResearchInfo__Container = styled.View`
  flex: 1;
`;

const ResearchInfo__TagsContainer = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
`;

const ResearchInfo__TitleText = styled(H3)`
  width: 90%;
  height: 28px;
  font-weight: bold;
  line-height: 14px;
  margin-bottom: 6px;
`;

const ResearchInfo__TargetText = styled(BodyText)`
  //TODO: #DESIGN-SYSTEM
  color: #8f8f8f;
`;
