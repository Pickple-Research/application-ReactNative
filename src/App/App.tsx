import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components/native";
import { MenuProvider } from "react-native-popup-menu";
import { NavigationContainer } from "@react-navigation/native";
import { AppStackNavigator } from "src/Navigator";
import { SplashScreen } from "src/Screen";
import { CompleteFillProfileModal } from "src/Modal";
import Toast from "react-native-toast-message";
import { toastConfig } from "src/Config";
import { useResearchStore, useVoteStore } from "src/Zustand";
import { axiosBootstrap } from "src/Axios";
import { themeColors, themeSizes } from "src/Theme";

/**
 * 앱이 시작되는 곳입니다.
 * @author 현웅
 */
export default function App() {
  const [initialLoaded, setInitialLoaded] = useState<boolean>(false);
  const [useLightMode, setUseLightMode] = useState<boolean>(true);

  const setResearches = useResearchStore(state => state.setResearches);
  const setVotes = useVoteStore(state => state.setVotes);

  async function loadInitialData() {
    const result = await axiosBootstrap();
    if (result !== null) {
      setResearches(result.researches);
      setVotes(result.votes);
      setInitialLoaded(true);
    }
    //TODO: 최초 정보 로드 실패 시 한번 더 핸들링
    setInitialLoaded(true);
  }

  //? 앱이 시작되면, research 정보와 자신이 팔로우한 기업 소식을 서버에 요청하여 받아옵니다.
  //? 해당 작업이 수행되는 동안 SplashScreen이 보여집니다.
  useEffect(() => {
    loadInitialData();
    return;
  }, []);

  if (!initialLoaded) {
    return (
      <ThemeProvider theme={{ color: themeColors(), size: themeSizes }}>
        <Container>
          <SplashScreen />
        </Container>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider
      //? styled-components의 ThemeProvider를 이용하여 theme을 배포합니다.
      //? useLightMode가 참이라면 theme.color의 값은 lightThemeColors가 되고,
      //? 그렇지 않다면 darkThemeColor가 됩니다.
      theme={{ color: themeColors(), size: themeSizes }}>
      <MenuProvider>
        <Container>
          <NavigationContainer>
            <AppStackNavigator />

            <CompleteFillProfileModal />
            <Toast config={toastConfig} />
          </NavigationContainer>
        </Container>
      </MenuProvider>
    </ThemeProvider>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.color.grey.white};
`;
