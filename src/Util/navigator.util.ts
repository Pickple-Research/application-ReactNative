import { BackHandler } from "react-native";
import {
  getFocusedRouteNameFromRoute,
  RouteProp,
} from "@react-navigation/native";
import { bottomTabBarHidingScreens } from "@Constant/index";

/**
 * @deprecated
 * route를 인자로 받아 현재 보여지는 Screen에서 bottomTab을 보여줄 지 말지 결정합니다.
 * 이 함수를 Navigator에 바로 사용하면, 화면을 이동할 때마다 모든 자식 스택의 route를 추적합니다.
 * 따라서 각 Screen에 함수를 따로따로 적용시켜주는 것이 안전합니다.
 *
 * @param route
 * @returns "flex" or "none"
 *
 * @author 원제
 * @modify 현웅
 */
export function getBottomTabVisibilityFromRoute(route: RouteProp<any, any>) {
  const screenName = getFocusedRouteNameFromRoute(route);

  if (screenName && bottomTabBarHidingScreens.includes(screenName)) {
    return "none";
  }
  // return "flex";
}

/**
 * @deprecated
 * @author 원제
 */
export function popBackHandler(navigation: any) {
  BackHandler.addEventListener("hardwareBackPress", function () {
    navigation.pop();
    return true;
  });
}
