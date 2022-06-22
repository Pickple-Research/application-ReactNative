import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { H3 } from "src/StyledComponents/Text";
import { globalStyles } from "src/Style";
import MarkedBagIcon from "src/Resource/svg/marked-bag-icon.svg";
import { MarkedBookIcon } from "src/Component/Svg";
import ScrapIcon from "src/Resource/svg/scrap-short-icon.svg";
import PenIcon from "src/Resource/svg/pen-icon.svg";

/**
 * 마이페이지 랜딩 페이지 유저 활동 정보 섹션
 * ( 참여한 리서치 / 투표한 글 / 스크랩 / 작성한 글 )
 * @author 현웅
 */
export function MypageLandingActivity() {
  const navigation =
    useNavigation<NavigationProp<AppStackProps, "LandingBottomTabNavigator">>();

  return (
    <Container style={globalStyles.screen__horizontalPadding}>
      <ResearchButton navigation={navigation} />
      <VoteButton navigation={navigation} />
      <ScrapButton navigation={navigation} />
      <MyUploadButton navigation={navigation} />
    </Container>
  );
}

function ResearchButton({
  navigation,
}: {
  navigation: NavigationProp<AppStackProps>;
}) {
  return (
    <Button__Container>
      <Icon__Container
        activeOpacity={1}
        onPress={() => {
          navigation.navigate("MypageParticipatedResearchScreen", {});
        }}>
        <MarkedBagIcon style={styles.icon} />
        <Icon__Text>참여한 리서치</Icon__Text>
      </Icon__Container>
    </Button__Container>
  );
}

function VoteButton({
  navigation,
}: {
  navigation: NavigationProp<AppStackProps>;
}) {
  return (
    <Button__Container>
      <Icon__Container
        activeOpacity={1}
        onPress={() => {
          navigation.navigate("MypageParticipatedVoteScreen", {});
        }}>
        <MarkedBookIcon style={styles.icon} />
        <Icon__Text>투표한 글</Icon__Text>
      </Icon__Container>
    </Button__Container>
  );
}

function ScrapButton({
  navigation,
}: {
  navigation: NavigationProp<AppStackProps>;
}) {
  return (
    <Button__Container>
      <Icon__Container
        activeOpacity={1}
        onPress={() => {
          navigation.navigate("MypageScrappedScreen", {});
        }}>
        <ScrapIcon style={styles.icon} />
        <Icon__Text>스크랩</Icon__Text>
      </Icon__Container>
    </Button__Container>
  );
}

function MyUploadButton({
  navigation,
}: {
  navigation: NavigationProp<AppStackProps>;
}) {
  return (
    <Button__Container>
      <Icon__Container
        activeOpacity={1}
        onPress={() => {
          navigation.navigate("MypageUploadedScreen", {});
        }}>
        <PenIcon style={styles.icon} />
        <Icon__Text>작성한 글</Icon__Text>
      </Icon__Container>
    </Button__Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 40px;
`;

const Button__Container = styled.View`
  flex: 1;
`;

const Icon__Container = styled.TouchableOpacity`
  align-items: center;
`;

const styles = StyleSheet.create({
  icon: { marginBottom: 10 },
});

const Icon__Text = styled(H3)`
  color: ${({ theme }) => theme.color.grey.icon};
`;
