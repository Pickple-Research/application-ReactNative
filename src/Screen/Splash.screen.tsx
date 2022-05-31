import React, { useEffect } from "react";
import styled from "styled-components/native";
import { H2 } from "src/StyledComponents/Text";

/**
 * 앱 실행시 백그라운드에서 정보를 받아오는 동안 보여주는 화면입니다.
 * @author 현웅
 */
export function SplashScreen() {
  useEffect(() => {
    //TODO: 데이터 수신
    // getData();
    return;
  }, []);

  // async function getData() {
  //   await Promise.all([getPartnerData, getResearchData, getVoteData]);
  // }

  // async function getPartnerData() {}
  // async function getResearchData() {}
  // async function getVoteData() {}

  return (
    <Container>
      <ServiceLogo
        source={require("src/Resource/png/splash-screen-logo.png")}
      />
      <ServiceDescription__Container>
        <ServiceDescription>커뮤니티형 리서치 플랫폼</ServiceDescription>
      </ServiceDescription__Container>
    </Container>
  );
}

const Container = styled.View`
  position: relative;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const ServiceLogo = styled.Image`
  width: 100%;
  margin-bottom: 120px;
`;

const ServiceDescription__Container = styled.View`
  position: absolute;
  bottom: 50px;
  flex: 1;
  flex-direction: row;
  justify-content: center;
`;

const ServiceDescription = styled(H2)`
  justify-content: center;
  color: #555555;
  letter-spacing: 6px;
`;
