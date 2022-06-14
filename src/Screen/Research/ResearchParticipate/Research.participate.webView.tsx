import React from "react";
import styled from "styled-components/native";
import { WebView, WebViewMessageEvent } from "react-native-webview";
import shallow from "zustand/shallow";
import {
  useUserStore,
  useResearchStore,
  useResearchDetailStore,
  useResearchParticipateStore,
} from "src/Zustand";

/**
 * 구글/네이버 외부 폼을 보여주는 화면입니다.
 * @author 현웅
 */
export function ResearchParticipateWebView({ link }: { link: string }) {
  const addParticipatedResearchInfo = useUserStore(
    state => state.addParticipatedResearchInfo,
  );
  const updateResearchListItem = useResearchStore(
    state => state.updateResearchListItem,
  );
  const { researchDetail, setResearchDetail } = useResearchDetailStore(
    state => ({
      researchDetail: state.researchDetail,
      setResearchDetail: state.setResearchDetail,
    }),
    shallow,
  );
  const {
    researchStartDateSetted,
    setResearchStartDate,
    setLoadingModalVisible,
    setCompleteModalVisible,
    formSubmitted,
    setFormSubmitted,
    participateResearch,
    setParticipateSuccessed,
  } = useResearchParticipateStore(
    state => ({
      researchStartDateSetted: state.researchStartDateSetted,
      setResearchStartDate: state.setResearchStartDate,
      setLoadingModalVisible: state.setLoadingModalVisible,
      setCompleteModalVisible: state.setCompleteModalVisible,
      formSubmitted: state.formSubmitted,
      setFormSubmitted: state.setFormSubmitted,
      participateResearch: state.participateResearch,
      setParticipateSuccessed: state.setParticipateSuccessed,
    }),
    shallow,
  );

  /**
   * @deprecated 한 화면만에 끝나는 설문지 종류를 잡아내지 못합니다. (즉, 첫 화면에 제출 버튼 하나만 있는 경우)
   *
   * 구글 독스 웹뷰에 Inject되어, '제출' 버튼에 터치이벤트를 감지하는 이벤트 리스너를 정의하는 스크립트입니다.
   * 구글 독스의 HTML 구조상 제출 버튼이 존재하는 곳을 찾고, 그곳에 터치 이벤트를 추가합니다.
   *
   * @explain
   * ```
   * const targetButtons = [...document.getElementsByTagName('div')]    //* 우선 div를 모두 가져옵니다.
   *                        .map(e => e.children)            //* 그 후 해당 div의 직계자손들만 가져옵니다.
   *                        .filter(e => !!e)                //* 존재하지 않아 null이 반환된 요소들은 걸러냅니다
   *                        .filter(e => e.length == 2)      //* 그 중 수가 2개인 요소들만 가져옵니다.
   *                        .filter(e => e[0].getAttribute('role') === 'button' && e[1].getAttribute('role') === 'button')[0];  //* 다시 그 2개의 요소가 모두 role="button"인 요소만 가져옵니다.
   *
   * if(targetButtons.length) {
   *     //* 이전&제출 버튼이 나타나는 경우만 가져오고 싶지만 이전&다음 버튼이 나타나는 경우도 해당 조건을 만족하므로 다시 걸러냅니다.
   *     const firstButtonColor = window.getComputedStyle(targetButtons[0]).backgroundColor;  //* 이전 버튼
   *     const secondButtonColor = window.getComputedStyle(targetButtons[1]).backgroundColor;  //* 다음 or 제출 버튼
   *     if(firstButtonColor !== secondButtonColor){  //* 두 버튼의 배경색의 다른 경우에만
   *        targetButtons[1].addEventListener('touchend', () => {  //* 터치 이벤트를 추가합니다. ('click' 이벤트는 마우스를 사용할 때만 발생합니다. 모바일에서는 'touch' 계열 이벤트를 사용해야합니다.)
   *            window.ReactNativeWebView.postMessage('submitted');  //* 제출 버튼이 눌리면 WebView를 통해 'submitted' 메세지를 전송합니다.
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
   * 구글 독스의 참여 완료 페이지를 디텍팅하고 신호를 보내는 JS코드입니다.
   * @author 현웅
   */
  const googleDocsCompleteDetector = `
    const bodyDivs = [...document.querySelectorAll('body > div')];
    if(bodyDivs.length === 2) {
      const divKeys = Object.keys(bodyDivs[1]).map(key=>{return key.toLowerCase().replace(/[^a-z]/g, '')});
      if(divKeys.includes('jscontroller') && divKeys.includes('jsaction')) {
        window.ReactNativeWebView.postMessage('formSubmitted');
      }
    }
  `;

  /**
   * 네이버 폼의 참여 완료 페이지를 디텍팅하고 신호를 보내는 JS코드입니다.
   * @author 현웅
   */
  const naverDocsCompleteDetector = `
    const finishInfo = document.getElementsByClassName('finishInfoPh')[0];
    if(window.getComputedStyle(finishInfo).display !== 'none') {
      window.ReactNativeWebView.postMessage('formSubmitted');
    }
  `;

  /**
   * 설문지 링크에 따라 어떤 JS 코드를 Inject 할지 결정하여 반환합니다.
   * @author 현웅
   */
  const injectedJavaScript = () => {
    if (link.startsWith("https://docs.google.com")) {
      return googleDocsCompleteDetector;
    }
    if (
      link.startsWith("https://naver.me") ||
      link.startsWith("https://form.office.naver.com")
    ) {
      return naverDocsCompleteDetector;
    }
    return `alert("유효한 구글 폼, 혹은 네이버 폼 주소가 아닙니다.");`;
  };

  /**
   * 웹뷰 로드가 완료되었을 때 호출되는 함수입니다.
   * 리서치에 참여한 시각을 설정하고 로딩 모달을 닫습니다.
   * 페이지가 바뀔 때마다 호출되기 때문에 researchStartDateSetted 플래그를 사용하여 한번만 호출합니다.
   * @author 현웅
   */
  const onLoadEnd = () => {
    if (researchStartDateSetted) return;
    setResearchStartDate();
    setLoadingModalVisible(false);
  };

  /**
   * 웹뷰로부터 전달받은 이벤트를 처리하는 이벤트 리스너입니다.
   * 제출 버튼이 눌려 postMessage를 통해 'formSubmitted' 메세지가 전송된 경우,
   * formSubmitted 플래그를 true로 설정하고 리서치 참여 시간을 계산합니다.
   * @author 현웅
   */
  const onMessage = async (event: WebViewMessageEvent) => {
    //* 아직 이유는 모르지만, onMessage() 이벤트가 여러번 호출되는 현상이 존재합니다.
    //* (아마 구글 독스가 한 페이지를 로드할 때에도 여러개의 URL을 거치기 때문인 것 같습니다)
    if (formSubmitted) return;
    if (event.nativeEvent.data === "formSubmitted") {
      setFormSubmitted(true);

      //* 참여 완료 모달을 띄워주고
      setCompleteModalVisible(true);

      //* 서버에 리서치 참여 요청을 합니다.
      const result = await participateResearch(researchDetail._id);
      //TODO: 요청에 실패한 경우, AsyncStorage에 저장해놔야 함
      if (result === null) return;

      setParticipateSuccessed(true);
      //* 요청이 성공적인 경우, 리서치 상세보기 페이지 및 리서치 리스트에 최신 리서치 정보를 반영합니다.
      setResearchDetail(result.updatedResearch);
      updateResearchListItem(result.updatedResearch);
      //* 또한 유저의 리서치 참여 정보를 업데이트합니다.
      addParticipatedResearchInfo(result.participatedResearchInfo);
    }
  };

  return (
    <Container>
      <WebView
        source={{ uri: link }}
        injectedJavaScript={injectedJavaScript()} // JS 코드를 각 화면마다 삽입합니다.
        onLoadEnd={onLoadEnd}
        onMessage={onMessage} // window.ReactNativeWebView.postMessage() 를 통해 웹뷰에서 전달된 이벤트를 처리합니다.
      />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
`;
