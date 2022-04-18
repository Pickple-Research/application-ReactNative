import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import { screenStyles } from "./Research.main.screen";
import { Carousel } from "@Component/React";

export function ResearchMainRecommend() {
  return (
    <Container>
      <Greeting username="픽플리" />
      <RecommendedResearchesList />
    </Container>
  );
}

function Greeting({ username }: { username: string }) {
  return (
    <Greeting__Container style={{ ...screenStyles.padding }}>
      <Greeting__Text>
        {`안녕하세요, ${username}님!\n이 리서치 어떠세요?`}
      </Greeting__Text>
      <Greeting__ProfileIcon />
    </Greeting__Container>
  );
}

function RecommendedResearchesList() {
  const data = [
    {
      title:
        "MZ 세대 여성들의 피트니스와 웰니스에 대한 인식 조사를 행하는 것의 검토를 묻는 것에 대한 여부를 허락받아도 되는지에 대한 양해를 구해도 되는지 여쭙고 싶습니다",
      tags: ["마케팅", "스타트업"],
      targets: ["여성", "20대", "30대"],
    },
    { title: "", tags: ["디자인", "기획"], targets: ["20대 초반", "대학생"] },
    {
      title: "아날로그와 디자인 제품 사용에 대한 선호도 조사",
      tags: ["디자인", "제품"],
      targets: ["20대 초반", "대학생"],
    },
  ];

  return (
    <Carousel
      style={styles.carouselContainer}
      contentContainerStyle={styles.carouselContentContainer}
      data={data}
      PageComponent={RecommendedResearchButton}
    />
  );
}

type ResearchProps = {
  title: string;
  tags: string[];
  targets: string[];
};

function RecommendedResearchButton({ item }: { item: ResearchProps }) {
  return (
    <ResearchButton__Container>
      <ResearchButton__TagGiftContainer>
        <ResearchButton__ResearcherTypeContainer>
          <ResearchButton__ResearcherTypeText>
            기업
          </ResearchButton__ResearcherTypeText>
        </ResearchButton__ResearcherTypeContainer>
        <ResearchButton__GiftImageContainer>
          <ResearchButton__GiftImage />
        </ResearchButton__GiftImageContainer>
      </ResearchButton__TagGiftContainer>
      <ResearchButton__ResearchTagText>
        {item.tags
          .map(tag => {
            return "#" + tag;
          })
          .join(" ")}
      </ResearchButton__ResearchTagText>
      <ResearchButton__TitleText textBreakStrategy="simple" numberOfLines={2}>
        {item.title}
      </ResearchButton__TitleText>
      <ResearchButton__TargetText>
        {item.targets.join(" · ")}
      </ResearchButton__TargetText>
    </ResearchButton__Container>
  );
}

const styles = StyleSheet.create({
  // PartnerAdList()
  carouselContainer: {},
  carouselContentContainer: { paddingHorizontal: 10 },
});

const Container = styled.View`
  margin-bottom: 20px;
`;

// Greeting()
const Greeting__Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
`;

const Greeting__Text = styled.Text`
  color: black;
  font-size: 18px;
  font-weight: bold;
  line-height: 30px;
`;

const Greeting__ProfileIcon = styled.View`
  width: 64px;
  height: 64px;
  border-radius: 100px;
  background-color: pink;
`;

// RecommendedResearchButton()
const ResearchButton__Container = styled.View`
  width: 260px;
  padding: 10px 14px 18px 16px;
  border: 1px solid ${({ theme }) => theme.color.background_purple};
  border-radius: 12px;
  margin: 0px 6px;
`;

const ResearchButton__TagGiftContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const ResearchButton__ResearcherTypeContainer = styled.View`
  background-color: ${({ theme }) => theme.color.pastel_skyblue};
  padding: 4px 10px;
  border-radius: 100px;
`;

const ResearchButton__ResearcherTypeText = styled.Text`
  color: ${({ theme }) => theme.color.text_skyblue};
  font-size: 12px;
  font-weight: bold;
`;

const ResearchButton__GiftImageContainer = styled.View``;

const ResearchButton__GiftImage = styled.View`
  width: 32px;
  height: 32px;
  background-color: gray;
  border-radius: 100px;
`;

const ResearchButton__ResearchTagText = styled.Text`
  color: ${({ theme }) => theme.color.text_skyblue};
  font-size: 12px;
  margin-bottom: 4px;
`;

const ResearchButton__TitleText = styled.Text`
  width: 85%;
  color: black;
  font-size: 16px;
  font-weight: bold;
  line-height: 21px;
  margin-bottom: 10px;
`;

const ResearchButton__TargetText = styled.Text`
  color: ${({ theme }) => theme.color.text_color_8f};
  font-size: 14px;
`;
