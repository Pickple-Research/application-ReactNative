import { HorizontalView } from '@Component/StyledComponents';
import { vw } from '@Theme/Value';
import React from 'react';
import { View, Text, Image } from 'react-native';
import styled from 'styled-components/native';

export function VoteListItem({ index, item }: any) {
    return (
        <Container>
            <HorizontalView>
                <AuthorText>스타트업</AuthorText>
                <TitleText>여러분 이런 거 어때요?</TitleText>
            </HorizontalView>
            <IndicatorContainer>
                <HorizontalView>
                    <VoteCountImage source={require("@Resource/bell.png")} />
                    <VoteCountText>10</VoteCountText>
                </HorizontalView>
                <HorizontalView>
                    <ReplyCountImage source={require("@Resource/bell.png")} />
                    <ReplyCountText>10</ReplyCountText>
                </HorizontalView>
            </IndicatorContainer>
        </Container>
    )
}

const Container = styled.View`
    flex-direction: row;
    background-color: white;
`
const TitleText = styled.Text`
    color: red;
`
const AuthorText = styled.Text`
    color: black;
    margin-right: ${2*vw}px;
    font-weight: 500;
`

const IndicatorContainer = styled.View`
    flex-direction: row;
    margin-left: 10px;
`
const VoteCountImage = styled.Image`
    width: 20px;
    height: 20px;
`
const VoteCountText = styled.Text`
    color: blue
`
const ReplyCountImage = styled.Image`
    width: 20px;
    height: 20px;
    
`
const ReplyCountText = styled.Text`
    color: black
`