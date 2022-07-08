import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import SelectDropdown, {
  SelectDropdownProps,
} from "react-native-select-dropdown";
import CaretDownIcon from "src/Resource/svg/caret-down-icon.svg";

/**
 * SelectDropDown 라이브러리에서 제공하는 DropDown 컴포넌트에 데이터를 제공할 때
 * 데이터의 실제 값과 표시되는 값을 다르게 설정할 수 있습니다.
 * value에는 data의 실제 값을, displayName에는 드롭다운 메뉴 상에 표시될 이름을 넣어주면 됩니다.
 * @author 현웅
 */
export type SimpleDropDownDataType<T = void> = {
  //? <T = void>: 제네릭 타입을 optional 하게 만듭니다
  value: T | any;
  displayName: string;
};

type SimpleDropDownProps<T> = {
  data: SimpleDropDownDataType<T>[];
  onSelect: (selectedItem: SimpleDropDownDataType<T>, index: number) => void;
  props?: Partial<SelectDropdownProps>;
  style?: StyleProp<ViewStyle>;
};

/**
 * Dropdown을 편하게 활용하도록 만든 component입니다.
 *
 * @caution 제공하는 data의 형태에 주의해주세요.
 * DropDown에 넣을 수 있는 값에는 제한이 없지만, 보여지는 이름은 반드시 string이어야 하므로
 * { value: any, displayName: string } 의 형태를 가진 data 배열만을 받도록 설정되어 있습니다.
 *
 * @example
 * ```
 * import { SimpleDropDown, SimpleDropDownDataType } from "src/Component/DropDown";
 *
 * function Example(){
 *  const exampleDropDownData: SimpleDropDownDataType<string>[] = [
 *    { value: "Korea", displayName: "한국" },
 *    { value: "Japan", displayName: "일본" },
 *    { value: "America", displayName: "미국" },
 *  ];
 *
 *  return (
 *    <SimpleDropDown
 *      data={exampleDropDownData}
 *      onSelect={(selectedItem:SimpleDropDownDataType) => {
 *        ...
 *      }}
 *      type="RESEARCH_PURPOSE"
 *      props={{
 *        defaultButtonText: "0",
 *        ...
 *      }}
 *    />
 *  )
 * }
 * ```
 *
 * @param data dropdown에 들어갈 데이터 array. { value: any, displayName: string } 형태여야 합니다.
 * @param onSelect 값 선택시 호출 함수
 * @param props SelectDropdownProps의 값들을 지정할 수 있습니다.
 * (defaultButtonText, buttonStyle, buttonTextStyle, rowStyle, rowTextStyle 등)
 * 지정할 수 있는 모든 속성들에 대해서는 F12 키를 눌러 해당 문서를 참조하세요.
 *
 * @author 정원제
 * @modify 현웅
 */
export function SimpleDropDown<T>({
  data,
  onSelect,
  props,
}: SimpleDropDownProps<T>) {
  return (
    <SelectDropdown
      data={data}
      onSelect={onSelect}
      //? 드롭다운 각 선택지에 보여질 문자열을 지정합니다.
      rowTextForSelection={(item: SimpleDropDownDataType<T>) => {
        return item.displayName;
      }}
      //? 아이템이 선택됐을 때 보여질 문자열을 지정합니다.
      buttonTextAfterSelection={(selectedItem: SimpleDropDownDataType<T>) => {
        return selectedItem.displayName;
      }}
      renderDropdownIcon={() => {
        return <CaretDownIcon style={{ marginHorizontal: 5 }} />;
      }}
      dropdownIconPosition="right"
      {...props}
    />
  );
}
