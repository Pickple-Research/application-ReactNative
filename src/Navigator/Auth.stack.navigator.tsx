import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from 'src/Screen/Auth';

export const AuthStack = createNativeStackNavigator<AuthStackProps>()

export type AuthStackProps = {
    Login: any
}
/**
 * 사용자가 계정에 로그인 되어있지 않다면 거치게 되는 stack 입니다
 * 로그인 페이지, 회원가입 페이지 등을 담당합니다
 * @author 정원제
 */
export function AuthStackNavigator() {
    return (
        <AuthStack.Navigator screenOptions={{headerShown: false}}>
            <AuthStack.Screen name='Login' component={LoginScreen} />
        </AuthStack.Navigator>
    )
}