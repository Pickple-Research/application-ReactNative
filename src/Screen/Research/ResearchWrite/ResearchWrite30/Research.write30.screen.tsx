import { RadiusButton } from "@Component/Button";
import { SimpleDropDown } from "@Component/DropDown";
import { GiftListItem } from "@Component/Research";
import { vw } from "@Theme/size.theme";
import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

/**
 * 리서치 작성 페이지 30
 * 숫자가 클 수록 뒤 페이지입니다
 */

export function ResearchWrite30Screen({ navigation }: any) {
  type item = {
    key_: string;
    name: string;
  };
  const [counter, setCounter] = useState<number>(1);
  const [giftItems, setGiftItems] = useState<item[]>([{ key_: "0", name: "" }]);
  const [giftVisible, setGiftVisible] = useState<boolean>(false);
  const [creditVisible, setCreditVisible] = useState<boolean>(false);

  function addButtonHandler() {
    setCounter(prev => prev + 1);
    setGiftItems([...giftItems, { key_: counter.toString(), name: "" }]);
  }
  function deleteItem(key: string) {
    let temp: item[] = [];
    giftItems.forEach(item => {
      if (item.key_ !== key) {
        temp.push(item);
      }
    });
    setGiftItems(temp);
  }

  return (
    <Container>
      <Title />
      <View>
        <TouchableOpacity onPress={() => setGiftVisible(prev => !prev)}>
          <HideView>
            <HideNormalText>기프티콘을 추가해주세요</HideNormalText>
          </HideView>
        </TouchableOpacity>
        {giftVisible && (
          <GiftContainer>
            {giftItems.map((item, index) => {
              return <GiftListItem key_={item.key_} onDelete={deleteItem} />;
            })}
            <RadiusButton
              content="+ 경품추가"
              type="SHOW_MORE"
              style={{
                marginTop: 8,
                marginHorizontal: 16,
                backgroundColor: "#444444",
              }}
              fontStyle={{
                color: "white",
              }}
              onPress={addButtonHandler}
            />
          </GiftContainer>
        )}
      </View>
      <View>
        <TouchableOpacity onPress={() => setCreditVisible(prev => !prev)}>
          <HideView>
            <HideBoldText>경품용 추가 크레딧</HideBoldText>
            <HideNormalText>을 입력해주세요</HideNormalText>
          </HideView>
        </TouchableOpacity>
        {creditVisible && (
          <>
            <CreditContainer>
              <CreditView__Credit>
                <NormalText__Credit>
                  기프티콘 대신 <BoldText__Credit>크레딧</BoldText__Credit>으로
                  참여자분들께 감사의미를 전달할 수 있습니다.
                </NormalText__Credit>
              </CreditView__Credit>
              <CreditView__Credit>
                <SimpleDropDown
                  buttonStyle={{
                    width: 80,
                    padding: 0,
                    marginLeft: 12,
                    borderRadius: 10,
                  }}
                  imageStyle={{
                    marginRight: 5,
                  }}
                  data={[1, 3, 5, 10, 20, 30]}
                />
                <BoldText__Credit>명</BoldText__Credit>
                <NormalText__Credit>에게</NormalText__Credit>
                <SimpleDropDown
                  buttonStyle={{
                    width: 80,
                    padding: 0,
                    marginHorizontal: 12,
                    borderRadius: 10,
                  }}
                  imageStyle={{
                    marginRight: 5,
                  }}
                  data={[1, 3, 5, 10, 20, 30, 50]}
                />
                <BoldText__Credit>C</BoldText__Credit>
                <NormalText__Credit>씩 추첨 지급</NormalText__Credit>
              </CreditView__Credit>
              <CreditView__Credit>
                <NormalText__Credit>
                  = 총 5<BoldText__Credit>C</BoldText__Credit>
                </NormalText__Credit>
              </CreditView__Credit>
            </CreditContainer>
          </>
        )}
      </View>
    </Container>
  );
}

function Title() {
  return (
    <TitleContainer>
      <TitleMainText__TitleContainer>참여자 경품</TitleMainText__TitleContainer>
      <TitleSubText__TitleContainer>(선택)</TitleSubText__TitleContainer>
    </TitleContainer>
  );
}

function Gift() {}

function Credit() {}
const Container = styled.ScrollView`
  flex: 1;
`;

const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 25px 20px;
`;
const TitleMainText__TitleContainer = styled.Text`
  color: #333333;
  font-size: 18px;
  font-weight: 500;
`;
const TitleSubText__TitleContainer = styled.Text`
  color: #333333;
  font-size: 14px;
  font-weight: 400;
  margin-left: 5px;
`;

const HideView = styled.View`
  flex-direction: row;
  background-color: #e8e8e8;
  padding: 10px 20px;
  margin-top: 6px;
`;
const HideBoldText = styled.Text`
  color: #333333;
  font-weight: 500;
`;

const HideNormalText = styled.Text`
  color: #333333;
  font-weight: 400;
`;

const GiftContainer = styled.View`
  padding-top: 18px;
  padding-bottom: 40px;
`;
const CreditContainer = styled.View`
  flex-wrap: wrap;
  margin: 0px 20px 0px 20px;
`;

const CreditView__Credit = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin: 4px 0px 4px 0px;
`;

const NormalText__Credit = styled.Text`
  color: #666666;
  font-weight: 400;
`;

const BoldText__Credit = styled.Text`
  color: #666666;
  font-weight: 500;
`;
