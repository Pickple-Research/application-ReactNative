import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { H3 } from "src/StyledComponents/Text";
import { globalStyles } from "src/Style";
import ScrapIcon from "src/Resource/svg/scrap-icon.svg";
import MarkedIcon from "src/Resource/svg/marked-icon.svg";
import PenIcon from "src/Resource/svg/pen-icon.svg";
import BlankCommentIcon from "src/Resource/svg/blank-comment-icon.svg";

/**
 * 마이페이지 랜딩 페이지 유저 활동 정보 섹션
 * (스크랩/투표한 글/올린 글/내 댓글)
 * @author 현웅
 */
export function MypageLandingActivity() {
  const navigation =
    useNavigation<NavigationProp<AppStackProps, "LandingBottomTabNavigator">>();

  return (
    <Container style={globalStyles.screen__horizontalPadding}>
      <ScrapButton navigation={navigation} />
      <ParticipationButton navigation={navigation} />
      <MyUploadButton navigation={navigation} />
      <MyCommentButton navigation={navigation} />
    </Container>
  );
}

function ScrapButton({
  navigation,
}: {
  navigation: NavigationProp<AppStackProps>;
}) {
  return (
    <Icon__Container activeOpacity={1} onPress={() => {}}>
      <ScrapIcon style={styles.icon__margin} />
      <Icon__Text>스크랩</Icon__Text>
    </Icon__Container>
  );
}

function ParticipationButton({
  navigation,
}: {
  navigation: NavigationProp<AppStackProps>;
}) {
  return (
    <Icon__Container
      activeOpacity={1}
      onPress={() => {
        navigation.navigate("MypageVotedScreen", {});
      }}>
      <MarkedIcon style={styles.icon__margin} />
      <Icon__Text>투표한 글</Icon__Text>
    </Icon__Container>
  );
}

function MyUploadButton({
  navigation,
}: {
  navigation: NavigationProp<AppStackProps>;
}) {
  return (
    <Icon__Container activeOpacity={1} onPress={() => {}}>
      <PenIcon style={styles.icon__margin} />
      <Icon__Text>올린 글</Icon__Text>
    </Icon__Container>
  );
}

function MyCommentButton({
  navigation,
}: {
  navigation: NavigationProp<AppStackProps>;
}) {
  return (
    <Icon__Container activeOpacity={1} onPress={() => {}}>
      <BlankCommentIcon style={styles.icon__margin} />
      <Icon__Text>내 댓글</Icon__Text>
    </Icon__Container>
  );
}

const styles = StyleSheet.create({
  icon__margin: { marginBottom: 10 },
});

const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 40px;
`;

const Icon__Container = styled.TouchableOpacity`
  align-items: center;
`;

const Icon__Text = styled(H3)`
  color: ${({ theme }) => theme.color.grey.icon};
`;
