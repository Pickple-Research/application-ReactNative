import { SimpleDropDown } from '@Component/DropDown'
import { SimpleTextInput } from '@Component/TextInput/SimpleTextInput.component'
import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { Container } from '../styled';

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
            <SimpleDropDown
                defaultValue="5"
                data={["5", "10", "20", "50"]}
            />
            <SimpleTextInput 
                showRightImage={researchLinkAvailable}
                dataTransfer={(link) => {onResearchLinkChange(link)}}
            />
        </Container>
    )
}

