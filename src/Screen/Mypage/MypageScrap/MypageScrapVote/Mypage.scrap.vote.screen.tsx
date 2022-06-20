import { MyScrapVoteListitem } from '@Component/Vote';
import React from 'react';
import { ScrollView, Text } from 'react-native';
import { BlankResearch, BlankVote } from 'src/Schema';
import styled from 'styled-components/native';
import { MypageScrapScreenHeader } from '../Mypage.scrap.screenHeader';

export type MypageScrapVoteScreenProps = {};

/**
 * 마이페이지 스크랩 리서치 페이지입니다
 * @author 원제
 */

export function MypageScrapVoteScreen() {
    return (
        <Container style={{backgroundColor: "#F5F5FC"}}>
            <MyScrapVoteListitem vote={BlankVote} />
            
        </Container>
    )
}

const Container = styled.ScrollView`
    background-color: #F5F5FC;
    margin: 10px 0px;
`