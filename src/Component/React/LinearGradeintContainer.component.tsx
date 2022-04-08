import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

type Props = {
    children: any
    colors?: string[]
    start?: number[]
    end?: number[]
}

export function LinearGradeintContainer({
    children,
    colors = ["#FFFFFF", "#000000"],
    start=[1,0],
    end=[0,1],
    }: Props) {

    return (
        <LinearGradient
            start={{ x: start[0], y: start[1] }}
            end={{ x: end[0], y: end[1] }}
            colors= {colors}
        >
        {children}
        </LinearGradient>
    )
}