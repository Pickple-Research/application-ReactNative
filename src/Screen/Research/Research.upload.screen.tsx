import { popBackHandler } from '@Util/backHandler.util';
import React from 'react';
import { Text, View } from "react-native";

export function ResearchUploadScreen({ navigation }: any) {
  popBackHandler(navigation)
  return (
    <View>
        <Text>ResearchUploadScreen</Text>
    </View>
  );
}

export type ResearchUploadScreenProps = {
  
}