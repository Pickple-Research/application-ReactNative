import React from "react";
import Svg, { SvgProps, Path, ClipPath, Defs, G, Rect } from "react-native-svg";

/**
 * MainBottomTab의 홈 아이콘
 * @author 현웅
 */
export function HomeIcon({
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
