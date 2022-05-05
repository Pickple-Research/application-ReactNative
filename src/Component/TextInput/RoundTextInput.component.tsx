import { vw } from '@Theme/size.theme';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export function RoundTextInput({
    fixedText = "",
    placeHolder="",
    placeHolderTextColor="#CCCCCC",
    multiline = false,
    dataTransfer,
    containerStyle,
    fixedTextStyle,
    textInputStyle,
}: RoundTextInputProps): JSX.Element {

    return (
        <View style={[defaultStyle.viewStyle, containerStyle]}>
            <Text style={[defaultStyle.textStyle, fixedTextStyle]}>{fixedText}</Text>
            <TextInput 
                style={[defaultStyle.textInputStyle, textInputStyle]} 
                placeholder={placeHolder}
                placeholderTextColor={placeHolderTextColor}
                selectionColor={'black'}
                onChangeText={dataTransfer}
                multiline={multiline}
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
    containerStyle?: commonSetting
    fixedTextStyle?: commonSetting
    textInputStyle?: commonSetting
}
type commonSetting = {
    width?: number
    height?: number
    backgroundColor?: string
    marginHorizontal?: number
    marginVertical?: number
    marginTop?: number
    marginRight?: number
    marginLeft?: number
    marginBottom?: number
    paddingHorizontal?: number
    paddingVertical?: number
    paddingTop?: number
    paddingRight?: number
    paddingBottom?: number
    paddingLeft?: number
    borderWidth?: number
    borderRadius?: number
    borderColor?: string
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
    }
})