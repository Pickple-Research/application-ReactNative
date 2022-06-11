import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { AppStackNavigator } from "src/Navigator";
import { SplashScreen } from "src/Screen";
import { lightThemeColors, darkThemeColors, themeSizes } from "src/Theme";

import { useVoteStore } from "src/Zustand";
import { getRecentVotes } from "src/Axios";

/**
 * 앱이 시작되는 곳입니다.
 * @author 현웅
 */
export default function App() {
  const [initialLoaded, setInitialLoaded] = useState<boolean>(false);
  const [useLightMode, setUseLightMode] = useState<boolean>(true);

  const setVotes = useVoteStore(state => state.setVotes);

  async function loadInitialData() {
    const recentVotes = await getRecentVotes();
    if (recentVotes !== null) setVotes(recentVotes);
  }

  //? 앱이 시작되면, research 정보와 자신이 팔로우한 기업 소식을 서버에 요청하여 받아옵니다.
  //? 해당 작업이 수행되는 동안 SplashScreen이 보여집니다.
  useEffect(() => {
    loadInitialData();
    setTimeout(() => {
      setInitialLoaded(true);
    }, 500);

    return;
  }, []);

  if (!initialLoaded) {
    return (
      <ThemeProvider theme={{ color: lightThemeColors, size: themeSizes }}>
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
      // theme={{ color: useLightMode ? lightThemeColors : darkThemeColors }}>
      theme={{ color: lightThemeColors, size: themeSizes }}>
      <Container>
        <NavigationContainer>
          <AppStackNavigator />
        </NavigationContainer>
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.color.grey.white};
`;
