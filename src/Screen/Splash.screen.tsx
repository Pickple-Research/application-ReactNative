import { FullView } from '@Component/StyledComponents'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

export function SplashScreen({ navigation }: any) {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("MainBottomTab")
        }, 1000)
    })
    return (
        <FullView>
            <Text style={{color: "black"}}>여기서 유저 정보 및 미리 처리할 정보가 있는지 확인하고 넘깁니다</Text>
        </FullView>
    )
}
export type SplashScreenProps = {
    
}