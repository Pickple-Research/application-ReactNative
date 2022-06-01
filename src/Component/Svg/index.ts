/**
 * Svg 아이콘들을 수동으로 정의한 리액트 컴포넌트들입니다.
 * 다음과 같이 svg 파일을 직접 import하여 사용할 수도 있지만,
 * ```
 * import Logo from "@Resource/svg/<파일이름>.svg"
 *
 * function Foo(){
 *     return <Logo width={} height={} />
 * }
 * ```
 * 얇은 컴포넌트처럼 fill대신 stroke가 컴포넌트의 색을 결정하는 경우,
 * 여러 개의 컴포넌트가 하나의 아이콘을 이루는 경우 생각처럼 작동하지 않는 경우가 존재합니다.
 * 때문에 svg 파일을 열면 보이는 path 속성들을 복붙해와서 아래와 같이 상황에 맞게 커스텀하는 것을 추천합니다.
 * @author 현웅
 */

import { SvgProps } from "react-native-svg";

/**
 * LandingBottomTab의 아이콘에서만 쓰이는 Svg 아이콘 속성입니다.
 * @author 현웅
 */
export type BottomTabSvgIconProps = SvgProps & {
  focused: boolean;
};

export * from "./CheckIcon";
export * from "./CommunityIcon";
export * from "./HomeIcon";
export * from "./MypageIcon";
export * from "./PartnerIcon";
export * from "./ResearchIcon";
