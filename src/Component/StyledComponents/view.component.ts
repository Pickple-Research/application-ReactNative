import styled from "styled-components/native";

/**
 * 스크린 섹션별 헤더의 View 스타일입니다.
 * 기본 패딩과 하단 마진이 포함되어 있습니다.
 * @author 현웅
 */
export const SectionHeaderContainer = styled.View`
  padding: 0px 20px;
  margin-bottom: 20px;
`;

/**
 * more 버튼이 포함된 섹션 헤더의 View 스타일입니다. 다음과 같이 활용하면 됩니다:
 *
 * @example
 * import { SectionHeaderTitle, MoreText } from "@Component/StyledComponents"
 * import { SectionHeaderMoreContainer } from "@Component/StyledComponents"
 *
 * function SectionHeader(){
 *  return (
 *   <SectionHeaderMoreContainer>
 *     <SectionHeaderTitle title={"최신 리서치"}/>
 *     <MoreText/>
 *   </SectionHeaderMoreContainer>
 *  )
 * }
 *
 * @author 현웅
 */
export const SectionHeaderMoreContainer = styled(SectionHeaderContainer)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HorizontalView = styled.View`
  flex-direction: row;
`;

export const HorizontalSpaceBetweenView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
