import { assertAccessor } from '@babel/types';
import { RoundTextInput } from '@Component/TextInput'
import { vw } from '@Theme/size.theme';
import { getGalleryPhotoFromAndroid } from '@Util/Permissions/android.util';
import React, { useState } from 'react'
import { Image, ImagePickerIOS, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import { ImagePickerResponse } from 'react-native-image-picker';
import styled from 'styled-components/native';
/**
 * 리서치 작성 페이지 10 
 * 숫자가 클 수록 뒤 페이지입니다
 */



export function ResearchWrite10Screen({
    navigation
}: any) {
    return (
        <Container>
            <Profile />
            <Author />
            <ResearchGroup />
            <ResearchName />
            <ResearchLink />
            <ResearchDescription />
        </Container>

    )
}

async function test() {
    const result = await getGalleryPhotoFromAndroid()
    if (result !== undefined) {
        const resultResponse: ImagePickerResponse = result
        
        if (resultResponse.assets !== undefined) {
            return resultResponse.assets[0].uri
        }
        
    }
    return undefined
}
function Profile() {
    const [profileImage, setProfileImage] = useState<string | undefined>();
    return (
        <View>
            <TouchableOpacity style={{width: 100, height: 100, }} onPress={() => {
                test()
                .then((data) => {
                    if (data === undefined) return;
                    else {
                        setProfileImage(data);
                    }
                })
            }}>
                <Image width={100} height={100} style={{ width:100, height: 100, borderRadius: 50}} source={profileImage === undefined ? require("@Resource/png/profile-default.png") : {uri: profileImage}} />
            </TouchableOpacity>
        </View>
    )
}
function Author() {
    const [textValue, setTextValue] = useState("");

    function passData(data: string) {
        console.log(data);
        setTextValue(data);
        
    }
    return (
        <Author__Container>
            <TitleContainer>
                <TitleBoldText>실명과 닉네임</TitleBoldText>
                <TitleNormalText> 중 선택해 주세요</TitleNormalText>
            </TitleContainer>
            <Author__InputView>
                <RoundTextInput
                    fixedText='실명'
                    containerStyle={{
                        marginHorizontal: 0,
                        backgroundColor: "white",
                        width: 50 * vw - 30,
                    }}
                    dataTransfer={passData}
                />
                <RoundTextInput
                    fixedText='닉네임'
                    containerStyle={{
                        marginHorizontal: 0,
                        backgroundColor: "white",
                        width: 50 * vw - 30,
                    }}
                    dataTransfer={passData}
                />
            </Author__InputView>
        </Author__Container>
    )
}

function ResearchGroup() {
    return (
        <ResearchGroup__Container>
            <TitleContainer>
                <TitleBoldText>리서치 진행하는 단체</TitleBoldText>
                <TitleNormalText>가 있다면 입력해주세요 (선택)</TitleNormalText>
            </TitleContainer>
            <ResearchGroup__InputView>
                <RoundTextInput />
            </ResearchGroup__InputView>
        </ResearchGroup__Container>
    )
}

function ResearchName() {
    return (
        <ResearchName__Container>
            <TitleContainer>
                <TitleBoldText>리서치 제목</TitleBoldText>
                <TitleNormalText>을 입력해주세요</TitleNormalText>
            </TitleContainer>
            <ResearchName__InputView>
                <RoundTextInput
                    containerStyle={{
        
                    }}
                />
            </ResearchName__InputView>
        </ResearchName__Container>
    )
}

function ResearchLink() {
    return (
        <ResearchLink__Container>
            <TitleContainer>
                <TitleBoldText>리서치 제목</TitleBoldText>
                <TitleNormalText>을 입력해주세요</TitleNormalText>
            </TitleContainer>
            <ResearchLink__InputView>
                <RoundTextInput
                    containerStyle={{
        
                    }}
                />
            </ResearchLink__InputView>
        </ResearchLink__Container>
    )
}
function ResearchDescription() {
    return (
        <ResearchDescription__Container>
            <TitleContainer>
                <TitleBoldText>설명</TitleBoldText>
                <TitleNormalText>을 입력해주세요</TitleNormalText>
            </TitleContainer>
            <ResearchDescription__InputView>
                <RoundTextInput
                    multiline={true}
                    containerStyle={{
        
                    }}
                />
            </ResearchDescription__InputView>
        </ResearchDescription__Container>
    )

}
//common
const Container = styled.View`
    margin: 20px 20px 20px 20px;
`
const TitleContainer = styled.View`
    flex-direction: row;
    margin: 10px 0px 4px 0px;
`
const TitleNormalText = styled.Text`
    color: black;
    font-weight: 400;
`
const TitleBoldText = styled.Text`
    color: black;
    font-weight: 500;
`

// Profile()

const Profile__Container = styled.View`
    
`
// Name()
const Author__Container = styled.View`
    
`
const Author__InputView = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

// ResearchGroup()
const ResearchGroup__Container = styled.View`
    
`

const ResearchGroup__InputView = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
`

// ResearchName()
const ResearchName__Container = styled.View`
    
`
const ResearchName__InputView = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
`

// ResearchLink()
const ResearchLink__Container = styled.View`
    
`
const ResearchLink__InputView = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
`

// ResearchDescription()
const ResearchDescription__Container = styled.View`
    
`
const ResearchDescription__InputView = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
`

