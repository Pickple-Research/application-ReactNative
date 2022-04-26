import React from "react";
import styled from "styled-components/native";
import { DetailText } from "../../StyledComponents/Text";

/**
 * 작은 원 두 개에 리서치 경품을 보여줍니다
 * @author 현웅
 */
export function ResearchGiftIcons({
  giftIconSize = 28,
}: {
  giftIconSize?: number;
}) {
  return (
    <Container>
      <GiftIcon__Container size={giftIconSize}>
        <RightGiftIcon size={giftIconSize} />
        <LeftGiftIcon size={giftIconSize} />
      </GiftIcon__Container>
      <AdditionalGift__Text>+10</AdditionalGift__Text>
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const GiftIcon__Container = styled.View<{ size: number }>`
  position: relative;
  width: ${({ size }) => `${size * 2 - 8}px`};
  height: ${({ size }) => `${size}px`};
  margin-right: 8px;
`;

const GiftIcon = styled.View<{ size: number }>`
  position: absolute;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  background-color: gray;
  border: 2px solid white;
  border-radius: 100px;
`;

const RightGiftIcon = styled(GiftIcon)`
  right: 0px;
`;

const LeftGiftIcon = styled(GiftIcon)`
  right: ${({ size }) => `${size - 8}px`};
`;

const AdditionalGift__Text = styled(DetailText)``;
