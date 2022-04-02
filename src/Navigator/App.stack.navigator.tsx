import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackNavigator, AuthStackProps } from './Auth.stack.navigator';
import { MainBottomTabNavigator, MainBottomTabProps } from './Main.bottomTab.navigator';

export const AppStack = createNativeStackNavigator<AppStackProps>()

export type AppStackProps = {
    AuthStack: AuthStackProps
    MainBottomTab: MainBottomTabProps
}

/**
 * 사용자가 계정에 로그인 되어있지 않다면 거치게 되는 stack 입니다
 * 로그인 페이지, 회원가입 페이지 등을 담당합니다
 * @author 정원제
 */
export function AppStackNavigator() {
    return (
        <AppStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <AppStack.Screen name='AuthStack' component={AuthStackNavigator} />
            <AppStack.Screen name='MainBottomTab' component={MainBottomTabNavigator} />
        </AppStack.Navigator>
    )
}