import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

export function ResearchMainScreen({ navigation }: any) {
  return (
    <View>
      <Text>Research Main Screen</Text>
      <TouchableOpacity
        style={{ backgroundColor: "red", width: 100, height: 100 }}
        onPress={() => {
          navigation.navigate("ResearchDetailScreen");
          navigation.setOptions({
            tabBarStyle: { display: "none" },
          });
        }}></TouchableOpacity>
    </View>
  );
}

export type ResearchMainScreenProps = {};
