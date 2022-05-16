import { SimpleDropDown } from '@Component/DropDown'
import { RoundTextInput } from '@Component/TextInput';
import { SimpleTextInput } from '@Component/TextInput/SimpleTextInput.component'
import React, { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import styled from 'styled-components/native';
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
                <SimpleDropDown 
                    data={["학술", "고객", "기타"]}
                    buttonStyle = {{
                        width: 180,
                        backgroundColor: 'white',
                        borderRadius: 10,
                        borderWidth: 1,
                        borderColor: "#E5E5E5",
                    }}
                    buttonTextStyle = {{
                        textAlign: 'left',
                        paddingLeft: 10,
                    }}
                />
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
                    showRightImage={false}
                />
            </View>
        </SectionContainer>
    )
}

function EstimatedTime() {
    return (
        <SectionContainer>
            <EstimatedTime__Container>
                <TitleBoldText>예상 소요 시간</TitleBoldText>
                <TitleNormalText>을 입력해주세요</TitleNormalText>
                <Image style={{width: 12, height: 12, marginLeft: 8,}} source={require("../../../../Resource/png/profile-default.png")} />
                <SimpleDropDown
                    defaultValue = {5}
                    data={[3,5,7,9]}
                    buttonStyle = {{
                        width: 100,
                        marginHorizontal: 8,
                        borderRadius: 8,
                    }}
                />
                <TitleNormalText> 분</TitleNormalText>
            </EstimatedTime__Container>
        </SectionContainer>
    )
}

const date = new Date();
function DeadLine() {
    return (
        <DeadLine__Container>
            <TitleContainer>
                <TitleBoldText>마감일</TitleBoldText>
                <TitleNormalText>을 입력해주세요</TitleNormalText>
            </TitleContainer>
            <DeadLine__Description>마감일에 맞추어 해당 게시물이 자동 마감됩니다.</DeadLine__Description>
            <SimpleDropDown 
                data={["2022. 04. 15"]}
                buttonStyle = {{
                    width: 180,
                    borderRadius: 10,
                    marginTop: 16,
                }}
            />
        </DeadLine__Container>
    )
}


const EstimatedTime__Container = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
`

const DeadLine__Container = styled.View`
    
`

const DeadLine__Description = styled.Text`
    color: #999999;
    font-size: 11px;
`