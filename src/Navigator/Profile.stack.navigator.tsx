import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainProfileScreen, MainProfileScreenProps } from "@Screen/User";
import { BackHandler } from 'react-native';

export const ProfileStack = createNativeStackNavigator<ProfileStackProps>()


export function ProfileStackNavigator() {
    
    return (    
        <ProfileStack.Navigator screenOptions={{headerTitle: ""}}>
            <ProfileStack.Screen
                name={"MainProfileScreen"}
                component={MainProfileScreen}
                />
        </ProfileStack.Navigator>
    )
}


export type ProfileStackProps = {
    "MainProfileScreen": MainProfileScreenProps
}

