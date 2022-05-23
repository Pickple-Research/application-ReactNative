import { RoundTextInput } from "@Component/TextInput";
import { vw } from "@Theme/size.theme";
import React, { useState } from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export function GiftListItem({
  key_,
  onDelete,
  dataTransfer = () => {},
}: GiftListItemProps) {
  return (
    <OuterContainer>
      <InnerContainer>
        <TouchableOpacity>
          <GiftImage
            source={require("src/Resource/png/splash-screen-logo.png")}
          />
        </TouchableOpacity>
        <GiftNameContainer>
          <GiftNameText>상품명 {key_} </GiftNameText>
          <RoundTextInput
            containerStyle={{
              width: 65 * vw,
              height: 50,
            }}
            dataTransfer={data => dataTransfer(data)}
          />
        </GiftNameContainer>
        <TouchableOpacity
          onPress={() => {
            onDelete(key_);
          }}>
          <DeleteContainer>
            <DeleteText>삭제하기</DeleteText>
          </DeleteContainer>
        </TouchableOpacity>
      </InnerContainer>
    </OuterContainer>
  );
}

type GiftListItemProps = {
  key_: string;
  onDelete: (key: string) => any;
  dataTransfer?: (data: string) => any;
};
const OuterContainer = styled.View`
  flex: 1;
  align-items: center;
`;

const InnerContainer = styled.View`
  width: ${90 * vw}px;
  align-items: center;
  padding: 16px 16px 0px 16px;
  background-color: #f5f5f5;
  border-radius: 10px;
`;

const GiftImage = styled.Image`
  width: ${80 * vw}px;
  height: 120px;
  border: 1px;
  border-color: #ff6b6b;
  border-radius: 10px;
`;

const GiftNameContainer = styled.View`
  flex: 1;
  width: ${90 * vw}px;
  flex-direction: row;
  align-items: center;
`;

const GiftNameText = styled.Text`
  margin-left: 16px;
  font-size: 14px;
  font-weight: 400;
  color: #666666;
`;

const DeleteContainer = styled.View`
  width: ${90 * vw}px;
  height: 50px;
  background-color: #e4e4e4;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  align-items: center;
  justify-content: center;
`;

const DeleteText = styled.Text`
  color: #aaaaaa;
`;
