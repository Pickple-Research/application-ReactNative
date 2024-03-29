import React from "react";
import { TextInputProps } from "react-native";
import styled from "styled-components/native";
import { theme } from "src/Theme";
import { globalStyles } from "src/Style";

/**
 * 파트너 랜딩 페이지 검색 섹션
 * @author 현웅
 */
export function PartnerLandingSearch() {
  return (
    <Container style={{ ...globalStyles.screen__horizontalPadding }}>
      <SearchBox
        onSubmitEditing={() => {
          console.log("submitted");
        }}
      />
    </Container>
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
    <SearchBox__Input
      onSubmitEditing={props?.onSubmitEditing}
      placeholder="스타트업을 검색해보세요"
      placeholderTextColor={theme.color.purple.inactive}
      numberOfLines={1}
      autoCorrect={false}
    />
  );
}

const Container = styled.View`
  margin-bottom: 15px;
`;

const SearchBox__Input = styled.TextInput`
  color: ${({ theme }) => theme.color.purple.inactive};
  background-color: white;
`;
