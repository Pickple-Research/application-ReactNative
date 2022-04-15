import React from 'react'
import { Text, View } from 'react-native'

/**
 * TODO 구체적으로 더 필요하다고 생각되는 속성들 추가하기
 * TagGeneralProps는 tag를 만들어야 할 때 적용할 수 있는 컴포넌트입니다.
 * input
 * data: tag로 넣고 싶은 값 list
 * prefix: data 앞에 붙는 값 eg.#,/
 * separator: data와 data 사이에 붙는 값
 * maxNumberOfTag: 최대로 받을 tag의 개수
 * perfixStyle, tagStyle, separatorStyle: 각각의 스타일 지정
 */

type TagGeneralProps = {
    data: any
    prefix?: string
    separator?: string
    maxNumberOfTag?: number
    viewStyle?: {
        marginHorizontal?: number
        marginVertical?: number
        marginRight?: number
        marginLeft?: number
        marginTop?: number
        marginBottom?: number
        paddingHorizontal?: number
        paddingVertical?: number
        paddingRight?: number
        paddingLeft?: number
        paddingTop?: number
        paddingBottom?: number
    }
    prefixStyle?: {
        color?: string
    }
    tagStyle?: {
        color?: string
    }
    separatorStyle?: {
        color?: string
    }
}
export function TagGeneral({
    data, 
    separator = "", 
    prefix = "",
    maxNumberOfTag = 100,
    viewStyle = {
        marginHorizontal: 0,
        marginVertical: 0,
        marginRight: 0,
        marginLeft: 0,
        marginTop: 0,
        marginBottom: 0,
        paddingHorizontal: 0,
        paddingVertical: 0,
        paddingRight: 0,
        paddingLeft: 0,
        paddingTop: 0,
        paddingBottom: 0,
    },
    prefixStyle = {
        color: "red"
    },
    tagStyle = {
        color: "red"
    },
    separatorStyle = {
        color: "red"
    },
    }
    : TagGeneralProps) {
    return (
        <View style={{flexDirection: 'row', ...viewStyle}}>
            {data.map((element: any, index: any) => {
                if (index >= maxNumberOfTag) {
                    return;
                }
                return(
                    <View style={{flexDirection: 'row'}}>
                        <Text style={prefixStyle}>{prefix}</Text>
                        <Text style={tagStyle}>{element}</Text>
                        {
                        (Math.min(maxNumberOfTag, data.length) <= index + 1) 
                        ? 
                            <Text></Text> 
                        :  
                            <Text style={separatorStyle}>{separator}</Text> 
                        }
                    </View>
                )
    })}
        </View>
        
    )
}

