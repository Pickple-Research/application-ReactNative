import React from 'react';
import { View, Text, Image } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Svg, { Path } from 'react-native-svg';


/**
 * !TODO parameter 추가
 * @param param0 
 * @returns 
 */
export function SimpleDropDown({
    defaultValue = "",
    data = ["one", "two", "three"],
}: SimpleDropDownProps) {
    return (
        <View>
            <SelectDropdown
                buttonStyle={{
                    borderRadius: 10,
                    padding: 10,
                    backgroundColor: "#EEEEEE",
                    width: 120,
                }}
                defaultValue={defaultValue === "" ? data[0] : defaultValue}
                data={data} 
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    return item
                }} 
                dropdownIconPosition="right"
                renderDropdownIcon={() => {
                    return (
                        <View
                            style={{
                                marginRight: 20,
                            }}
                        >
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
                    )
                }}
                />
        </View>
    )
}

type SimpleDropDownProps = {
    defaultValue?: string
    data?: String[]
}