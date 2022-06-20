import { didDatePassed } from '@Util/date.util';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ResearchSchema, VoteSchema } from 'src/Schema';
import styled from 'styled-components/native';

type MyScrapVoteListitemProps = {
    vote: VoteSchema,
}

/**
 * 마이페이지 스크랩 투표 페이지 리스트 아이템입니다
 * @author 원제
 */

export function MyScrapVoteListitem({
    vote,
}: MyScrapVoteListitemProps) {
    const isEnabled = didDatePassed(vote.deadline)
    return (
        <Container style={isEnabled ? style.containerEnabled : style.containerDiabled} disabled={!isEnabled}>
            <ImageView>
                <Image source={require("@Resource/png/profile-default.png")} style={{width: 38, height: 38,}} />
            </ImageView>
            <ContentView>
                <TitleText 
                    numberOfLines={1}
                    style={isEnabled ? style.titleTextEnabled : style.titleTextDiabled}
                >{vote.title}</TitleText>
            </ContentView>
        </Container>
    )
}


const Container = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 17px 16px;
    margin: 5px 16px;
    border: 1px #599BDF solid;
    border-radius: 10px;
`

const ImageView = styled.View`
    
`

const ContentView = styled.View`
    flex-shrink: 1;
    margin: 0px 14px;
`

const TitleText = styled.Text`
    color: #333333;
    font-weight: 500;
    line-height: 20px;
`

const style = StyleSheet.create({
    titleTextEnabled: {
        color: "#333333",
    },
    titleTextDiabled: {
        color: "#999999",
    },
    containerEnabled: {
        borderColor: "#8F84D0",
    },
    containerDiabled: {
        borderColor: "#D6D4E2",
    },
})
