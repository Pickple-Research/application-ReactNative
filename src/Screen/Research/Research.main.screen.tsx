import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export function MainResearchScreen({ navigation }: any) {
  return (
    <View>
        <Text>MainResearch</Text>
        <TouchableOpacity style={{backgroundColor: "red", width: 100, height: 100}} onPress={() => {
          navigation.navigate("ResearchDetailScreen")
          navigation.setOptions({
            tabBarStyle: {display: "none"}
          })
          }}>
        
        </TouchableOpacity>
    </View>
  );
}

export type MainResearchScreenProps = {
  
}