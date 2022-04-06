import { BackHandler } from "react-native"

export function popBackHandler(navigation: any) {
    BackHandler.addEventListener("hardwareBackPress", function() {
        navigation.pop()
        return true
    })
}