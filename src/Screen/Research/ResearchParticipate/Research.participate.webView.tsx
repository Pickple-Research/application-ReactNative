import React, { useState } from "react";
import styled from "styled-components/native";
import { WebView, WebViewMessageEvent } from "react-native-webview";
import shallow from "zustand/shallow";
import { useResearchParticipateStore } from "src/Zustand";

/**
 * 구글/네이버 외부 폼을 보여주는 화면입니다.
 * @author 현웅
 */
export function ResearchParticipateWebView() {
  const [completed, setCompleted] = useState(false);

  const {
    resetResearchStartDate,
    setLoadingModalVisible,
    caculateConsummedTime,
    setCompleteModalVisible,
  } = useResearchParticipateStore(
    state => ({
      resetResearchStartDate: state.resetResearchStartDate,
      setLoadingModalVisible: state.setLoadingModalVisible,
      caculateConsummedTime: state.caculateConsummedTime,
      setCompleteModalVisible: state.setCompleteModalVisible,
    }),
    shallow,
  );

  /**
   * 구글 독스 웹뷰에 Inject되어, '제출' 버튼에 터치이벤트를 감지하는 이벤트 리스너를 정의하는 스크립트입니다.
   * 구글 독스의 HTML 구조상 제출 버튼이 존재하는 곳을 찾고, 그곳에 터치 이벤트를 추가합니다.
   *
   * @explain
   * ```
   * const targetButtons = [...document.getElementsByTagName('div')]    // 우선 div를 모두 가져옵니다.
   *                        .map(e => e.children)            // 그 후 해당 div의 직계자손들만 가져옵니다.
   *                        .filter(e => !!e)                // 존재하지 않아 null이 반환된 요소들은 걸러냅니다
   *                        .filter(e => e.length == 2)      // 그 중 수가 2개인 요소들만 가져옵니다.
   *                        .filter(e => e[0].getAttribute('role') === 'button' && e[1].getAttribute('role') === 'button')[0];  // 다시 그 2개의 요소가 모두 role="button"인 요소만 가져옵니다.
   *
   * if(targetButtons.length) {
   *     // 이전&제출 버튼이 나타나는 경우만 가져오고 싶지만 이전&다음 버튼이 나타나는 경우도 해당 조건을 만족하므로 다시 걸러냅니다.
   *     const firstButtonColor = window.getComputedStyle(targetButtons[0]).backgroundColor;  // 이전 버튼
   *     const secondButtonColor = window.getComputedStyle(targetButtons[1]).backgroundColor;  // 다음 or 제출 버튼
   *     if(firstButtonColor !== secondButtonColor){  // 두 버튼의 배경색의 다른 경우에만
   *        targetButtons[1].addEventListener('touchend', () => {  // 터치 이벤트를 추가합니다. ('click' 이벤트는 마우스를 사용할 때만 발생합니다. 모바일에서는 'touch' 계열 이벤트를 사용해야합니다.)
   *            window.ReactNativeWebView.postMessage('submitted');  // 제출 버튼이 눌리면 WebView를 통해 'submitted' 메세지를 전송합니다.
   *        });
   *    }
   * }
   * ```
   *
   * @author 현웅
   * @sincerelyThanksTo 상완
   *
   * @PS 압니다. 지저분한거.. 하지만 어쩌겠습니까. 구글 API가 없으니 일단 굴러만 가면 O.K.죠
   */
  const addEventListnerToSubmitButton = `
    const targetButtons = [...document.getElementsByTagName('div')]
                            .map(e => e.children)
                            .filter(e => !!e)
                            .filter(e => e.length == 2)
                            .filter(e => e[0].getAttribute('role') === 'button' && e[1].getAttribute('role') === 'button')[0];
    if(targetButtons.length) {
        const firstButtonColor = window.getComputedStyle(targetButtons[0]).backgroundColor;
        const secondButtonColor = window.getComputedStyle(targetButtons[1]).backgroundColor;
        if(firstButtonColor !== secondButtonColor){
            targetButtons[1].addEventListener('touchend', () => {
                window.ReactNativeWebView.postMessage('submitted');
            })
        }
    }
  `;

  /**
   * 웹뷰로부터 전달받은 이벤트를 처리하는 이벤트 리스너입니다.
   * @author 현웅
   */
  const onMessage = (event: WebViewMessageEvent) => {
    //TODO: 아직 이유는 모르지만, onMessage() 이벤트가 여러번 호출되는 현상이 존재합니다. 중복 호출을 막기 위해 completed 상태 플래그를 활용합니다.
    if (completed) return;
    if (event.nativeEvent.data === "submitted") {
      setCompleted(true);
      caculateConsummedTime();
      setCompleteModalVisible(true);
    }
  };

  return (
    <Container>
      <WebView
        source={{
          uri: "https://docs.google.com/forms/d/e/1FAIpQLSfpOVgvJtbuoRicxbpUfkwmCLN9VINllkMyLeB5a7EgiSvfTw/viewform?usp=sf_link",
        }}
        injectedJavaScript={addEventListnerToSubmitButton} // 정의한 JS 코드를 각 화면마다 삽입합니다.
        onMessage={onMessage} // window.ReactNativeWebView.postMessage() 를 통해 웹뷰에서 전달된 이벤트를 처리합니다.
        onLoadEnd={() => {
          //* 웹뷰 로드가 완료되면 리서치에 참여한 시각을 설정하고 로딩 모달을 닫습니다.
          resetResearchStartDate();
          setLoadingModalVisible(false);
        }}
      />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
`;
