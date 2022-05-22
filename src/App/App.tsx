import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components/native";
import { LandingBottomTabNavigator } from "@Navigator/index";
import { SplashScreen } from "@Screen/index";
import { lightThemeColors, darkThemeColors, themeSizes } from "@Theme/index";

/**
 * 앱이 시작되는 곳입니다.
 * @author 현웅
 */
export default function App() {
  const [initialLoaded, setInitialLoaded] = useState<boolean>(false);
  const [useLightMode, setUseLightMode] = useState<boolean>(true);

  //? 앱이 시작되면, research 정보와 자신이 팔로우한 기업 소식을 서버에 요청하여 받아옵니다.
  //? 해당 작업이 수행되는 동안 SplashScreen이 보여집니다.
  useEffect(() => {
    setTimeout(() => {
      setInitialLoaded(true);
    }, 500);

    return;
  }, []);

  if (!initialLoaded) {
    return <SplashScreen />;
  }

  return (
    <ThemeProvider
      //? styled-components의 ThemeProvider를 이용하여 theme을 배포합니다.
      //? useLightMode가 참이라면 theme.color의 값은 lightThemeColors가 되고,
      //? 그렇지 않다면 darkThemeColor가 됩니다.
      // theme={{ color: useLightMode ? lightThemeColors : darkThemeColors }}>
      theme={{ color: lightThemeColors, size: themeSizes }}>
      <NavigationContainer>
        <LandingBottomTabNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
