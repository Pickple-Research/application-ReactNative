import { RoundTextInput } from '@Component/TextInput'
import React, { useState } from 'react'
import { Text, View } from 'react-native'

/**
 * 리서치 작성 페이지 10 
 * 숫자가 클 수록 뒤 페이지입니다
 */
export function ResearchWrite10Screen({
    navigation
}: any) {
    const [textValue, setTextValue] = useState("");

    function passData(data: string) {
        console.log(data);
        
        setTextValue(data);
        
    }
    return (
        <View>
            <RoundTextInput
                placeHolder=''
                fixedText='안녕'
                containerStyle={{
                    backgroundColor: "white"
                }}
                passData={passData}
            />

        </View>
    )
}

