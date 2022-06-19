import { didDatePassed, getDateDifference } from '@Util/date.util';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ResearchSchema } from 'src/Schema';
import styled from 'styled-components/native';

type MyScrapResearchListitemProps = {
    research: ResearchSchema,
}

export function MyScrapResearchListitem({
    research,
}: MyScrapResearchListitemProps) {
    const isEnabled = didDatePassed(research.deadline)
    return (
        <Container style={isEnabled ? style.containerEnabled : style.containerDisabled} disabled={isEnabled} onPress={() => {}}>
            <ImageView>
                <Image source={require("@Resource/png/profile-default.png")} style={{width: 45, height: 45,}} />
            </ImageView>
            <ContentView>
                <TitleText numberOfLines={2} style={isEnabled ? style.titleTextEnabled : style.titleTextDisabled}>{research.title}</TitleText>
                <TargetText numberOfLines={1}>{research.target}</TargetText>
            </ContentView>
            <StatusView>
                <StatusText style={isEnabled ? style.statusTextEnabled : style.statusTextDisabled}>
                    {
                        isEnabled ?
                        `D-${getDateDifference(research.deadline)}`
                        :
                        "진행완료"
                    }
                </StatusText>
            </StatusView>
        </Container>
    )
}

const Container = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 18px;
    margin: 5px 16px;
    border: 1px #599BDF solid;
    border-radius: 10px;
`

const ImageView = styled.View`
    width: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;
`

const ContentView = styled.View`
    margin-left: 14px;
    flex-shrink: 1;
    flex: 1;
`

const StatusView = styled.View`
    width: 65px;
    height: 50px;
    justify-content: center;
    align-items: flex-end;
`

const TitleText = styled.Text`
    font-size: 14px;
    font-weight: 500;
`

const TargetText = styled.Text`
    font-size: 12px;
    line-height: 20px;
    color: #999999;
`

const StatusText = styled.Text`
    font-size: 11.5px;
    font-weight: 500;
`

const style = StyleSheet.create({
    containerEnabled: {
        borderColor: "#599BDF",
    },
    containerDisabled: {
        borderColor: "#C4C4C4",
    },
    titleTextEnabled: {
        color: "#333333",
    },
    titleTextDisabled: {
        color: "#999999",
    },
    statusTextEnabled: {
        color: "#FF6B6B",
    },
    statusTextDisabled: {
        color: "#999999",
    }
})