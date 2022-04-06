import React from 'react'
import { BackHandler, Text, View } from "react-native";
import { popBackHandler } from '@Util/backHandler.util';

export function ResearchDetailScreen( { navigation }: any) {
  popBackHandler(navigation)
  return (
    <View>
        <Text>ResearchDetailScreen</Text>
    </View>
  );
}

export type ResearchDetailScreenProps = {
  
}

