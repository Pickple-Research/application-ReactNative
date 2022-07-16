import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { SectionHeaderText } from "src/Component/Text";
import { SectionHeader__Container } from "src/StyledComponents/View";
import { DetailText } from "src/StyledComponents/Text";
import CategoryIcon01 from "src/Resource/svg/category-icon01.svg";
import CategoryIcon02 from "src/Resource/svg/category-icon02.svg";
import CategoryIcon03 from "src/Resource/svg/category-icon03.svg";

/**
 * 파트너 랜딩 페이지 카테고리별 파트너 섹션
 * @author 현웅
 */
export function PartnerLandingCategory() {
  return (
    <Container>
      <SectionHeader />
      <CategoryList />
    </Container>
  );
}

function SectionHeader() {
  return (
    <SectionHeader__Container>
      <SectionHeaderText title="카테고리별 파트너" />
    </SectionHeader__Container>
  );
}

function CategoryList() {
  return (
    <CategoryList__Container>
      <CategoryListItem index={1} />
      <CategoryListItem index={2} />
      <CategoryListItem index={3} />
      <CategoryListItem index={4} />
      <CategoryListItem index={5} />
      <CategoryListItem index={6} />
      <CategoryListItem index={7} />
      <CategoryListItem index={8} />
      <CategoryListItem index={9} />
      <CategoryListItem index={10} />
    </CategoryList__Container>
  );
}

function CategoryListItem({ index }: { index: number }) {
  return (
    <CategoryListItem__Container>
      <CategoryIcon index={index} />
      <CategoryListItem__Text>{`카테고리${index}`}</CategoryListItem__Text>
    </CategoryListItem__Container>
  );
}

function CategoryIcon({ index }: { index: number }) {
  const left = index % 3;
  switch (left) {
    case 1:
      return <CategoryIcon01 style={styles.icon__marginBottom} />;
    case 2:
      return <CategoryIcon02 style={styles.icon__marginBottom} />;
    default:
      return <CategoryIcon03 style={styles.icon__marginBottom} />;
  }
}

const styles = StyleSheet.create({
  icon__marginBottom: {
    marginBottom: 12,
  },
});

const Container = styled.View`
  margin-bottom: 20px;
`;

// CategoryList()
const CategoryList__Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0px 10px;
`;

// CategoryListItem()
const CategoryListItem__Container = styled.View`
  align-items: center;
  width: 20%;
  margin-bottom: 30px;
`;

const CategoryListItem__Text = styled(DetailText)`
  color: ${({ theme }) => theme.color.grey.icon};
  font-weight: bold;
`;
