import React from "react";
import styled from "styled-components/native";
import { RoundTextInput } from "src/Component/TextInput";
import { H1 } from "src/StyledComponents/Text";
import { ResearchUploadGiftProps } from "src/Object/Type";
import { useResearchUploadStore } from "src/Zustand";

type ResearchGiftListItemProps = {
  gift: ResearchUploadGiftProps;
};

/**
 * 리서치 업로드 페이지의 기프티콘 추가 섹션에서 사용되는 경품 컴포넌트입니다.
 * @author 원제
 * @modify 현웅
 */
export function ResearchGiftListItem({ gift }: ResearchGiftListItemProps) {
  return (
    <Container>
      <GiftImageInput />
      <GiftName gift={gift} />
      <GiftDeleteButton index={gift.index} />
    </Container>
  );
}

function GiftImageInput() {
  return (
    <GiftImageInput__Container>
      <GiftImageInput__Image
        source={require("src/Resource/png/splash-screen-logo.png")}
      />
    </GiftImageInput__Container>
  );
}

function GiftName({ gift }: { gift: ResearchUploadGiftProps }) {
  const updateGiftName = useResearchUploadStore(state => state.updateGiftName);

  return (
    <GiftName__Container>
      <GiftName__Text>상품명</GiftName__Text>
      <RoundTextInput
        props={{
          onChangeText: (newGiftName: string) => {
            updateGiftName(gift.index, newGiftName);
          },
        }}
      />
    </GiftName__Container>
  );
}

function GiftDeleteButton({ index }: { index: number }) {
  const removeGift = useResearchUploadStore(state => state.removeGift);

  return (
    <GiftDeleteButton__Container
      onPress={() => {
        removeGift(index);
      }}>
      <GiftDeleteButton__Content>삭제하기</GiftDeleteButton__Content>
    </GiftDeleteButton__Container>
  );
}

const Container = styled.View`
  align-items: center;
  padding: 16px 16px 0px 16px;
  //TODO: #DESIGN-SYSTEM
  background-color: #f5f5f5;
  border: 1px solid black;
  border-radius: 10px;
  overflow: hidden;
`;

// GiftImageInput()
const GiftImageInput__Container = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;
  border: 1px solid black;
  border-radius: 10px;
  overflow: hidden;
`;

const GiftImageInput__Image = styled.Image`
  width: 100%;
`;

// GiftName()
const GiftName__Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const GiftName__Text = styled(H1)`
  font-weight: bold;
  color: ${({ theme }) => theme.color.grey.icon};
`;

// GiftDeleteButton()
const GiftDeleteButton__Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background-color: #e4e4e4;
`;

const GiftDeleteButton__Content = styled.Text`
  color: #aaaaaa;
`;
