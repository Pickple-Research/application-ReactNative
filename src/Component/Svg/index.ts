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
 * fill 등의 속성을 지정할 때 svg를 이루는 각 요소들에 반영되지 않기 떄문에
 * 고정된 색을 사용하는 아이콘이 아니라면 추천하지 않습니다.
 * 때문에 svg 파일을 열면 보이는 path 속성들을 복붙해와서 아래와 같이 상황에 맞게 커스텀하는 것을 추천합니다.
 * @author 현웅
 */
// TODO: #ENHANCEMENT 다시 찾아보니, fill 속성을 넣었을 때 스트로크에 전달할 수 있도록 설정할 수 있습니다.
// TODO: 차후 더 좋은 방안을 모색해봅시다

import { SvgProps } from "react-native-svg";

export type BottomTabSvgIconProps = SvgProps & {
  focused: boolean;
};

export * from "./CommunityIcon";
export * from "./HomeIcon";
export * from "./MypageIcon";
export * from "./PartnerIcon";
export * from "./ResearchIcon";
