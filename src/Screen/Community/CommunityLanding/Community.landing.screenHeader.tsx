import React from "react";
import { ScreenHeader__Container } from "src/StyledComponents/View";
import { ScreenHeader__TitleText } from "src/StyledComponents/Text";

/**
 * 커뮤니티 랜딩 페이지 스크린 헤더입니다.
 * @author 현웅
 */
export function CommunityLandingScreenHeader() {
  return (
    <ScreenHeader__Container>
      <ScreenHeader__TitleText>커뮤니티</ScreenHeader__TitleText>
    </ScreenHeader__Container>
  );
}
