import React from "react";
import styled from "styled-components/native";
import { PillButton } from "src/Component/Button";
import { H3 } from "src/StyledComponents/Text";
import shallow from "zustand/shallow";
import { useVoteUploadScreenStore } from "src/Zustand";
import { globalStyles } from "src/Style/globalStyles";
import { CheckIcon } from "src/Component/Svg";
import DoubleCheckIcon from "src/Resource/svg/double-check-icon.svg";

/**
 * 투표 업로드 페이지 입력값을 받는 부분입니다. (사실상 스크린 내용 전체)
 * @author 현웅
 */
export function CommunityVoteUploadInput() {
  return (
    <Container style={globalStyles.screen__horizontalPadding}>
      <InnerContainer>
        <Title />
        <Content />
        <Options />
        <OptionAddButton />
        <Boundary />
        <MultiChoice />
      </InnerContainer>
    </Container>
  );
}

// 제목 입력란
function Title() {
  const setTitleInput = useVoteUploadScreenStore(state => state.setTitleInput);

  return (
    <Title__Container>
      <Title__Input placeholder="제목" onChangeText={setTitleInput} />
    </Title__Container>
  );
}

// 내용 입력란
function Content() {
  const setContentInput = useVoteUploadScreenStore(
    state => state.setContentInput,
  );

  return (
    <Content__Container>
      <Content__Input
        placeholder="내용을 입력해주세요"
        onChangeText={setContentInput}
        multiline
      />
    </Content__Container>
  );
}

// 선택지 입력란(들)
function Options() {
  const { options, updateOptionContent } = useVoteUploadScreenStore(
    state => ({
      options: state.options,
      updateOptionContent: state.updateOptionContent,
    }),
    shallow,
  );

  return (
    <Options__Container>
      {options.map(option => {
        return (
          <Option__ContentInput
            key={option.index}
            placeholder="항목 입력"
            onChangeText={(input: string) => {
              updateOptionContent(option.index, input);
            }}
            multiline
          />
        );
      })}
    </Options__Container>
  );
}

// 선택지 추가 버튼
function OptionAddButton() {
  const addOption = useVoteUploadScreenStore(state => state.addOption);

  return (
    <OptionAddButton__Container>
      <PillButton
        content="+ 항목 추가"
        type="ADD_OPTION"
        props={{
          onPress: () => {
            addOption();
          },
        }}
      />
    </OptionAddButton__Container>
  );
}

// 복수 선택 가능 여부 체크란
function MultiChoice() {
  const { allowMultiChoice, toggleAllowMultiChoice } = useVoteUploadScreenStore(
    state => ({
      allowMultiChoice: state.allowMultiChoice,
      toggleAllowMultiChoice: state.toggleAllowMultiChoice,
    }),
    shallow,
  );

  return (
    <MultiChoice__Container
      activeOpacity={0.6}
      onPress={toggleAllowMultiChoice}>
      <DoubleCheckIcon />
      <MultiChoice__Text>복수선택</MultiChoice__Text>
      <MultiChoice__CheckIconContainer allowMultiChoice={allowMultiChoice}>
        <CheckIcon color="white" />
      </MultiChoice__CheckIconContainer>
    </MultiChoice__Container>
  );
}

const Container = styled.View``;

const InnerContainer = styled.View`
  padding-top: 6px;
  //TODO: #DESIGN-SYSTEM
  border: 1.5px solid #cccccc;
  border-radius: 10px;
`;

// Title()
const Title__Container = styled.View`
  padding: 0px 8px;
  margin-bottom: 10px;
`;

const Title__Input = styled.TextInput`
  border-bottom-color: #cccccc;
  border-bottom-width: 1px;
`;

// Content()
const Content__Container = styled.View`
  padding: 0px 8px;
  margin-bottom: 16px;
`;

const Content__Input = styled.TextInput``;

// Options()
const Options__Container = styled.View`
  padding: 0px 4px;
`;

const Option__ContentInput = styled.TextInput`
  font-size: ${({ theme }) => theme.size.header3};
  padding: 14px 20px;
  margin: 3px 0px;
  //TODO: #DESIGN-SYSTEM
  border: 1px solid #dddddd;
  border-radius: 100px;
`;

// OptionAddButton()
const OptionAddButton__Container = styled.View`
  padding: 0px 4px;
  margin-top: 3px;
  margin-bottom: 20px;
`;

const Boundary = styled.View`
  height: 1px;
  //TODO: #DESIGN-SYSTEM
  background-color: #cccccc;
`;

// MultiChoice()
const MultiChoice__Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 14px 16px;
`;

const MultiChoice__Text = styled(H3)`
  flex: 1;
  color: ${({ theme }) => theme.color.grey.mild};
  padding: 0px 5px;
`;

const MultiChoice__CheckIconContainer = styled.View<{
  allowMultiChoice: boolean;
}>`
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  //TODO: #DESIGN-SYSTEM
  background-color: ${({ allowMultiChoice, theme }) =>
    allowMultiChoice ? theme.color.purple.text : "#dddddd"};
  border-radius: 100px;
`;
