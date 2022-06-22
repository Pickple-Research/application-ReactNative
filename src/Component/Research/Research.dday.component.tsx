import React from "react";
import { StyleProp, TextStyle } from "react-native";
import styled from "styled-components/native";
import { didDatePassed, getRemainedDays } from "src/Util";
import { DetailText } from "src/StyledComponents/Text";

/**
 * 리서치 마감까지 남은 기간을 보여줍니다.
 * Dday가 넘어가면 '진행완료' 를 반환합니다.
 * @author 현웅
 */
export function ResearchDday({
  deadline,
  style,
}: {
  deadline: string | Date;
  style?: StyleProp<TextStyle>;
}) {
  if (didDatePassed(deadline)) {
    return <ClosedText>진행완료</ClosedText>;
  }

  const dateLeft = getRemainedDays(deadline);

  if (dateLeft === 0) {
    return <DdayText>D-day</DdayText>;
  }

  return <ImminentText style={style}>{`D-${dateLeft}`}</ImminentText>;
}

const BaseText = styled(DetailText)``;

const ClosedText = styled(BaseText)`
  color: ${({ theme }) => theme.color.grey.mild};
`;

const DdayText = styled(BaseText)`
  color: ${({ theme }) => theme.color.red.warning};
`;

const ImminentText = styled(BaseText)`
  color: ${({ theme }) => theme.color.red.warning};
`;
