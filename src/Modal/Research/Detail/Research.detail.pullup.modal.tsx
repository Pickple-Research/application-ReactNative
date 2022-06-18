import React from "react";
import styled from "styled-components/native";
import {
  BlackBackgroundModal,
  ModalContentContainer,
} from "src/Component/Modal";
import { RadiusButton } from "src/Component/Button";
import { H2, DetailText } from "src/StyledComponents/Text";
import shallow from "zustand/shallow";
import { useResearchDetailScreenStore } from "src/Zustand";

/**
 * 리서치 상세페이지 끌올 모달입니다.
 * @author 현웅
 */
export function ResearchDetailPullupModal() {
  const {
    researchPullupModalVisible,
    setResearchPullupModalVisible,
    pullupResearch,
  } = useResearchDetailScreenStore(
    state => ({
      researchPullupModalVisible: state.researchPullupModalVisible,
      setResearchPullupModalVisible: state.setResearchPullupModalVisible,
      pullupResearch: state.pullupResearch,
    }),
    shallow,
  );

  return (
    <BlackBackgroundModal
      modalVisible={researchPullupModalVisible}
      setModalVisible={setResearchPullupModalVisible}>
      <ModalContentContainer>
        <Title />
        <Content />
        <FurtherInfo />
        <Buttons
          onPressLeftButton={() => {
            setResearchPullupModalVisible(false);
          }}
          onPressRightButton={pullupResearch}
        />
      </ModalContentContainer>
    </BlackBackgroundModal>
  );
}

function Title() {
  return (
    <Title__Container>
      <Title__Text>끌어올리기</Title__Text>
    </Title__Container>
  );
}
function Content() {
  return (
    <Content__Container>
      <Content__Text>끌어올리기를 하면</Content__Text>
      <Content__Text>{` 이 게시물이`}</Content__Text>
      <Content__Text>{` 리서치 `}</Content__Text>
      <Content__BoldText>최상단으로 다시 게시</Content__BoldText>
      <Content__Text>{`되어 `}</Content__Text>
      <Content__Text>{`더 많은 `}</Content__Text>
      <Content__Text>{`사람들에게 `}</Content__Text>
      <Content__Text>노출될 수 있습니다.</Content__Text>
    </Content__Container>
  );
}
function FurtherInfo() {
  return (
    <FurtherInfo__Container>
      <FurtherInfo__Text>1크레딧이 차감됩니다</FurtherInfo__Text>
    </FurtherInfo__Container>
  );
}

function Buttons({
  onPressLeftButton,
  onPressRightButton,
}: {
  onPressLeftButton: () => void;
  onPressRightButton: () => void;
}) {
  return (
    <Buttons__Container>
      <LeftButton__Container>
        <RadiusButton
          text="취소"
          type="BLUE_CANCEL"
          onPress={onPressLeftButton}
        />
      </LeftButton__Container>
      <ButtonSpliter />
      <RightButton__Container>
        <RadiusButton
          text="끌어올리기"
          type="BLUE_CONFIRM"
          onPress={onPressRightButton}
        />
      </RightButton__Container>
    </Buttons__Container>
  );
}

// Title()
const Title__Container = styled.View`
  margin-top: 6px;
  margin-bottom: 15px;
  padding-left: 8px;
  padding-right: 8px;
`;

const Title__Text = styled.Text`
  color: black;
  font-size: 16px;
  font-weight: bold;
`;

// Content()
const Content__Container = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  padding-left: 8px;
  padding-right: 8px;
  margin-bottom: 20px;
`;

const Content__Text = styled(H2)`
  color: ${({ theme }) => theme.color.grey.main};
  line-height: 20px;
`;

const Content__BoldText = styled(Content__Text)`
  font-weight: bold;
`;

// FurtherInfo()
const FurtherInfo__Container = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 5px;
  margin-bottom: 8px;
`;

const FurtherInfo__Text = styled(DetailText)`
  color: ${({ theme }) => theme.color.grey.mild};
`;

// Buttons()
const Buttons__Container = styled.View`
  flex-direction: row;
`;

const LeftButton__Container = styled.View`
  flex: 3;
`;

const RightButton__Container = styled.View`
  flex: 8;
`;

const ButtonSpliter = styled.View`
  width: 12px;
`;
