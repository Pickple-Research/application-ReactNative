import React from "react";
import styled from "styled-components/native";
import { StyleProp, ViewStyle } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { VoteProps } from "src/Object/Type";
import { H3, H4, DetailText, SmallText } from "src/StyledComponents/Text";
import MarkedIcon from "src/Resource/svg/marked-icon.svg";

/**
 * 마이페이지 '투표한 글' 리스트에 사용되는 컴포넌트입니다.
 * @author 현웅
 */
export function VoteVotedItem({
  vote,
  style,
}: {
  vote: VoteProps;
  style?: StyleProp<ViewStyle>;
}) {
  const navigation = useNavigation<NavigationProp<AppStackProps>>();

  return (
    <Container
      style={style}
      activeOpacity={1}
      onPress={() => {
        navigation.navigate("CommunityVoteDetailScreen", {
          voteId: "62a3008a6c09b783e0fdda09",
        });
      }}>
      <Icon />
      <TitleInfo vote={vote} />
      <Author />
    </Container>
  );
}

function Icon() {
  return (
    <Icon__Container>
      <MarkedIcon />
    </Icon__Container>
  );
}

function TitleInfo({ vote }: { vote: VoteProps }) {
  return (
    <TitleInfo__Container>
      <TitleInfo__TitleContainer>
        <TitleInfo__Title numberOfLines={1} textBreakStrategy="simple">
          {vote.title}
        </TitleInfo__Title>
      </TitleInfo__TitleContainer>
      <TitleInfo__InfoContainer>
        <TitleInfo__Deadline>2022.05.00</TitleInfo__Deadline>
        <TitleInfo__Comments>댓글 5</TitleInfo__Comments>
      </TitleInfo__InfoContainer>
    </TitleInfo__Container>
  );
}

function Author() {
  return (
    <Author__Container>
      <Author__Text>익명</Author__Text>
    </Author__Container>
  );
}

const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 12px;
  border: 1px solid blue;
  border-radius: 15px;
`;

// Icon()
const Icon__Container = styled.View`
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.purple.pastel};
  padding: 8px;
  margin-right: 15px;
  border-radius: 100px;
`;

// TitleInfo()
const TitleInfo__Container = styled.View`
  flex: 1;
  padding: 10px 0px;
  margin-right: 15px;
`;

const TitleInfo__TitleContainer = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
`;

const TitleInfo__Title = styled(H3)`
  font-weight: bold;
`;

const TitleInfo__InfoContainer = styled.View`
  flex-direction: row;
`;

const TitleInfo__Deadline = styled(DetailText)`
  margin-right: 6px;
`;

const TitleInfo__Comments = styled(SmallText)`
  font-weight: bold;
`;

// Author()
const Author__Container = styled.View`
  margin-bottom: 36px;
`;

const Author__Text = styled(H4)``;
