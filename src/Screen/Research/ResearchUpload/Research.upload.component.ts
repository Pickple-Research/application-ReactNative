import styled from "styled-components/native";
import { H3 } from "src/StyledComponents/Text";

/**
 * 리서치 업로드 페이지에서 사용되는 섹션 헤더의 View 입니다.
 * @author 현웅
 */
export const ResearchUpload__SectionHeader__Container = styled.View`
  flex-direction: row;
  padding: 0px 20px;
  margin-bottom: 10px;
`;

/**
 * 리서치 업로드 페이지 중 기프티콘과 추가 크레딧 입력 시
 * 섹션을 펼치고 닫을 때 사용하는 영역입니다.
 * @author 현웅
 */
export const ResearchUpload__CollapsibleSection__Container = styled.TouchableOpacity`
  flex-direction: row;
  background-color: #f2f2f2;
  padding-top: 12px;
  padding-bottom: 12px;
`;

export const ResearchUpload__CollapsibleSection__Content = styled(H3)<{
  bold: boolean;
}>`
  color: #333333;
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
`;
