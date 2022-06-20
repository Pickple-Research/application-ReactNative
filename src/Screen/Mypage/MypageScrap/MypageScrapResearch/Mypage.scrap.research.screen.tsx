import { MyScrapResearchListitem } from '@Component/Research';
import React from 'react';
import { ScrollView } from 'react-native';
import { BlankResearch } from 'src/Schema';
import styled from 'styled-components/native';
import { MypageScrapScreenHeader } from '../Mypage.scrap.screenHeader';

export type MypageScrapResearchScreenProps = {};


/**
 * 마이페이지 스크랩 리서치 페이지입니다
 * @author 원제
 */
export function MypageScrapResearchScreen() {
    return (
        <Container style={{backgroundColor: "#F5F5FC"}}>
            <MyScrapResearchListitem research={BlankResearch}/>
        </Container>
    )
}

const Container = styled.ScrollView`
    background-color: #F5F5FC;
    margin: 10px 0px;
`