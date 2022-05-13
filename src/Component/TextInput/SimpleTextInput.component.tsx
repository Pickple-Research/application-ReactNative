import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, TextInput, Image, StyleProp, ImageStyle, TextStyle, ViewStyle } from 'react-native';
import styled from 'styled-components/native';

/**
 * SimpleTextInput은 기본적인 TextInput에서 몇 가지 추가 기능을 제공하는 TextInput입니다.
 * placeHolder, placeHolderTextColor: 말 그대로 placeHolder와 placeHolder의 색깔을 결정합니다.
 * showLeftImage, showRightImage: 각각 왼쪽, 오른쪽 이미지를 보여줄지 말지를 결정합니다.
 * leftImageStyle, rightImageStyle: 각각 왼쪽, 오른쪽 이미지의 스타일을 결정합니다.
 * containerStyle: textInput을 감싸고 있는 container의 스타일을 결정합니다. 기본 레이아웃의 아래 줄은 container의 bottomBorder로 표현되어 있습니다.
 * textInputStyle: textInput의 스타일을 결정합니다.
 * focusContainerStyle, focusTextInputStyle: focus 되었을 때 Container와 TextInput의 스타일을 결정합니다. focus가 붙은 style이 우선적으로 작동합니다.
 * @function dataTransfer: textInput 값이 변했을 때 그 값을 받을 function을 의미합니다. parent에서 setText(data)와 같은 형식으로 사용할 수 있습니다.
 * @function onLeftImageClick: leftImage를 클릭하였을 때 작동합니다.
 * @function onRightImageClick: rightImage를 클릭하였을 때 작동합니다.
 * * TIP: dataTransfer를 통해 데이터를 받고 검증하여 image를 보여줄지 말지 등을 선태할 수 있습니다.
 * @author 정원제
 */
export function SimpleTextInput({
    placeHolder = "Enter your name here",
    placeHolderTextColor = "red",
    showLeftImage = false,
    showRightImage = true,
    leftImageStyle,
    rightImageStyle,
    containerStyle,
    textInputStyle,
    focusContainerStyle,
    focusTextInputStyle,
    dataTransfer,
}: SimpleTextInputType) {
    const [focus, setFocus] = useState<boolean>(false);
    return (
        <SafeAreaView style={{ flex: 1 }}>
                <Container style={[containerStyle, focus ? focusContainerStyle : {}]}>
                    {/* 왼쪽 이미지를 보여주는 곳 */}
                    {
                        showLeftImage ? 
                        <LeftImage 
                            source={{
                                uri:
                                    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/input_username.png',
                                }} 
                            style={[leftImageStyle]} />
                            : 
                        <></> 
                    }

                    <MainTextInput 
                        placeholder = {placeHolder}
                        placeholderTextColor = {placeHolderTextColor}
                        underlineColorAndroid="transparent"
                        onChange={dataTransfer}
                        onFocus = {() => setFocus(true)}
                        onBlur = {() => setFocus(false)}
                        style={[textInputStyle, focus ? focusTextInputStyle : {}]} />

                    {/* 오른쪽 이미지를 보여주는 곳 */}
                    {
                        showRightImage ? 
                        <RightImage 
                            source={{
                                uri:
                                    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/input_username.png',
                                }} 
                            style={[rightImageStyle]} />
                            : 
                        <></> 
                    }
                </Container>
        </SafeAreaView>
    );
};


const Container = styled.View`
    margin: 10px;
    height: 40px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: "#fff";
    border-bottom-width: 2px;
    border-color: "#8BBFF5";
`

const LeftImage = styled.Image`
    padding: 10px;
    margin: 5px; 
    height: 25px;
    width: 25px;
    align-items: center;
`
const RightImage = styled.Image`
    padding: 10px;
    margin: 5px; 
    height: 25px;
    width: 25px;
    align-items: center;
`
const MainTextInput = styled.TextInput`
    flex: 1;
    color: red;
`
type SimpleTextInputType = {
    placeHolder?: string;
    placeHolderTextColor?: string;
    showLeftImage?: boolean;
    showRightImage?: boolean;
    leftImageStyle?: StyleProp<ImageStyle>;
    rightImageStyle?: StyleProp<ImageStyle>;
    textInputStyle?: StyleProp<TextStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    focusTextInputStyle?: StyleProp<TextStyle>;
    focusContainerStyle?: StyleProp<ViewStyle>;
    dataTransfer?: (data: any) => any;
    onLeftImageClick?: () => any;
    onRightImageClick?: () => any;
}