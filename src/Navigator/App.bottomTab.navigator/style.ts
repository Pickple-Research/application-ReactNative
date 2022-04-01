import { StyleSheet } from "react-native"
import styled from "styled-components"

const style = StyleSheet.create({
    bottom_tab_view: {
        alignItems: 'center',
        marginTop: 12,
    },
    bottom_tab_image: {
        width: 24,
        height: 24,
    },
    bottom_tab_text_inactive: {
        color: "black",
        fontSize: 10,
    },
    bottom_tab_text_active: {
        color: "red",
        fontSize: 10,
    },
    bottom_tab_main_view: {
        alignItems: 'center',
        marginBottom: 45,
    },
    bottom_tab_main_image: {
        width: 78,
        height: 78,
    },

})

export const BottomTabView = styled.View`
    ${style.bottom_tab_view}
`
export const BottomTabImage = styled.Image`
    ${style.bottom_tab_image}
`
export const BottomTabTextInactive = styled.Text`
    ${style.bottom_tab_text_inactive}
`
export const BottomTabTextActive = styled.Text`
    ${style.bottom_tab_text_active}
`
export const BottomTabMainView = styled.View`
    ${style.bottom_tab_main_view}
`
export const BottomTabMainImage = styled.Image`
    ${style.bottom_tab_main_image}
`
