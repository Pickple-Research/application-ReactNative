import { RadioButtonGroup } from "@Component/Radio";
import { theme } from "@Theme/theme";
import { useAuthFunnelScreenStore } from "@Zustand/Auth/auth.funnel.zustand";
import React, { useState } from "react";
import styled from "styled-components/native";

export function AuthFunnelInterests() {
  const residences = [
    "서울특별시",
    "부산광역시",
    "대구광역시",
    "인천광역시",
    "광주광역시",
    "대전광역시",
    "울산광역시",
    "세종특별자치시",
    "경기도",
    "충청북도",
    "충청남도",
    "전라북도",
    "전라남도",
    "경상북도",
    "경상남도",
  ];

  return (
    <Container>
      <TitleText>밍망님은 어느 분야에 관심이 있으신가요?</TitleText>
      <InterestsOptionGroup
        title={"엔터테인먼트 / 예술"}
        interestsList={[
          "문학/예술",
          "영화",
          "드라마",
          "미술/디자인",
          "공연/전시",
          "음악",
        ]}
      />
      <InterestsOptionGroup
        title={"운동 / 엑티비티"}
        interestsList={[
          "러닝/산책",
          "수영",
          "쇼트트랙",
          "필라테스",
          "스카이 다이빙",
          "축구",
          "농구",
          "야구",
        ]}
      />
      <InterestsOptionGroup
        title={"커리어"}
        interestsList={[
          "개발",
          "디자인",
          "기획",
          "마케팅",
          "스타트업",
          "데이터분석",
          "서비스",
        ]}
      />
    </Container>
  );
}

function InterestsOptionGroup({
  title,
  interestsList,
}: {
  title: string;
  interestsList: string[];
}) {
  const { interests, addInterests } = useAuthFunnelScreenStore(state => ({
    interests: state.interestsInput,
    addInterests: state.addInterestsInput,
  }));

  const [interestsSelected, setResidenceSelected] = useState<number[]>([]);

  return (
    <SubContainer__Interests>
      <TitleText__Interests>{title}</TitleText__Interests>
      <RadioButtonGroup
        options={interestsList}
        selectedOptionIndexes={interestsSelected}
        onPress={optionIndex => {
          setResidenceSelected([...interestsSelected, optionIndex]);
          if (!interests.includes(interestsList[optionIndex])) {
            addInterests(interestsList[optionIndex]);
          }
          console.log(interests);
        }}
        buttonStyle={{
          width: 80,
          height: 40,
          borderWidth: 1,
          borderRadius: 10,
          borderColor: theme.color.purple.main,
          padding: 9,
          marginHorizontal: 3,
          marginVertical: 0,
        }}
        style={{ marginHorizontal: 5, flexDirection: "row", flexWrap: "wrap" }}
        selectedStyle={{
          backgroundColor: theme.color.purple.pastel,
          elevation: 4,
        }}
        textStyle={{ color: "#594E96", textAlign: "center" }}
        withIcon={false}
      />
    </SubContainer__Interests>
  );
}

const Container = styled.View``;
const TitleText = styled.Text`
  color: ${({ theme }) => theme.color.purple.deep};
  margin-top: 25px;
  margin-bottom: 13px;
  font-size: 14px;
  font-weight: 500;
`;

const SubContainer__Interests = styled.View`
  margin-top: 13px;
`;
const TitleText__Interests = styled.Text`
  color: #594e96;
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 9px;
`;
