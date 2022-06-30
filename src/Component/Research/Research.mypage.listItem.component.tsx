import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import styled from "styled-components/native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { ResearchSchema } from "src/Schema";
import { ResearchDday } from "src/Component/Research";
import { PickpleResearchIcon } from "src/Component/Svg";
import { H3, BodyText } from "src/StyledComponents/Text";
import { didDatePassed } from "src/Util";

/**
 * 마이페이지에서 사용되는 리서치 리스트 아이템입니다 (참여, 스크랩, 작성한 리서치 컴포넌트)
 * @author 원제
 * @modify 현웅
 */
export function ResearchMypageListItem({
  research,
  style,
}: {
  research: ResearchSchema;
  style?: StyleProp<ViewStyle>;
}) {
  const navigation = useNavigation<NavigationProp<AppStackProps>>();

  const closed = research.closed || didDatePassed(research.deadline);

  return (
    <Container
      style={style}
      closed={closed}
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate("ResearchDetailScreen", { research });
      }}>
      <Icon closed={closed} />
      <TitleTarget
        title={research.title}
        target={`research.target`}
        closed={closed}
      />
      <Dday deadline={research.deadline} />
    </Container>
  );
}

function Icon({ closed }: { closed: boolean }) {
  return (
    <Icon__Container closed={closed}>
      {/* TODO: DESIGN-SYSTEM */}
      <PickpleResearchIcon
        width={"28"}
        height={"28"}
        color={closed ? undefined : "#8BBFF5"}
      />
    </Icon__Container>
  );
}

function TitleTarget({
  title,
  target,
  closed,
}: {
  title: string;
  target: string;
  closed: boolean;
}) {
  return (
    <ContentTarget__Container>
      <Title__Container>
        <Title__Text closed={closed} numberOfLines={2}>
          {title}
        </Title__Text>
      </Title__Container>
      <Target__Container>
        <Target__Text closed={closed}>{target}</Target__Text>
      </Target__Container>
    </ContentTarget__Container>
  );
}

function Dday({ deadline }: { deadline: string | Date }) {
  return (
    <Dday__Container>
      <ResearchDday deadline={deadline} />
    </Dday__Container>
  );
}

const Container = styled.TouchableOpacity<{ closed: boolean }>`
  flex-direction: row;
  align-items: center;
  height: 90px;
  padding: 6px 18px;
  margin-bottom: 6px;
  //TODO: DESING-SYSTEM
  border: 1.5px solid ${({ closed }) => (closed ? "#c4c4c4" : "#8BBFF5")};
  border-radius: 10px;
`;

// Icon()
const Icon__Container = styled.View<{ closed: boolean }>`
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  margin-right: 16px;
  //TODO: DESING-SYSTEM
  border: 1.5px solid ${({ closed }) => (closed ? "#dedede" : "#8BBFF5")};
  border-radius: 100px;
`;

// ContentTarget()
const ContentTarget__Container = styled.View`
  flex: 1;
`;

const Title__Container = styled.View`
  margin-bottom: 6px;
`;

const Title__Text = styled(H3)<{ closed: boolean }>`
  color: ${({ closed, theme }) =>
    closed ? theme.color.grey.mild : theme.color.grey.deep};
  font-weight: bold;
  line-height: 18px;
`;

const Target__Container = styled.View``;

const Target__Text = styled(BodyText)<{ closed: boolean }>`
  color: ${({ closed, theme }) =>
    //TODO: #DESIGN-SYSTEM
    closed ? "#8f8f8f" : theme.color.grey.mild};
`;

// Dday()
const Dday__Container = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 56px;
`;
