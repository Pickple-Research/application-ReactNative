import React, { useState } from "react";
import {
  FlatList,
  View,
  NativeSyntheticEvent,
  NativeScrollEvent,
  LayoutChangeEvent,
} from "react-native";

type CarouselProps = {
  data: any[];
  PageComponent: (data: any) => JSX.Element;
  pageWidth: number;
  gap?: number;
  showIndicator?: boolean;
  showIndex?: boolean;
};

/**
 * 데이터 리스트와 페이지 디자인 함수를 인자로 받아 캐러샐을 반환합니다.
 * 반환하는 Carousel은 이것을 감싸고 있는 View의 width와 height을 따라가기 때문에,
 * Carousel을 호출하기 전에는 Carousel이 위치하길 원하는 곳에 View를 만들고 감싸주어야 합니다.
 * @author 현웅
 */
export function Carousel(props: CarouselProps) {
  const [pageWidth, setPageWidth] = useState<number>(400);
  const [pageIndex, setPageIndex] = useState<number>(0);

  /**
   * 초기의 pageWidth를 정의합니다.
   * @author 현웅
   */
  function setInitialPageWidth() {}

  /**
   * Indicator, 혹은 Index를 사용하는 경우에만 사용합니다.
   * 스크롤 이벤트가 일어날 때, 현재 페이지 위치를 계산합니다.
   * @author 현웅
   */
  function setPageOnScroll(e: NativeSyntheticEvent<NativeScrollEvent>) {
    const newPage = Math.round(
      e.nativeEvent.contentOffset.x /
        (props.pageWidth + (props.gap ? props.gap : 0)),
    );
    console.log(`${pageIndex}번 페이지를 보고 있습니다.`);
    console.log(`${newPage}번 페이지로 이동합니다.`);
    setPageIndex(newPage);
  }

  return (
    <FlatList
      // style={{ width: "100%", height: "100%" }}
      //? data: 캐러샐에서 사용하는 데이터
      //? renderItem: 캐러샐 각 페이지 디자인
      //? onScroll: 스크롤 이벤트 발생시 호출 함수.
      //? scrollEventThrottle: 스크롤 이벤트 시 호출 함수 호출 주기
      //? horizontal: 횡스크롤 여부
      //? pagingEnabled: page 크기마다 스크롤 breakpoint 생성
      //? snapToInterval: 주어진 값마다 스크롤 breakpoint 생성
      //? snapToAlignment: 스크롤 되었을때, 멈추게 되는 breakpoint를
      //?     FlatList의 어디(왼쪽 | 중앙 | 오른쪽)에 맞출지 결정.
      //? decelerationRate: 스크롤 이벤트 반영속도
      //? showsHorizontalScrollIndicator: 수평 스크롤바 표시 여부
      data={props.data}
      renderItem={props.PageComponent}
      onScroll={
        props.showIndicator || props.showIndex ? setPageOnScroll : undefined
      }
      scrollEventThrottle={10000}
      horizontal
      pagingEnabled
      snapToInterval={props.pageWidth}
      snapToAlignment="start"
      decelerationRate="normal"
      showsHorizontalScrollIndicator={false}
    />
  );
}

function CarouselIndicator() {}
