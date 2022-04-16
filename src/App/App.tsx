import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainBottomTabNavigator } from "@Navigator/index";
import { SplashScreen } from "@Screen/index";
import { useUserStore } from "@Zustand/index";
import { ThemeProvider } from "styled-components/native";
import { lightThemeColors, darkThemeColors } from "@Theme/index";

export default function App() {
  const [initialLoaded, setInitialLoaded] = useState<boolean>(false);
  const [useLightMode, setUseLightMode] = useState<boolean>(true);
  const userInfo = useUserStore(state => state.userInfo);

  useEffect(() => {
    // console.log(`initial userInfo: ${userInfo}`);
    setTimeout(() => {
      setInitialLoaded(true);
    }, 1500);

    return;
  }, []);

  if (!initialLoaded) {
    return <SplashScreen />;
  }

  return (
    <ThemeProvider
      // theme={{ color: useLightMode ? lightThemeColors : darkThemeColors }}>
      theme={{ color: lightThemeColors }}>
      <NavigationContainer>
        <MainBottomTabNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
