import React from "react";
import styled from "styled-components/native";
import { screenStyles } from "./Community.main.screen";
import SearchIcon from "@Resource/svg/search-icon.svg";
import AlarmIcon from "@Resource/svg/alarm-icon.svg";
import { StyleSheet } from "react-native";

export function CommunityMainSearch() {
  return (
    <Container style={{ ...screenStyles.padding }}>
      <SearchBox__Container>
        <SearchIcon style={styles.searchIcon} />
        <SearchBox__Input placeholder="검색어를 입력하세요" />
      </SearchBox__Container>
      <AlarmIcon />
    </Container>
  );
}

const styles = StyleSheet.create({
  searchIcon: {
    marginRight: 10,
  },
});

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

const SearchBox__Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.color.background_purple};
  padding: 5px 20px;
  margin-right: 15px;
  border-radius: 100px;
`;

const SearchBox__Input = styled.TextInput`
  flex: 1;
  padding: 0px;
`;
