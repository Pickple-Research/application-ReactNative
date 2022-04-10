import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SplashScreen } from "@Screen/index";
import { MainBottomTabNavigator } from "@Navigator/index";

export default function App() {
  const [initialLoaded, setInitialLoaded] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setInitialLoaded(true);
    }, 1500);

    return;
  }, []);

  if (!initialLoaded) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <MainBottomTabNavigator />
    </NavigationContainer>
  );
}
