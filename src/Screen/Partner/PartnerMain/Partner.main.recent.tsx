import React from "react";
import { StyleSheet, Text } from "react-native";
import styled from "styled-components/native";
import { screenStyles } from "./Partner.main.screen";

export function PartnerMainRecent() {
  return (
    <Container style={styles.container}>
      <Header />
      <PartnerTypeButtonsList />
      <RecentPartnersList />
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
      <Text style={screenStyles.headerTitleText}>최신</Text>
      <Text style={screenStyles.headerTitleText}>최신순</Text>
    </Header__Container>
  );
}

function PartnerTypeButtonsList() {
  const data = [
    { title: "스타트업", selected: true },
    { title: "학회", selected: true },
    { title: "랩실", selected: false },
  ];

  return (
    <TypeButtonsList__Container
      style={{
        ...screenStyles.padding,
      }}>
      {data.map(tag => {
        return <PartnerTypeButton key={tag.title} tag={tag} />;
      })}
    </TypeButtonsList__Container>
  );
}

function PartnerTypeButton({
  tag,
}: {
  tag: { title: string; selected: boolean };
}) {
  return (
    <TypeButton__Container selected={tag.selected}>
      <TypeButton__Text selected={tag.selected}>{tag.title}</TypeButton__Text>
    </TypeButton__Container>
  );
}

function RecentPartnersList() {
  return null;
}

const styles = StyleSheet.create({
  container: {},
});

const Container = styled.View``;

// Header()
const Header__Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

// TypeButtons()
const TypeButtonsList__Container = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`;

const TypeButton__Container = styled.TouchableOpacity<{ selected: boolean }>`
  background-color: ${({ selected, theme }) =>
    selected ? theme.color.pastel_skyblue : theme.color.inactive_button_gray};
  padding: 8px 15px;
  margin-right: 8px;
  border-radius: 6px;
`;

const TypeButton__Text = styled.Text<{ selected: boolean }>`
  color: ${({ selected, theme }) =>
    selected ? theme.color.text_skyblue : theme.color.text_color_bbb};
  font-weight: bold;
`;

// RecentPartnersList()
