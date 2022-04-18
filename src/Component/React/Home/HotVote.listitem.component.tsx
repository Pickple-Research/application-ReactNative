import React from 'react';
import { HorizontalView } from '@Component/StyledComponents';
import { View, Text, Image } from 'react-native';
import styled from 'styled-components/native';

export function HotVoteListItem({ index, item }: any) {
    return (
        <Container>
            <View>
                <TitleText>여러분 이런 거 어때요?</TitleText>
                <AuthorText>헬스케어</AuthorText>
            </View>
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
    color: red;
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