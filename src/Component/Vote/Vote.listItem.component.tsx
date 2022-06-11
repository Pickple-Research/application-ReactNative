import React from "react";
import styled from "styled-components/native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { VoteSchema } from "src/Schema";
import { H3, H4, SmallText } from "src/StyledComponents/Text";

/**
 * 투표 리스트의 투표 한 줄 디자인입니다.
 * @author 현웅
 */
export function VoteListItem({ vote }: { vote: VoteSchema }) {
  const navigation = useNavigation<NavigationProp<AppStackProps>>();

  return (
    <Container
      activeOpacity={1}
      onPress={() => {
        navigation.navigate("CommunityVoteDetailScreen", {
          vote,
        });
      }}>
      <TitleTagContainer>
        <TitleText numberOfLines={1}>{vote.title}</TitleText>
        <TagText>{`vote.tag`}</TagText>
      </TitleTagContainer>
      <NicknameText>
        {vote.authorNickname ? `${vote.authorNickname}` : `익명`}
      </NicknameText>
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

const TitleTagContainer = styled.View`
  flex: 1;
  margin-right: 16px;
`;

const TitleText = styled(H3)`
  margin-bottom: 8px;
`;

const TagText = styled(SmallText)`
  color: ${({ theme }) => theme.color.grey.mild};
`;

const NicknameText = styled(H4)``;
