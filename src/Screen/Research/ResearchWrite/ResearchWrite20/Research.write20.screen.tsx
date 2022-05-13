import { SimpleDropDown } from '@Component/DropDown'
import { SimpleTextInput } from '@Component/TextInput/SimpleTextInput.component'
import React from 'react'
import { Text, View } from 'react-native'

/**
 * 리서치 작성 페이지 20 
 * 숫자가 클 수록 뒤 페이지입니다
 */

export function ResearchWrite20Screen({
    navigation
}: any) {
    return (
        <View>
            <SimpleDropDown
                defaultValue="5"
                data={["5", "10", "20", "50"]}
            />
            <SimpleTextInput />
        </View>
    )
}

