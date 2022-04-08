import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AppStackNavigator } from "@Navigator/App.stack.navigator";

export default function App() {
  const [loadingEnds, setLoadingEnds] = useState<boolean>(false);

  useEffect(() => {
    const loadInfo = () =>
      setTimeout(() => {
        setLoadingEnds(true);
      }, 2000);
    loadInfo();
    return;
  }, []);

  if (!loadingEnds) {
    return <Text>로딩 중입니다.</Text>;
  }

  return (
    <NavigationContainer>
      <AppStackNavigator />
    </NavigationContainer>
  );
}
