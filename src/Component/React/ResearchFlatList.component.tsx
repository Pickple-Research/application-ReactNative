import React from 'react';
import { FlatList, LogBox, Text, View } from 'react-native';
import { ResearchListItem } from './ResearchListItem.component';

export function ResearchFlatList() {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
    return (
        <View >
            <FlatList
                scrollEnabled={true}
                data={[{index: 1, title: "MZ세대 여성들의 피트니스와 웰니스에 대한 인식 조사"}, 
                {index: 2, title: "디자인/기획 관련 리서치"}, 
                {index: 3, title: "아날로그와 디자인 제품 사용에 대한 선호도 조사"},]}
                renderItem={({item, index}: any) => 
                (
                    <>
                    <ResearchListItem index={index} item={item} />
                    </>
                )}
            >
            </FlatList>
        </View>
    )
}