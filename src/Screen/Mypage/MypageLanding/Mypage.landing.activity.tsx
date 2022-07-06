import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackProps } from "src/Navigator";
import { H3 } from "src/StyledComponents/Text";
import shallow from "zustand/shallow";
import { useAppStore, useUserStore } from "src/Zustand";
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

  const { setRequireLoginModalVisible, setRequireLoginModleText } = useAppStore(
    state => ({
      setRequireLoginModalVisible: state.setRequireLoginModalVisible,
      setRequireLoginModleText: state.setRequireLoginModleText,
    }),
    shallow,
  );

  const user = useUserStore(state => state.user);

  function onPressIcon(navigate: () => void) {
    if (user._id === "") {
      setRequireLoginModleText("MYPAGE");
      setRequireLoginModalVisible(true);
      return;
    }
    navigate();
  }

  return (
    <Container>
      <ResearchButton
        onPressIcon={() => {
          onPressIcon(() => {
            navigation.navigate("MypageParticipatedResearchScreen", {});
          });
        }}
      />
      <VoteButton
        onPressIcon={() => {
          onPressIcon(() => {
            navigation.navigate("MypageParticipatedVoteScreen", {});
          });
        }}
      />
      <ScrapButton
        onPressIcon={() => {
          onPressIcon(() => {
            navigation.navigate("MypageScrappedScreen", {});
          });
        }}
      />
      <MyUploadButton
        onPressIcon={() => {
          onPressIcon(() => {
            navigation.navigate("MypageUploadedScreen", {});
          });
        }}
      />
    </Container>
  );
}

function ResearchButton({ onPressIcon }: { onPressIcon: () => void }) {
  return (
    <Button__Container>
      <Icon__Container activeOpacity={1} onPress={onPressIcon}>
        <MarkedBagIcon style={styles.icon} />
        <Icon__Text>참여 리서치</Icon__Text>
      </Icon__Container>
    </Button__Container>
  );
}

function VoteButton({ onPressIcon }: { onPressIcon: () => void }) {
  return (
    <Button__Container>
      <Icon__Container activeOpacity={1} onPress={onPressIcon}>
        <MarkedBookIcon style={styles.icon} />
        <Icon__Text>투표한 글</Icon__Text>
      </Icon__Container>
    </Button__Container>
  );
}

function ScrapButton({ onPressIcon }: { onPressIcon: () => void }) {
  return (
    <Button__Container>
      <Icon__Container activeOpacity={1} onPress={onPressIcon}>
        <ScrapIcon style={styles.icon} />
        <Icon__Text>스크랩</Icon__Text>
      </Icon__Container>
    </Button__Container>
  );
}

function MyUploadButton({ onPressIcon }: { onPressIcon: () => void }) {
  return (
    <Button__Container>
      <Icon__Container activeOpacity={1} onPress={onPressIcon}>
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
  padding: 0px 30px;
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
