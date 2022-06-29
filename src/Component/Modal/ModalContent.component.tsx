import React from "react";
import styled from "styled-components/native";
import { ModalContentContainer } from "./ModalContentContainer.component";
import { H1, H2 } from "src/StyledComponents/Text";

/**
 * 반복적으로 사용되는 모달 콘텐츠입니다.
 * 제목 여부, 버튼 비율 동등 여부, 확인 버튼 위치에 따라 디자인이 분기됩니다.
 *
 * 여기서 정의할 수 없는 복잡한 디자인의 모달은
 * ModalContentContainer만 import하여 각 모달마다 따로 디자인합니다.
 * (ex. 리서치 끌올 모달, 프로필 작성 유도 모달, 리서치 참여 완료 모달 등)
 *
 * @param title 모달 제목 (Optional)
 * @param content 모달 내용
 * @param buttonSymmetric 확인/취소 버튼 비율 1:1 여부 (기본값: true)
 * @param LeftButton 좌측 버튼 (RadiusButton 사용 권장)
 * @param RightButton 우측 버튼 (Optional) (RadiusButton 사용 권장)
 * @author 현웅
 */
export function ModalContent({
  title,
  content,
  buttonSymmetric = true,
  LeftButton,
  RightButton,
}: {
  title?: string;
  content: string;
  buttonSymmetric?: boolean;
  LeftButton: JSX.Element;
  RightButton?: JSX.Element;
}) {
  return (
    <ModalContentContainer>
      <Title title={title} />
      <Content title={title} content={content} />
      <Buttons
        buttonSymmetric={buttonSymmetric}
        LeftButton={LeftButton}
        RightButton={RightButton}
      />
    </ModalContentContainer>
  );
}

/**
 * 모달 제목. 없을 수도 있습니다.
 * @author 현웅
 */
function Title({ title }: { title?: string }) {
  //* 제목이 없는 모달인 경우
  if (!title) return null;

  //* 제목과 내용만 있는 모달인 경우
  return (
    <Title__Container>
      <Title__Text>{title}</Title__Text>
    </Title__Container>
  );
}

/**
 * 모달 내용. 제목 존재 여부에 따라 내용의 글자 스타일이 달라집니다.
 * @author 현웅
 */
function Content({ title, content }: { title?: string; content: string }) {
  //* 제목, 내용이 있는 모달인 경우
  if (title) {
    return (
      <Content__Container>
        <Content__Text>{content}</Content__Text>
      </Content__Container>
    );
  }

  //* 내용만 있는 모달인 경우
  return (
    <Content__BigContainer>
      <Content__BigText>{content}</Content__BigText>
    </Content__BigContainer>
  );
}

function Buttons({
  buttonSymmetric,
  LeftButton,
  RightButton,
}: {
  buttonSymmetric: boolean;
  LeftButton: JSX.Element;
  RightButton?: JSX.Element;
}) {
  //* 우측 버튼이 없는 경우 좌측 버튼만 보여줍니다.
  if (!RightButton) {
    return <Buttons__Container>{LeftButton}</Buttons__Container>;
  }
  return (
    <Buttons__Container>
      <LeftButton__Container buttonSymmetric={buttonSymmetric}>
        {LeftButton}
      </LeftButton__Container>
      <ButtonSplitter />
      <RightButton__Container buttonSymmetric={buttonSymmetric}>
        {RightButton}
      </RightButton__Container>
    </Buttons__Container>
  );
}

// Title()
const Title__Container = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 24px;
  margin-bottom: 15px;
`;

const Title__Text = styled(H1)`
  font-weight: bold;
`;

// Content()
const Content__Container = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 32px;
`;

const Content__Text = styled(H2)`
  color: ${({ theme }) => theme.color.grey.mild};
  line-height: 20px;
  text-align: center;
`;

const Content__BigContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  padding: 24px 0px;
`;

const Content__BigText = styled(H1)`
  font-weight: bold;
  line-height: 24px;
  text-align: center;
`;

// Buttons()
const Buttons__Container = styled.View`
  flex-direction: row;
`;

const LeftButton__Container = styled.View<{ buttonSymmetric: boolean }>`
  flex: ${({ buttonSymmetric }) => (buttonSymmetric ? 1 : 3)};
`;
const RightButton__Container = styled.View<{ buttonSymmetric: boolean }>`
  flex: ${({ buttonSymmetric }) => (buttonSymmetric ? 1 : 8)};
`;

const ButtonSplitter = styled.View`
  width: 12px;
`;
