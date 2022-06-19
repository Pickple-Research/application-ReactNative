import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MypageScrapResearchScreen, MypageScrapResearchScreenProps, MypageScrapVoteScreen, MypageScrapVoteScreenProps } from '@Screen/Mypage';

const MypageScrapTopTab = createMaterialTopTabNavigator<MypageScrapTopTabProps>();

export type MypageScrapTopTabProps = {
    MypageScrapResearchScreen: MypageScrapResearchScreenProps,
    MypageScrapVoteScreen: MypageScrapVoteScreenProps,
}

/**
 * 마이페이지의 스크랩 관련 페이지가 모이는 네비게이터입니다.
 * @author 원제
 */

export function MypageScrapTopNavigator() {
    return (
        <MypageScrapTopTab.Navigator>
            <MypageScrapTopTab.Screen
                name="MypageScrapResearchScreen"
                component={MypageScrapResearchScreen}
                options={{
                    title: "리서치"
                }}
            />
            <MypageScrapTopTab.Screen
                name="MypageScrapVoteScreen"
                component={MypageScrapVoteScreen}
                options={{
                    title: "투표글"
                }}
            />
        </MypageScrapTopTab.Navigator>
    )
}