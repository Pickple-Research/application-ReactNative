import { SimpleDropDown } from '@Component/DropDown'
import { RoundTextInput } from '@Component/TextInput';
import { SimpleTextInput } from '@Component/TextInput/SimpleTextInput.component'
import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { Container, SectionContainer, TitleBoldText, TitleContainer, TitleNormalText } from '../styled';

/**
 * 리서치 작성 페이지 20 
 * 숫자가 클 수록 뒤 페이지입니다
 */

export function ResearchWrite20Screen({
    navigation
}: any) {
    const [researchLinkAvailable, setResearchLinkAvailable] = useState<boolean>(false);
    const [researchLink, setResearchLink] = useState<string>("");
    
    function onResearchLinkChange(link: string) {
        setResearchLink(link);
        if (link === "good") {
            setResearchLinkAvailable(true);
        } else {
            setResearchLinkAvailable(false);
        }
        console.log(link);
        
    }
    return (
        <Container>
            <ResearchPurpose />
            <ResearchOrganization />
            <ResearchParticipants />
            <EstimatedTime />
            <DeadLine />
        </Container>
    )
}

function ResearchPurpose() {
    return (
        <SectionContainer>
            <TitleContainer>
                <TitleNormalText>리서치를 진행하시는 </TitleNormalText>
                <TitleBoldText>목적</TitleBoldText>
                <TitleNormalText>을 알려주세요</TitleNormalText>
            </TitleContainer>
            <View>
                <SimpleDropDown />
            </View>
        </SectionContainer>
    )
}

function ResearchOrganization() {
    return (
        <SectionContainer>
            <TitleContainer>
                <TitleNormalText>리서치를 진행하시는 </TitleNormalText>
                <TitleBoldText>기업/단체/수업명</TitleBoldText>
                <TitleNormalText>을 알려주세요</TitleNormalText>
            </TitleContainer>
            <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <RoundTextInput 
                    placeHolder='유니콘 스타트업 알투씨'
                />
            </View>
        </SectionContainer>
    )
}

function ResearchParticipants() {
    return (
        <SectionContainer>
            <TitleContainer>
                <TitleBoldText>참여대상</TitleBoldText>
                <TitleNormalText>을 입력해주세요</TitleNormalText>
            </TitleContainer>
            <View>
                <SimpleTextInput 
                    placeHolder='쇼핑몰 이용 경험이 있는 MZ세대 여성'
                />
            </View>
        </SectionContainer>
    )
}

function EstimatedTime() {
    return (
        <View>
            <Text style={{color: "red"}}>Estimated</Text>
        </View>
    )
}

function DeadLine() {
    return (
        <View>
            <Text style={{color: "red"}}>Deadline</Text>
        </View>
    )
}