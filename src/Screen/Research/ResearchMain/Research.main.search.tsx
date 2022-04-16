import React from "react";
import { StyleSheet, TextInputProps } from "react-native";
import styled from "styled-components/native";
import { screenStyles } from "./Research.main.screen";
import { theme } from "@Theme/index";
import SearchIcon from "@Resource/svg/search-icon.svg";

export function ResearchMainSearch() {
  return (
    <Container>
      <SearchBox />
    </Container>
  );
}

function SearchBox(props?: TextInputProps) {
  return (
    <SearchBox__Container
      style={{ ...screenStyles.padding, ...styles.searchBox__containerShadow }}>
      <SearchIcon />
      <SearchBox__Input
        onSubmitEditing={props?.onSubmitEditing}
        placeholder="스타트업을 검색해보세요"
        placeholderTextColor={theme.color.inactive_button}
        numberOfLines={1}
        autoCorrect={false}
      />
    </SearchBox__Container>
  );
}

const styles = StyleSheet.create({
  searchBox__containerShadow: {
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
});

const Container = styled.View`
  margin-bottom: 20px;
`;

const SearchBox__Container = styled.View`
  align-items: center;
  flex-direction: row;
  background-color: white;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const SearchBox__Input = styled.TextInput`
  width: 100%;
  align-items: center;
  color: ${({ theme }) => theme.color.inactive_button};
  padding: 0px 10px;
`;