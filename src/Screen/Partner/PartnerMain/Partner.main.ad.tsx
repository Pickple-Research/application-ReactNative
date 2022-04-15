import React from "react";
import { StyleSheet, Text } from "react-native";
import styled from "styled-components/native";
import { screenStyles } from "./Partner.main.screen";
import { Carousel } from "@Component/React";

/**
 * 파트너 랜딩 페이지 광고 섹션
 * @author 현웅
 */
export function PartnerMainAd() {
  return (
    <Container>
      <Header />
      <PartnersAdList />
    </Container>
  );
}

function Header() {
  return (
    <Header__Container
      style={{
        ...screenStyles.padding,
        ...screenStyles.headerContainer,
      }}>
      <Text style={screenStyles.headerTitleText}>광고</Text>
      <Text style={screenStyles.headerMoreText}>MORE</Text>
    </Header__Container>
  );
}

function PartnersAdList() {
  const data = [
    {
      partnerName: "A 스타트업",
      tags: ["디자인", "기획", "마케팅"],
      color: "red",
    },
    { partnerName: "B 스타트업", tags: ["기획", "개발"], color: "orange" },
    { partnerName: "C 스타트업", tags: ["디자인", "기획"], color: "yellow" },
    { partnerName: "D 스타트업", tags: ["디자인"], color: "green" },
    { partnerName: "E 스타트업", tags: ["마케팅"], color: "blue" },
    { partnerName: "F 스타트업", tags: ["디자인", "마케팅"], color: "navy" },
    { partnerName: "G 스타트업", tags: ["개발", "마케팅"], color: "purple" },
  ];

  return (
    <Carousel
      style={styles.carouselContainer}
      contentContainerStyle={styles.carouselContentContainer}
      data={data}
      PageComponent={PartnerAdButton}
      fullPage={false}
      useScrollBreak={false}
    />
  );
}

type PartnerAd = {
  partnerName: string;
  tags: string[];
  color: string;
};

/**
 * 캐러샐에 들어갈 광고 버튼 디자인
 * @author 현웅
 */
function PartnerAdButton({ item }: { item: PartnerAd }) {
  return (
    <AdButton__Container>
      <AdButton__ImageContainer />
      <AdButton__BottomContainer>
        <AdButton__IconContainer>
          <AdButton__Icon color={item.color} />
        </AdButton__IconContainer>
        <AdButton__NameTagContainer>
          <AdButton__NameText>{item.partnerName}</AdButton__NameText>
          <AdButton__TagContainer>
            {item.tags.splice(0, 2).map(tag => {
              return (
                <AdButton__TagText key={tag}>{`#${tag} `}</AdButton__TagText>
              );
            })}
          </AdButton__TagContainer>
        </AdButton__NameTagContainer>
        <FollowButton />
      </AdButton__BottomContainer>
    </AdButton__Container>
  );
}

function FollowButton() {
  return (
    <FollowButton__Container activeOpacity={0.6}>
      <FollowButton__Text>팔로우</FollowButton__Text>
    </FollowButton__Container>
  );
}

const styles = StyleSheet.create({
  // PartnerAdList()
  carouselContainer: {},
  carouselContentContainer: { paddingHorizontal: 20 },
});

const Container = styled.View`
  margin-bottom: 45px;
`;

// Header()
const Header__Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

// PartnerAdButton()
const AdButton__Container = styled.View`
  padding: 0px 5px;
`;

const AdButton__ImageContainer = styled.View`
  height: 105px;
  background-color: gray;
  border-radius: 6px;
  margin-bottom: 8px;
`;

const AdButton__BottomContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const AdButton__IconContainer = styled.View`
  padding: 5px;
  margin-right: 10px;
`;

const AdButton__Icon = styled.View<{ color: string }>`
  width: 46px;
  height: 46px;
  border-radius: 23px;
  background-color: ${({ color }) => color};
`;

const AdButton__NameTagContainer = styled.View`
  justify-content: space-between;
  width: 120px;
`;

const AdButton__NameText = styled.Text`
  color: black;
  font-size: 14px;
  font-weight: bold;
  padding-bottom: 6px;
`;

const AdButton__TagContainer = styled.View`
  flex-direction: row;
`;

const AdButton__TagText = styled.Text`
  color: ${({ theme }) => theme.color.text_skyblue};
  font-size: 12px;
  padding-right: 3px;
`;

const FollowButton__Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 36px;
  background-color: ${({ theme }) => theme.color.main_skyblue};
  border-radius: 18px;
`;

const FollowButton__Text = styled.Text`
  color: white;
  font-size: 14px;
  font-weight: bold;
`;
