import React, { useState } from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  ListRenderItemInfo,
  LayoutChangeEvent,
  NativeSyntheticEvent,
  NativeScrollEvent,
  StyleProp,
} from "react-native";
import { theme } from "@Theme/index";

type CarouselProps<DataType> = {
  //? data: 캐러샐에 나타낼 데이터 array
  //? PageComponent: 페이지 디자인
  //? fullPage: 데이터 하나가 캐러샐 페이지 전체를 차지할지 여부
  //? useScrollBreak: 스크롤 breakpoint를 만들지 여부
  //? showIndicator: 하단 인디케이터 표시 여부
  //? showIndex: 우측 하단에 페이지 숫자 표시 여부
  data: DataType[];
  PageComponent: ({ item }: { item: DataType }) => JSX.Element;
  style?: StyleProp<any>;
  contentContainerStyle?: StyleProp<any>;
  fullPage?: boolean;
  useScrollBreak?: boolean;
  showIndicator?: boolean;
  showIndex?: boolean;
};

/**
 * 데이터 리스트와 페이지 디자인 함수(React)를 인자로 받아 횡스크롤 캐러샐을 반환합니다.
 * @caution
 * 이 떄, 페이지 디자인 함수의 인자는 반드시 아래의 형태여야 합니다.
 * ```
 *  function PageDesign({ item }: { item: { ... }}){}
 * ```
 * 이는 Carousel 구현을 위해 내부적으로 FlatList를 사용하고,
 * FlatList가 각 페이지를 랜더링할 때 정의한 함수가 { item } 형태로 인자를 받기 때문입니다.
 *
 * @caution
 * 또한 페이지 디자인 함수에서 최외곽 태그의 width에 상대값을 사용하는 경우,
 * fullPage 값을 반드시 true로 설정해주어야 합니다. (기본적으로 true입니다)
 *
 * @example
 * const data = [
 *  { title: "first", key: "data1" }
 *  { title: "second", key: "data2" }
 * ]
 *
 * type ItemProp = {
 *  title: string;
 *  key: string;
 * }
 *
 * function PageDesign({ item }: { item: ItemProp }) { ... }
 * or
 * function PageDesign({ item }: { item: { title: string, key: string } }) { ... }
 *
 * <Carousel data={data} PageComponent={PageDesign} />
 *
 * @author 현웅
 */
export function Carousel<DataType>(props: CarouselProps<DataType>) {
  //? pageWidth: FlatList의 View width
  const [pageWidth, setPageWidth] = useState<number>(400);
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(1);

  /**
   * Carousel이 가지게 되는 pageWidth를 계산합니다.
   * @author 현웅
   */
  function setInitialPageWidth(e: LayoutChangeEvent) {
    setPageWidth(e.nativeEvent.layout.width);
  }

  /**
   * 주어진 PageComponent를 감싸는 React 함수
   * (fullPage 옵션이 주어진 경우 사용)
   * @author 현웅
   */
  function FullPageRenderer({ item }: ListRenderItemInfo<DataType>) {
    return (
      <View
        style={{
          ...styles.carouselFullPageContainer,
          width: pageWidth,
        }}>
        <props.PageComponent item={item} />
      </View>
    );
  }

  /**
   * 스크롤 이벤트가 일어날 때, 현재 페이지 위치를 계산합니다.
   * (showIndicator, 혹은 showIndex가 참인 경우에만 사용합니다)
   * @author 현웅
   */
  function setPageOnScroll(e: NativeSyntheticEvent<NativeScrollEvent>) {
    const newPage = Math.round(e.nativeEvent.contentOffset.x / pageWidth);
    setCurrentPageIndex(newPage);
  }

  return (
    <View style={{ ...props.style, ...styles.container }}>
      <FlatList
        //? data: 캐러샐에서 사용하는 데이터
        //? renderItem: 데이터별 페이지 디자인
        //? onLayout: 레이아웃에 변화가 생길 때마다 호출되는 함수.
        //?     FullPage 캐러샐을 사용할 때
        //? onScroll: 스크롤 이벤트 발생시 호출 함수.
        //? scrollEventThrottle: 스크롤 이벤트 시 호출 함수 호출 주기
        //? horizontal: 횡스크롤 여부
        //? pagingEnabled: FlatList View 크기마다 스크롤 breakpoint 생성.
        //?     snapToInterval에 의해 override 되므로 사용하지는 않습니다.
        //? snapToInterval: 주어진 값마다 스크롤 breakpoint 생성
        //? snapToAlignment: 스크롤 되었을때, 멈추게 되는 breakpoint를
        //?     FlatList의 어디(왼쪽 | 중앙 | 오른쪽)에 맞출지 결정.
        //? decelerationRate: 스크롤 이벤트 반영속도
        //? showsHorizontalScrollIndicator: 수평 스크롤바 표시 여부
        // style={styles.carouselContainer}
        contentContainerStyle={{
          ...props.contentContainerStyle,
          ...styles.carouselContentContainer,
        }}
        data={props.data}
        renderItem={
          props.fullPage === false ? props.PageComponent : FullPageRenderer
        }
        onLayout={setInitialPageWidth}
        onScroll={
          props.showIndicator || props.showIndex ? setPageOnScroll : undefined
        }
        scrollEventThrottle={10000}
        horizontal
        // pagingEnabled
        snapToInterval={props.useScrollBreak === false ? undefined : pageWidth}
        snapToAlignment={props.useScrollBreak === false ? undefined : "start"}
        decelerationRate="normal"
        showsHorizontalScrollIndicator={false}
      />

      {props.showIndicator === true && (
        <Indicator
          currentPageIndex={currentPageIndex}
          totalPage={props.data.length}
          data={props.data}
        />
      )}

      {props.showIndex === true && (
        <PageIndex
          currentPageIndex={currentPageIndex + 1}
          totalPage={props.data.length}
        />
      )}
    </View>
  );
}

type IndicatorProps = {
  currentPageIndex: number;
  totalPage: number;
  data?: any[];
};

/**
 * 캐러샐 하단 인디케이터
 * @author 현웅
 */
function Indicator({ currentPageIndex, totalPage, data }: IndicatorProps) {
  //TODO: data를 이용하지 않고 totalPage만으로 map 가능하도록 설정
  return (
    <View style={styles.indicatorContainer}>
      {data &&
        data.map((page, index) => {
          return (
            <IndicatorDot key={index} focused={currentPageIndex === index} />
          );
        })}
    </View>
  );
}

function IndicatorDot({ focused }: { focused: boolean }) {
  return (
    <View
      style={
        focused ? styles.focusedIndicatorDot : styles.unfocusedIndicatorDot
      }
    />
  );
}

/**
 * 캐러샐 우측 하단 페이지 숫자 표시
 * @author 현웅
 */
function PageIndex({ currentPageIndex, totalPage }: IndicatorProps) {
  return (
    <View style={styles.pageIndexContainer}>
      <Text
        style={
          styles.pageIndexText
        }>{`${currentPageIndex} / ${totalPage}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  // Carousel을 감싸는 View 스타일
  container: { position: "relative" },

  // Carousel을 구성하는 FlatList 스타일
  // carouselContainer: {},

  carouselContentContainer: {},

  carouselFullPageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingVertical: 12,
  },

  focusedIndicatorDot: {
    width: 30,
    height: 6,
    borderRadius: 3,
    backgroundColor: theme.color.main_purple,
    marginHorizontal: 5,
  },

  unfocusedIndicatorDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: theme.color.inactive_button,
    marginHorizontal: 5,
  },

  pageIndexContainer: {
    position: "absolute",
    bottom: 12,
    right: 15,
    width: 70,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "black", opacity: 0.x 으로 설정하면
    // 자손까지 영향을 주므로 사용하기 까다로워집니다.
    backgroundColor: "rgba(0, 0, 0, .6)",
    borderRadius: 10,
  },

  pageIndexText: {
    color: "white",
    fontWeight: "bold",
    paddingBottom: 2,
  },
});
