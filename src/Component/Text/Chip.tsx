import React from "react";
import { StyleProp, TextStyle } from "react-native";
import styled, { DefaultTheme } from "styled-components/native";
import { DetailText } from "src/StyledComponents/Text";

/**
 * Chip 종류
 * @author 현웅
 */
type ChipType =
  | "PARTNER_TYPE"
  | "RESEARCH_TYPE" // 리서치 타입 선택된 경우 사용되는 스타입 (용처: Research.type.carousel.tsx)
  | "PARTNER_NEW_RESEARCH" // 파트너 새 리서치 (용처: Partner.category.partners.tsx)
  | "CREDIT_AVAILABLE" // 참여가능한 리서치 크레딧
  | "CREDIT_UNAVAILABLE"; // 참여했거나 만료된 리서치 크레딧

/**
 * 클릭할 수 없는, 알약 형태의 디자인을 가진 텍스트입니다.
 * 클릭 기능이 필요한 경우 ./Button.component.tsx#PillButton 을 활용하세요.
 * @author 현웅
 */
export function Chip({
  content,
  type,
  style,
}: {
  content: string;
  type: ChipType;
  style?: StyleProp<TextStyle>;
}) {
  switch (type) {
    case "PARTNER_TYPE":
      return <PartnerTypeChip style={style}>{content}</PartnerTypeChip>;
    case "RESEARCH_TYPE":
      return <ResearchTypeChip style={style}>{content}</ResearchTypeChip>;
    case "PARTNER_NEW_RESEARCH":
      return (
        <PartnerNewResearchChip style={style}>{content}</PartnerNewResearchChip>
      );
    case "CREDIT_AVAILABLE":
      return (
        <AvailableResearchCreditChip style={style}>
          {content}
        </AvailableResearchCreditChip>
      );
    case "CREDIT_UNAVAILABLE":
      return (
        <UnavailableResearchCreditChip style={style}>
          {content}
        </UnavailableResearchCreditChip>
      );
  }
}

const Chip__Text = styled(DetailText)`
  font-weight: bold;
  border-radius: 100px;
`;

const PartnerTypeChip = styled(Chip__Text)`
  color: ${({ theme }) => theme.color.text_skyblue};
  background-color: ${({ theme }) => theme.color.pastel_skyblue};
  padding: 3px 10px;
`;

const ResearchTypeChip = styled(Chip__Text)`
  color: white;
  background-color: #444444;
  padding: 10px 15px;
`;

const PartnerNewResearchChip = styled(Chip__Text)`
  color: ${({ theme }) => theme.color.text_skyblue};
  background-color: ${({ theme }) => theme.color.pastel_skyblue};
  padding: 8px 12px;
`;

const AvailableResearchCreditChip = styled(Chip__Text)`
  color: ${({ theme }) => theme.color.text_skyblue};
  background-color: ${({ theme }) => theme.color.pastel_skyblue};
  padding: 3px 10px;
`;

const UnavailableResearchCreditChip = styled(Chip__Text)`
  color: ${({ theme }) => theme.color.text_purple};
  background-color: #444444;
  padding: 3px 10px;
`;
