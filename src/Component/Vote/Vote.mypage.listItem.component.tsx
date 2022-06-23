import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import styled from "styled-components/native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { VoteSchema } from "src/Schema";
import { MarkedBookIcon } from "src/Component/Svg";
import { H3 } from "src/StyledComponents/Text";
import { themeColors } from "src/Theme";

/**
 * 마이페이지에서 사용되는 투표 리스트 아이템입니다 (참여, 스크랩, 작성한 투표 컴포넌트)
 * @author 현웅
 */
export function VoteMypageListItem({
  vote,
  style,
}: {
  vote: VoteSchema;
  style?: StyleProp<ViewStyle>;
}) {
  const navigation = useNavigation<NavigationProp<AppStackProps>>();

  return (
    <Container
      style={style}
      closed={vote.closed}
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate("CommunityVoteDetailScreen", {
          vote,
        });
      }}>
      <Icon closed={vote.closed} />
      <Title title={vote.title} closed={vote.closed} />
    </Container>
  );
}

function Icon({ closed }: { closed: boolean }) {
  return (
    <Icon__Container closed={closed}>
      <MarkedBookIcon color={closed ? undefined : themeColors().purple.text} />
    </Icon__Container>
  );
}

function Title({ title, closed }: { title: string; closed: boolean }) {
  return (
    <Title__Container>
      <Title__Text numberOfLines={1} closed={closed}>
        {title}
      </Title__Text>
    </Title__Container>
  );
}

const Container = styled.TouchableOpacity<{ closed: boolean }>`
  flex-direction: row;
  align-items: center;
  height: 72px;
  padding: 6px 18px;
  border: 1.2px solid
    ${({ closed, theme }) =>
      closed ? theme.color.purple.inactive : theme.color.purple.text};
  border-radius: 10px;
`;

// Icon()
const Icon__Container = styled.View<{ closed: boolean }>`
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  //TODO: DESIGN-SYSTEM
  background-color: ${({ closed }) => (closed ? "#f2f2f2" : "none")};
  margin-right: 16px;
  border: 1px solid
    ${({ closed, theme }) => (closed ? "none" : theme.color.purple.text)};
  border-radius: 100px;
`;

// Title()
const Title__Container = styled.View`
  flex: 1;
  flex-direction: row;
`;

const Title__Text = styled(H3)<{ closed: boolean }>`
  font-weight: bold;
  color: ${({ closed, theme }) =>
    closed ? theme.color.grey.mild : theme.color.grey.deep};
`;
