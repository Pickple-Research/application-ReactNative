import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import styled from "styled-components/native";
import { VoteParticipationInfo } from "./Vote.partcipationInfo.component";
import { VoteSchema } from "src/Schema";
import { H3, SmallText } from "src/StyledComponents/Text";

/**
 * 투표 리스트의 투표 한 줄 디자인입니다.
 * @author 현웅
 */
export function VoteListItem({
  vote,
  participated,
  style,
  onPress,
}: {
  vote: VoteSchema;
  participated: boolean;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}) {
  return (
    <Container style={style} activeOpacity={1} onPress={onPress}>
      <TitleTagContainer>
        <TitleText numberOfLines={1}>{vote.title}</TitleText>
        <TagText>{`vote.tag`}</TagText>
      </TitleTagContainer>
      <VoteParticipationInfo
        participated={participated}
        participantsNum={vote.participantsNum}
        commentsNum={vote.commentsNum}
      />
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const TitleTagContainer = styled.View`
  flex: 1;
  margin-right: 16px;
`;

const TitleText = styled(H3)`
  color: ${({ theme }) => theme.color.grey.main};
  margin-bottom: 4px;
`;

const TagText = styled(SmallText)`
  color: ${({ theme }) => theme.color.grey.mild};
`;
