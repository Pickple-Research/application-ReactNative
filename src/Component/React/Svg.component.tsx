import { theme } from "@Theme/theme";
import React from "react";
import Svg, {
  SvgProps,
  Path,
  ClipPath,
  Circle,
  Defs,
  G,
  Rect,
} from "react-native-svg";

/**
 * 아래 주석과 같이 svg 파일을 직접 import하여 사용할 수도 있게 설정은 해두었으나,
 * fill 등의 속성을 지정할 때 svg를 이루는 각 요소들에 반영되지 않기 떄문에
 * 고정된 색을 사용하는 아이콘이 아니라면 추천하지 않습니다.
 * 때문에 svg 파일을 열면 보이는 path 속성들을 복붙해와서 상황에 맞게 커스텀하는 것을 추천합니다.
 * @author 현웅
 */
// TODO: #ENHANCEMENT 다시 찾아보니, fill 속성을 넣었을 때 스트로크에 전달할 수 있도록 설정할 수 있습니다.
// TODO: 차후 더 좋은 방안을 모색해봅시다
// import Logo from "@Resource/svg/<파일이름>.svg"
// export function SvgLogo(){
//     return <Svg width={} height={} />
// }

/**
 * MainBottomTab의 홈 아이콘
 * @author 현웅
 */
export function HomeSvgIcon({
  width = "17",
  height = "20",
  fill = "white",
}: SvgProps) {
  return (
    <Svg width={width} height={height} viewBox={`0 0 17 20`}>
      <G clipPath="url(#clip0_1918_74438)">
        <Path
          d="M16.9456 7.09683C16.905 6.90307 16.7938 6.73086 16.6331 6.61296L9.48521 0.362954C9.20144 0.12778 8.84304 -0.00109863 8.47282 -0.00109863C8.10261 -0.00109863 7.74421 0.12778 7.46044 0.362954L0.312544 6.61296C0.15187 6.73086 0.0406362 6.90307 0 7.09683V18.656C0 19.0124 0.14317 19.3543 0.398015 19.6064C0.652861 19.8584 0.998507 20 1.35891 20H5.43565V13.992C5.43565 13.279 5.72199 12.5953 6.23168 12.0912C6.74137 11.587 7.43267 11.3038 8.15348 11.3038H8.73782C9.45863 11.3038 10.1499 11.587 10.6596 12.0912C11.1693 12.5953 11.4556 13.279 11.4556 13.992V20H15.5867C15.9471 20 16.2928 19.8584 16.5476 19.6064C16.8025 19.3543 16.9456 19.0124 16.9456 18.656V7.09683Z"
          fill={fill}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1918_74438">
          <Rect width={width} height={height} fill={fill} />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

type BottomTabSvgIconProps = SvgProps & {
  focused: boolean;
};

/**
 * MainBottomTab의 파트너 아이콘. focused 된 경우 색이 어두워집니다.
 * @author 현웅
 */
export function PartnerSvgIcon({
  focused = false,
  width = "24",
  height = "24",
  fill = focused ? theme.color.focused_gray : theme.color.unfocused_gray,
}: BottomTabSvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M3 11.2C3 10.0799 3 9.51984 3.21799 9.09202C3.40973 8.71569 3.71569 8.40973 4.09202 8.21799C4.51984 8 5.0799 8 6.2 8H7.5012C8.05213 8 8.32759 8 8.58285 8.06868C8.80903 8.12953 9.02275 8.22963 9.21429 8.36443C9.43047 8.51656 9.60681 8.72818 9.95951 9.15141L11.5 11H13.8C14.9201 11 15.4802 11 15.908 11.218C16.2843 11.4097 16.5903 11.7157 16.782 12.092C17 12.5198 17 13.0799 17 14.2V16.8C17 17.9201 17 18.4802 16.782 18.908C16.5903 19.2843 16.2843 19.5903 15.908 19.782C15.4802 20 14.9201 20 13.8 20H9.4C7.15979 20 6.03968 20 5.18404 19.564C4.43139 19.1805 3.81947 18.5686 3.43597 17.816C3 16.9603 3 15.8402 3 13.6V11.2Z"
        fill={fill}
      />
      <Path
        d="M7 7.2C7 6.07989 7 5.51984 7.21799 5.09202C7.40973 4.71569 7.71569 4.40973 8.09202 4.21799C8.51984 4 9.0799 4 10.2 4H11.5012C12.0521 4 12.3276 4 12.5829 4.06868C12.809 4.12953 13.0228 4.22963 13.2143 4.36443C13.4305 4.51656 13.6068 4.72818 13.9595 5.15141L15.5 7H17.8C18.9201 7 19.4802 7 19.908 7.21799C20.2843 7.40973 20.5903 7.71569 20.782 8.09202C21 8.51984 21 9.0799 21 10.2V12.8C21 13.9201 21 14.4802 20.782 14.908C20.5903 15.2843 20.2843 15.5903 19.908 15.782C19.4802 16 18.9201 16 17.8 16H10.2C9.07989 16 8.51984 16 8.09202 15.782C7.71569 15.5903 7.40973 15.2843 7.21799 14.908C7 14.4802 7 13.9201 7 12.8V7.2Z"
        fill={fill}
      />
      <Path
        d="M6 7V15C6 16.1046 6.89543 17 8 17H20"
        stroke="white"
        stroke-width="2"
      />
    </Svg>
  );
}

/**
 * MainBottomTab의 리서치 아이콘. focused 된 경우 색이 어두워집니다.
 * @author 현웅
 */
export function ResearchSvgIcon({
  focused = false,
  width = "24",
  height = "24",
  fill = focused ? theme.color.focused_gray : theme.color.unfocused_gray,
}: BottomTabSvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24">
      <Path
        d="M18 20V10"
        stroke={fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12 20V4"
        stroke={fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M6 20V14"
        stroke={fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

/**
 * MainBottomTab의 커뮤니티 아이콘. focused 된 경우 색이 어두워집니다.
 * @author 현웅
 */
export function CommunitySvgIcon({
  focused = false,
  width = "24",
  height = "24",
  fill = focused ? theme.color.focused_gray : theme.color.unfocused_gray,
}: BottomTabSvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16.5C17.8978 21 18.5967 21 19.1481 20.7716C19.8831 20.4672 20.4672 19.8831 20.7716 19.1481C21 18.5967 21 17.8978 21 16.5V12C21 7.02944 16.9706 3 12 3ZM8 11C8 10.4477 8.44772 10 9 10H15C15.5523 10 16 10.4477 16 11C16 11.5523 15.5523 12 15 12H9C8.44772 12 8 11.5523 8 11ZM11 15C11 14.4477 11.4477 14 12 14H15C15.5523 14 16 14.4477 16 15C16 15.5523 15.5523 16 15 16H12C11.4477 16 11 15.5523 11 15Z"
        fill={fill}
      />
    </Svg>
  );
}

/**
 * MainBottomTab의 마이페이지 아이콘. focused 된 경우 색이 어두워집니다.
 * @author 현웅
 */
export function MypageSvgIcon({
  focused = false,
  width = "24",
  height = "24",
  fill = focused ? theme.color.focused_gray : theme.color.unfocused_gray,
}: BottomTabSvgIconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M19.6515 20.4054C20.2043 20.2902 20.5336 19.7117 20.2589 19.2183C19.6533 18.1307 18.6993 17.1749 17.4788 16.4465C15.907 15.5085 13.9812 15 12 15C10.0188 15 8.09292 15.5085 6.52112 16.4465C5.30069 17.1749 4.34666 18.1307 3.74108 19.2183C3.46638 19.7117 3.79562 20.2902 4.34843 20.4054C9.39524 21.4572 14.6047 21.4572 19.6515 20.4054Z"
        fill={fill}
      />
      <Circle cx="12" cy="8" r="5" fill={fill} />
    </Svg>
  );
}
