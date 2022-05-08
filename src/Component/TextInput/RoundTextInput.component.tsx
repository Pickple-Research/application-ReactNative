import { vw } from '@Theme/size.theme';
import React, { useState } from 'react';
import { StyleProp, StyleSheet, Text, TextInput, TextStyle, View, ViewStyle } from 'react-native';

/**
 * RoundTextInput은 기본적으로 말 그대로 둥근 TextInput입니다
 * @params
 * fixedText:  고정되어 있는 글씨를 의미합니다. fixedTextStyle을 통해 스타일을 변경할 수 있으며, focus 해도 사라지지 않습니다.
 * placeHolder: focus하면 사라지는 text를 말합니다. placeHolderTextColor를 통해 색을 변경할 수 있습니다.
 * containerStyle: fixedText와 textInput을 감싼 View의 스타일을 변경할 수 있습니다.
 * textInput Style: textInput의 스타일을 변경할 수 있습니다.
 * focusStyle: RoundTextInput에 focus 했을 때 변경할 값을 넣습니다.
 * multiline: 여러줄을 받을지 말지를 결정하는 값입니다. True로 입력할 시 input을 넘어가면 다음 줄로 자동으로 넘어갑니다.
 * !(중요) dataTransfer: textInput 값이 변했을 때 그 값을 받을 function을 의미합니다. parent에서 setText(data)와 같은 형식으로 사용할 수 있습니다.
 * @author 정원제
 */
export function RoundTextInput({
    fixedText = "",
    placeHolder="",
    placeHolderTextColor="#CCCCCC",
    multiline = false,
    dataTransfer,
    containerStyle,
    fixedTextStyle,
    textInputStyle,
    focusStyle = {
        borderColor: "#8BBFF5"
    },
}: RoundTextInputProps): JSX.Element {
    const [focus, setFocus] = useState<boolean>(false);
    return (
        <View style={[defaultStyle.viewStyle, containerStyle, focus ? focusStyle : {}]}>
            <Text style={[defaultStyle.textStyle, fixedTextStyle]}>{fixedText}</Text>
            <TextInput 
                style={[defaultStyle.textInputStyle, textInputStyle]} 
                placeholder={placeHolder}
                placeholderTextColor={placeHolderTextColor}
                selectionColor={'black'}
                onChangeText={dataTransfer}
                multiline={multiline}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
            />
        </View>
        
    )
}

type RoundTextInputProps = {
    fixedText?: string
    placeHolder?: string
    placeHolderTextColor?: string
    multiline?: boolean
    dataTransfer?: (data: any) => any
    containerStyle?: StyleProp<ViewStyle>
    fixedTextStyle?: StyleProp<TextStyle>
    textInputStyle?: StyleProp<TextStyle>
    focusStyle?: StyleProp<ViewStyle>
}

const defaultStyle = StyleSheet.create({
    viewStyle: {
        width: 100* vw - 30,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 15,
        marginVertical: 10,
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderWidth: 1, 
        borderRadius: 10, 
        borderColor: '#CCCCCC'
    },
    textStyle: {
        color: "#599BDF",
    },
    textInputStyle: {
        flex: 1,
        color: "#333333",
    },

})

