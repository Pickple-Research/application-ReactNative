import { vh, vw } from '@Theme/size.theme';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import {Bar} from 'react-native-progress'
import { ResearchWrite10Screen } from './ResearchWrite10/Research.write10.screen';
import { ResearchWrite20Screen } from './ResearchWrite20/Research.write20.screen';
import { ResearchWrite30Screen } from './ResearchWrite30/Research.write30.screen';



const pages = [
    <ResearchWrite10Screen />, 
    <ResearchWrite20Screen />, 
    <ResearchWrite30Screen />, 
]

/**
 * 리서치 작성 페이지 컨테이너
 * pages 리스트에 스크린을 추가하면 그 순서대로 작성 페이지를 보여줌
 */

export function ResearchWriteScreen({
    navigation
}: any) {

    const totalPage = 3;
    const [currentPage, setCurrentPage] = useState(0);
    const [bottomButtonText, setBottomButtonText] = useState("다음 단계로 이동");

    function onBottomButtonClick() {
        if (currentPage === totalPage - 2) {
            setBottomButtonText("작성 완료!");
        }
        if (currentPage === totalPage - 1) {
            setBottomButtonText("모든 것이 완료되었습니다. 다음 페이지로 이동합니다.");
            return;
        }
        setCurrentPage(prev => prev+1);
    }
    

    return (
        <View style={{flex: 1, backgroundColor: "white"}}>
            {/* 대충 헤더 위치 */}
            <View style={{height: 60, backgroundColor: 'red'}}>
            </View>
            <Bar progress={(currentPage + 1) / totalPage} borderRadius={100} color={"blue"} width={100 * vw} borderWidth={0} />
            <ScrollView>
                {pages[currentPage]}
                <Text>{currentPage}</Text>
            </ScrollView>
            <TouchableOpacity onPress={onBottomButtonClick}>
                <Container>
                    <Text>{bottomButtonText}</Text>
                </Container>
            </TouchableOpacity>
            
        </View>
    )   
}

export type ResearchWriteScreenProps = {

}

const Container = styled.View`
    width: ${100*vw}px;
    height: 60px;
    background-color: ${({theme}) => theme.color.main_skyblue};
    justify-content: center;
    align-items: center;
`