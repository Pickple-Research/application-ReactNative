import React from "react";
import { StyleProp, TextProps, TextStyle } from "react-native";
import styled from "styled-components/native";
import { ThemeColors } from "@Object/Type";

/**
 * 섹션 헤더의 타이틀 텍스트입니다.
 * ex. 홈 랜딩 페이지에서 '리서치', 'HOT 투표', '파트너' 에 해당하는 단어 스타일
 * @author 현웅
 */
export function SectionHeaderTitle({ title }: { title: string }) {
  return <SectionHeaderTitle__Text>{title}</SectionHeaderTitle__Text>;
}

const SectionHeaderTitle__Text = styled.Text`
  color: black;
  font-size: 16px;
  font-weight: bold;
`;

/**
 * 섹션 헤더의 more 텍스트입니다.
 * 눌렀을 때의 동작을 지정하려면 다음과 같이 설정합니다:
 * ```
 * <MoreText props={{ onPress:()=>{navigation.navigate("...")} }} />
 * ```
 * @author 현웅
 */
export function MoreText({ ...props }: { props?: TextProps }) {
  return <More__Text {...props}>more</More__Text>;
}

const More__Text = styled.Text`
  color: ${({ theme }) => theme.color.text_purple};
  font-size: 13px;
`;

/**
 * 클릭할 수 없는, 둥근 좌우 모서리 디자인을 가진 텍스트입니다.
 * 클릭이 필요한 경우 ./Button.component.tsx#PillButton 을 참고하세요.
 * @author 현웅
 */
export function Chip({
  content,
  type = "PRIMARY",
  style,
}: {
  content: string;
  type?: ChipType;
  style?: StyleProp<TextStyle>;
}) {
  return (
    <Chip__Text type={type} style={style}>
      {content}
    </Chip__Text>
  );
}

const Chip__Text = styled.Text<{ type: ChipType }>`
  color: ${({ type, theme }) => chipTextColor(type, theme.color)};
  background-color: ${({ type, theme }) =>
    chipBackgroundColor(type, theme.color)};
  font-size: 12px;
  font-weight: bold;
  padding: 3px 10px;
  border-radius: 100px;
`;

/**
 * Chip의 디자인 종류
 */
type ChipType = "PRIMARY" | "GRAY";

const chipTextColor = (type: ChipType, color: ThemeColors) => {
  switch (type) {
    case "PRIMARY":
      return color.text_purple;
    default:
      return "#EEEEEE";
  }
};

const chipBackgroundColor = (type: ChipType, color: ThemeColors) => {
  switch (type) {
    case "PRIMARY":
      return color.pastel_purple;
    default:
      return "#8F8F8F";
  }
};

/**
 * 파트너, 혹은 리서치의 태그 목록을 받아
 * '#디자인 #기획' 과 같은 형태로 만들어 반환합니다.
 * 추가적인 스타일이 필요한 경우 style 변수에 값을 전달합니다.
 * @author 현웅
 */
export function HashTags({
  tags,
  style,
}: {
  tags: string[];
  style?: StyleProp<TextStyle>;
}) {
  return (
    <HashTags__Text style={style}>
      {tags
        .map(tag => {
          return `#${tag}`;
        })
        .join(`  `)}
    </HashTags__Text>
  );
}

const HashTags__Text = styled.Text`
  color: ${({ theme }) => theme.color.text_purple};
  font-size: 12px;
`;
