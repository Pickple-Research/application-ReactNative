import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackProps, AuthStackProps, MainBottomTabProps,  } from '@Navigator';


type LoginScreenProp = NativeStackScreenProps<
  AuthStackProps,
  "Login"
>;

export function LoginScreen({ navigation }: LoginScreenProp) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('MainBottomTab')}>
            <Text style={{color: "black"}}>메인 페이지로 이동</Text>
        </TouchableOpacity>
    )
    
}