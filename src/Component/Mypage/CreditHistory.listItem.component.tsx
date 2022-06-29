import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { H4, BodyText, SmallText } from "src/StyledComponents/Text";
import { convertTimeToMMDD } from "src/Util";
import { CreditHistorySchema } from "src/Schema";
import { themeColors } from "src/Theme";

/**
 * 크레딧 사용내역 리스트 한 줄 아이템입니다
 * @author 현웅
 */
export function CreditHistoryListItemComponent({
  creditHistory,
}: {
  creditHistory: CreditHistorySchema;
}) {
  return (
    <Container style={styles.containerBorderBottom}>
      <Date createdAt={creditHistory.createdAt} />
      <ReasonType reason={creditHistory.reason} type={creditHistory.type} />
      <ScaleBalance
        scale={creditHistory.scale}
        balance={creditHistory.balance}
      />
    </Container>
  );
}

function Date({ createdAt }: { createdAt: string | Date }) {
  return (
    <Date__Container>
      <Date__Text>{convertTimeToMMDD(createdAt)}</Date__Text>
    </Date__Container>
  );
}

function ReasonType({ reason, type }: { reason: string; type: string }) {
  return (
    <ReasonType__Container>
      <Reason__Text numberOfLines={1}>{reason}</Reason__Text>
      <Type__Text>{type}</Type__Text>
    </ReasonType__Container>
  );
}

function ScaleBalance({ scale, balance }: { scale: number; balance: number }) {
  return (
    <ScaleBalance__Container>
      {scale >= 0 ? (
        <IncomeScale__Text>{`${scale} C`}</IncomeScale__Text>
      ) : (
        <ExpenditureScale__Text>{`${scale} C`}</ExpenditureScale__Text>
      )}
      <Balance__Text>{`${balance} C`}</Balance__Text>
    </ScaleBalance__Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  padding-top: 18px;
  padding-bottom: 21px;
  padding-left: 21px;
  padding-right: 21px;
`;

// Date()
const Date__Container = styled.View`
  padding-top: 1.5px;
`;

const styles = StyleSheet.create({
  containerBorderBottom: {
    borderBottomColor: themeColors().purple.main,
    borderBottomWidth: 2,
  },
});

const Date__Text = styled(SmallText)`
  color: ${({ theme }) => theme.color.grey.mild};
`;

// ReasonType()
const ReasonType__Container = styled.View`
  flex: 1;
  padding: 0px 15px;
`;

const Reason__Text = styled(BodyText)`
  color: ${({ theme }) => theme.color.grey.deep};
  margin-bottom: 6px;
`;

const Type__Text = styled(SmallText)`
  color: ${({ theme }) => theme.color.grey.mild};
`;

// ScaleBalance()
const ScaleBalance__Container = styled.View`
  align-items: flex-end;
  padding-top: 1.5px;
`;

const Scale__Text = styled(H4)`
  margin-bottom: 3px;
  font-weight: bold;
`;

const IncomeScale__Text = styled(Scale__Text)`
  color: ${({ theme }) => theme.color.purple.deep};
`;
const ExpenditureScale__Text = styled(Scale__Text)`
  color: ${({ theme }) => theme.color.red.warning};
`;

const Balance__Text = styled(BodyText)`
  color: ${({ theme }) => theme.color.grey.mild};
`;
