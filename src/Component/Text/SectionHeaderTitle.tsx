import React from "react";
import { StyleProp, TextStyle } from "react-native";
import styled from "styled-components/native";
import { H2 } from "src/StyledComponents/Text";

/**
 * 섹션 헤더가 사용되는 페이지를 명시합니다.
 * @param Screen 기본값. 일반적인 페이지의 섹션 헤더입니다.
 * @param ResearchUpload 리서치 업로드 페이지에 사용되는 섹션 헤더입니다.
 * @author 현웅
 */
type SectionHeaderTitleType = "Screen" | "ResearchUpload";

/**
 * 섹션 헤더 텍스트입니다.
 * @param title 섹션명
 * @param bold 볼드체 적용 여부. 기본적으로 true입니다.
 * @param style 추가 스타일
 * @param type 섹션 헤더가 사용되는 곳 (일반 페이지 or 리서치 업로드 페이지)
 * @author 현웅
 */
export function SectionHeaderTitle({
  title,
  bold = true,
  style,
  type = "Screen",
}: {
  title: string;
  bold?: boolean;
  style?: StyleProp<TextStyle>;
  type?: SectionHeaderTitleType;
}) {
  switch (type) {
    case "Screen":
      return (
        <SectionHeaderTitle__Text style={style} bold={bold}>
          {title}
        </SectionHeaderTitle__Text>
      );
    case "ResearchUpload":
      return null;
  }
}

const SectionHeaderTitle__Text = styled(H2)<{ bold: boolean }>`
  color: black;
  font-weight: ${props => (props.bold ? "bold" : "normal")};
`;

const ResearchUploadSectionHeader__Text = styled(H2)`
  color: black;
  font-weight: bold;
`;
