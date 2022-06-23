import React from "react";
import styled from "styled-components/native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { VoteParticipationInfo } from "src/Component/Vote";
import { H4, BodyText } from "src/StyledComponents/Text";
import { VoteSchema } from "src/Schema";

/**
 * 얇은 투표 한 줄에 사용되는 컴포넌트입니다.
 * @author 현웅
 */
export function VoteRow({ vote }: { vote: VoteSchema }) {
  const navigation = useNavigation<NavigationProp<AppStackProps>>();

  return (
    <Container
      activeOpacity={1}
      onPress={() => {
        navigation.navigate("CommunityVoteDetailScreen", {
          vote,
        });
      }}>
      <VoteCategory>자유 토픽</VoteCategory>
      <VoteTitle numberOfLines={1}>{vote.title}</VoteTitle>
      <VoteParticipationInfo
        participantsNum={vote.participantsNum}
        commentsNum={vote.commentsNum}
      />
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 10px 0px;
`;

const VoteCategory = styled(H4)`
  font-weight: bold;
  margin-right: 8px;
`;

const VoteTitle = styled(BodyText)`
  flex: 1;
  color: ${({ theme }) => theme.color.grey.main};
  margin-right: 12px;
`;
