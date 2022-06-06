import React, { useState } from "react";
import { LayoutChangeEvent } from "react-native";
import styled from "styled-components/native";
import { RoundTextInput } from "src/Component/TextInput";
import { ResearchUploadGiftProps } from "src/Object/Type";
import shallow from "zustand/shallow";
import { useResearchUploadStore } from "src/Zustand";
import { H2 } from "src/StyledComponents/Text";
import CameraIcon from "src/Resource/svg/camera-icon.svg";

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
      <GiftImage index={gift.index} />
      <GiftName gift={gift} />
      <GiftDeleteButton index={gift.index} />
    </Container>
  );
}

function GiftImage({ index }: { index: number }) {
  const [imageContainerWidth, setImageContainerWidth] = useState<number>(0);

  const { gifts, uploadGiftPhoto } = useResearchUploadStore(
    state => ({
      gifts: state.gifts,
      uploadGiftPhoto: state.uploadGiftPhoto,
    }),
    shallow,
  );

  function onImageContainerRender(event: LayoutChangeEvent) {
    console.log(`container width: ${event.nativeEvent.layout.width}`);
    setImageContainerWidth(event.nativeEvent.layout.width);
  }

  return (
    <GiftImage__Container>
      <GiftImageInput__Container
        activeOpacity={0.8}
        onPress={() => {
          uploadGiftPhoto(index);
        }}
        onLayout={onImageContainerRender}>
        {gifts[index].photoUri === "" ? (
          // 이미지 추가가 안 된 경우
          <>
            <CameraIcon />
            <GiftImageInput__GuideText>
              이미지 추가하기
            </GiftImageInput__GuideText>
          </>
        ) : (
          // 이미지 추가된 경우
          <GiftImageInput__Image
            source={{ uri: gifts[index].photoUri }}
            resizeMode="contain"
            style={{
              width: imageContainerWidth,
              height: imageContainerWidth * gifts[index].photoRatio,
            }}
          />
        )}
      </GiftImageInput__Container>
    </GiftImage__Container>
  );
}

function GiftName({ gift }: { gift: ResearchUploadGiftProps }) {
  const { gifts, updateGiftName } = useResearchUploadStore(
    state => ({ gifts: state.gifts, updateGiftName: state.updateGiftName }),
    shallow,
  );

  return (
    <GiftName__Container>
      <GiftName__Text>상품명</GiftName__Text>
      <RoundTextInput
        style={{ flex: 1 }}
        props={{
          value: gifts[gift.index].giftName,
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
  padding-top: 16px;
  //TODO: #DESIGN-SYSTEM
  background-color: #f5f5f5;
  border-radius: 10px;
  margin-bottom: 8px;
  overflow: hidden;
`;

// GiftImage()
const GiftImage__Container = styled.View`
  min-height: 160px;
  padding: 0px 16px;
  margin-bottom: 28px;
`;

const GiftImageInput__Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex: 1;
  //TODO: #DESIGN-SYSTEM
  background-color: #eeeeee;
  border-radius: 10px;
  overflow: hidden;
`;

const GiftImageInput__GuideText = styled(H2)`
  //TODO: #DESIGN-SYSTEM
  color: #aaaaaa;
`;

const GiftImageInput__Image = styled.Image``;

// GiftName()
const GiftName__Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px;
  margin-bottom: 16px;
`;

const GiftName__Text = styled(H2)`
  font-weight: bold;
  color: ${({ theme }) => theme.color.grey.icon};
  margin-right: 12px;
`;

// GiftDeleteButton()
const GiftDeleteButton__Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: #e4e4e4;
`;

const GiftDeleteButton__Content = styled.Text`
  //TODO: #DESIGN-SYSTEM
  color: #aaaaaa;
`;
