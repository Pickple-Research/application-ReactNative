import { vw } from "@Theme/size.theme";
import React from "react";
import {
  View,
  Text,
  Image,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import Svg, { Path } from "react-native-svg";

type SimpleDropDownProps = {
  defaultValue?: string | number;
  data?: String[] | number[];
  buttonStyle?: StyleProp<ViewStyle>;
  dropdownStyle?: StyleProp<ViewStyle>;
  rowStyle?: StyleProp<ViewStyle>;
  buttonTextStyle?: StyleProp<TextStyle>;
  rowTextStyle?: StyleProp<TextStyle>;
  imageStyle?: StyleProp<ViewStyle>;
  dataTrasfer?: (data: any) => any;
};

/**
 * Dropdown을 편하게 활용하도록 만든 component입니다.
 * @param defaultValue 초기에 dropdown에 보이는 값을 설정합니다.
 * @param data dropdown에 들어가는 데이터를 설정합니다. 이때 String, number만 사용 가능합니다.
 * @param buttonStyle
 * @param dropdownStyle
 * @param rowStyle
 * @param buttonTextStyle
 * @param rowTextStyle 추가적인 스타일 설정을 도와줍니다.
 * ! 주의: 위 스타일들은 list 형태나 ...object 형태로 중첩 스타일링이 사용 불가능함
 * ! 원인은 모르겠으나, 스타일이 정상적으로 작동되지 않음
 * @function dataTransfer 함수를 통해 데이터를 받아올 수 있습니다.
 * @author 정원제
 */
export function SimpleDropDown({
  defaultValue = "",
  data = ["one", "two", "three"],
  buttonStyle,
  dropdownStyle,
  rowStyle,
  buttonTextStyle,
  rowTextStyle,
  imageStyle,
  dataTrasfer = (item: any) => {},
}: SimpleDropDownProps) {
  return (
    <View>
      <SelectDropdown
        buttonStyle={buttonStyle}
        dropdownStyle={dropdownStyle}
        rowStyle={rowStyle}
        buttonTextStyle={buttonTextStyle}
        rowTextStyle={rowTextStyle}
        defaultValue={defaultValue === "" ? data[0] : defaultValue}
        data={data}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          dataTrasfer(selectedItem);
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
        dropdownIconPosition="right"
        renderDropdownIcon={() => {
          return (
            <View style={imageStyle}>
              <Svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                <Path
                  d="M1 1L7 7L13 1"
                  stroke="#BBBBBB"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </Svg>
            </View>
          );
        }}
      />
    </View>
  );
}
