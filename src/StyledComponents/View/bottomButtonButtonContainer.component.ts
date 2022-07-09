import styled from "styled-components/native";

/**
 * 스크린 하단 버튼(실제 눌리는 부분)의 콘테이너 스타일입니다.
 * TODO: Android에서는 60px 의 높이를 가지고, iOS에서는 80px의 높이와 20px의 하단 padding을 가집니다.
 * @author 현웅
 */
export const BottomButton__ButtonContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: ${({ theme }) => theme.size.bottomButtonHeight};
`;
