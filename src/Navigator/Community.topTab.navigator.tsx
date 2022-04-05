import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { MainCommunityInterestScreen, MainCommunityInterestScreenProps, MainCommunityVoteScreen, MainCommunityVoteScreenProps } from '@Screen/Main/MainCommunity';

const communityTopTab = createMaterialTopTabNavigator();

export function CommunityTopTabNavigator() {
    return (
        <communityTopTab.Navigator>
            <communityTopTab.Screen
                name="MainCommunityInterestScreen"
                component={MainCommunityInterestScreen}
                options={{
                    title: "관심사"
                }}
            />
            <communityTopTab.Screen
                name="MainCommunityVoteScreen"
                component={MainCommunityVoteScreen}
                options={{
                    title: "자유",
                }}
            />
        </communityTopTab.Navigator>
    )
}

export type communityTopProps = {
    "MainCommunityInterestScreen": MainCommunityInterestScreenProps
    "MainCommunityVoteScreen": MainCommunityVoteScreenProps
}