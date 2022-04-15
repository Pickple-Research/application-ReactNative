import React from "react";
import { StyleSheet, View, TextInput, TextInputProps } from "react-native";
import { theme } from "@Theme/theme";

export function PartnerMainSearch() {
  return (
    <View style={styles.container}>
      <SearchBox
        onSubmitEditing={() => {
          console.log("submitted");
        }}
      />
    </View>
  );
}

/**
 * #STRUCTURE
 * 스타트업 검색어 입력 받는 TextInput.
 * 기능과 style 속성은 길어지는 경우 분리해서 관리합니다.
 * @author 현웅
 */
function SearchBox(props?: TextInputProps) {
  return (
    <TextInput
      {...props}
      style={styles.searchInput}
      placeholder="스타트업을 검색해보세요"
      placeholderTextColor={theme.color.inactive_button}
      numberOfLines={1}
      autoCorrect={false}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  searchIcon: {},
  searchInput: {
    paddingHorizontal: 15,
    color: theme.color.inactive_button,
    backgroundColor: "#ffffff",
  },
});
